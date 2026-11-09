import React from "react";
import { j2bContent } from "@/content/j2b";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Full-Bleed High-Visibility Journey Background: Walking in Tandem at Dawn */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden" aria-hidden="true">
        <Image
          src="/images/journey-path-hero.jpg"
          alt="Two companions walking side-by-side along an ascending ridge path toward the morning sun"
          fill
          priority
          quality={95}
          className="object-cover object-[70%_center] md:object-[60%_center] lg:object-center"
          sizes="100vw"
        />
        {/* Soft Asymmetric Left-to-Right Scrim: Dark-charcoal text is crisp on the left, while the path, companions, and sunrise remain fully visible on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-ivory-canvas/95 via-ivory-canvas/85 to-transparent lg:w-[58%]" />
        {/* Mobile vertical gradient to keep text readable on narrow screens while keeping the scene visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-ivory-canvas via-ivory-canvas/40 to-transparent sm:hidden" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 w-full z-10 py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl lg:max-w-xl">
          {/* Folio Eyebrow */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-ivory-canvas/90 backdrop-blur-md border border-gold-harvest/40 shadow-xs mb-7">
            <span className="size-2 rounded-full bg-teal-living" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
              Your companion on the journey to better
            </span>
          </div>

          {/* Expressive Editorial Headline */}
          <h1 className="font-serif editorial-display font-bold text-midnight mb-6 reveal-heading drop-shadow-xs">
            {j2bContent.welcome.heading.split("Journey2Better!")[0]}
            <span className="italic font-normal text-teal-living block sm:inline">
              Journey2Better!
            </span>
          </h1>

          {/* Staggered Lead Copy */}
          <div className="pl-5 sm:pl-6 border-l-2 border-gold-harvest/80 mb-8 bg-ivory-canvas/60 backdrop-blur-xs py-2 pr-4 rounded-r-lg">
            <p className="font-sans text-lg sm:text-xl text-charcoal/95 font-normal leading-relaxed">
              {j2bContent.welcome.body}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
            <MagneticButton href="/events" variant="primary" className="w-full sm:w-auto">
              <span>Explore Future Plans</span>
              <ArrowRight className="size-4 text-gold-harvest" />
            </MagneticButton>

            <MagneticButton href="/about" variant="outline" className="w-full sm:w-auto">
              <span>Read Our Story</span>
            </MagneticButton>
          </div>

          {/* Editorial Footnote Callout */}
          <div className="pt-5 border-t border-midnight/15 flex flex-wrap items-center gap-4 text-xs font-sans text-charcoal/85">
            <span className="font-serif italic font-semibold text-teal-living text-sm">
              &ldquo;Walking together in the messy middle&rdquo;
            </span>
            <span className="text-midnight/30 hidden sm:inline">&bull;</span>
            <span>Men and women &bull; All walks of life &bull; One step at a time</span>
          </div>
        </div>
      </div>
    </section>
  );
};
