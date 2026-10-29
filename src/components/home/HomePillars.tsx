import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Compass, Calendar, HeartHandshake } from "lucide-react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

const PILLARS = [
  {
    number: "01",
    title: "Connection",
    subtitle: "Sister Circles & Safe Spaces",
    description:
      "Intentionally curated intimate circles where women share authentically without posturing. A community where your voice is heard, your vulnerability is respected, and your presence is welcomed unconditionally.",
    icon: Users,
    accent: "teal",
    linkText: "Discover Community Circles",
    linkHref: "/community#circles",
  },
  {
    number: "02",
    title: "Growth",
    subtitle: "Personal Development & Mentorship",
    description:
      "Structured self-reflection, life architecture, and compassionate guidance to help you navigate pivotal seasons with clarity, resilience, and renewed self-trust.",
    icon: Compass,
    accent: "gold",
    linkText: "Explore Mentorship",
    linkHref: "/community#mentorship",
  },
  {
    number: "03",
    title: "Events",
    subtitle: "Mindful Gatherings & Retreats",
    description:
      "From sunrise reflection sessions to immersive in-person workshops and our annual sanctuary retreat, each gathering is designed to create space for mental stillness and renewed perspective.",
    icon: Calendar,
    accent: "midnight",
    linkText: "View Gatherings Calendar",
    linkHref: "/events",
  },
  {
    number: "04",
    title: "Support",
    subtitle: "Everyday Encouragement",
    description:
      "Consistent gentle check-ins, daily affirmations, and shared reminders that remind you to breathe, slow down, and trust your personal evolution.",
    icon: HeartHandshake,
    accent: "teal",
    linkText: "Connect With Us",
    linkHref: "/community#join",
  },
];

export const HomePillars: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-living">
              The Four Pillars of Becoming
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
            Everything we cultivate is designed to companion your growth.
          </h2>

          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
            We do not believe in superficial quick fixes. Journey 2 Better is grounded in four foundational pillars that nurture the emotional, relational, and personal life of every woman.
          </p>
        </div>

        {/* Storytelling Narrative Grid (Asymmetrical Editorial Layout) */}
        <div className="space-y-12">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={pillar.title}
                className={`group relative rounded-3xl p-8 sm:p-12 border transition-all duration-500 overflow-hidden ${
                  pillar.accent === "gold"
                    ? "bg-gradient-to-br from-ivory-surface via-ivory-canvas to-gold-subtle/30 border-gold-harvest/40 hover:border-gold-harvest"
                    : pillar.accent === "midnight"
                    ? "bg-gradient-to-br from-ivory-surface via-ivory-canvas to-teal-subtle/30 border-midnight/20 hover:border-midnight/40"
                    : "bg-ivory-surface border-ivory-border hover:border-teal-living/50"
                } shadow-sm hover:shadow-lg`}
              >
                {/* Background Path Strand */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none" aria-hidden="true">
                  <PathRibbon variant="narrative-flow" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  
                  {/* Left: Pillar Number & Identity */}
                  <div className="lg:col-span-4 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-serif italic text-4xl sm:text-5xl font-bold text-gold-harvest">
                        {pillar.number}
                      </span>
                      <div className="p-3 rounded-2xl bg-ivory-canvas border border-ivory-border shadow-xs text-teal-living group-hover:scale-105 transition-transform duration-300">
                        <Icon className="size-6" />
                      </div>
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-midnight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-xs uppercase tracking-widest text-teal-living font-semibold">
                      {pillar.subtitle}
                    </p>
                  </div>

                  {/* Middle: Editorial Narrative */}
                  <div className="lg:col-span-5">
                    <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Right: Meaningful Next Step */}
                  <div className="lg:col-span-3 flex lg:justify-end">
                    <Link
                      href={pillar.linkHref}
                      className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider text-midnight bg-ivory-canvas border border-ivory-border group-hover:border-gold-harvest group-hover:bg-midnight group-hover:text-ivory-canvas transition-all duration-300 shadow-xs"
                    >
                      <span>{pillar.linkText}</span>
                      <ArrowRight className="size-3.5 text-gold-harvest transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
