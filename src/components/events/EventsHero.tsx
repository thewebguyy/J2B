import React from "react";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const EventsHero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-20 sm:pb-28 bg-ivory-canvas overflow-hidden">
      {/* Organic Botanical Watermark bleeding into left/bottom canvas */}
      <div
        className="pointer-events-none absolute -left-16 top-20 w-72 h-72 sm:w-96 sm:h-96 opacity-70 -z-10"
        aria-hidden="true"
      >
        <BotanicalMotif variant="watermark" size={360} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Staggered Asymmetric Editorial Hero */}
        <div className="relative pl-0 sm:pl-10 lg:pl-14 mb-20 sm:mb-28">
          {/* Delicate Golden Line anchoring the left margin */}
          <div className="hidden sm:block absolute left-0 top-1 bottom-0 w-8 pointer-events-none" aria-hidden="true">
            <PathRibbon variant="margin-anchor" className="h-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-6">
                <BotanicalMotif size={20} />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                  The Moments &bull; Gatherings &amp; Retreats
                </span>
              </div>

              <h1 className="font-serif editorial-display font-bold text-midnight reveal-heading">
                Some moments are{" "}
                <span className="italic font-normal text-gold-harvest block sm:inline">
                  better shared.
                </span>
              </h1>
            </div>

            <div className="lg:col-span-5 lg:pb-2">
              <p className="font-sans text-lg sm:text-xl text-charcoal/85 leading-relaxed font-normal mb-8">
                From sunrise virtual reflections that centre your week, to immersive London workshops and restorative annual retreats, our gatherings are curated to help you pause, reflect, and grow in sisterhood.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton href="#gatherings" variant="primary">
                  <span>Explore Our Gatherings</span>
                  <ArrowRight className="size-4 text-gold-harvest" />
                </MagneticButton>

                <MagneticButton href="#rhythm" variant="outline">
                  <span>View Gathering Rhythm</span>
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        {/* P1 — Editorial Pull-Quote Spread (Unboxed, directly on warm ivory canvas with rich-gold left border) */}
        <div className="relative max-w-5xl mx-auto lg:ml-14 pt-6 sm:pt-10">
          <blockquote className="relative pl-6 sm:pl-10 lg:pl-12 border-l-4 border-gold-harvest py-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                Intentional Gatherings
              </span>
              <span className="h-px w-8 bg-gold-harvest/60" aria-hidden="true" />
              <BotanicalMotif size={16} orientation="up" />
            </div>

            <h2 className="font-serif editorial-pullquote font-bold text-midnight mb-5 max-w-3xl">
              &ldquo;Designed for stillness, clarity, and genuine connection.&rdquo;
            </h2>

            <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed font-normal max-w-2xl">
              We deliberately cap attendance at our gatherings to preserve an environment where every woman can be seen and heard. No crowded seminar rooms, no passive lectures. Just honest conversation, mindful practice, and shared meals.
            </p>
          </blockquote>
        </div>

      </div>
    </section>
  );
};
