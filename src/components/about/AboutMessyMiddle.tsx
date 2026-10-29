"use client";

import React, { useEffect, useRef, useState } from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";
import { isReducedMotion } from "@/utils/motion";

const PHASES = [
  {
    number: "01",
    label: "Phase 01 • The Spark",
    title: "The Decision to Grow",
    description:
      "Acknowledging that your current life season demands renewal, courage, and a deliberate step forward.",
  },
  {
    number: "02",
    label: "Phase 02 • The Messy Middle",
    title: "The Shared Journey",
    description:
      "Navigating questions, vulnerability, and evolving priorities with sisters who walk beside you every step of the way.",
  },
  {
    number: "03",
    label: "Phase 03 • Becoming",
    title: "Stepping Into Wholeness",
    description:
      "Standing tall in your grounded identity, equipped with clarity, self-compassion, and an enduring community.",
  },
];

export const AboutMessyMiddle: React.FC = () => {
  const phasesRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (isReducedMotion()) {
      setProgress(1);
      return;
    }

    const handleScroll = () => {
      if (!phasesRef.current) return;
      const rect = phasesRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height + viewportHeight * 0.4;
      const currentScrolled = viewportHeight * 0.8 - rect.top;
      const nextProgress = Math.max(0.15, Math.min(1, currentScrolled / totalScrollable));
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const pathLength = 1000;
  const strokeDashoffset = Math.round(pathLength * (1 - progress));

  return (
    <section className="relative bg-ivory-surface border-y border-ivory-border overflow-hidden">
      {/* Full-Bleed Deep-Teal Typographic Moment for "The Messy Middle" */}
      <div className="relative bg-midnight-deep text-ivory-surface py-20 sm:py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
          <PathRibbon variant="soft-horizon" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Editorial Title Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2.5 mb-5">
                <BotanicalMotif size={20} />
                <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-harvest">
                  Signature Philosophy
                </span>
              </div>

              <h2 className="font-serif editorial-h2 font-bold text-white leading-[1.1] reveal-heading">
                We exist for the{" "}
                <span className="italic font-normal text-gold-harvest block mt-1">
                  messy middle of life.
                </span>
              </h2>
            </div>

            {/* Right Expansive Editorial Prose & Pull-Quote */}
            <div className="lg:col-span-7 space-y-6 text-ivory-surface/85 font-sans text-base sm:text-lg leading-relaxed">
              <p>
                The world loves to celebrate the starting line and applaud the finish line. But almost all of life is lived in the stretch between: the quiet mornings of uncertainty, the moments of self-doubt, the unexpected career crossroads, and the emotional transitions that don&apos;t fit into a tidy narrative.
              </p>

              <blockquote className="pl-6 sm:pl-8 border-l-4 border-gold-harvest py-2 my-6">
                <p className="font-serif italic editorial-pullquote text-white font-normal">
                  &ldquo;You do not need to wait until you are &lsquo;finished&rsquo; to be worthy of deep connection.&rdquo;
                </p>
              </blockquote>

              <p>
                In Journey 2 Better, the messy middle is not something to hide or apologize for. It is the sacred, fertile ground where real resilience, self-knowledge, and lifelong sisterhood take root.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Phase 01, 02, 03 Connected by an Interactive Scrolling Golden Thread */}
      <div ref={phasesRef} className="relative py-20 sm:py-24 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Desktop Horizontal Scrolling Golden Thread Spine */}
        <div
          className="hidden md:block pointer-events-none absolute left-12 right-12 top-28 h-16"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1200 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            <path
              d="M20 32C220 8 420 56 600 32C780 8 980 56 1180 32"
              stroke="#E9E1C9"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M20 32C220 8 420 56 600 32C780 8 980 56 1180 32"
              stroke="#D5A044"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength={pathLength}
              strokeDasharray={pathLength}
              strokeDashoffset={strokeDashoffset}
              className="path-ribbon transition-[stroke-dashoffset] duration-150 ease-out"
            />
          </svg>
        </div>

        {/* Mobile Left Golden Thread Spine */}
        <div
          className="md:hidden pointer-events-none absolute left-9 top-20 bottom-16 w-0.5 bg-gradient-to-b from-teal-living via-gold-harvest to-midnight"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 relative z-10">
          {PHASES.map((phase, idx) => {
            const isMiddle = idx === 1;
            const isReached = progress >= (idx + 0.3) / PHASES.length;

            return (
              <article
                key={phase.number}
                className={`md:col-span-4 pl-12 md:pl-0 relative ${
                  idx === 1 ? "md:mt-6" : idx === 2 ? "md:mt-12" : ""
                }`}
              >
                {/* Node on the Golden Thread */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`absolute left-0 md:static size-9 md:size-12 rounded-full flex items-center justify-center font-serif italic text-sm md:text-lg font-bold border-2 transition-all duration-300 ${
                      isReached
                        ? "bg-midnight-deep text-gold-harvest border-gold-harvest shadow-sm"
                        : "bg-ivory-canvas text-midnight border-gold-harvest/50"
                    }`}
                  >
                    {phase.number}
                  </div>
                  <span
                    className={`text-xs uppercase tracking-[0.2em] font-semibold ${
                      isMiddle ? "text-gold-deep" : "text-teal-living"
                    }`}
                  >
                    {phase.label}
                  </span>
                </div>

                {/* Unboxed Editorial Phase Text with Left Accent Border */}
                <div
                  className={`pl-5 border-l-2 py-1 ${
                    isMiddle ? "border-gold-harvest bg-ivory-canvas/80 p-6" : "border-teal-living/40"
                  }`}
                >
                  <h3 className="font-serif text-2xl font-bold text-midnight mb-2.5">
                    {phase.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
