import React from "react";
import { Users, Compass, HeartHandshake, CheckCircle2 } from "lucide-react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

const OFFERINGS = [
  {
    id: "circles",
    title: "Sister Circles",
    eyebrow: "Connection & Mutual Witness",
    description:
      "Small, facilitated intimate circles where women come together regularly to share life updates, process difficult seasons, and hold space for one another. Each circle operates under a code of confidentiality and gentle listening.",
    highlights: [
      "Facilitated intimate group sizes",
      "Confidential and non-judgmental atmosphere",
      "Guided reflection themes on balance, identity, and courage",
      "Both virtual and London-based gathering formats",
    ],
    accent: "teal",
    icon: Users,
  },
  {
    id: "mentorship",
    title: "1-on-1 Mentorship",
    eyebrow: "Guidance & Life Architecture",
    description:
      "Personalised guidance for women navigating major personal, relational, or career transitions. Pair with an experienced mentor who listens, helps clarify goals, and provides steadfast accountability.",
    highlights: [
      "Focused 1-on-1 conversations",
      "Personal life and personal development roadmapping",
      "Accountability check-ins between sessions",
      "Practical strategies for confidence and boundaries",
    ],
    accent: "gold",
    icon: Compass,
  },
  {
    id: "encouragement",
    title: "Everyday Encouragement",
    eyebrow: "Daily Uplift & Mindset",
    description:
      "A steady, reassuring touchpoint in the rhythm of your week. Receive intentional reflections, affirmations, and promptings designed to ground you when life feels rushed or overwhelming.",
    highlights: [
      "Weekly community reflections",
      "Mindset and gratitude prompts",
      "Peer encouragement threads",
      "A gentle reminder to pause and breathe",
    ],
    accent: "midnight",
    icon: HeartHandshake,
  },
];

export const CommunityOfferings: React.FC = () => {
  return (
    <section id="offerings" className="relative py-24 sm:py-32 bg-ivory-surface border-y border-ivory-border overflow-hidden">
      {/* Chapter Transition */}
      <PathRibbon variant="chapter-divider" className="-mt-16 mb-12" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-living">
              Community Model
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
            Three ways we support your personal evolution.
          </h2>

          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
            Whether you are seeking collective sisterhood in a circle, dedicated 1-on-1 mentorship, or everyday words of reassurance, there is an offering designed to meet your current season.
          </p>
        </div>

        {/* 3 Detailed Offerings */}
        <div className="space-y-12">
          {OFFERINGS.map((offering, idx) => {
            const Icon = offering.icon;
            const isGold = offering.accent === "gold";
            const isMidnight = offering.accent === "midnight";

            return (
              <div
                key={offering.id}
                id={offering.id}
                className={`rounded-3xl p-8 sm:p-12 border transition-all duration-300 relative overflow-hidden ${
                  isGold
                    ? "bg-gradient-to-br from-ivory-canvas to-gold-subtle/30 border-gold-harvest/40 shadow-sm"
                    : isMidnight
                    ? "bg-ivory-canvas border-midnight/20 shadow-sm"
                    : "bg-ivory-canvas border-ivory-border shadow-sm"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Title & Overview */}
                  <div className="lg:col-span-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-2xl bg-ivory-surface border border-ivory-border text-teal-living">
                        <Icon className="size-6" />
                      </div>
                      <span className="font-serif italic text-2xl font-bold text-gold-harvest">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="text-xs uppercase tracking-widest font-semibold text-teal-living block mb-2">
                      {offering.eyebrow}
                    </span>

                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-midnight mb-4">
                      {offering.title}
                    </h3>

                    <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed font-normal mb-6">
                      {offering.description}
                    </p>
                  </div>

                  {/* Right Column: Highlights Checklist */}
                  <div className="lg:col-span-6 bg-ivory-surface rounded-2xl p-6 sm:p-8 border border-ivory-border/80">
                    <h4 className="font-serif text-lg font-bold text-midnight mb-4">
                      What to expect:
                    </h4>
                    <ul className="space-y-3 font-sans text-sm text-charcoal/80">
                      {offering.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="size-4 text-gold-harvest flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
