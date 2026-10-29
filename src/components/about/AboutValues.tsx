import React from "react";
import { MessageSquare, Heart, Compass, Sparkles } from "lucide-react";

interface ValueItem {
  id: string;
  numeral: string;
  title: string;
  tagline: string;
  reflection: string;
  icon: React.ElementType;
}

const VALUES: ValueItem[] = [
  {
    id: "honesty",
    numeral: "I",
    title: "Honesty",
    tagline: "We speak truthfully and listen without judgement.",
    reflection:
      "Vulnerability is not weakness; it is the currency of real connection. We lay down pretense at the door so everyone can breathe.",
    icon: MessageSquare,
  },
  {
    id: "belonging",
    numeral: "II",
    title: "Belonging",
    tagline: "Every woman is welcome, exactly as she is today.",
    reflection:
      "You do not need to earn your seat at this table. Whether this is your first gathering or your fiftieth, your presence matters.",
    icon: Heart,
  },
  {
    id: "courage",
    numeral: "III",
    title: "Courage",
    tagline: "We take the next brave step, however small it looks.",
    reflection:
      "Sometimes courage is quitting a job; sometimes courage is simply getting out of bed and joining the circle. We honour both.",
    icon: Compass,
  },
  {
    id: "celebration",
    numeral: "IV",
    title: "Celebration",
    tagline: "We cheer loudly for each other's wins, big and quiet.",
    reflection:
      "In a culture that fosters competition, we choose mutual celebration. Your sister's breakthrough is proof of what is possible.",
    icon: Sparkles,
  },
];

export const AboutValues: React.FC = () => {
  return (
    <section id="values" className="relative py-28 sm:py-36 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="size-2 rounded-full bg-berry" />
            <span className="text-xs font-semibold uppercase tracking-widest text-plum">
              What We Stand For
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum font-normal tracking-tight leading-[1.1] text-balance">
            Our guiding{" "}
            <span className="font-serif italic text-berry font-light">
              values.
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-foreground/80 mt-6 leading-relaxed">
            These four commitments form the bedrock of every circle, mentorship
            partnership, and retreat we curate.
          </p>
        </div>

        {/* Distinctive Editorial Values Presentation (Asymmetrical grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            // Introduce deliberate visual tension: alternating background accents
            const isHighlighted = idx === 0 || idx === 3;

            return (
              <div
                key={val.id}
                className={`relative rounded-3xl p-8 sm:p-10 border transition-all duration-300 hover:shadow-md ${
                  isHighlighted
                    ? "bg-blush/60 border-border/80"
                    : "bg-white/90 border-border/70"
                }`}
              >
                {/* Top Bar with Numeral and Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-2xl font-light text-gold">
                    {val.numeral}
                  </span>
                  <div className="size-10 rounded-full bg-cream border border-border/80 flex items-center justify-center text-berry shadow-xs">
                    <Icon className="size-4" />
                  </div>
                </div>

                {/* Value Title */}
                <h3 className="font-serif text-3xl sm:text-4xl text-plum font-normal tracking-tight mb-4">
                  {val.title}
                </h3>

                {/* Primary Tagline */}
                <p className="font-serif italic text-xl text-plum/90 font-light leading-snug mb-5">
                  &ldquo;{val.tagline}&rdquo;
                </p>

                {/* Narrative Reflection */}
                <p className="font-sans text-sm sm:text-base text-foreground/75 leading-relaxed pt-4 border-t border-border/60">
                  {val.reflection}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
