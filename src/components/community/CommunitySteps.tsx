import React from "react";
import { ArrowRight, Compass, Users, Sparkles } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const STEPS: StepItem[] = [
  {
    number: "01",
    title: "Tell us where you are",
    description:
      "Tell us a little about where you are on your journey — the season of life you are walking through, what you are longing for, and what brings you here.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Find your circle",
    description:
      "We introduce you to a circle that fits your season of life, whether in London or virtually. You will receive an invitation with meeting dates and quiet preparation details.",
    icon: Users,
  },
  {
    number: "03",
    title: "Begin the journey",
    description:
      "Show up, share honestly, and grow alongside your sisters. There is no performance required — only your authentic presence.",
    icon: Sparkles,
  },
];

export const CommunitySteps: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-blush/30 border-y border-border/80 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="size-2 rounded-full bg-berry" />
            <span className="text-xs font-semibold uppercase tracking-widest text-plum">
              A Gentle Process
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum font-normal tracking-tight leading-[1.1] text-balance">
            How joining{" "}
            <span className="font-serif italic text-berry font-light">
              works.
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-foreground/80 mt-6 leading-relaxed">
            No complex application funnels or vetting interviews. We believe
            belonging begins with unhurried hospitality.
          </p>
        </div>

        {/* Vertical Connected Journey */}
        <div className="relative">
          {/* Vertical Golden Connecting Line (Desktop) */}
          <div
            className="hidden md:block absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-0.5 bg-gradient-to-b from-gold/30 via-gold to-gold/30 -z-0"
            aria-hidden="true"
          />

          <div className="space-y-16 sm:space-y-24 relative z-10">
            {STEPS.map((step, idx) => {
              const isEven = idx % 2 === 1;
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                    isEven ? "md:text-right" : ""
                  }`}
                >
                  {/* Step Description */}
                  <div
                    className={`md:col-span-5 ${
                      isEven ? "md:col-start-1 md:order-1" : "md:col-start-1"
                    }`}
                  >
                    <div className="rounded-3xl p-8 bg-white/90 border border-border shadow-xs hover:shadow transition-shadow">
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isEven ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="text-xs font-mono uppercase tracking-widest text-berry font-semibold">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-plum font-normal mb-3">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm sm:text-base text-foreground/75 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node */}
                  <div className="hidden md:flex md:col-span-2 justify-center items-center">
                    <div className="size-14 rounded-full bg-cream border-2 border-gold flex items-center justify-center text-plum shadow-sm">
                      <span className="font-serif text-lg font-semibold">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Empty balance spacer */}
                  <div
                    className={`hidden md:block md:col-span-5 ${
                      isEven ? "md:order-2" : ""
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
