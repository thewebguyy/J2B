import React from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const ShopHero: React.FC = () => (
  <section className="relative pt-10 pb-20 sm:pb-28 bg-ivory-canvas overflow-hidden">
    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
      <div className="relative pl-0 sm:pl-10 lg:pl-14">
        <div className="hidden sm:block absolute left-0 top-1 bottom-0 w-8 pointer-events-none" aria-hidden="true">
          <PathRibbon variant="margin-anchor" className="h-full" />
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6">
            <BotanicalMotif size={20} />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
              Merchandise
            </span>
            <span className="h-px w-10 bg-gold-harvest/60" aria-hidden="true" />
          </div>

          <h1 className="font-serif editorial-display font-bold text-midnight mb-8 reveal-heading">
            A preview of{" "}
            <span className="italic font-normal text-gold-deep">things to come.</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-charcoal/85 leading-relaxed max-w-2xl mb-6">
            A future collection of books, journals and everyday keepsakes that carry the
            Journey2Better message. This page is a catalogue preview while the range is developed.
          </p>

          <div
            role="note"
            className="rounded-2xl border border-gold-harvest/60 bg-gold-subtle/60 p-5 sm:p-6 max-w-2xl"
          >
            <p className="font-sans text-sm sm:text-base text-charcoal/90 leading-relaxed">
              <span className="font-semibold text-midnight">Preview only:</span> nothing here is for
              sale yet. Prices, stock, sizes and delivery have not been confirmed, and there is no
              checkout.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
