import React from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

const STEPS = [
  {
    step: "01",
    title: "Reach Out & Say Hello",
    subtitle: "A Simple First Step",
    description:
      "Send a brief email or message expressing your interest. There are no questionnaires, application fees, or prerequisites. Just tell us a little bit about what season of life you are currently experiencing.",
  },
  {
    step: "02",
    title: "Enter the Circle",
    subtitle: "A Gentle Introduction",
    description:
      "Join an upcoming virtual Rise & Reflect session or an introduction circle. Meet our facilitators and fellow sisters in a relaxed, low-pressure setting where listening is just as welcome as speaking.",
  },
  {
    step: "03",
    title: "Grow Together",
    subtitle: "Your Living Journey",
    description:
      "Find your regular rhythm. Participate in ongoing circles, engage with mentorship, attend our London workshops, and build enduring sisterhood as you step boldly into who you are becoming.",
  },
];

export const CommunitySteps: React.FC = () => {
  return (
    <section id="steps" className="relative py-24 sm:py-32 bg-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-living">
              The Path of Becoming
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
            How joining our community works.
          </h2>

          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
            We keep the threshold simple, thoughtful, and human. Here is how your journey into Journey 2 Better begins.
          </p>
        </div>

        {/* 3-Step Vertical Progression with Path of Becoming Ribbon */}
        <div className="relative">
          
          {/* Central Connecting Ribbon Strand (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-1 pointer-events-none" aria-hidden="true">
            <div className="w-0.5 h-full bg-gradient-to-b from-teal-living via-gold-harvest to-midnight mx-auto" />
          </div>

          <div className="space-y-12 lg:space-y-20">
            {STEPS.map((stepItem, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={stepItem.step}
                  className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
                >
                  {/* Step Card */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:col-start-8" : "lg:col-start-1"
                    } bg-ivory-surface rounded-3xl p-8 sm:p-10 border border-ivory-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-gold-harvest/40`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-widest font-semibold text-teal-living">
                        {stepItem.subtitle}
                      </span>
                      <BotanicalMotif size={20} orientation={isEven ? "left" : "right"} />
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mb-4">
                      {stepItem.title}
                    </h3>

                    <p className="font-sans text-base text-charcoal/80 leading-relaxed font-normal">
                      {stepItem.description}
                    </p>
                  </div>

                  {/* Center Node Badge */}
                  <div className="hidden lg:flex lg:col-span-2 lg:col-start-6 justify-center">
                    <div className="w-14 h-14 rounded-full bg-ivory-canvas border-2 border-gold-harvest flex items-center justify-center shadow-md text-midnight font-serif text-lg font-bold">
                      {stepItem.step}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
