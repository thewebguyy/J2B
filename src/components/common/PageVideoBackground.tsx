"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

interface PageVideoBackgroundProps {
  desktopSrc: string;
  mobileSrc: string;
  posterSrc: string;
  overlayOpacityClass?: string;
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
  overlayOpacityClass = "bg-ivory-canvas/85",
  className = "absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none",
  ariaLabel = "Background video",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const [userOptedIn, setUserOptedIn] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
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
      p.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, [shouldPlay, videoSrc]);

  return (
    <div className={className} aria-hidden="true">
      {/* Base Poster */}
      <Image
        src={posterSrc}
        alt=""
        fill
        priority={false}
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Video */}
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
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => setHasError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Editorial Scrim Overlay */}
      <div className={`absolute inset-0 ${overlayOpacityClass}`} />
    </div>
  );
};

