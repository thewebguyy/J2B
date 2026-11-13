"use client";

import React, { useEffect, useRef } from "react";
import { brandPositioning, j2bContent } from "@/content/j2b";
import { PathRibbon } from "@/components/brand/PathRibbon";
import { GSAP_EASE, GSAP_EASE_SOFT, isReducedMotion, loadGsapWithScrollTrigger } from "@/utils/motion";

export const HomeTruth: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const spineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || isReducedMotion()) return;

    let cancelled = false;
    let ctx: { revert: () => void } | undefined;

    loadGsapWithScrollTrigger().then(({ gsap }) => {
      if (cancelled || !sectionRef.current) return;

      ctx = gsap.context(() => {
        const headerBlock = section.querySelector<HTMLElement>("[data-truth-header]");
        const stages = section.querySelectorAll<HTMLElement>("[data-truth-stage]");
        const spine = spineRef.current;

        if (headerBlock) {
          gsap.from(headerBlock, {
            opacity: 0,
            y: 18,
            duration: 0.7,
            ease: GSAP_EASE,
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: headerBlock,
              start: "top 88%",
              once: true,
            },
          });
        }

        if (spine && typeof spine.getTotalLength === "function") {
          const length = spine.getTotalLength();
          gsap.set(spine, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(spine, {
            strokeDashoffset: 0,
            duration: 1.4,
            ease: GSAP_EASE_SOFT,
            scrollTrigger: {
              trigger: spine,
              start: "top 82%",
              once: true,
            },
          });
        }

        stages.forEach((stage) => {
          gsap.from(stage, {
            opacity: 0,
            y: 22,
            duration: 0.72,
            ease: GSAP_EASE,
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: stage,
              start: "top 86%",
              once: true,
            },
          });
        });
      }, sectionRef);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-ivory-surface border-y border-ivory-border/80 overflow-hidden"
    >
      {/* Chapter Transition */}
      <PathRibbon variant="chapter-divider" className="-mt-12 mb-10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Asymmetric Editorial Essay Header */}
        <div
          data-truth-header
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline mb-16 sm:mb-24 pb-8 border-b border-ivory-border"
        >
          <div className="lg:col-span-7">
            <span className="font-serif italic text-base sm:text-lg text-teal-living block mb-3">
              A story that opens a wider journey
            </span>

            <h2 className="font-serif editorial-h2 font-bold text-midnight">
              Beginning with a memoir.{" "}
              <span className="italic font-normal text-gold-deep block sm:inline mt-1">
                Growing through shared experience.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8 border-l border-gold-harvest/50">
            <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
              {brandPositioning.memoir}
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Spread with Large Expressive Numerals & Member Reflections */}
        <div className="relative">
          {/* Flowing Golden Narrative Path SVG Spine (scroll-drawn via GSAP ScrollTrigger) */}
          <div
            className="hidden lg:block pointer-events-none absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-24"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 120 680"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <path
                d="M60 0C16 140 104 280 56 420C14 540 94 610 60 680"
                stroke="#E9E1C9"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                ref={spineRef}
                d="M60 0C16 140 104 280 56 420C14 540 94 610 60 680"
                stroke="#D5A044"
                strokeWidth="2.2"
                strokeLinecap="round"
                className="path-ribbon"
              />
              <circle cx="42" cy="84" r="4.5" fill="#D5A044" />
              <circle cx="72" cy="340" r="5" fill="#036E76" />
              <circle cx="52" cy="596" r="4.5" fill="#02404D" />
            </svg>
          </div>

          <div className="space-y-16 lg:space-y-24 relative z-10">
            {/* Stage 01: Life Transitions */}
            <article data-truth-stage className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-6 relative pl-5 sm:pl-7 border-l-2 border-gold-harvest/70">
                <div className="flex items-baseline gap-3 sm:gap-4 mb-3">
                  <span className="font-serif italic text-5xl sm:text-6xl text-gold-harvest/40 font-bold leading-none select-none">
                    01
                  </span>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-teal-living block">
                      Somewhere to breathe
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mt-1">
                      Big life changes
                    </h3>
                  </div>
                </div>
                <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
                  A new job, a family change, healing from something hard, or just not sure what&apos;s next. It helps to talk to people who listen and don&apos;t judge.
                </p>
              </div>

              {/* In-practice note */}
              <div className="lg:col-span-5 lg:col-start-8 lg:mt-4 rounded-xl bg-ivory-canvas p-5 sm:p-6 border border-ivory-border/90">
                <span className="font-serif italic text-xs text-teal-living block mb-1.5">
                  In practice
                </span>
                <p className="font-serif italic text-base sm:text-lg text-midnight/90 leading-relaxed">
                  You don&apos;t have to explain yourself or have the right words. You can just turn up and be heard.
                </p>
              </div>
            </article>

            {/* Stage 02: The Messy Middle */}
            <article data-truth-stage className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 rounded-xl bg-ivory-canvas p-5 sm:p-6 border border-ivory-border/90">
                <span className="font-serif italic text-xs text-gold-deep block mb-1.5">
                  In practice
                </span>
                <p className="font-serif italic text-base sm:text-lg text-midnight/90 leading-relaxed">
                  You can take time to reflect. Sharing your story is always your choice.
                </p>
              </div>

              <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 rounded-xl bg-ivory-canvas border-l-2 border-gold-harvest p-6 sm:p-8 shadow-sm">
                <div className="flex items-baseline justify-between mb-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-gold-deep block">
                      Where most of life happens
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-bold text-midnight mt-1">
                      The Messy Middle
                    </h3>
                  </div>
                  <span className="font-serif italic text-5xl sm:text-6xl text-gold-harvest/40 font-bold leading-none select-none">
                    02
                  </span>
                </div>
                <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
                  Change is rarely neat. We&apos;re here for the in-between part, when you&apos;re letting go of who you were and not yet sure who you&apos;re becoming.
                </p>
              </div>
            </article>

            {/* Stage 03: True Companionship */}
            <article data-truth-stage className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-6 relative pl-5 sm:pl-7 border-l-2 border-teal-living/70">
                <div className="flex items-baseline gap-3 sm:gap-4 mb-3">
                  <span className="font-serif italic text-5xl sm:text-6xl text-gold-harvest/40 font-bold leading-none select-none">
                    03
                  </span>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-midnight block">
                      Side by side
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mt-1">
                      Real friendship
                    </h3>
                  </div>
                </div>
                <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
                  No competition and no pecking order. Just people who show up for each other and celebrate the small wins as well as the big ones.
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 lg:mt-4 rounded-xl bg-ivory-canvas p-5 sm:p-6 border border-ivory-border/90">
                <span className="font-serif italic text-xs text-teal-living block mb-1.5">
                  In practice
                </span>
                <p className="font-serif italic text-base sm:text-lg text-midnight/90 leading-relaxed">
                  {j2bContent.vision}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
