"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { j2bContent } from "@/content/j2b";
import { MotionReveal } from "@/components/common/MotionReveal";

const PILLARS = j2bContent.pillars;

export const HomePillars: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const selectTab = (index: number) => {
    setActiveTab(index);
    tabRefs.current[index]?.focus();
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-midnight-deep text-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-10 lg:px-14">
        
        {/* Editorial Chapter Header: Inverted Warm Cream on Deep Midnight Teal */}
        <MotionReveal y={16} duration={0.65}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12 sm:mb-16 pb-8 border-b border-ivory-canvas/15">
            <div className="lg:col-span-7">
              <span className="font-serif italic text-base sm:text-lg text-gold-harvest block mb-2.5">
                Our community pillars
              </span>

              <h2 className="font-serif editorial-h2 font-bold text-ivory-canvas">
                Five pillars for shared growth.
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pl-8 border-l border-gold-harvest/40">
              <p className="font-sans text-base sm:text-lg text-ivory-canvas/80 leading-relaxed">
                No quick fixes. Just steady, practical support for your friendships, your growth and your wellbeing.
              </p>
            </div>
          </div>
        </MotionReveal>

        {/* Interactive Editorial Showcase */}
        <MotionReveal y={18} duration={0.7} delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">

            {/* Left: Interactive Pillar Selector Tabs (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-1.5 sm:space-y-2" role="tablist" aria-orientation="vertical" aria-label="Community pillars">
              {PILLARS.map((pillar, idx) => {
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={pillar.title}
                    type="button"
                    role="tab"
                    id={`pillar-tab-${pillar.id}`}
                    aria-controls={`pillar-panel-${pillar.id}`}
                    aria-selected={isSelected}
                    tabIndex={isSelected ? 0 : -1}
                    ref={(element) => { tabRefs.current[idx] = element; }}
                    onKeyDown={(event) => {
                      const next = event.key === "ArrowDown" ? (idx + 1) % PILLARS.length
                        : event.key === "ArrowUp" ? (idx - 1 + PILLARS.length) % PILLARS.length
                        : event.key === "Home" ? 0 : event.key === "End" ? PILLARS.length - 1 : null;
                      if (next !== null) { event.preventDefault(); selectTab(next); }
                    }}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-3.5 sm:p-5 rounded-xl transition-all duration-200 border-l-2 ${
                      isSelected
                        ? "bg-ivory-canvas/15 border-gold-harvest text-ivory-canvas shadow-sm"
                        : "bg-transparent border-ivory-canvas/10 text-ivory-canvas/75 hover:bg-ivory-canvas/5 hover:text-ivory-canvas"
                    }`}
                  >
                    <div className="flex items-baseline justify-between mb-0.5 sm:mb-1">
                      <div className="flex items-baseline gap-2.5 sm:gap-3">
                        <span className="font-serif italic text-lg sm:text-xl text-gold-harvest font-bold">
                          {pillar.number}
                        </span>
                        <span className="font-serif text-base sm:text-xl lg:text-2xl font-bold">
                          {pillar.title}
                        </span>
                      </div>
                    </div>
                    <p className="hidden sm:block font-sans text-xs sm:text-sm text-ivory-canvas/75 line-clamp-2 pl-8">
                      {pillar.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right: Active Pillar Editorial Spread + Atmospheric Still-Life Detail (7 cols) */}
            <div role="tabpanel" id={`pillar-panel-${PILLARS[activeTab].id}`} aria-labelledby={`pillar-tab-${PILLARS[activeTab].id}`} tabIndex={0} className="lg:col-span-7 min-w-0 rounded-2xl bg-midnight/80 border border-gold-harvest/25 p-6 sm:p-9 lg:p-11 flex flex-col justify-between relative overflow-hidden">
              <div key={PILLARS[activeTab].id} className="animate-panel-enter">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-ivory-canvas/15">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-gold-harvest font-semibold block mb-1">
                      Pillar {PILLARS[activeTab].number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                      {PILLARS[activeTab].title}
                    </h3>
                  </div>
                  <span className="font-serif italic text-4xl sm:text-5xl text-gold-harvest/25 font-bold select-none">
                    {PILLARS[activeTab].number}
                  </span>
                </div>

                <p className="font-sans text-base sm:text-lg text-ivory-canvas/90 leading-relaxed mb-6">
                  {PILLARS[activeTab].description}
                </p>

                <div className="p-4 sm:p-5 rounded-xl bg-ivory-canvas/5 border-l-2 border-gold-harvest/70 mb-6">
                  <p className="font-serif italic text-sm sm:text-base text-ivory-canvas/90">
                    {j2bContent.communityGuidelines[1]}
                  </p>
                </div>
              </div>

              {/* Editorial Photography Accent & Single Consolidated Pathway CTA */}
              <div className="pt-6 border-t border-ivory-canvas/15 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="flex items-center gap-3.5">
                  <div className="relative size-12 sm:size-14 rounded-lg overflow-hidden border border-gold-harvest/40 flex-shrink-0">
                    <Image
                      src="/images/journal-stillness.jpg"
                      alt="Tactile journal and stoneware mug"
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-gold-harvest font-semibold block">
                      All in one place
                    </span>
                    <p className="font-sans text-xs text-ivory-canvas/75">
                      Life lessons, shared experiences and encouragement.
                    </p>
                  </div>
                </div>

                <Link
                  href="/community"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-harvest hover:bg-gold-light text-midnight-deep px-6 py-3.5 min-h-[46px] text-xs font-semibold uppercase tracking-wider transition-all duration-200 text-center shadow-sm whitespace-nowrap flex-shrink-0"
                >
                  <span>Explore Community</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

