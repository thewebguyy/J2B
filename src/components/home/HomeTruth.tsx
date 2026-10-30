import React from "react";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const HomeTruth: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-ivory-surface border-y border-ivory-border/80 overflow-hidden">
      {/* Chapter Transition */}
      <PathRibbon variant="chapter-divider" className="-mt-12 mb-10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Asymmetric Editorial Essay Header (No repetitive tracked-out icon eyebrow) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline mb-16 sm:mb-24 pb-8 border-b border-ivory-border">
          <div className="lg:col-span-7">
            <span className="font-serif italic text-base sm:text-lg text-teal-living block mb-3">
              Why we started
            </span>

            <h2 className="font-serif editorial-h2 font-bold text-midnight reveal-heading">
              So many women carry everything on their own.{" "}
              <span className="italic font-normal text-gold-deep block sm:inline mt-1">
                Here, you don&apos;t have to.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8 border-l border-gold-harvest/50">
            <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
              We&apos;re taught to be strong and to cope by ourselves. But nobody grows well in isolation. It&apos;s easier when the people around you understand.
            </p>
          </div>
        </div>

        {/* Asymmetric Editorial Spread with Large Expressive Numerals & Member Reflections */}
        <div className="relative">
          {/* Flowing Golden Narrative Path SVG Spine */}
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
                d="M60 0C16 140 104 280 56 420C14 540 94 610 60 680"
                stroke="#D5A044"
                strokeWidth="2.2"
                strokeLinecap="round"
                className="path-ribbon path-draw-enter"
              />
              <circle cx="42" cy="84" r="4.5" fill="#D5A044" />
              <circle cx="72" cy="340" r="5" fill="#036E76" />
              <circle cx="52" cy="596" r="4.5" fill="#02404D" />
            </svg>
          </div>

          <div className="space-y-16 lg:space-y-24 relative z-10">
            
            {/* Stage 01: Life Transitions */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-6 relative pl-6 sm:pl-8 border-l-2 border-gold-harvest/60">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-serif italic text-6xl sm:text-7xl text-gold-harvest/45 font-bold leading-none select-none">
                    01
                  </span>
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] font-semibold text-teal-living block">
                      Somewhere to breathe
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mt-1">
                      Big life changes
                    </h3>
                  </div>
                </div>
                <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
                  A new job, a new baby, healing from something hard, or just not sure what&apos;s next. It helps to talk to women who listen and don&apos;t judge.
                </p>
              </div>

              {/* In-practice note (descriptive, not a testimonial) */}
              <div className="lg:col-span-5 lg:col-start-8 lg:mt-6 bg-ivory-canvas p-6 sm:p-7 border border-ivory-border">
                <span className="font-serif italic text-xs text-teal-living block mb-2">
                  In practice
                </span>
                <p className="font-serif italic text-base sm:text-lg text-midnight/90 leading-relaxed">
                  You don&apos;t have to explain yourself or have the right words. You can just turn up and be heard.
                </p>
              </div>
            </article>

            {/* Stage 02: The Messy Middle (Eliminated redundant duplicate pull-quote) */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Paired Editorial Margin Reflection on Left */}
              <div className="lg:col-span-5 order-2 lg:order-1 bg-ivory-canvas p-6 sm:p-7 border border-ivory-border">
                <span className="font-serif italic text-xs text-gold-deep block mb-2">
                  In practice
                </span>
                <p className="font-serif italic text-base sm:text-lg text-midnight/90 leading-relaxed">
                  You can come to a circle and say &ldquo;I don&apos;t know&rdquo; — and that&apos;s completely fine.
                </p>
              </div>

              <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 bg-ivory-canvas border-l-4 border-gold-harvest p-7 sm:p-10 shadow-xs">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] font-semibold text-gold-deep block">
                      Where most of life happens
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-bold text-midnight mt-1">
                      The Messy Middle
                    </h3>
                  </div>
                  <span className="font-serif italic text-6xl sm:text-7xl text-gold-harvest/45 font-bold leading-none select-none">
                    02
                  </span>
                </div>
                <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
                  Change is rarely neat. We&apos;re here for the in-between part — when you&apos;re letting go of who you were and not yet sure who you&apos;re becoming.
                </p>
              </div>
            </article>

            {/* Stage 03: True Companionship */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-6 relative pl-6 sm:pl-8 border-l-2 border-teal-living/60">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="font-serif italic text-6xl sm:text-7xl text-gold-harvest/45 font-bold leading-none select-none">
                    03
                  </span>
                  <div>
                    <span className="text-xs uppercase tracking-[0.18em] font-semibold text-midnight block">
                      Side by side
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mt-1">
                      Real friendship
                    </h3>
                  </div>
                </div>
                <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
                  No competition and no pecking order. Just women who show up for each other and celebrate the small wins as well as the big ones.
                </p>
              </div>

              <div className="lg:col-span-5 lg:col-start-8 lg:mt-4 bg-ivory-canvas p-6 sm:p-7 border border-ivory-border">
                <span className="font-serif italic text-xs text-teal-living block mb-2">
                  In practice
                </span>
                <p className="font-serif italic text-base sm:text-lg text-midnight/90 leading-relaxed">
                  Nobody is ranked and nobody is selling you anything. Someone else doing well takes nothing away from you.
                </p>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};
