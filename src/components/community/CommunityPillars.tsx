import React from "react";
import { j2bContent } from "@/content/j2b";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

export const CommunityPillars: React.FC = () => (
  <section id="pillars" className="relative py-20 sm:py-28 bg-ivory-canvas overflow-hidden">
    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
              Our five pillars
            </span>
          </div>
          <h2 className="font-serif editorial-h2 font-bold text-midnight reveal-heading">
            Five ways the journey comes together.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pl-6 border-l border-gold-harvest/50">
          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
            Shared life experiences become lessons when we reflect on them together, with honesty and respect.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {j2bContent.pillars.map((pillar) => (
          <article
            key={pillar.id}
            className="relative rounded-2xl p-6 sm:p-8 bg-ivory-surface border border-ivory-border/90 border-t-2 border-t-gold-harvest tactile-surface hover:border-gold-harvest/50 flex flex-col justify-between"
          >
            <div>
              <span
                aria-hidden="true"
                className="font-serif italic text-4xl sm:text-5xl font-bold text-gold-harvest/40 leading-none block mb-4 select-none"
              >
                {pillar.number}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-midnight mb-2.5 leading-snug">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
