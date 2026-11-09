import React from "react";
import { j2bContent } from "@/content/j2b";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

export const CommunityGuidelines: React.FC = () => (
  <section
    id="guidelines"
    className="relative py-20 sm:py-28 bg-ivory-surface border-y border-ivory-border overflow-hidden"
  >
    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
              Community guidelines
            </span>
          </div>
          <h2 className="font-serif editorial-h2 font-bold text-midnight mb-6 reveal-heading">
            How we journey together.
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
            A welcoming space depends on everyone choosing respect, privacy and care. These guidelines
            help us keep that space safe for people of every background.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ol className="space-y-4">
            {j2bContent.communityGuidelines.map((guideline, index) => (
              <li
                key={guideline}
                className="flex items-start gap-4 p-5 sm:p-6 bg-ivory-canvas border-l-2 border-teal-living/50"
              >
                <span
                  aria-hidden="true"
                  className="font-serif italic text-lg font-bold text-gold-deep leading-none pt-0.5"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-base sm:text-lg text-charcoal/90 leading-relaxed">
                  {guideline}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <aside
        aria-labelledby="health-note"
        className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl border border-gold-harvest/60 bg-gold-subtle/60"
      >
        <h3
          id="health-note"
          className="font-serif text-xl sm:text-2xl font-bold text-midnight mb-3"
        >
          Health information
        </h3>
        <p className="font-sans text-base sm:text-lg text-charcoal/90 leading-relaxed max-w-4xl">
          {j2bContent.healthDisclaimer}
        </p>
      </aside>
    </div>
  </section>
);
