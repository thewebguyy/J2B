"use client";

import React, { useEffect, useRef } from "react";
import { GSAP_EASE, isReducedMotion, loadGsapWithScrollTrigger } from "@/utils/motion";

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  staggerSelector?: string;
  stagger?: number;
}

/**
 * MotionReveal: Progressive, accessibility-first scroll entrance using GSAP ScrollTrigger.
 * Elements always render visible in SSR/initial DOM and animate smoothly once on scroll.
 * Clears transform and opacity inline styles upon completion and skips cleanly under prefers-reduced-motion.
 */
export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  className = "",
  delay = 0,
  y = 18,
  duration = 0.7,
  staggerSelector,
  stagger = 0.09,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || isReducedMotion()) return;

    let cancelled = false;
    let ctx: { revert: () => void } | undefined;

    loadGsapWithScrollTrigger().then(({ gsap }) => {
      if (cancelled || !containerRef.current) return;

      const targets = staggerSelector
        ? Array.from(containerRef.current.querySelectorAll<HTMLElement>(staggerSelector))
        : [containerRef.current];

      if (targets.length === 0) return;

      const rect = containerRef.current.getBoundingClientRect();
      const alreadyInView = rect.top < window.innerHeight * 0.92;

      ctx = gsap.context(() => {
        if (alreadyInView) {
          gsap.from(targets, {
            opacity: 0,
            y,
            duration,
            delay,
            stagger: staggerSelector ? stagger : 0,
            ease: GSAP_EASE,
            clearProps: "transform,opacity",
          });
        } else {
          gsap.from(targets, {
            opacity: 0,
            y,
            duration,
            delay,
            stagger: staggerSelector ? stagger : 0,
            ease: GSAP_EASE,
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 88%",
              once: true,
            },
          });
        }
      }, containerRef);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [delay, duration, stagger, staggerSelector, y]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

