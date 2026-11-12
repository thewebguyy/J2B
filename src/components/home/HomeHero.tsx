"use client";

import React, { useEffect, useRef } from "react";
import { j2bContent } from "@/content/j2b";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { GSAP_EASE, GSAP_EASE_SOFT, isReducedMotion } from "@/utils/motion";

const INCLUSIVE_SILHOUETTES = [
  { label: "Women", ring: "border-gold-harvest/55", fill: "#D5A044", bg: "bg-ivory-canvas/10" },
  { label: "Men", ring: "border-teal-bright/50", fill: "#E5B660", bg: "bg-ivory-canvas/15" },
  { label: "Young", ring: "border-ivory-canvas/40", fill: "#FCF9E8", bg: "bg-teal-living/30" },
  { label: "Older", ring: "border-gold-light/50", fill: "#E6F3F4", bg: "bg-midnight/60" },
] as const;

export const HomeHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const pathStrokeRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || isReducedMotion()) return;

    let cancelled = false;
    let ctx: { revert: () => void } | undefined;

    import("gsap").then((gsapModule) => {
      if (cancelled || !heroRef.current) return;
      const gsap = gsapModule.gsap || gsapModule.default;

      ctx = gsap.context(() => {
        const bgMedia = root.querySelector<HTMLElement>("[data-hero-media]");
        const copyItems = root.querySelectorAll<HTMLElement>("[data-hero-enter]");
        const mosaicItems = root.querySelectorAll<HTMLElement>("[data-mosaic-enter]");
        const pathEl = pathStrokeRef.current;

        if (bgMedia) {
          gsap.fromTo(
            bgMedia,
            { scale: 1.06 },
            { scale: 1, duration: 1.45, ease: GSAP_EASE_SOFT, clearProps: "transform" }
          );
        }

        if (copyItems.length > 0) {
          gsap.from(copyItems, {
            opacity: 0,
            y: 14,
            duration: 0.65,
            stagger: 0.08,
            ease: GSAP_EASE,
            clearProps: "transform,opacity",
          });
        }

        if (mosaicItems.length > 0) {
          gsap.from(mosaicItems, {
            opacity: 0,
            y: 18,
            duration: 0.72,
            delay: 0.16,
            stagger: 0.11,
            ease: GSAP_EASE,
            clearProps: "transform,opacity",
          });
        }

        if (pathEl && typeof pathEl.getTotalLength === "function") {
          const length = pathEl.getTotalLength();
          gsap.set(pathEl, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(pathEl, {
            strokeDashoffset: 0,
            duration: 1.35,
            delay: 0.15,
            ease: GSAP_EASE_SOFT,
          });
        }
      }, heroRef);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative bg-ivory-canvas overflow-hidden lg:min-h-[82vh] lg:flex lg:items-center"
    >
      {/* Walking-Path Journey Anchor: Panoramic greenery trail on mobile/tablet, full-bleed backdrop on desktop */}
      <div
        className="relative w-full h-[210px] sm:h-[255px] md:h-[290px] lg:h-auto lg:min-h-full lg:absolute lg:inset-0 z-0 select-none overflow-hidden"
        aria-hidden="true"
      >
        <div data-hero-media className="relative w-full h-full">
          <Image
            src="/images/journey-path-hero.jpg"
            alt="Sunlit ascending dirt path winding through lush green hillside scenery toward the morning light"
            fill
            priority
            quality={95}
            className="object-cover object-[96%_44%] scale-[1.22] origin-right lg:scale-100 lg:origin-center lg:object-[78%_center]"
            sizes="100vw"
          />
        </div>

        {/* Mobile/tablet secondary overlapping vignette so first screen immediately pairs the path with shared human connection */}
        <div className="lg:hidden absolute right-4 bottom-7 w-24 sm:w-28 aspect-[4/3] rounded-xl overflow-hidden border-2 border-ivory-canvas shadow-lg z-10">
          <Image
            src="/images/about-sisterhood.jpg"
            alt=""
            fill
            priority
            quality={80}
            className="object-cover"
            sizes="120px"
          />
        </div>

        {/* Soft ambient dawn light halo (GPU opacity breathe, paused under reduced motion) */}
        <div
          className="pointer-events-none absolute -top-12 right-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full animate-warm-halo"
          style={{
            background:
              "radial-gradient(circle, rgba(229, 182, 96, 0.32) 0%, rgba(252, 249, 232, 0) 72%)",
          }}
        />

        {/* Ascending Golden Living Path SVG Curve */}
        <svg
          viewBox="0 0 800 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 w-full h-full opacity-75 lg:opacity-85"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            ref={pathStrokeRef}
            d="M440 435C520 355 615 315 585 235C560 165 655 110 770 42"
            stroke="#D5A044"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="path-ribbon"
          />
        </svg>

        {/* Mobile/tablet gentle bottom transition into Warm Ivory canvas */}
        <div className="lg:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ivory-canvas via-ivory-canvas/70 to-transparent" />

        {/* Desktop editorial left scrim keeping typography crisp while sunlit path & right-side mosaic stay clear */}
        <div
          className="hidden lg:block absolute inset-y-0 left-0 lg:w-[68%] xl:w-[62%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(252, 249, 232, 1) 0%, rgba(252, 249, 232, 0.98) 54%, rgba(252, 249, 232, 0.9) 76%, rgba(252, 249, 232, 0.45) 90%, rgba(252, 249, 232, 0) 100%)",
          }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-10 lg:px-12 xl:px-14 w-full z-10 -mt-7 sm:-mt-9 pb-10 sm:pb-14 lg:mt-0 lg:py-16 xl:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Primary Editorial Messaging */}
          <div className="lg:col-span-6 xl:col-span-6 max-w-2xl lg:max-w-[30rem] xl:max-w-[33rem]">
            {/* Folio Eyebrow */}
            <div
              data-hero-enter
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ivory-canvas/95 backdrop-blur-md border border-gold-harvest/40 shadow-sm mb-4 sm:mb-5 max-w-full"
            >
              <span className="size-1.5 rounded-full bg-teal-living flex-shrink-0" aria-hidden="true" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.09em] sm:tracking-[0.18em] font-semibold text-teal-living leading-snug">
                Your companion on the journey to better
              </span>
            </div>

            {/* Expressive Editorial Headline */}
            <h1
              data-hero-enter
              className="font-serif editorial-display font-bold text-midnight mb-4 sm:mb-5"
            >
              {j2bContent.welcome.heading.split("Journey2Better!")[0]}
              <span className="italic font-normal text-teal-living block">
                Journey2Better!
              </span>
            </h1>

            {/* Staggered Lead Copy */}
            <div
              data-hero-enter
              className="pl-4 sm:pl-5 border-l-2 border-gold-harvest/80 mb-6 sm:mb-7 py-0.5"
            >
              <p className="font-sans text-base sm:text-lg lg:text-xl text-charcoal/90 font-normal leading-relaxed">
                {j2bContent.welcome.body}
              </p>
            </div>

            {/* Action CTAs */}
            <div
              data-hero-enter
              className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6 sm:mb-7"
            >
              <MagneticButton href="/events" variant="primary" className="w-full sm:w-auto sm:whitespace-nowrap">
                <span>Explore Future Plans</span>
                <ArrowRight className="size-4 text-gold-harvest flex-shrink-0" />
              </MagneticButton>

              <MagneticButton href="/about" variant="outline" className="w-full sm:w-auto sm:whitespace-nowrap">
                <span>Read Our Story</span>
              </MagneticButton>
            </div>

            {/* Editorial Footnote */}
            <div data-hero-enter className="pt-1">
              <div className="w-16 h-px bg-gold-harvest/70 mb-3" aria-hidden="true" />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-sans text-charcoal/85">
                <span className="font-serif italic font-semibold text-teal-living text-sm">
                  &ldquo;Walking together in the messy middle&rdquo;
                </span>
                <span className="text-midnight/30 hidden sm:inline">&bull;</span>
                <span>Men and women &bull; All walks of life &bull; One step at a time</span>
              </div>
            </div>
          </div>

          {/* Right Column / Below CTAs on Mobile: Inclusive Living Journey Mosaic */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xl lg:max-w-[31rem] lg:ml-auto">
              {/* Frame 1 (Approved Image): Shared Human Connection across the Table */}
              <figure
                data-mosaic-enter
                className="rounded-2xl overflow-hidden bg-ivory-canvas border border-gold-harvest/40 shadow-[0_18px_40px_-16px_rgba(2,64,77,0.22)] p-1.5 sm:p-2"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/about-sisterhood.jpg"
                    alt="Two people sharing warm drinks across a wooden table beside an open journal"
                    fill
                    priority
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 1024px) 45vw, 240px"
                  />
                </div>
                <figcaption className="px-1.5 pt-2 pb-0.5 flex flex-col xl:flex-row xl:items-center justify-between gap-0.5 xl:gap-2">
                  <span className="font-serif italic text-xs sm:text-sm font-semibold text-midnight">
                    Shared connection
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-teal-living font-semibold hidden sm:inline">
                    Community
                  </span>
                </figcaption>
              </figure>

              {/* Frame 2 (Approved Image): Winding Greenery Trail + Reflection */}
              <figure
                data-mosaic-enter
                className="rounded-2xl overflow-hidden bg-ivory-canvas border border-gold-harvest/40 shadow-[0_18px_40px_-16px_rgba(2,64,77,0.22)] p-1.5 sm:p-2 sm:mt-4"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src="/images/journal-stillness.jpg"
                    alt="An open textured journal beside tea and dried botanicals in warm morning sunlight"
                    fill
                    priority
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 1024px) 45vw, 240px"
                  />
                </div>
                <figcaption className="px-1.5 pt-2 pb-0.5 flex flex-col xl:flex-row xl:items-center justify-between gap-0.5 xl:gap-2">
                  <span className="font-serif italic text-xs sm:text-sm font-semibold text-midnight">
                    Space to reflect
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-gold-deep font-semibold hidden sm:inline">
                    Growth
                  </span>
                </figcaption>
              </figure>

              {/* Frame 3 (Clear Editorial Placeholder Strategy for Diverse Community Portraits) */}
              <div
                data-mosaic-enter
                className="col-span-2 rounded-2xl bg-midnight-deep text-ivory-canvas border border-gold-harvest/40 shadow-[0_20px_48px_-18px_rgba(1,43,52,0.45)] p-4 sm:p-5 relative overflow-hidden"
              >
                <BotanicalMotif
                  variant="watermark"
                  size={150}
                  orientation="right"
                  className="absolute -right-6 -bottom-6 opacity-25 pointer-events-none"
                />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Diverse Editorial Silhouette Portraits */}
                  <div className="flex items-center gap-2.5 flex-shrink-0" aria-hidden="true">
                    {INCLUSIVE_SILHOUETTES.map((item) => (
                      <div
                        key={item.label}
                        className={`flex flex-col items-center justify-end w-11 h-14 sm:w-12 sm:h-16 rounded-t-full rounded-b-lg border ${item.ring} ${item.bg} overflow-hidden pt-2`}
                      >
                        <svg viewBox="0 0 36 42" fill="none" className="w-8 h-10">
                          <circle cx="18" cy="13" r="6" fill={item.fill} fillOpacity="0.9" />
                          <path
                            d="M5 40C5 30.6 10.8 24 18 24C25.2 24 31 30.6 31 40"
                            fill={item.fill}
                            fillOpacity="0.72"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>

                  {/* Inclusive Positioning & Transparent Photography Placeholder Status */}
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-harvest block mb-1">
                      Open to all walks of life
                    </span>
                    <p className="font-serif italic text-sm sm:text-base text-ivory-surface leading-snug">
                      Men &amp; women across ages, cultures, backgrounds &amp; faiths.
                    </p>
                    <p className="mt-1.5 text-[11px] font-sans text-ivory-surface/75">
                      Community portraits awaiting client-approved photography.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
