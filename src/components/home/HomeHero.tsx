import React from "react";
import { j2bContent } from "@/content/j2b";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative bg-ivory-canvas overflow-hidden lg:min-h-[82vh] lg:flex lg:items-center">
      {/* Walking-Path Journey Imagery: Panoramic landscape crop on mobile/tablet, full-bleed on desktop */}
      <div
        className="relative w-full aspect-[16/9] max-h-[325px] md:max-h-[370px] lg:aspect-auto lg:max-h-none lg:absolute lg:inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/journey-path-hero.jpg"
          alt="Two companions walking side-by-side along an ascending dirt path through hillside greenery toward the morning light"
          fill
          priority
          quality={95}
          className="object-cover object-[62%_42%] lg:object-[25%_center] xl:object-center"
          sizes="100vw"
        />
        {/* Gentle mobile/tablet bottom transition into Warm Ivory canvas without burying the walking path */}
        <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ivory-canvas via-ivory-canvas/65 to-transparent" />
        {/* Desktop soft asymmetric left scrim keeping typography crisp while path, greenery and companions stay clear on the right */}
        <div
          className="hidden lg:block absolute inset-y-0 left-0 lg:w-[66%] xl:w-[58%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(252, 249, 232, 1) 0%, rgba(252, 249, 232, 0.98) 52%, rgba(252, 249, 232, 0.92) 74%, rgba(252, 249, 232, 0.48) 90%, rgba(252, 249, 232, 0) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-10 lg:px-12 xl:px-14 w-full z-10 -mt-8 sm:-mt-10 pb-10 sm:pb-14 lg:mt-0 lg:py-24">
        <div className="max-w-2xl lg:max-w-[27.5rem] xl:max-w-[31rem]">
          {/* Folio Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ivory-canvas/95 backdrop-blur-md border border-gold-harvest/40 shadow-sm mb-5 sm:mb-6 max-w-full">
            <span className="size-1.5 rounded-full bg-teal-living flex-shrink-0" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.09em] sm:tracking-[0.18em] font-semibold text-teal-living leading-snug">
              Your companion on the journey to better
            </span>
          </div>

          {/* Expressive Editorial Headline */}
          <h1 className="font-serif editorial-display font-bold text-midnight mb-5 sm:mb-6 reveal-heading">
            {j2bContent.welcome.heading.split("Journey2Better!")[0]}
            <span className="italic font-normal text-teal-living block">
              Journey2Better!
            </span>
          </h1>

          {/* Staggered Lead Copy */}
          <div className="pl-4 sm:pl-5 border-l-2 border-gold-harvest/80 mb-7 sm:mb-8 py-1">
            <p className="font-sans text-base sm:text-lg lg:text-xl text-charcoal/90 font-normal leading-relaxed">
              {j2bContent.welcome.body}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 mb-7 sm:mb-8">
            <MagneticButton href="/events" variant="primary" className="w-full sm:w-auto sm:whitespace-nowrap">
              <span>Explore Future Plans</span>
              <ArrowRight className="size-4 text-gold-harvest flex-shrink-0" />
            </MagneticButton>

            <MagneticButton href="/about" variant="outline" className="w-full sm:w-auto sm:whitespace-nowrap">
              <span>Read Our Story</span>
            </MagneticButton>
          </div>

          {/* Editorial Footnote Callout */}
          <div className="pt-2">
            <div className="w-16 h-px bg-gold-harvest/70 mb-3" aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-3 text-xs font-sans text-charcoal/85">
              <span className="font-serif italic font-semibold text-teal-living text-sm">
                &ldquo;Walking together in the messy middle&rdquo;
              </span>
              <span className="text-midnight/30 hidden sm:inline">&bull;</span>
              <span>Men and women &bull; All walks of life &bull; One step at a time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
