import React from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

const OFFERINGS = [
  {
    id: "circles",
    number: "01",
    title: "Sister Circles",
    eyebrow: "Small group support",
    description:
      "Small groups that meet regularly to catch up, talk through hard times and support each other. What's shared in the circle stays in the circle.",
    highlights: [
      "Small groups with a host",
      "Private and non-judgemental",
      "Themes like balance, identity and confidence",
      "Online and in London",
    ],
  },
  {
    id: "mentorship",
    number: "02",
    title: "One-to-One Mentoring",
    eyebrow: "Personal support",
    description:
      "For women going through a big change at home, in a relationship or at work. A mentor listens, helps you get clear on what you want and keeps you on track.",
    highlights: [
      "One-to-one conversations",
      "Help planning your next steps",
      "Check-ins between sessions",
      "Practical help with confidence and boundaries",
    ],
  },
  {
    id: "encouragement",
    number: "03",
    title: "Everyday Encouragement",
    eyebrow: "Regular encouragement",
    description:
      "A steady bit of support in your week — reflections, affirmations and prompts for when life feels rushed or too much.",
    highlights: [
      "Weekly reflections",
      "Gratitude and mindset prompts",
      "Encouragement from other members",
      "A reminder to pause and breathe",
    ],
  },
];

export const CommunityOfferings: React.FC = () => {
  return (
    <section id="offerings" className="relative py-20 sm:py-28 bg-ivory-surface border-y border-ivory-border overflow-hidden">
      {/* Chapter Transition */}
      <PathRibbon variant="chapter-divider" className="-mt-12 mb-10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Asymmetric Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <BotanicalMotif size={20} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                What we offer
              </span>
            </div>

            <h2 className="font-serif editorial-h2 font-bold text-midnight reveal-heading">
              Three ways to get support.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6 border-l border-gold-harvest/50">
            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
              Join a circle, get one-to-one mentoring, or just receive regular encouragement — whatever fits where you are right now.
            </p>
          </div>
        </div>

        {/* Spread 01: Sister Circles — Flush-left Oversized Gold Numeral & Offset Ledger */}
        <article
          id={OFFERINGS[0].id}
          className="relative py-12 sm:py-16 border-t border-ivory-border/90"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Column 1: Bespoke Gold Numeral & Botanical Anchor */}
            <div className="lg:col-span-2 flex lg:flex-col items-baseline lg:items-start justify-between">
              <span className="font-serif italic text-5xl sm:text-6xl lg:text-7xl font-bold text-gold-harvest/85 leading-none select-none">
                {OFFERINGS[0].number}
              </span>
              <div className="mt-4 hidden lg:flex items-center gap-2">
                <BotanicalMotif size={28} orientation="right" />
                <span className="h-12 w-px bg-gold-harvest/40 block ml-2" />
              </div>
            </div>

            {/* Column 2: Primary Editorial Prose */}
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-teal-living block mb-3">
                {OFFERINGS[0].eyebrow}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-midnight mb-5 leading-tight">
                {OFFERINGS[0].title}
              </h3>
              <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
                {OFFERINGS[0].description}
              </p>
            </div>

            {/* Column 3: Offset Editorial Ledger */}
            <div className="lg:col-span-5 lg:mt-6 bg-ivory-canvas/90 border-l-2 border-teal-living p-6 sm:p-8 tactile-surface">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-ivory-border">
                <h4 className="font-serif italic text-lg font-bold text-midnight">
                  What to expect
                </h4>
                <BotanicalMotif size={18} />
              </div>
              <ul className="space-y-3.5 font-sans text-sm sm:text-base text-charcoal/85">
                {OFFERINGS[0].highlights.map((item, idx) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="font-serif italic text-gold-deep font-bold text-sm mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* Spread 02: 1-on-1 Mentorship — Deep Sanctuary Editorial Band with Right-Aligned Architecture */}
        <article
          id={OFFERINGS[1].id}
          className="relative my-8 sm:my-12 bg-midnight-deep text-ivory-surface p-8 sm:p-12 lg:p-16 border-l-4 border-gold-harvest overflow-hidden"
        >
          {/* Subtle Botanical Watermark on Right */}
          <div className="pointer-events-none absolute -right-10 -bottom-10 opacity-30" aria-hidden="true">
            <BotanicalMotif variant="watermark" size={260} orientation="left" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Structured Mentorship Architecture List */}
            <div className="lg:col-span-5 order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-ivory-surface/15 pt-8 lg:pt-0 lg:pr-10">
              <h4 className="text-xs uppercase tracking-[0.22em] text-gold-harvest font-semibold mb-6">
                What to expect
              </h4>
              <ul className="space-y-4 font-sans text-sm sm:text-base text-ivory-surface/90">
                {OFFERINGS[1].highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 pb-3 border-b border-ivory-surface/10 last:border-none last:pb-0">
                    <span className="inline-block size-2 rounded-full bg-gold-harvest mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Expressive Editorial Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-serif italic text-4xl sm:text-5xl font-bold text-gold-harvest">
                  {OFFERINGS[1].number}
                </span>
                <span className="h-px w-12 bg-gold-harvest/50" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-light">
                  {OFFERINGS[1].eyebrow}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white mb-5 leading-tight">
                {OFFERINGS[1].title}
              </h3>

              <p className="font-sans text-base sm:text-lg text-ivory-surface/85 leading-relaxed max-w-2xl">
                {OFFERINGS[1].description}
              </p>
            </div>
          </div>
        </article>

        {/* Spread 03: Everyday Encouragement — Open Two-Tone Editorial Essay & Horizontal Rhythm */}
        <article
          id={OFFERINGS[2].id}
          className="relative pt-12 sm:pt-16 pb-4 border-t border-ivory-border/90"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-serif italic text-4xl sm:text-5xl font-bold text-teal-living">
                  {OFFERINGS[2].number}
                </span>
                <BotanicalMotif size={22} orientation="up" />
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-midnight">
                  {OFFERINGS[2].eyebrow}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-midnight mb-5 leading-tight">
                {OFFERINGS[2].title}
              </h3>

              <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
                {OFFERINGS[2].description}
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="mb-3 flex items-center justify-between">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-teal-living">
                  What you&apos;ll get
                </h4>
                <span className="h-px flex-1 bg-gold-harvest/40 ml-4" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {OFFERINGS[2].highlights.map((item, idx) => (
                  <div
                    key={item}
                    className="p-5 bg-ivory-canvas border-t-2 border-gold-harvest/60 tactile-surface"
                  >
                    <span className="font-serif italic text-xs text-teal-living font-semibold block mb-1.5">
                      0{idx + 1}
                    </span>
                    <p className="font-sans text-sm sm:text-base text-midnight font-medium leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
};
