import React from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

const VALUES = [
  {
    number: "01",
    title: "Honesty",
    tagline: "No pretending",
    description:
      "You never have to act like you've got it all together. Being honest is where growth starts.",
    theme: "midnight",
  },
  {
    number: "02",
    title: "Belonging",
    tagline: "Come as you are",
    description:
      "There's nothing to qualify for and nothing to prove. You belong from your first day.",
    theme: "ivory",
  },
  {
    number: "03",
    title: "Courage",
    tagline: "Taking the next step",
    description:
      "Change can be scary. We stand by each other through hard decisions and big leaps — at home or at work.",
    theme: "teal",
  },
  {
    number: "04",
    title: "Celebration",
    tagline: "Small wins count",
    description:
      "Not just promotions and milestones. Setting a boundary, choosing rest or starting again after a hard time counts too.",
    theme: "gold",
  },
];

export const AboutValues: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <BotanicalMotif size={20} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                Our values
              </span>
            </div>

            <h2 className="font-serif editorial-h2 font-bold text-midnight reveal-heading">
              What we stand for.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6 border-l border-gold-harvest/50">
            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
              These four things shape every circle, workshop and conversation.
            </p>
          </div>
        </div>

        {/* Staggered 2x2 Asymmetric Editorial Layout Connected by a Subtle Gold Thematic Thread */}
        <div className="relative">
          {/* Flowing Gold Thematic Thread across the center */}
          <div
            className="hidden md:block pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0"
            aria-hidden="true"
          >
            <svg viewBox="0 0 1200 80" fill="none" className="w-full h-20 overflow-visible">
              <path
                d="M0 40C300 8 600 72 900 32C1050 12 1150 40 1200 40"
                stroke="#D5A044"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
                className="opacity-55"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-start">
            
            {/* Principle 01: Honesty (7 columns, Deep Sanctuary Inversion) */}
            <article className="md:col-span-7 bg-midnight-deep text-ivory-surface p-8 sm:p-11 border-l-4 border-gold-harvest relative overflow-hidden tactile-surface">
              <div className="pointer-events-none absolute -right-8 -bottom-8 opacity-25" aria-hidden="true">
                <BotanicalMotif variant="watermark" size={180} orientation="left" />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-serif italic text-4xl font-bold text-gold-harvest">
                    {VALUES[0].number}
                  </span>
                  <span className="h-px w-8 bg-gold-harvest/50" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-light">
                    {VALUES[0].tagline}
                  </span>
                </div>
                <BotanicalMotif size={22} orientation="right" />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                {VALUES[0].title}
              </h3>

              <p className="font-sans text-base sm:text-lg text-ivory-surface/85 leading-relaxed max-w-xl">
                {VALUES[0].description}
              </p>
            </article>

            {/* Principle 02: Belonging (5 columns, Staggered Downward) */}
            <article className="md:col-span-5 md:mt-12 bg-ivory-surface p-8 sm:p-10 border-t-2 border-teal-living relative tactile-surface">
              <div className="flex items-center justify-between mb-5">
                <span className="font-serif italic text-4xl font-bold text-teal-living">
                  {VALUES[1].number}
                </span>
                <BotanicalMotif size={22} orientation="left" />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-teal-living mb-2">
                {VALUES[1].tagline}
              </p>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mb-3">
                {VALUES[1].title}
              </h3>

              <p className="font-sans text-base text-charcoal/85 leading-relaxed">
                {VALUES[1].description}
              </p>
            </article>

            {/* Principle 03: Courage (5 columns, Offset Editorial Spread) */}
            <article className="md:col-span-5 bg-ivory-surface p-8 sm:p-10 border-l-2 border-teal-living relative tactile-surface">
              <div className="flex items-center justify-between mb-5">
                <span className="font-serif italic text-4xl font-bold text-midnight">
                  {VALUES[2].number}
                </span>
                <BotanicalMotif size={22} orientation="up" />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-teal-living mb-2">
                {VALUES[2].tagline}
              </p>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mb-3">
                {VALUES[2].title}
              </h3>

              <p className="font-sans text-base text-charcoal/85 leading-relaxed">
                {VALUES[2].description}
              </p>
            </article>

            {/* Principle 04: Celebration (7 columns, Staggered Upward Warm Gold Wash) */}
            <article className="md:col-span-7 md:-mt-6 bg-gradient-to-br from-ivory-surface via-ivory-canvas to-gold-subtle/45 p-8 sm:p-11 border-l-4 border-gold-harvest relative overflow-hidden tactile-surface">
              <div className="pointer-events-none absolute -right-6 -top-6 opacity-40" aria-hidden="true">
                <BotanicalMotif variant="watermark" size={170} />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-serif italic text-4xl font-bold text-gold-deep">
                    {VALUES[3].number}
                  </span>
                  <span className="h-px w-8 bg-gold-harvest/60" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-teal-living">
                    {VALUES[3].tagline}
                  </span>
                </div>
                <BotanicalMotif size={22} orientation="left" />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-midnight mb-4">
                {VALUES[3].title}
              </h3>

              <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed max-w-xl">
                {VALUES[3].description}
              </p>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};
