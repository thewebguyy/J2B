"use client";

import React, { useEffect, useState, useRef } from "react";
import { isReducedMotion } from "@/utils/motion";

export const GoldenThread: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reduced, setReduced] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    setReduced(isReducedMotion());

    const handleScroll = () => {
      if (rafId.current) return;
      rafId.current = window.requestAnimationFrame(() => {
        const totalScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        if (totalScroll > 0) {
          const current = window.scrollY / totalScroll;
          setScrollProgress(Math.min(1, Math.max(0, current)));
        }
        rafId.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (reduced) return null;

  // Total stroke length for normalized 1000-unit path
  const pathLength = 1000;
  const strokeOffset = pathLength * (1 - scrollProgress);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="relative mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute right-4 sm:right-10 lg:right-16 top-0 h-full w-24 sm:w-32 opacity-30 pointer-events-none transition-opacity duration-1000"
          viewBox="0 0 120 1000"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 60,0 C 95,150 25,350 75,500 C 115,650 35,800 60,1000"
            stroke="var(--gold)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={strokeOffset}
            className="transition-[stroke-dashoffset] duration-200 ease-out"
          />
        </svg>
      </div>
    </div>
  );
};
