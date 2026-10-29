import React from "react";
import { ArrowRight } from "lucide-react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

const EVENTS_DATA = [
  {
    id: "rise-reflect",
    chapter: "Chapter I",
    number: "01",
    title: "Rise & Reflect Morning Circle",
    format: "Virtual Gathering • Zoom",
    cadence: "Recurring Morning Rhythm",
    description:
      "Start your morning with mental clarity, gentle guided breathwork, and intentional journaling prompts. A quiet sanctuary to ground your spirit before the noise and responsibilities of the day begin.",
    features: [
      "Guided grounding reflection & breathwork",
      "Curated journaling prompts on self-trust and courage",
      "Intimate breakout conversations with fellow sisters",
      "Join from the quiet comfort of your home",
    ],
    ctaText: "Register Interest for Next Circle",
    ctaHref: "mailto:hello@journey2better.com?subject=Rise%20and%20Reflect%20Enquiry",
  },
  {
    id: "better-together",
    chapter: "Chapter II",
    number: "02",
    title: "Better Together Workshop",
    format: "In-Person Intensive • Central London",
    cadence: "Seasonal Intensive Sessions",
    description:
      "A dedicated half-day or full-day in-person workshop focusing on real life architecture: establishing healthy boundaries, overcoming decision fatigue, and mapping your personal development with practical tools.",
    features: [
      "Interactive life-design and boundary exercises",
      "Deep group discussions and shared sister wisdom",
      "Nourishing communal lunch and herbal teas included",
      "Beautiful central London sanctuary venue",
    ],
    ctaText: "Enquire About London Workshop",
    ctaHref: "mailto:hello@journey2better.com?subject=London%20Workshop%20Enquiry",
  },
  {
    id: "sisterhood-retreat",
    chapter: "Chapter III",
    number: "03",
    title: "Annual Sisterhood Retreat",
    format: "Immersive Weekend • UK Countryside Sanctuary",
    cadence: "Annual Flagship Gathering",
    description:
      "Our most transformative gathering of the year. Step away from daily duties and immerse yourself in a tranquil countryside estate for three days of rest, mindful movement, evening fireside reflections, and lifelong sisterhood.",
    features: [
      "2 nights luxury countryside sanctuary accommodation",
      "All wholesome farm-to-table meals and beverages",
      "Daily guided reflection circles and wellness practices",
      "Dedicated whitespace for solitude, journaling, and nature walks",
    ],
    ctaText: "Enquire About Retreat Dates",
    ctaHref: "mailto:hello@journey2better.com?subject=Annual%20Retreat%20Enquiry",
  },
];

export const EventsCards: React.FC = () => {
  return (
    <section id="gatherings" className="relative pt-16 sm:pt-24 pb-12 bg-ivory-surface border-t border-ivory-border overflow-hidden">
      {/* Chapter Transition */}
      <PathRibbon variant="chapter-divider" className="-mt-10 mb-10" />

      {/* Section Intro */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <BotanicalMotif size={20} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                Curated Gatherings
              </span>
            </div>

            <h2 className="font-serif editorial-h2 font-bold text-midnight reveal-heading">
              Spaces designed to pause, reflect, and renew.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6 border-l border-gold-harvest/50">
            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
              We offer both accessible digital morning circles and deeply restorative in-person experiences so that every sister can find her cadence of connection.
            </p>
          </div>
        </div>
      </div>

      {/* Immersive Editorial Chapter Bands connected by a vertical golden narrative thread */}
      <div className="relative">
        {/* Continuous Vertical Golden Narrative Thread Spine */}
        <div
          className="hidden lg:block pointer-events-none absolute left-10 xl:left-16 top-0 bottom-0 z-20"
          aria-hidden="true"
        >
          <PathRibbon variant="vertical-spine" className="h-full" />
        </div>

        {/* CHAPTER I: Rise & Reflect Morning Circle (Warm Ivory Sanctuary Band) */}
        <article
          id={EVENTS_DATA[0].id}
          className="relative py-16 sm:py-24 bg-ivory-canvas border-t border-ivory-border"
        >
          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:pl-28 lg:pr-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* Left Editorial Narrative (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-serif italic text-3xl font-bold text-gold-harvest">
                    {EVENTS_DATA[0].number}
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                    {EVENTS_DATA[0].chapter} &bull; {EVENTS_DATA[0].format}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-midnight mb-5 leading-tight">
                  {EVENTS_DATA[0].title}
                </h3>

                <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed mb-8 max-w-2xl">
                  {EVENTS_DATA[0].description}
                </p>

                <a
                  href={EVENTS_DATA[0].ctaHref}
                  className="inline-flex items-center gap-3 rounded-full bg-midnight hover:bg-midnight-deep text-ivory-canvas px-7 py-3.5 text-xs font-semibold uppercase tracking-wider border border-gold-harvest/40 transition-all duration-300 shadow-xs"
                >
                  <span>{EVENTS_DATA[0].ctaText}</span>
                  <ArrowRight className="size-3.5 text-gold-harvest" />
                </a>
              </div>

              {/* Right Experience Elements Ledger (5 cols) */}
              <div className="lg:col-span-5 lg:mt-4 pl-6 sm:pl-8 border-l-2 border-teal-living/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-midnight">
                    Experience Elements
                  </span>
                  <BotanicalMotif size={18} />
                </div>
                <p className="font-serif italic text-sm text-teal-living mb-5">
                  {EVENTS_DATA[0].cadence}
                </p>
                <ul className="space-y-3.5 font-sans text-sm sm:text-base text-charcoal/85">
                  {EVENTS_DATA[0].features.map((feature, i) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="font-serif italic text-gold-deep font-bold text-xs mt-1">
                        0{i + 1}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </article>

        {/* CHAPTER II: Better Together Workshop (Deep-Teal Background Inversion Band) */}
        <article
          id={EVENTS_DATA[1].id}
          className="relative py-20 sm:py-28 bg-midnight text-ivory-surface overflow-hidden"
        >
          {/* Botanical Watermark Accent */}
          <div className="pointer-events-none absolute right-0 top-0 opacity-25" aria-hidden="true">
            <BotanicalMotif variant="watermark" size={320} orientation="left" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:pl-28 lg:pr-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Experience Architecture Column (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1 bg-midnight-deep/80 p-7 sm:p-9 border-l-2 border-gold-harvest">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-ivory-surface/15">
                  <h4 className="font-serif italic text-lg font-bold text-gold-harvest">
                    Experience Elements
                  </h4>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-ivory-surface/70">
                    {EVENTS_DATA[1].cadence}
                  </span>
                </div>
                <ul className="space-y-4 font-sans text-sm sm:text-base text-ivory-surface/90">
                  {EVENTS_DATA[1].features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="inline-block size-1.5 rounded-full bg-gold-harvest mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Editorial Chapter Lead (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-serif italic text-3xl sm:text-4xl font-bold text-gold-harvest">
                    {EVENTS_DATA[1].number}
                  </span>
                  <span className="h-px w-8 bg-gold-harvest/50" />
                  <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-light">
                    {EVENTS_DATA[1].chapter} &bull; {EVENTS_DATA[1].format}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-white mb-5 leading-tight">
                  {EVENTS_DATA[1].title}
                </h3>

                <p className="font-sans text-base sm:text-lg text-ivory-surface/85 leading-relaxed mb-8 max-w-2xl">
                  {EVENTS_DATA[1].description}
                </p>

                <a
                  href={EVENTS_DATA[1].ctaHref}
                  className="inline-flex items-center gap-3 rounded-full bg-gold-harvest hover:bg-gold-light text-midnight-deep px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  <span>{EVENTS_DATA[1].ctaText}</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </div>

            </div>
          </div>
        </article>

        {/* CHAPTER III: Annual Sisterhood Retreat (Deepest Sanctuary Inversion Spread) */}
        <article
          id={EVENTS_DATA[2].id}
          className="relative py-20 sm:py-28 bg-midnight-deep text-ivory-surface border-t border-gold-harvest/25 overflow-hidden"
        >
          {/* Ambient Horizon Ribbon */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 opacity-25" aria-hidden="true">
            <PathRibbon variant="soft-horizon" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:pl-28 lg:pr-12">
            {/* Editorial Chapter Header */}
            <div className="max-w-3xl mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-serif italic text-3xl sm:text-4xl font-bold text-gold-harvest">
                  {EVENTS_DATA[2].number}
                </span>
                <BotanicalMotif size={20} orientation="up" />
                <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-harvest">
                  {EVENTS_DATA[2].chapter} &bull; {EVENTS_DATA[2].format}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                {EVENTS_DATA[2].title}
              </h3>

              <p className="font-sans text-lg sm:text-xl text-ivory-surface/85 leading-relaxed">
                {EVENTS_DATA[2].description}
              </p>
            </div>

            {/* Horizontal 4-Column Retreat Experience Spread + Action */}
            <div className="pt-8 border-t border-ivory-surface/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h4 className="text-xs uppercase tracking-[0.22em] text-gold-harvest font-semibold mb-5">
                  Experience Elements &bull; {EVENTS_DATA[2].cadence}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {EVENTS_DATA[2].features.map((feature, i) => (
                    <div key={feature} className="pl-4 border-l border-gold-harvest/40">
                      <span className="font-serif italic text-xs text-gold-harvest block mb-1">
                        Retreat Element 0{i + 1}
                      </span>
                      <p className="font-sans text-sm sm:text-base text-ivory-surface/90 leading-snug">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <a
                  href={EVENTS_DATA[2].ctaHref}
                  className="inline-flex items-center gap-3 rounded-full bg-gold-harvest hover:bg-gold-light text-midnight-deep px-8 py-4 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md"
                >
                  <span>{EVENTS_DATA[2].ctaText}</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
