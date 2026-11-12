"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Pause, Play } from "lucide-react";
import { j2bContent } from "@/content/j2b";
import { MagneticButton } from "@/components/common/MagneticButton";
import { GSAP_EASE, isReducedMotion } from "@/utils/motion";

const HERO_POSTER = "/images/journey-path-hero.jpg";

const VIDEO_SOURCES = {
  desktop: {
    webm: "/videos/j2b-hero-desktop.webm",
    mp4: "/videos/j2b-hero-desktop.mp4",
  },
  mobile: {
    webm: "/videos/j2b-hero-mobile.webm",
    mp4: "/videos/j2b-hero-mobile.mp4",
  },
} as const;

type ConnectionInfo = {
  saveData?: boolean;
};

export const HomeHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const [userOptedIn, setUserOptedIn] = useState(false);

  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [sourceFailures, setSourceFailures] = useState(0);

  // Detect viewport breakpoint, reduced-motion preference, and Data Saver mode
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

  // Gentle entrance reveal for editorial typography only (never scales/fakes background)
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

  const shouldLoadVideo =
    isDesktop !== null && !hasError && (!reducedMotion && !saveData || userOptedIn);

  const activeSources = isDesktop ? VIDEO_SOURCES.desktop : VIDEO_SOURCES.mobile;

  // Attempt muted autoplay once sources are attached and eligible
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoadVideo) return;

    video.muted = true;
    video.defaultMuted = true;
    video.load();

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Autoplay blocked (e.g., iOS Low Power Mode or strict browser policy):
        // Keep poster visible without throwing an unhandled rejection.
        setIsPlaying(false);
      });
    }
  }, [shouldLoadVideo, isDesktop]);

  // Pause video immediately if the user enables prefers-reduced-motion live
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion && !userOptedIn && !video.paused) {
      video.pause();
    }
  }, [reducedMotion, userOptedIn]);

  const handleSourceError = useCallback(() => {
    setSourceFailures((prev) => {
      const next = prev + 1;
      if (next >= 2) {
        setHasError(true);
        setIsVideoReady(false);
        setIsPlaying(false);
      }
      return next;
    });
  }, []);

  const handleTogglePlayback = useCallback(() => {
    const video = videoRef.current;

    // If reduced-motion or Save-Data prevented initial loading, allow explicit opt-in
    if ((reducedMotion || saveData) && !userOptedIn) {
      setUserOptedIn(true);
      return;
    }

    if (!video || hasError) return;

    if (video.paused) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    } else {
      video.pause();
    }
  }, [hasError, reducedMotion, saveData, userOptedIn]);

  const showPlaybackControl =
    !hasError && (isVideoReady || ((reducedMotion || saveData) && !userOptedIn));

  return (
    <section
      ref={heroRef}
      aria-label="Journey2Better Introduction"
      className="relative bg-ivory-canvas overflow-hidden min-h-[76vh] sm:min-h-[80vh] lg:min-h-[84vh] flex items-center"
    >
      {/* Full-Bleed Background Layer: Approved Poster + Native HTML5 Video */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        {/* Immediate LCP Poster Layer (guarantees zero black frame or layout shift) */}
        <Image
          src={HERO_POSTER}
          alt="Sunlit ascending walking path winding through lush greenery toward morning light"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[74%_42%] lg:object-[78%_center]"
        />

        {/* Native HTML5 Video Layer (mobile-first rendition selection, muted loop) */}
        {shouldLoadVideo && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover object-center lg:object-[72%_center] transition-opacity duration-500 ${
              isVideoReady ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_POSTER}
            onCanPlay={() => setIsVideoReady(true)}
            onPlaying={() => {
              setIsVideoReady(true);
              setIsPlaying(true);
            }}
            onPause={() => setIsPlaying(false)}
            onError={() => {
              setHasError(true);
              setIsVideoReady(false);
              setIsPlaying(false);
            }}
          >
            <source src={activeSources.webm} type="video/webm" onError={handleSourceError} />
            <source src={activeSources.mp4} type="video/mp4" onError={handleSourceError} />
          </video>
        )}

        {/* Mobile/Tablet Scrim: Preserves text legibility across bright & dark video frames */}
        <div
          className="lg:hidden absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(252, 249, 232, 0.90) 0%, rgba(252, 249, 232, 0.80) 52%, rgba(252, 249, 232, 0.92) 100%)",
          }}
        />

        {/* Desktop Editorial Left Scrim: Keeps headline/CTAs AAA-legible while right side showcases the film */}
        <div
          className="hidden lg:block absolute inset-y-0 left-0 lg:w-[70%] xl:w-[64%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(252, 249, 232, 0.98) 0%, rgba(252, 249, 232, 0.95) 46%, rgba(252, 249, 232, 0.72) 68%, rgba(252, 249, 232, 0.22) 86%, rgba(252, 249, 232, 0) 100%)",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-10 lg:px-12 xl:px-14 w-full z-10 py-14 sm:py-16 lg:py-20 pb-20 sm:pb-20">
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

      {/* Discreet, Keyboard-Accessible Background Film Playback Control */}
      {showPlaybackControl && (
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20">
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
      )}
    </section>
  );
};
