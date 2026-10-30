"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    title: "Connection",
    subtitle: "Sister circles",
    description:
      "Small groups where women talk openly and listen without judging. Share as much or as little as you like.",
    detailNote:
      "Circles meet online and in person in London.",
  },
  {
    number: "02",
    title: "Growth",
    subtitle: "Mentoring",
    description:
      "One-to-one support to help you think through a big decision or a new chapter — and keep going when it gets hard.",
    detailNote:
      "Helpful for career changes, becoming a mum, or working out what you want next.",
  },
  {
    number: "03",
    title: "Events",
    subtitle: "Gatherings & retreats",
    description:
      "Online morning sessions, workshops in London and a yearly retreat in the countryside. Time to slow down and think.",
    detailNote:
      "Have a look at the events page to see what's coming up.",
  },
  {
    number: "04",
    title: "Support",
    subtitle: "Everyday encouragement",
    description:
      "Regular check-ins, reflections and kind reminders to help you through busy or difficult weeks.",
    detailNote:
      "Small, regular bits of support — not just the occasional meet-up.",
  },
];

export const HomePillars: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="relative py-20 sm:py-28 bg-[#123530] text-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        
        {/* Editorial Chapter Header — Inverted Warm Cream on Deep Forest Teal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-20 pb-8 border-b border-ivory-canvas/15">
          <div className="lg:col-span-7">
            <span className="font-serif italic text-base sm:text-lg text-gold-harvest block mb-3">
              What we offer
            </span>

            <h2 className="font-serif editorial-h2 font-bold text-ivory-canvas reveal-heading">
              Four ways we support you.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8 border-l border-gold-harvest/40">
            <p className="font-sans text-base sm:text-lg text-ivory-canvas/80 leading-relaxed">
              No quick fixes. Just steady, practical support for your friendships, your growth and your wellbeing.
            </p>
          </div>
        </div>

        {/* Interactive Editorial Showcase & Horizontal Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Interactive Pillar Selector Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2" role="tablist" aria-label="Four Pillars of Becoming">
            {PILLARS.map((pillar, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={pillar.title}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(idx)}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`w-full text-left p-5 sm:p-6 transition-all duration-300 border-l-2 ${
                    isSelected
                      ? "bg-ivory-canvas/10 border-gold-harvest text-ivory-canvas shadow-sm"
                      : "bg-transparent border-ivory-canvas/15 text-ivory-canvas/65 hover:bg-ivory-canvas/5 hover:text-ivory-canvas"
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif italic text-2xl text-gold-harvest font-bold">
                        {pillar.number}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold">
                        {pillar.title}
                      </h3>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-gold-light font-semibold">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-ivory-canvas/75 line-clamp-2 pl-9">
                    {pillar.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Active Pillar Editorial Spread + Atmospheric Still-Life Detail (7 cols) */}
          <div className="lg:col-span-7 bg-[#0D2824] border border-gold-harvest/30 p-7 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-ivory-canvas/15">
                <div>
                  <span className="text-xs uppercase tracking-[0.22em] text-gold-harvest font-semibold block mb-1">
                    Pillar {PILLARS[activeTab].number} &bull; {PILLARS[activeTab].subtitle}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                    {PILLARS[activeTab].title}
                  </h3>
                </div>
                <span className="font-serif italic text-5xl sm:text-6xl text-gold-harvest/25 font-bold select-none">
                  {PILLARS[activeTab].number}
                </span>
              </div>

              <p className="font-sans text-base sm:text-lg text-ivory-canvas/90 leading-relaxed mb-6">
                {PILLARS[activeTab].description}
              </p>

              <div className="p-4 sm:p-5 bg-ivory-canvas/5 border-l-2 border-gold-harvest/70 mb-8">
                <p className="font-serif italic text-sm sm:text-base text-ivory-canvas/90">
                  {PILLARS[activeTab].detailNote}
                </p>
              </div>
            </div>

            {/* Editorial Photography Accent & Single Consolidated Pathway CTA */}
            <div className="pt-6 border-t border-ivory-canvas/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative size-14 overflow-hidden border border-gold-harvest/40 flex-shrink-0">
                  <Image
                    src="/images/journal-stillness.jpg"
                    alt="Tactile journal and stoneware mug"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-gold-harvest font-semibold block">
                    All in one place
                  </span>
                  <p className="font-sans text-xs text-ivory-canvas/75">
                    Circles, mentoring and gatherings — pick what suits you.
                  </p>
                </div>
              </div>

              <Link
                href="/community"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gold-harvest hover:bg-gold-light text-midnight-deep px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex-shrink-0 shadow-sm"
              >
                <span>See How the Community Works</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
