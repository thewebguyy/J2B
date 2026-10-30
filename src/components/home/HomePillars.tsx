"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    title: "Connection",
    subtitle: "Sister Circles & Safe Spaces",
    description:
      "Intentionally curated intimate circles where women share authentically without posturing. A community where your voice is heard, your vulnerability is respected, and your presence is welcomed unconditionally.",
    detailNote:
      "Facilitated small-group circles held both online and around communal tables in London.",
  },
  {
    number: "02",
    title: "Growth",
    subtitle: "Personal Development & Mentorship",
    description:
      "Structured self-reflection, life architecture, and compassionate guidance to help you navigate pivotal seasons with clarity, resilience, and renewed self-trust.",
    detailNote:
      "Thoughtful 1-on-1 mentorship and life-design roadmapping for career, motherhood, and identity shifts.",
  },
  {
    number: "03",
    title: "Events",
    subtitle: "Mindful Gatherings & Retreats",
    description:
      "From sunrise reflection sessions to immersive in-person workshops and our annual sanctuary retreat, each gathering is designed to create space for mental stillness and renewed perspective.",
    detailNote:
      "Seasonal half-day London workshops, fortnightly morning reflections, and our flagship countryside retreat.",
  },
  {
    number: "04",
    title: "Support",
    subtitle: "Everyday Encouragement",
    description:
      "Consistent gentle check-ins, daily affirmations, and shared reminders that remind you to breathe, slow down, and trust your personal evolution.",
    detailNote:
      "Weekly written reflections, gratitude prompts, and unhurried sisterhood encouragement.",
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
              II. The Sanctuary Architecture &mdash; Four Pillars of Becoming
            </span>

            <h2 className="font-serif editorial-h2 font-bold text-ivory-canvas reveal-heading">
              Everything we cultivate is designed to companion your growth.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8 border-l border-gold-harvest/40">
            <p className="font-sans text-base sm:text-lg text-ivory-canvas/80 leading-relaxed">
              We do not believe in superficial quick fixes. Journey 2 Better is grounded in four foundational pillars that nurture the emotional, relational, and personal life of every woman.
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
                      {pillar.subtitle.split("&")[0]}
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
                    The Complete Ecosystem
                  </span>
                  <p className="font-sans text-xs text-ivory-canvas/75">
                    Circles, mentorship, and seasonal gatherings under one roof.
                  </p>
                </div>
              </div>

              <Link
                href="/community"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-gold-harvest hover:bg-gold-light text-midnight-deep px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex-shrink-0 shadow-sm"
              >
                <span>Explore Community &amp; Circles</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
