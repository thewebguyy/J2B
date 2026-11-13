"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type VideoScrimVariant =
  | "editorial-split" // Heavy ivory on left/text zone (98% -> 94% -> 55% -> 0%), clear right zone
  | "editorial-centered" // Heavy ivory on top/left, gradual fade for center-staggered layouts
  | "sanctuary-dark"; // Deep midnight scrim when text is light/ivory

interface PageVideoBackgroundProps {
  desktopSrc: string;
  mobileSrc: string;
  posterSrc: string;
  variant?: VideoScrimVariant;
  className?: string;
  ariaLabel?: string;
}

type ConnectionInfo = {
  saveData?: boolean;
};

export const PageVideoBackground: React.FC<PageVideoBackgroundProps> = ({
  desktopSrc,
  mobileSrc,
  posterSrc,
  variant = "editorial-split",
  className = "absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const [userOptedIn, setUserOptedIn] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const navConnection = (navigator as Navigator & { connection?: ConnectionInfo }).connection;

    const sync = () => {
      setIsDesktop(desktopQuery.matches);
      setReducedMotion(motionQuery.matches);
      setSaveData(Boolean(navConnection?.saveData));
    };

    sync();

    desktopQuery.addEventListener("change", sync);
    motionQuery.addEventListener("change", sync);

    return () => {
      desktopQuery.removeEventListener("change", sync);
      motionQuery.removeEventListener("change", sync);
    };
  }, []);

  const shouldPlay =
    isDesktop !== null && !hasError && (!reducedMotion && !saveData || userOptedIn);

  const videoSrc = isDesktop ? desktopSrc : mobileSrc;

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !shouldPlay) return;

    vid.muted = true;
    vid.defaultMuted = true;
    const p = vid.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {});
    }
  }, [shouldPlay, videoSrc]);

  return (
    <div className={className} aria-hidden="true">
      {/* Base Poster: Always loaded for instant LCP & zero CLS */}
      <Image
        src={posterSrc}
        alt=""
        fill
        priority={false}
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Optimized Video */}
      {shouldPlay && (
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          onCanPlay={() => setIsVideoReady(true)}
          onPlaying={() => setIsVideoReady(true)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Layer 1: Mobile Full Scrim: Guarantees AAA text readability across all mobile viewports (320-768px) */}
      <div
        className="md:hidden absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(252, 249, 232, 0.96) 0%, rgba(252, 249, 232, 0.90) 55%, rgba(252, 249, 232, 0.96) 100%)",
        }}
      />

      {/* Layer 2: Desktop Directional Scrim: Keeps text safe on left/top while showcasing video on right */}
      {variant === "editorial-split" && (
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-full z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(252, 249, 232, 0.98) 0%, rgba(252, 249, 232, 0.95) 45%, rgba(252, 249, 232, 0.78) 65%, rgba(252, 249, 232, 0.35) 85%, rgba(252, 249, 232, 0.10) 100%)",
          }}
        />
      )}

      {variant === "editorial-centered" && (
        <div
          className="hidden md:block absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse at 35% 35%, rgba(252, 249, 232, 0.98) 0%, rgba(252, 249, 232, 0.94) 50%, rgba(252, 249, 232, 0.70) 75%, rgba(252, 249, 232, 0.20) 100%)",
          }}
        />
      )}

      {variant === "sanctuary-dark" && (
        <div
          className="hidden md:block absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(1, 43, 52, 0.96) 0%, rgba(1, 43, 52, 0.90) 50%, rgba(1, 43, 52, 0.50) 80%, rgba(1, 43, 52, 0.20) 100%)",
          }}
        />
      )}

      {/* Subtle bottom edge blend into Warm Ivory canvas */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ivory-canvas via-ivory-canvas/60 to-transparent z-10" />
    </div>
  );
};
