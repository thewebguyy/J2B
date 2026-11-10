import React from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { j2bContent } from "@/content/j2b";

export const AboutValues: React.FC = () => (
  <section className="relative py-16 sm:py-24 lg:py-28 bg-ivory-canvas overflow-hidden">
    <div className="relative mx-auto max-w-7xl px-5 sm:px-10 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12 sm:mb-16">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 mb-3">
            <BotanicalMotif size={18} />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-teal-living">
              Our values
            </span>
          </div>
          <h2 className="font-serif editorial-h2 font-bold text-midnight reveal-heading">
            What we stand for.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pl-6 border-l border-gold-harvest/50">
          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
            Eight values guide the community we are building.
          </p>
        </div>
      </div>

      {/* Cohesive 8-Value Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {j2bContent.values.map((value, index) => (
          <article
            key={value.title}
            className="rounded-2xl bg-ivory-surface border border-ivory-border/90 p-6 sm:p-7 flex flex-col justify-between tactile-surface hover:border-gold-harvest/50"
          >
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-ivory-border/60">
                <span className="font-serif italic text-2xl sm:text-3xl font-bold text-gold-harvest/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <BotanicalMotif size={18} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-midnight mb-2">
                {value.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                {value.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Vision & Mission Sanctuary Spread */}
      <div className="mt-12 sm:mt-16 rounded-2xl border border-ivory-border bg-ivory-surface p-7 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="border-l-2 border-gold-harvest pl-5 sm:pl-6">
          <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-teal-living block mb-2">
            Long-term hope
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mb-3">
            Our vision
          </h2>
          <p className="font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed">
            {j2bContent.vision}
          </p>
        </div>

        <div className="border-l-2 border-teal-living pl-5 sm:pl-6">
          <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-gold-deep block mb-2">
            Everyday purpose
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mb-3">
            Our mission
          </h2>
          <p className="font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed">
            {j2bContent.about[1]}
          </p>
        </div>
      </div>
    </div>
  </section>
);
