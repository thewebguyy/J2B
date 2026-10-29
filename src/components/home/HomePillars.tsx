import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

const PILLARS = [
  {
    number: "01",
    title: "Connection",
    subtitle: "Sister Circles & Safe Spaces",
    description:
      "Intentionally curated intimate circles where women share authentically without posturing. A community where your voice is heard, your vulnerability is respected, and your presence is welcomed unconditionally.",
    orientation: "right" as const,
    linkText: "Discover Community Circles",
    linkHref: "/community#circles",
  },
  {
    number: "02",
    title: "Growth",
    subtitle: "Personal Development & Mentorship",
    description:
      "Structured self-reflection, life architecture, and compassionate guidance to help you navigate pivotal seasons with clarity, resilience, and renewed self-trust.",
    orientation: "up" as const,
    linkText: "Explore Mentorship",
    linkHref: "/community#mentorship",
  },
  {
    number: "03",
    title: "Events",
    subtitle: "Mindful Gatherings & Retreats",
    description:
      "From sunrise reflection sessions to immersive in-person workshops and our annual sanctuary retreat, each gathering is designed to create space for mental stillness and renewed perspective.",
    orientation: "left" as const,
    linkText: "View Gatherings Calendar",
    linkHref: "/events",
  },
  {
    number: "04",
    title: "Support",
    subtitle: "Everyday Encouragement",
    description:
      "Consistent gentle check-ins, daily affirmations, and shared reminders that remind you to breathe, slow down, and trust your personal evolution.",
    orientation: "right" as const,
    linkText: "Connect With Us",
    linkHref: "/community#join",
  },
];

export const HomePillars: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Asymmetric Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <BotanicalMotif size={20} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                The Four Pillars of Becoming
              </span>
            </div>

            <h2 className="font-serif editorial-h2 font-bold text-midnight reveal-heading">
              Everything we cultivate is designed to companion your growth.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6 border-l border-gold-harvest/50">
            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
              We do not believe in superficial quick fixes. Journey 2 Better is grounded in four foundational pillars that nurture the emotional, relational, and personal life of every woman.
            </p>
          </div>
        </div>

        {/* Fluid Asymmetric 2x2 Editorial Quadrant Connected by Gold Narrative Lines */}
        <div className="relative">
          {/* Central Gold Intersection Medallion (Desktop) */}
          <div
            className="hidden lg:flex pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 size-14 rounded-full bg-ivory-canvas border border-gold-harvest/60 items-center justify-center shadow-sm"
            aria-hidden="true"
          >
            <BotanicalMotif size={22} orientation="up" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-b border-gold-harvest/40">
            
            {/* Quadrant 01: Connection (7 cols on top row) */}
            <article className="lg:col-span-7 p-8 sm:p-11 lg:p-14 border-b lg:border-b border-gold-harvest/35 lg:border-r transition-colors duration-500 hover:bg-ivory-surface/90 focus-within:bg-ivory-surface/90 group relative overflow-hidden">
              <div className="pointer-events-none absolute -right-8 -top-8 opacity-0 group-hover:opacity-60 transition-opacity duration-500" aria-hidden="true">
                <BotanicalMotif variant="watermark" size={180} />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-serif italic text-4xl sm:text-5xl font-bold text-gold-harvest">
                    {PILLARS[0].number}
                  </span>
                  <span className="h-px w-8 bg-gold-harvest/50" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-teal-living">
                    {PILLARS[0].subtitle}
                  </span>
                </div>
                <BotanicalMotif
                  size={24}
                  orientation={PILLARS[0].orientation}
                  className="group-hover:scale-110"
                />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-midnight mb-4">
                {PILLARS[0].title}
              </h3>

              <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed mb-8 max-w-xl">
                {PILLARS[0].description}
              </p>

              <Link
                href={PILLARS[0].linkHref}
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-midnight group-hover:text-teal-living transition-colors py-1"
              >
                <span className="border-b border-gold-harvest pb-0.5">{PILLARS[0].linkText}</span>
                <ArrowRight className="size-4 text-gold-harvest transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>

            {/* Quadrant 02: Growth (5 cols on top row, staggered vertical padding) */}
            <article className="lg:col-span-5 p-8 sm:p-11 lg:p-14 lg:pt-20 border-b border-gold-harvest/35 bg-ivory-surface/45 transition-colors duration-500 hover:bg-gold-subtle/45 focus-within:bg-gold-subtle/45 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-serif italic text-4xl sm:text-5xl font-bold text-teal-living">
                    {PILLARS[1].number}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-deep">
                    {PILLARS[1].subtitle}
                  </span>
                </div>
                <BotanicalMotif
                  size={24}
                  orientation={PILLARS[1].orientation}
                  className="group-hover:scale-110"
                />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-midnight mb-4">
                {PILLARS[1].title}
              </h3>

              <p className="font-sans text-base text-charcoal/85 leading-relaxed mb-8">
                {PILLARS[1].description}
              </p>

              <Link
                href={PILLARS[1].linkHref}
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-midnight group-hover:text-teal-living transition-colors py-1"
              >
                <span className="border-b border-gold-harvest pb-0.5">{PILLARS[1].linkText}</span>
                <ArrowRight className="size-4 text-gold-harvest transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>

            {/* Quadrant 03: Events (5 cols on bottom row) */}
            <article className="lg:col-span-5 p-8 sm:p-11 lg:p-14 border-b lg:border-b-0 lg:border-r border-gold-harvest/35 bg-ivory-surface/35 transition-colors duration-500 hover:bg-teal-subtle/40 focus-within:bg-teal-subtle/40 group relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-serif italic text-4xl sm:text-5xl font-bold text-midnight">
                    {PILLARS[2].number}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-teal-living">
                    {PILLARS[2].subtitle}
                  </span>
                </div>
                <BotanicalMotif
                  size={24}
                  orientation={PILLARS[2].orientation}
                  className="group-hover:scale-110"
                />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-midnight mb-4">
                {PILLARS[2].title}
              </h3>

              <p className="font-sans text-base text-charcoal/85 leading-relaxed mb-8">
                {PILLARS[2].description}
              </p>

              <Link
                href={PILLARS[2].linkHref}
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-midnight group-hover:text-teal-living transition-colors py-1"
              >
                <span className="border-b border-gold-harvest pb-0.5">{PILLARS[2].linkText}</span>
                <ArrowRight className="size-4 text-gold-harvest transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>

            {/* Quadrant 04: Support (7 cols on bottom row, staggered editorial indent) */}
            <article className="lg:col-span-7 p-8 sm:p-11 lg:p-14 lg:pl-20 transition-colors duration-500 hover:bg-ivory-surface/90 focus-within:bg-ivory-surface/90 group relative overflow-hidden">
              <div className="pointer-events-none absolute -right-6 -bottom-6 opacity-0 group-hover:opacity-60 transition-opacity duration-500" aria-hidden="true">
                <BotanicalMotif variant="watermark" size={180} orientation="left" />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-serif italic text-4xl sm:text-5xl font-bold text-gold-harvest">
                    {PILLARS[3].number}
                  </span>
                  <span className="h-px w-8 bg-gold-harvest/50" />
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-deep">
                    {PILLARS[3].subtitle}
                  </span>
                </div>
                <BotanicalMotif
                  size={24}
                  orientation={PILLARS[3].orientation}
                  className="group-hover:scale-110"
                />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-midnight mb-4">
                {PILLARS[3].title}
              </h3>

              <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed mb-8 max-w-xl">
                {PILLARS[3].description}
              </p>

              <Link
                href={PILLARS[3].linkHref}
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-midnight group-hover:text-teal-living transition-colors py-1"
              >
                <span className="border-b border-gold-harvest pb-0.5">{PILLARS[3].linkText}</span>
                <ArrowRight className="size-4 text-gold-harvest transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};
