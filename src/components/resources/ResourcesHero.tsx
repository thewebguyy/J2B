import React from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";
import { PageVideoBackground } from "@/components/common/PageVideoBackground";
import { PAGE_VIDEOS } from "@/content/videos";

export const ResourcesHero: React.FC = () => (
  <section className="relative pt-10 pb-20 sm:pb-28 bg-ivory-canvas overflow-hidden">
    {/* Subtle Cinematic Background Treatment with Directional Text-Safe Scrim */}
    <PageVideoBackground
      desktopSrc={PAGE_VIDEOS.resources.desktopSrc}
      mobileSrc={PAGE_VIDEOS.resources.mobileSrc}
      posterSrc={PAGE_VIDEOS.resources.posterSrc}
      variant="editorial-split"
    />

    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 z-20">
      <div className="relative pl-0 sm:pl-10 lg:pl-14">
        <div className="hidden sm:block absolute left-0 top-1 bottom-0 w-8 pointer-events-none" aria-hidden="true">
          <PathRibbon variant="margin-anchor" className="h-full" />
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-6 px-3 py-1.5 rounded-full bg-ivory-canvas/95 backdrop-blur-sm border border-gold-harvest/40 shadow-sm w-fit">
            <BotanicalMotif size={18} />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
              Resources
            </span>
            <span className="h-px w-6 bg-gold-harvest/60" aria-hidden="true" />
          </div>

          <h1 className="font-serif editorial-display font-bold text-midnight mb-8 reveal-heading">
            Companions for{" "}
            <span className="italic font-normal text-teal-living">the journey.</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-charcoal/95 leading-relaxed max-w-2xl mb-6 bg-ivory-canvas/80 sm:bg-transparent rounded-lg p-2 sm:p-0">
            Reflection tools and guided companions are being developed alongside the memoir, to
            help people turn life experiences into lessons and small, steady steps forward.
          </p>

          <div
            role="note"
            className="rounded-2xl border border-gold-harvest/60 bg-gold-subtle/85 backdrop-blur-sm p-5 sm:p-6 max-w-2xl shadow-sm"
          >
            <p className="font-sans text-sm sm:text-base text-charcoal/95 leading-relaxed">
              <span className="font-semibold text-midnight">In development:</span> these resources
              are provisional. They are not yet available to download or purchase, and no dates,
              prices or formats have been confirmed.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
