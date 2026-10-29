import React from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

const VALUES = [
  {
    title: "Honesty",
    tagline: "Dropping the mask",
    description:
      "We cultivate spaces where you never have to pretend you have everything together. Truthful reflection and vulnerability are honoured as the beginning of genuine growth.",
    theme: "midnight",
  },
  {
    title: "Belonging",
    tagline: "Room at the table",
    description:
      "You do not need to qualify, prove yourself, or audition for this sisterhood. From your very first step, your presence is valued and warmly received.",
    theme: "ivory",
  },
  {
    title: "Courage",
    tagline: "Taking the next step",
    description:
      "Growth requires stepping into the unfamiliar. We walk beside each other through difficult decisions, bold ambitions, and heartfelt career or life pivots.",
    theme: "teal",
  },
  {
    title: "Celebration",
    tagline: "Honouring quiet victories",
    description:
      "Not just the promotions and milestones, but the quiet courage to set a boundary, choose rest, or begin again after a season of exhaustion.",
    theme: "gold",
  },
];

export const AboutValues: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-living">
              Core Principles
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
            The values that anchor our sisterhood.
          </h2>

          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
            These four commitments shape every circle we host, every workshop we curate, and every conversation we share.
          </p>
        </div>

        {/* 4 Distinct Value Storyboards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {VALUES.map((val, idx) => {
            return (
              <div
                key={val.title}
                className={`rounded-3xl p-8 sm:p-10 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  val.theme === "midnight"
                    ? "bg-midnight-deep text-ivory-surface border-midnight"
                    : val.theme === "teal"
                    ? "bg-ivory-surface border-teal-living/40"
                    : val.theme === "gold"
                    ? "bg-gradient-to-br from-ivory-surface to-gold-subtle/40 border-gold-harvest/50"
                    : "bg-ivory-surface border-ivory-border"
                } shadow-sm hover:shadow-md`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-serif italic text-3xl font-bold ${
                        val.theme === "midnight" ? "text-gold-harvest" : "text-teal-living"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <BotanicalMotif
                      size={22}
                      orientation={idx % 2 === 0 ? "right" : "left"}
                    />
                  </div>

                  <h3
                    className={`font-serif text-3xl font-bold mb-2 ${
                      val.theme === "midnight" ? "text-white" : "text-midnight"
                    }`}
                  >
                    {val.title}
                  </h3>

                  <p
                    className={`text-xs uppercase tracking-widest font-semibold mb-4 ${
                      val.theme === "midnight" ? "text-gold-harvest" : "text-teal-living"
                    }`}
                  >
                    {val.tagline}
                  </p>

                  <p
                    className={`font-sans text-base leading-relaxed ${
                      val.theme === "midnight" ? "text-ivory-surface/85" : "text-charcoal/80"
                    }`}
                  >
                    {val.description}
                  </p>
                </div>

                <div
                  className={`mt-8 pt-4 border-t text-xs font-medium ${
                    val.theme === "midnight"
                      ? "border-ivory-surface/15 text-ivory-surface/60"
                      : "border-ivory-border text-muted-foreground"
                  }`}
                >
                  Journey 2 Better Living Commitment
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
