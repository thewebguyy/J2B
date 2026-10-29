import React from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

const RHYTHM_STAGES = [
  {
    phase: "Weekly & Fortnightly",
    title: "The Morning Hearth",
    subtitle: "Rise & Reflect Virtual Circles",
    description:
      "Consistent, gentle morning check-ins to anchor your thoughts, process weekly intentions, and maintain sisterhood connections between major milestones.",
    tag: "Online Sanctuary",
    accent: "teal",
  },
  {
    phase: "Quarterly & Seasonal",
    title: "The London Intensive",
    subtitle: "Better Together Workshops",
    description:
      "Deep, focused half-day sessions in quiet Central London spaces. Work through structured personal development roadmaps, clarify life decisions, and share communal lunch.",
    tag: "In-Person London",
    accent: "gold",
  },
  {
    phase: "Annual Flagship",
    title: "The Sacred Pause",
    subtitle: "Annual Sisterhood Retreat",
    description:
      "An unhurried weekend in the English countryside. Step away from routine for quiet walks, deep evening circles, restorative wellness, and lifelong bonds.",
    tag: "UK Countryside Estate",
    accent: "midnight",
  },
];

export const EventsTimeline: React.FC = () => {
  return (
    <section id="rhythm" className="relative py-24 sm:py-32 bg-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-living">
              Gathering Rhythm
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
            The Path of Becoming in practice.
          </h2>

          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
            Our gatherings are not isolated events. They form an intentional, recurring rhythm that supports your growth throughout the seasons of the year.
          </p>
        </div>

        {/* 3-Stage Gathering Cadence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RHYTHM_STAGES.map((stage, idx) => {
            const isGold = stage.accent === "gold";
            const isMidnight = stage.accent === "midnight";

            return (
              <div
                key={stage.title}
                className={`rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                  isGold
                    ? "bg-gradient-to-br from-ivory-surface to-gold-subtle/30 border-gold-harvest/50"
                    : isMidnight
                    ? "bg-ivory-surface border-midnight/30"
                    : "bg-ivory-surface border-ivory-border"
                } shadow-sm hover:shadow-md`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest font-bold text-teal-living">
                      {stage.phase}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-ivory-canvas border border-ivory-border text-midnight">
                      {stage.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-midnight mb-1">
                    {stage.title}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-wider text-gold-harvest font-semibold mb-4">
                    {stage.subtitle}
                  </p>

                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-ivory-border/80 flex items-center gap-2 text-xs text-muted-foreground">
                  <BotanicalMotif size={16} />
                  <span>Cadence of intentional sisterhood</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
