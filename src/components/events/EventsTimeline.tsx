"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

const RHYTHM_STAGES = [
  {
    id: "morning-hearth",
    number: "01",
    phase: "Weekly & Fortnightly",
    title: "The Morning Hearth",
    subtitle: "Rise & Reflect Virtual Circles",
    description:
      "Consistent, gentle morning check-ins to anchor your thoughts, process weekly intentions, and maintain sisterhood connections between major milestones.",
    tag: "Online Sanctuary",
    rhythmNotes:
      "Held online via Zoom so sisters across the UK can gather quietly from home before the day begins.",
  },
  {
    id: "london-intensive",
    number: "02",
    phase: "Quarterly & Seasonal",
    title: "The London Intensive",
    subtitle: "Better Together Workshops",
    description:
      "Deep, focused half-day sessions in quiet Central London spaces. Work through structured personal development roadmaps, clarify life decisions, and share communal lunch.",
    tag: "In-Person London",
    rhythmNotes:
      "Hosted seasonally in intimate Central London sanctuaries with capped attendance and nourishing shared meals.",
  },
  {
    id: "sacred-pause",
    number: "03",
    phase: "Annual Flagship",
    title: "The Sacred Pause",
    subtitle: "Annual Sisterhood Retreat",
    description:
      "An unhurried weekend in the English countryside. Step away from routine for quiet walks, deep evening circles, restorative wellness, and lifelong bonds.",
    tag: "UK Countryside Estate",
    rhythmNotes:
      "Our annual multi-day countryside sanctuary gathering — dates and details shared directly upon enquiry.",
  },
];

export const EventsTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [expandedDetail, setExpandedDetail] = useState<number | null>(0);

  return (
    <section id="rhythm" className="relative py-20 sm:py-28 bg-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Asymmetric Section Header + Seasonal Wheel Indicator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <BotanicalMotif size={20} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                Gathering Rhythm
              </span>
            </div>

            <h2 className="font-serif editorial-h2 font-bold text-midnight mb-4 reveal-heading">
              The Path of Becoming in practice.
            </h2>

            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed max-w-2xl">
              Our gatherings are not isolated events. They form an intentional, recurring rhythm that supports your growth throughout the seasons of the year.
            </p>
          </div>

          {/* Cyclical Wheel of Becoming SVG Indicator */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="inline-flex items-center gap-5 bg-ivory-surface/80 border border-gold-harvest/40 px-6 py-4">
              <svg
                viewBox="0 0 88 88"
                className="size-16 flex-shrink-0 overflow-visible"
                aria-hidden="true"
              >
                <circle
                  cx="44"
                  cy="44"
                  r="34"
                  fill="none"
                  stroke="#E9E1C9"
                  strokeWidth="1.5"
                />
                <circle
                  cx="44"
                  cy="44"
                  r="34"
                  fill="none"
                  stroke="#D5A044"
                  strokeWidth="2.2"
                  strokeDasharray="72 142"
                  strokeLinecap="round"
                  style={{
                    transformOrigin: "44px 44px",
                    transform: `rotate(${activeStage * 120 - 90}deg)`,
                    transition: "transform 500ms cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                />
                {/* 3 Rhythm Nodes on the Wheel */}
                <circle
                  cx="44"
                  cy="10"
                  r={activeStage === 0 ? "5.5" : "3.5"}
                  fill={activeStage === 0 ? "#D5A044" : "#036E76"}
                  className="transition-all duration-300"
                />
                <circle
                  cx="73.4"
                  cy="61"
                  r={activeStage === 1 ? "5.5" : "3.5"}
                  fill={activeStage === 1 ? "#D5A044" : "#036E76"}
                  className="transition-all duration-300"
                />
                <circle
                  cx="14.6"
                  cy="61"
                  r={activeStage === 2 ? "5.5" : "3.5"}
                  fill={activeStage === 2 ? "#D5A044" : "#036E76"}
                  className="transition-all duration-300"
                />
                <circle cx="44" cy="44" r="3" fill="#02404D" />
              </svg>

              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-teal-living block mb-1">
                  Cyclical Cadence
                </span>
                <p className="font-serif italic text-base font-bold text-midnight">
                  {RHYTHM_STAGES[activeStage].phase}
                </p>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">
                  {RHYTHM_STAGES[activeStage].tag}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Connected Temporal Timeline Spine */}
        <div className="relative">
          {/* Desktop Flowing Golden Narrative Line Connecting All 3 Rhythm Stages */}
          <div
            className="hidden md:block pointer-events-none absolute left-0 right-0 top-10 h-16"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1200 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <path
                d="M40 32C240 6 420 58 600 32C780 6 960 58 1160 32"
                stroke="#E9E1C9"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M40 32C240 6 420 58 600 32C780 6 960 58 1160 32"
                stroke="#D5A044"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="path-ribbon path-draw-enter"
              />
            </svg>
          </div>

          {/* Mobile Vertical Golden Spine */}
          <div
            className="md:hidden pointer-events-none absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-teal-living via-gold-harvest to-midnight"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 relative z-10">
            {RHYTHM_STAGES.map((stage, idx) => {
              const isSelected = activeStage === idx;
              const isExpanded = expandedDetail === idx;

              return (
                <article
                  key={stage.id}
                  onMouseEnter={() => setActiveStage(idx)}
                  onFocus={() => setActiveStage(idx)}
                  className={`md:col-span-4 pl-12 md:pl-0 relative transition-all duration-400 ${
                    idx === 1 ? "md:mt-8" : idx === 2 ? "md:mt-16" : ""
                  }`}
                >
                  {/* Timeline Node Marker */}
                  <div className="flex items-center gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setActiveStage(idx)}
                      aria-label={`Highlight ${stage.title} (${stage.phase})`}
                      className={`absolute left-0 md:static size-9 md:size-12 rounded-full flex items-center justify-center font-serif italic text-sm md:text-lg font-bold border-2 transition-all duration-300 ${
                        isSelected
                          ? "bg-midnight-deep text-gold-harvest border-gold-harvest shadow-[0_0_20px_rgba(213,160,68,0.4)] scale-105"
                          : "bg-ivory-canvas text-midnight border-gold-harvest/50 hover:border-gold-harvest"
                      }`}
                    >
                      {stage.number}
                    </button>

                    <div className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-teal-living">
                        {stage.phase}
                      </span>
                      <span className="text-xs font-sans text-muted-foreground">
                        {stage.tag}
                      </span>
                    </div>
                  </div>

                  {/* Editorial Stage Content */}
                  <div
                    className={`p-6 sm:p-8 border-l-2 transition-all duration-400 ${
                      isSelected
                        ? "bg-ivory-surface border-gold-harvest shadow-[0_12px_32px_-12px_rgba(2,64,77,0.1)]"
                        : "bg-ivory-canvas/60 border-ivory-border hover:bg-ivory-surface/70"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-sans text-xs uppercase tracking-[0.18em] text-gold-deep font-semibold">
                        {stage.subtitle}
                      </p>
                      <BotanicalMotif size={16} />
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mb-3">
                      {stage.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed mb-5">
                      {stage.description}
                    </p>

                    {/* Smooth Accordion Expansion for Gathering Cadence Note */}
                    <div className="pt-4 border-t border-ivory-border/80">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedDetail(isExpanded ? null : idx)
                        }
                        aria-expanded={isExpanded}
                        className="w-full flex items-center justify-between text-left text-xs uppercase tracking-[0.18em] font-semibold text-midnight hover:text-teal-living transition-colors py-1"
                      >
                        <span>Format &amp; Cadence Note</span>
                        <ChevronDown
                          className={`size-4 text-gold-harvest transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isExpanded
                            ? "grid-rows-[1fr] opacity-100 mt-3"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                            {stage.rhythmNotes}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
