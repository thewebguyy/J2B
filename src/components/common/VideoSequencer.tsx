"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { HERO_VIDEO_SCENES, VideoScene } from "@/content/videos";

interface VideoSequencerProps {
  scenes?: readonly VideoScene[];
  className?: string;
  crossfadeDurationMs?: number;
  initialPoster?: string;
  onSceneChange?: (sceneIndex: number, scene: VideoScene) => void;
}

type ConnectionInfo = {
  saveData?: boolean;
};

export const VideoSequencer: React.FC<VideoSequencerProps> = ({
  scenes = HERO_VIDEO_SCENES,
  className = "absolute inset-0 w-full h-full overflow-hidden",
  crossfadeDurationMs = 700,
  initialPoster = "/images/journey-path-hero.jpg",
  onSceneChange,
}) => {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const [userOptedIn, setUserOptedIn] = useState(false);

  // Playback & slot management
  // Slot A and Slot B for flicker-free double buffering
  const [activeSlot, setActiveSlot] = useState<"A" | "B">("A");
  const [sceneIndexA, setSceneIndexA] = useState(0);
  const [sceneIndexB, setSceneIndexB] = useState(1);
  const [slotAReady, setSlotAReady] = useState(false);
  const [slotBReady, setSlotBReady] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const videoRefA = useRef<HTMLVideoElement>(null);
  const videoRefB = useRef<HTMLVideoElement>(null);
  const isTransitioningRef = useRef(false);

  // Detect client environment: breakpoint, reduced motion, save data
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

  // Notify parent of current scene
  useEffect(() => {
    const currentSceneIndex = activeSlot === "A" ? sceneIndexA : sceneIndexB;
    if (scenes[currentSceneIndex] && onSceneChange) {
      onSceneChange(currentSceneIndex, scenes[currentSceneIndex]);
    }
  }, [activeSlot, sceneIndexA, sceneIndexB, scenes, onSceneChange]);

  // Initial playback start
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
        .catch(() => {
          // Autoplay blocked by browser policy
          setIsPlaying(false);
        });
    }
  }, [shouldPlay, activeSlot]);

  // Handle visibility changes (pause when tab hidden, resume when tab visible)
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

  // Transition to next video in the loop
  const triggerTransition = useCallback(() => {
    if (isTransitioningRef.current || !shouldPlay) return;
    isTransitioningRef.current = true;

    if (activeSlot === "A") {
      // Transition from A to B
      const nextSceneForB = (sceneIndexA + 1) % scenes.length;
      setSceneIndexB(nextSceneForB);

      const incoming = videoRefB.current;
      const outgoing = videoRefA.current;

      if (incoming) {
        incoming.muted = true;
        incoming.currentTime = 0;
        const playPromise = incoming.play();

        const proceed = () => {
          setActiveSlot("B");
          setIsPlaying(true);
          // Preload next scene for slot A
          const nextForA = (nextSceneForB + 1) % scenes.length;
          setTimeout(() => {
            setSceneIndexA(nextForA);
            setSlotAReady(false);
            if (outgoing) outgoing.pause();
            isTransitioningRef.current = false;
          }, crossfadeDurationMs);
        };

        if (playPromise && typeof playPromise.then === "function") {
          playPromise.then(proceed).catch(() => {
            isTransitioningRef.current = false;
          });
        } else {
          proceed();
        }
      } else {
        isTransitioningRef.current = false;
      }
    } else {
      // Transition from B to A
      const nextSceneForA = (sceneIndexB + 1) % scenes.length;
      setSceneIndexA(nextSceneForA);

      const incoming = videoRefA.current;
      const outgoing = videoRefB.current;

      if (incoming) {
        incoming.muted = true;
        incoming.currentTime = 0;
        const playPromise = incoming.play();

        const proceed = () => {
          setActiveSlot("A");
          setIsPlaying(true);
          // Preload next scene for slot B
          const nextForB = (nextSceneForA + 1) % scenes.length;
          setTimeout(() => {
            setSceneIndexB(nextForB);
            setSlotBReady(false);
            if (outgoing) outgoing.pause();
            isTransitioningRef.current = false;
          }, crossfadeDurationMs);
        };

        if (playPromise && typeof playPromise.then === "function") {
          playPromise.then(proceed).catch(() => {
            isTransitioningRef.current = false;
          });
        } else {
          proceed();
        }
      } else {
        isTransitioningRef.current = false;
      }
    }
  }, [activeSlot, sceneIndexA, sceneIndexB, scenes.length, shouldPlay, crossfadeDurationMs]);

  // Hook ended / timeupdate to trigger seamless crossfade 0.4s before clip ends
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

  const sceneA = scenes[sceneIndexA];
  const sceneB = scenes[sceneIndexB];

  const currentPoster =
    activeSlot === "A"
      ? sceneA?.posterSrc || initialPoster
      : sceneB?.posterSrc || initialPoster;

  const currentVideoSrcA = isDesktop ? sceneA?.desktopSrc : sceneA?.mobileSrc;
  const currentVideoSrcB = isDesktop ? sceneB?.desktopSrc : sceneB?.mobileSrc;

  return (
    <div className={className} aria-hidden="true">
      {/* Base Poster Layer (Always rendered for zero CLS / instant LCP) */}
      <Image
        src={currentPoster}
        alt=""
        fill
        priority
        quality={88}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Video Double-Buffer Layer */}
      {shouldPlay && (
        <>
          {/* Slot A */}
          <video
            ref={videoRefA}
            src={currentVideoSrcA}
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
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity ${
              activeSlot === "A" && slotAReady
                ? "opacity-100 z-10"
                : "opacity-0 pointer-events-none z-0"
            }`}
            style={{ transitionDuration: `${crossfadeDurationMs}ms` }}
          />

          {/* Slot B */}
          <video
            ref={videoRefB}
            src={currentVideoSrcB}
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
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity ${
              activeSlot === "B" && slotBReady
                ? "opacity-100 z-10"
                : "opacity-0 pointer-events-none z-0"
            }`}
            style={{ transitionDuration: `${crossfadeDurationMs}ms` }}
          />
        </>
      )}

      {/* Playback Control (Discreet pill positioned in parent component) */}
      <div className="sr-only">
        <button
          type="button"
          onClick={handleTogglePlayback}
          aria-label={isPlaying ? "Pause background film" : "Play background film"}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

