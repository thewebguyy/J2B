import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Sparkles, Calendar, HeartHandshake } from "lucide-react";

interface PillarItem {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  detail: string;
  icon: React.ElementType;
  imageUrl: string;
  imageAlt: string;
}

const PILLARS: PillarItem[] = [
  {
    id: "connection",
    number: "01",
    eyebrow: "Belonging",
    title: "Real Connections",
    description:
      "Build meaningful friendships with women who truly get you — your struggles, your dreams, your quiet breakthroughs, and your everyday journey.",
    detail:
      "No posturing or performance. Small monthly groups where every voice has a place at the table.",
    icon: Users,
    imageUrl:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Two women holding hands in warm mutual support",
  },
  {
    id: "growth",
    number: "02",
    eyebrow: "Evolution",
    title: "Personal Growth",
    description:
      "Access workshops, curated resources, and mentorship designed to help you grow in every area of life — career, identity, health, and spirit.",
    detail:
      "Pair with women who are walking a few steps ahead, and become that trusted presence for someone else.",
    icon: Sparkles,
    imageUrl:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Woman journaling and reflecting during a morning circle",
  },
  {
    id: "events",
    number: "03",
    eyebrow: "Gatherings",
    title: "Live Events",
    description:
      "Gather in person and online for events that inspire, energise, and remind you that you were never designed to walk this path in isolation.",
    detail:
      "From monthly morning reflection circles to our annual London workshops and spring sisterhood retreat.",
    icon: Calendar,
    imageUrl:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Women gathered together around a shared table sharing food and conversation",
  },
  {
    id: "support",
    number: "04",
    eyebrow: "Sanctuary",
    title: "Unwavering Support",
    description:
      "A safe space to be vulnerable, ask for help, and receive the kind of deep emotional backing that changes everything when life becomes demanding.",
    detail:
      "Space for the messy middle of life as much as the milestones — career pivots, motherhood, grief, and quiet transitions.",
    icon: HeartHandshake,
    imageUrl:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Intimate close-up of hands holding tea in a warm sanctuary",
  },
];

export const HomePillars: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Heading Header */}
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="size-2 rounded-full bg-berry" />
            <span className="text-xs font-semibold uppercase tracking-widest text-plum">
              What We Offer
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum font-normal tracking-tight leading-[1.1] text-balance">
            Everything you need to{" "}
            <span className="font-serif italic text-berry font-light">
              thrive.
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-foreground/80 mt-6 leading-relaxed">
            We replaced generic wellness formulas with four grounded pillars of
            sisterhood — each designed to anchor you through transitions.
          </p>
        </div>

        {/* Editorial Chapters (Asymmetric, alternating compositions) */}
        <div className="space-y-24 sm:space-y-32">
          {PILLARS.map((pillar, index) => {
            const isEven = index % 2 === 1;
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content Block */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? "lg:col-start-7" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-serif text-3xl font-light text-gold">
                      {pillar.number}
                    </span>
                    <span className="h-px w-8 bg-border" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-berry">
                      {pillar.eyebrow}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-plum font-normal tracking-tight mb-5">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-base sm:text-lg text-foreground/85 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="p-5 rounded-2xl bg-blush/60 border border-border/80 text-sm text-foreground/75 leading-relaxed">
                    <div className="flex items-start gap-3">
                      <Icon className="size-4 text-berry mt-1 shrink-0" />
                      <span>{pillar.detail}</span>
                    </div>
                  </div>
                </div>

                {/* Editorial Visual Composition */}
                <div
                  className={`lg:col-span-6 relative ${
                    isEven ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="relative aspect-[16/11] rounded-3xl overflow-hidden bg-blush border border-border shadow-[0_16px_36px_-10px_rgba(56,18,38,0.08)] group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url('${pillar.imageUrl}')` }}
                      role="img"
                      aria-label={pillar.imageAlt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                    {/* Subtle Number Watermark */}
                    <span className="absolute bottom-4 right-6 font-serif italic text-6xl text-white/40 font-light select-none">
                      {pillar.number}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
