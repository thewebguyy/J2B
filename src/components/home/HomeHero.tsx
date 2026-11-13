"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Pause, Play } from "lucide-react";
import { j2bContent } from "@/content/j2b";
import { HERO_VIDEO_SCENES, VideoScene } from "@/content/videos";
import { MagneticButton } from "@/components/common/MagneticButton";
import { GSAP_EASE, isReducedMotion } from "@/utils/motion";

type ConnectionInfo = {
  saveData?: boolean;
};

export const HomeHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const isTransitioningRef = useRef(false);

  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const [userOptedIn, setUserOptedIn] = useState(false);

  // Double-buffering state
  const [activeSlot, setActiveSlot] = useState<"A" | "B">("A");
  const [sceneIndexA, setSceneIndexA] = useState(0);
  const [sceneIndexB, setSceneIndexB] = useState(1);
  const [slotAReady, setSlotAReady] = useState(false);
  const [slotBReady, setSlotBReady] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSceneTitle, setCurrentSceneTitle] = useState(HERO_VIDEO_SCENES[0].title);

  // Sync environment (screen size, reduced motion, save-data)
  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const navConnection = (navigator as Navigator & { connection?: ConnectionInfo }).connection;

    const syncEnvironment = () => {
      setIsDesktop(desktopQuery.matches);
      setReducedMotion(motionQuery.matches);
      setSaveData(Boolean(navConnection?.saveData));
    };

    syncEnvironment();

    desktopQuery.addEventListener("change", syncEnvironment);
    motionQuery.addEventListener("change", syncEnvironment);

    return () => {
      desktopQuery.removeEventListener("change", syncEnvironment);
      motionQuery.removeEventListener("change", syncEnvironment);
    };
  }, []);

  const shouldPlay =
    isDesktop !== null && !hasError && (!reducedMotion && !saveData || userOptedIn);

  // GSAP entrance reveal for editorial typography only
  useEffect(() => {
    const root = heroRef.current;
    if (!root || isReducedMotion()) return;

    let cancelled = false;
    let ctx: { revert: () => void } | undefined;

    import("gsap").then((gsapModule) => {
      if (cancelled || !heroRef.current) return;
      const gsap = gsapModule.gsap || gsapModule.default;

      ctx = gsap.context(() => {
        const copyItems = root.querySelectorAll<HTMLElement>("[data-hero-enter]");
        if (copyItems.length > 0) {
          gsap.from(copyItems, {
            opacity: 0,
            y: 14,
            duration: 0.65,
            stagger: 0.08,
            ease: GSAP_EASE,
            clearProps: "transform,opacity",
          });
        }
      }, heroRef);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  // Update current scene title badge
  useEffect(() => {
    const activeIndex = activeSlot === "A" ? sceneIndexA : sceneIndexB;
    if (HERO_VIDEO_SCENES[activeIndex]) {
      setCurrentSceneTitle(HERO_VIDEO_SCENES[activeIndex].title);
    }
  }, [activeSlot, sceneIndexA, sceneIndexB]);

  // Autoplay initiation
  useEffect(() => {
    if (!shouldPlay) return;

    const currentVid = activeSlot === "A" ? videoRefA.current : videoRefB.current;
    if (!currentVid) return;

    currentVid.muted = true;
    currentVid.defaultMuted = true;

    const playPromise = currentVid.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [shouldPlay, activeSlot]);

  // Tab visibility changes
  useEffect(() => {
    const handleVisibility = () => {
      const currentVid = activeSlot === "A" ? videoRefA.current : videoRefB.current;
      if (!currentVid || !shouldPlay) return;

      if (document.hidden) {
        currentVid.pause();
      } else if (isPlaying) {
        currentVid.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [activeSlot, shouldPlay, isPlaying]);

  // Smooth double-buffer crossfade transition
  const triggerTransition = useCallback(() => {
    if (isTransitioningRef.current || !shouldPlay) return;
    isTransitioningRef.current = true;

    const total = HERO_VIDEO_SCENES.length;

    if (activeSlot === "A") {
      const nextForB = (sceneIndexA + 1) % total;
      setSceneIndexB(nextForB);

      const incoming = videoRefB.current;
      const outgoing = videoRefA.current;

      if (incoming) {
        incoming.muted = true;
        incoming.currentTime = 0;
        const p = incoming.play();

        const proceed = () => {
          setActiveSlot("B");
          setIsPlaying(true);
          const nextForA = (nextForB + 1) % total;
          setTimeout(() => {
            setSceneIndexA(nextForA);
            setSlotAReady(false);
            if (outgoing) outgoing.pause();
            isTransitioningRef.current = false;
          }, 800);
        };

        if (p && typeof p.then === "function") {
          p.then(proceed).catch(() => {
            isTransitioningRef.current = false;
          });
        } else {
          proceed();
        }
      } else {
        isTransitioningRef.current = false;
      }
    } else {
      const nextForA = (sceneIndexB + 1) % total;
      setSceneIndexA(nextForA);

      const incoming = videoRefA.current;
      const outgoing = videoRefB.current;

      if (incoming) {
        incoming.muted = true;
        incoming.currentTime = 0;
        const p = incoming.play();

        const proceed = () => {
          setActiveSlot("A");
          setIsPlaying(true);
          const nextForB = (nextForA + 1) % total;
          setTimeout(() => {
            setSceneIndexB(nextForB);
            setSlotBReady(false);
            if (outgoing) outgoing.pause();
            isTransitioningRef.current = false;
          }, 800);
        };

        if (p && typeof p.then === "function") {
          p.then(proceed).catch(() => {
            isTransitioningRef.current = false;
          });
        } else {
          proceed();
        }
      } else {
        isTransitioningRef.current = false;
      }
    }
  }, [activeSlot, sceneIndexA, sceneIndexB, shouldPlay]);

  // Pre-roll crossfade 0.45s before video ends
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const vid = e.currentTarget;
    if (vid.duration && vid.duration > 1 && vid.currentTime >= vid.duration - 0.45) {
      triggerTransition();
    }
  };

  const handleTogglePlayback = useCallback(() => {
    if ((reducedMotion || saveData) && !userOptedIn) {
      setUserOptedIn(true);
      return;
    }

    const currentVid = activeSlot === "A" ? videoRefA.current : videoRefB.current;
    if (!currentVid) return;

    if (currentVid.paused) {
      currentVid.muted = true;
      currentVid
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      currentVid.pause();
      setIsPlaying(false);
    }
  }, [activeSlot, reducedMotion, saveData, userOptedIn]);

  const sceneA = HERO_VIDEO_SCENES[sceneIndexA];
  const sceneB = HERO_VIDEO_SCENES[sceneIndexB];

  const currentPoster =
    activeSlot === "A"
      ? sceneA?.posterSrc || "/images/journey-path-hero.jpg"
      : sceneB?.posterSrc || "/images/journey-path-hero.jpg";

  const videoSrcA = isDesktop ? sceneA?.desktopSrc : sceneA?.mobileSrc;
  const videoSrcB = isDesktop ? sceneB?.desktopSrc : sceneB?.mobileSrc;

  return (
    <section
      ref={heroRef}
      aria-label="Journey2Better Introduction"
      className="relative bg-ivory-canvas overflow-hidden min-h-[76vh] sm:min-h-[80vh] lg:min-h-[84vh] flex items-center"
    >
      {/* Cinematic Continuous Background Layer */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        {/* Instant LCP Poster Layer */}
        <Image
          src={currentPoster}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center transition-opacity duration-700"
        />

        {/* Double-Buffered HTML5 Video Players */}
        {shouldPlay && (
          <>
            <video
              ref={videoRefA}
              src={videoSrcA}
              autoPlay
              muted
              playsInline
              preload="auto"
              poster={sceneA?.posterSrc}
              onCanPlay={() => setSlotAReady(true)}
              onPlaying={() => setIsPlaying(true)}
              onPause={() => {
                if (activeSlot === "A") setIsPlaying(false);
              }}
              onTimeUpdate={activeSlot === "A" ? handleTimeUpdate : undefined}
              onEnded={activeSlot === "A" ? triggerTransition : undefined}
              onError={() => {
                if (activeSlot === "A") setHasError(true);
              }}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                activeSlot === "A" && slotAReady
                  ? "opacity-100 z-10"
                  : "opacity-0 pointer-events-none z-0"
              }`}
            />

            <video
              ref={videoRefB}
              src={videoSrcB}
              muted
              playsInline
              preload="auto"
              poster={sceneB?.posterSrc}
              onCanPlay={() => setSlotBReady(true)}
              onPlaying={() => setIsPlaying(true)}
              onPause={() => {
                if (activeSlot === "B") setIsPlaying(false);
              }}
              onTimeUpdate={activeSlot === "B" ? handleTimeUpdate : undefined}
              onEnded={activeSlot === "B" ? triggerTransition : undefined}
              onError={() => {
                if (activeSlot === "B") setHasError(true);
              }}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                activeSlot === "B" && slotBReady
                  ? "opacity-100 z-10"
                  : "opacity-0 pointer-events-none z-0"
              }`}
            />
          </>
        )}

        {/* Mobile/Tablet Full Scrim for AAA Text Contrast */}
        <div
          className="lg:hidden absolute inset-0 z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(252, 249, 232, 0.92) 0%, rgba(252, 249, 232, 0.84) 52%, rgba(252, 249, 232, 0.94) 100%)",
          }}
        />

        {/* Desktop Editorial Left Scrim: Crisp Typography on Left, Film Shines on Right */}
        <div
          className="hidden lg:block absolute inset-y-0 left-0 lg:w-[68%] xl:w-[62%] z-20"
          style={{
            background:
              "linear-gradient(90deg, rgba(252, 249, 232, 0.98) 0%, rgba(252, 249, 232, 0.94) 48%, rgba(252, 249, 232, 0.70) 70%, rgba(252, 249, 232, 0.20) 88%, rgba(252, 249, 232, 0) 100%)",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-10 lg:px-12 xl:px-14 w-full z-30 py-14 sm:py-16 lg:py-20 pb-20 sm:pb-20">
        <div className="max-w-xl lg:max-w-[33rem]">
          {/* Folio Eyebrow */}
          <div
            data-hero-enter
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ivory-canvas/95 backdrop-blur-md border border-gold-harvest/40 shadow-sm mb-4 sm:mb-5 max-w-full"
          >
            <span className="size-1.5 rounded-full bg-teal-living flex-shrink-0" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.09em] sm:tracking-[0.18em] font-semibold text-teal-living leading-snug">
              Your companion on the journey to better
            </span>
          </div>

          {/* Expressive Editorial Headline */}
          <h1
            data-hero-enter
            className="font-serif editorial-display font-bold text-midnight mb-4 sm:mb-5"
          >
            {j2bContent.welcome.heading.split("Journey2Better!")[0]}
            <span className="italic font-normal text-teal-living block">
              Journey2Better!
            </span>
          </h1>

          {/* Lead Copy */}
          <div
            data-hero-enter
            className="pl-4 sm:pl-5 border-l-2 border-gold-harvest/80 mb-6 sm:mb-7 py-0.5"
          >
            <p className="font-sans text-base sm:text-lg lg:text-xl text-charcoal/95 font-normal leading-relaxed">
              {j2bContent.welcome.body}
            </p>
          </div>

          {/* Action CTAs */}
          <div
            data-hero-enter
            className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 sm:mb-7"
          >
            <MagneticButton href="/events" variant="primary" className="w-full sm:w-auto sm:whitespace-nowrap">
              <span>Explore Future Plans</span>
              <ArrowRight className="size-4 text-gold-harvest flex-shrink-0" />
            </MagneticButton>

            <MagneticButton href="/about" variant="outline" className="w-full sm:w-auto sm:whitespace-nowrap">
              <span>Read Our Story</span>
            </MagneticButton>
          </div>

          {/* Editorial Footnote */}
          <div data-hero-enter className="pt-1">
            <div className="w-16 h-px bg-gold-harvest/70 mb-3" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-sans text-charcoal/90">
              <span className="font-serif italic font-semibold text-teal-living text-sm">
                &ldquo;Walking together in the messy middle&rdquo;
              </span>
              <span className="text-midnight/30 hidden sm:inline">&bull;</span>
              <span>Men and women &bull; All walks of life &bull; One step at a time</span>
            </div>
          </div>
        </div>
      </div>

      {/* Discreet Playback Control & Scene Indicator */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-2">
        {/* Subtle Scene Badge */}
        <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ivory-canvas/85 backdrop-blur-md border border-gold-harvest/35 text-[11px] font-sans font-medium text-midnight/80">
          <span className="size-1.5 rounded-full bg-teal-living animate-pulse" aria-hidden="true" />
          <span>{currentSceneTitle}</span>
        </div>

        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={handleTogglePlayback}
          aria-label={isPlaying ? "Pause background film" : "Play background film"}
          aria-pressed={!isPlaying}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-ivory-canvas/90 hover:bg-ivory-canvas backdrop-blur-md border border-gold-harvest/45 text-midnight text-xs font-sans font-semibold shadow-sm transition-colors"
        >
          {isPlaying ? (
            <>
              <Pause className="size-3.5 text-teal-living" aria-hidden="true" />
              <span>Pause film</span>
            </>
          ) : (
            <>
              <Play className="size-3.5 text-teal-living" aria-hidden="true" />
              <span>Play film</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
