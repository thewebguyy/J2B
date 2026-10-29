import React from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const HomeTruth: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-ivory-surface border-y border-ivory-border/70 overflow-hidden">
      {/* Chapter Transition */}
      <PathRibbon variant="chapter-divider" className="-mt-12 mb-10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Asymmetric Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <BotanicalMotif size={20} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                The Human Truth
              </span>
            </div>

            <h2 className="font-serif editorial-h2 font-bold text-midnight reveal-heading">
              So many women carry everything quietly.{" "}
              <span className="italic font-normal text-gold-harvest block sm:inline mt-1">
                Here, you don&apos;t have to do it alone.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6 border-l-2 border-gold-harvest/50">
            <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
              We are conditioned to be strong, capable, and self-sufficient. But true personal growth isn&apos;t a solitary endurance test. It is a shared journey that flourishes when we are met with understanding.
            </p>
          </div>
        </div>

        {/* Staggered Vertical Editorial Timeline Connected by a Flowing Golden Line */}
        <div className="relative">
          {/* Flowing Golden Narrative Path SVG Spine */}
          <div
            className="hidden md:block pointer-events-none absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-24"
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
                strokeWidth="2.5"
                strokeLinecap="round"
                className="path-ribbon path-draw-enter"
              />
              <circle cx="42" cy="84" r="5" fill="#D5A044" />
              <circle cx="72" cy="340" r="6" fill="#036E76" />
              <circle cx="52" cy="596" r="5" fill="#02404D" />
            </svg>
          </div>

          {/* Mobile Left Golden Thread Spine */}
          <div
            className="md:hidden pointer-events-none absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold-harvest via-teal-living to-midnight"
            aria-hidden="true"
          />

          <div className="space-y-14 md:space-y-20 relative z-10">
            
            {/* Stage 01: Life Transitions (Left Flush Editorial Block) */}
            <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start pl-8 md:pl-0">
              <div className="md:col-span-5 md:text-right md:pr-6">
                <div className="inline-flex md:justify-end items-baseline gap-3 mb-2">
                  <span className="font-serif italic text-4xl sm:text-5xl text-gold-harvest font-bold leading-none">
                    01
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-teal-living">
                    A space to exhale
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mb-3">
                  Life Transitions
                </h3>
                <p className="font-sans text-base text-charcoal/80 leading-relaxed">
                  Whether you are changing careers, redefining motherhood, healing, or questioning your direction, having sisters who listen without judgment makes the path clearer.
                </p>
              </div>
              <div className="hidden md:flex md:col-span-2 justify-center pt-3">
                <BotanicalMotif size={24} orientation="left" />
              </div>
              <div className="md:col-span-5 hidden md:block" />
            </article>

            {/* Stage 02: The Messy Middle (Right Offset Elevated Pull-Spread) */}
            <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center pl-8 md:pl-0">
              <div className="md:col-span-5 hidden md:flex justify-end pr-8">
                <p className="font-serif italic text-xl lg:text-2xl text-midnight/80 text-right max-w-xs leading-snug">
                  &ldquo;Transformation is rarely linear.&rdquo;
                </p>
              </div>
              <div className="hidden md:flex md:col-span-2 justify-center">
                <div className="size-11 rounded-full bg-ivory-canvas border-2 border-gold-harvest flex items-center justify-center shadow-sm">
                  <BotanicalMotif size={20} orientation="up" />
                </div>
              </div>
              <div className="md:col-span-5 bg-ivory-canvas border-l-4 border-gold-harvest p-7 sm:p-9 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-deep">
                    Honouring your process
                  </span>
                  <span className="font-serif italic text-4xl sm:text-5xl text-teal-living font-bold leading-none">
                    02
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-midnight mb-3">
                  The Messy Middle
                </h3>
                <p className="font-sans text-base text-charcoal/85 leading-relaxed">
                  Transformation is rarely linear. We honour the uncertain middle ground where you are shedding who you were and stepping courageously into who you are becoming.
                </p>
              </div>
            </article>

            {/* Stage 03: True Companionship (Left Flush Grounded Horizon Spread) */}
            <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start pl-8 md:pl-0">
              <div className="md:col-span-6 lg:col-span-5 md:col-start-1 bg-midnight-deep text-ivory-surface p-7 sm:p-9 border-t-2 border-gold-harvest">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-serif italic text-4xl sm:text-5xl text-gold-harvest font-bold leading-none">
                    03
                  </span>
                  <span className="h-px w-8 bg-gold-harvest/50" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-light">
                    Walking side by side
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                  True Companionship
                </h3>
                <p className="font-sans text-base text-ivory-surface/85 leading-relaxed">
                  No competition. No hierarchy. Just genuine women walking beside you, holding your aspirations with respect, and celebrating every small milestone along the way.
                </p>
              </div>
              <div className="hidden md:flex md:col-span-2 justify-center pt-6">
                <BotanicalMotif size={24} orientation="right" />
              </div>
              <div className="md:col-span-5 hidden md:block" />
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};
