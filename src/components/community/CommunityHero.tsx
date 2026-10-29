import React from "react";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const CommunityHero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-20 sm:pb-28 bg-ivory-canvas overflow-hidden">
      {/* Overlapping Botanical Watercolor Vignette in Living Teal */}
      <div
        className="pointer-events-none absolute -right-12 top-4 w-[320px] sm:w-[460px] lg:w-[520px] opacity-90 -z-10"
        aria-hidden="true"
      >
        <BotanicalMotif variant="vignette" className="w-full h-auto" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Asymmetric Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end mb-20 sm:mb-24">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <BotanicalMotif size={20} />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                The Together &bull; Community Life
              </span>
              <span className="h-px w-10 bg-teal-living/40" aria-hidden="true" />
            </div>

            <h1 className="font-serif editorial-display font-bold text-midnight mb-8 reveal-heading">
              There is room for you{" "}
              <span className="italic font-normal text-gold-harvest block sm:inline">
                at this table.
              </span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-charcoal/85 leading-relaxed font-normal max-w-2xl">
              You were never meant to walk this journey alone. In a world that often demands emotional detachment, Journey 2 Better creates spaces where women gather, speak truthfully, and rise in sisterhood.
            </p>
          </div>

          {/* Right Asymmetric Editorial Anchor & Truthful CTAs */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="w-full border-l-2 border-teal-living/60 pl-6 py-2">
              <p className="font-serif italic text-base text-midnight/90 mb-6 leading-relaxed">
                &ldquo;Come as you are — whether you are ready to share aloud or simply need a quiet seat among sisters.&rdquo;
              </p>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full">
                <MagneticButton href="#offerings" variant="primary" className="w-full justify-between">
                  <span>Explore Our Offerings</span>
                  <ArrowRight className="size-4 text-gold-harvest" />
                </MagneticButton>

                <MagneticButton href="#steps" variant="outline" className="w-full justify-center">
                  <span>How To Join Us</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        {/* Safe Sanctuary — Intimate Horizontal Editorial Spread connected by a delicate gold thread */}
        <div className="relative pt-12 border-t border-gold-harvest/40">
          {/* Flowing Golden Thread Connector */}
          <div
            className="hidden md:block pointer-events-none absolute top-0 left-0 right-0 -translate-y-1/2"
            aria-hidden="true"
          >
            <svg viewBox="0 0 1200 24" fill="none" className="w-full h-6 overflow-visible">
              <path
                d="M0 12C200 2 400 22 600 12C800 2 1000 22 1200 12"
                stroke="#D5A044"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="path-draw-enter"
              />
              <circle cx="180" cy="9" r="3.5" fill="#036E76" />
              <circle cx="600" cy="12" r="4" fill="#D5A044" />
              <circle cx="1020" cy="15" r="3.5" fill="#02404D" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Spread Column 1: Zero Judgment */}
            <article className="md:col-span-4 relative pl-5 border-l border-teal-living/35">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-living block mb-2">
                01 &mdash; Safe Sanctuary
              </span>
              <h2 className="font-serif text-2xl sm:text-[1.65rem] font-bold text-midnight mb-3">
                Zero Judgment
              </h2>
              <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
                Confidential, supportive environments where you can speak openly about your challenges without fear of being critiqued.
              </p>
            </article>

            {/* Spread Column 2: Sisterhood Over Rivalry (Elevated Stagger) */}
            <article className="md:col-span-4 md:mt-5 relative pl-5 border-l border-gold-harvest/60">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep block mb-2">
                02 &mdash; Mutual Uplift
              </span>
              <h2 className="font-serif text-2xl sm:text-[1.65rem] font-bold text-midnight mb-3">
                Sisterhood Over Rivalry
              </h2>
              <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
                We believe that another woman&apos;s light does not diminish your own. Every success in our community is shared and celebrated.
              </p>
            </article>

            {/* Spread Column 3: Everyday Connection */}
            <article className="md:col-span-4 md:mt-10 relative pl-5 border-l border-midnight/30">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-midnight block mb-2">
                03 &mdash; Consistent Care
              </span>
              <h2 className="font-serif text-2xl sm:text-[1.65rem] font-bold text-midnight mb-3">
                Everyday Connection
              </h2>
              <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
                Not just occasional meetings, but a continuous web of encouragement that keeps you anchored during demanding weeks.
              </p>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};
