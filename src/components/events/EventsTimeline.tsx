import React from "react";
import { Sparkles, Calendar, MapPin, Video } from "lucide-react";

interface CycleItem {
  rhythm: string;
  name: string;
  cadence: string;
  format: string;
  icon: React.ElementType;
  description: string;
}

const CYCLE: CycleItem[] = [
  {
    rhythm: "Monthly",
    name: "Rise & Reflect Circle",
    cadence: "First Saturday of Every Month • 9:00am",
    format: "Online Virtual Gathering",
    icon: Video,
    description:
      "A 60-minute grounding container for honest journaling and shared intentions.",
  },
  {
    rhythm: "Quarterly",
    name: "Better Together Workshop",
    cadence: "Four Saturdays Per Year",
    format: "In-Person • Central London",
    icon: MapPin,
    description:
      "Intensive half-day workshops on confidence, personal boundaries, and life design.",
  },
  {
    rhythm: "Annual",
    name: "Sisterhood Retreat",
    cadence: "Announced Each Spring",
    format: "Two Nights Away • UK Countryside",
    icon: Sparkles,
    description:
      "A deeply restorative weekend away for rest, worship, deep laughter, and long nature walks.",
  },
];

export const EventsTimeline: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-blush/30 border-y border-border/80 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="size-2 rounded-full bg-berry" />
            <span className="text-xs font-semibold uppercase tracking-widest text-plum">
              The Annual Rhythm
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum font-normal tracking-tight leading-[1.1] text-balance">
            Our rhythm of{" "}
            <span className="font-serif italic text-berry font-light">
              gathering.
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-foreground/80 mt-6 leading-relaxed">
            Designed to sustain you continuously: from monthly virtual check-ins
            to quarterly London intensives and our restorative spring retreat.
          </p>
        </div>

        {/* 3-Cycle Constellation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CYCLE.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.rhythm}
                className="rounded-3xl p-8 bg-white/90 border border-border shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-berry font-semibold">
                      {item.rhythm}
                    </span>
                    <div className="size-9 rounded-full bg-cream border border-border flex items-center justify-center text-gold">
                      <Icon className="size-4 text-berry" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-plum font-normal mb-3">
                    {item.name}
                  </h3>

                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                    {item.cadence}
                  </p>

                  <p className="font-sans text-sm text-foreground/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/60 text-xs font-medium text-plum">
                  {item.format}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
