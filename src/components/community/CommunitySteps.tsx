"use client";

import React, { useEffect, useRef, useState } from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { isReducedMotion } from "@/utils/motion";

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
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (isReducedMotion()) {
      setProgress(1);
      return;
    }

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height + viewportHeight * 0.45;
      const currentScrolled = viewportHeight * 0.78 - rect.top;
      const nextProgress = Math.max(0.12, Math.min(1, currentScrolled / totalScrollable));
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const pathLength = 1000;
  const strokeDashoffset = Math.round(pathLength * (1 - progress));

  return (
    <section
      id="steps"
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-ivory-canvas overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <BotanicalMotif size={20} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                The Path of Becoming
              </span>
            </div>

            <h2 className="font-serif editorial-h2 font-bold text-midnight reveal-heading">
              How joining our community works.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-6 border-l border-gold-harvest/50">
            <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
              We keep the threshold simple, thoughtful, and human. Here is how your journey into Journey 2 Better begins.
            </p>
          </div>
        </div>

        {/* 3-Step Connected Sequence with Scroll-Linked SVG Golden Path */}
        <div className="relative">
          
          {/* Desktop Flowing Organic SVG Path Spine */}
          <div
            className="hidden lg:block pointer-events-none absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-40"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 160 760"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              {/* Subtle Base Track */}
              <path
                d="M80 12C20 150 140 290 80 410C20 530 140 640 80 748"
                stroke="#E9E1C9"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Active Scroll-Linked Golden Narrative Path */}
              <path
                d="M80 12C20 150 140 290 80 410C20 530 140 640 80 748"
                stroke="#D5A044"
                strokeWidth="3.2"
                strokeLinecap="round"
                pathLength={pathLength}
                strokeDasharray={pathLength}
                strokeDashoffset={strokeDashoffset}
                className="path-ribbon transition-[stroke-dashoffset] duration-150 ease-out"
              />
              {/* Living Teal Secondary Echo Thread */}
              <path
                d="M80 24C128 160 32 300 80 410C128 520 32 630 80 740"
                stroke="#036E76"
                strokeWidth="1"
                strokeDasharray="4 6"
                strokeLinecap="round"
                className="opacity-35"
              />
            </svg>
          </div>

          {/* Mobile Scroll-Linked SVG Golden Path Spine along Left Edge */}
          <div
            className="lg:hidden pointer-events-none absolute left-3 top-2 bottom-2 w-8"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 32 700"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
            >
              <path
                d="M16 0C6 180 26 360 14 540C8 620 22 670 16 700"
                stroke="#E9E1C9"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 0C6 180 26 360 14 540C8 620 22 670 16 700"
                stroke="#D5A044"
                strokeWidth="2.8"
                strokeLinecap="round"
                pathLength={pathLength}
                strokeDasharray={pathLength}
                strokeDashoffset={strokeDashoffset}
                className="path-ribbon transition-[stroke-dashoffset] duration-150 ease-out"
              />
            </svg>
          </div>

          <div className="space-y-14 lg:space-y-24 relative z-10">
            {STEPS.map((stepItem, idx) => {
              const isEven = idx % 2 === 1;
              const stepThreshold = (idx + 0.35) / STEPS.length;
              const isReached = progress >= stepThreshold;

              return (
                <article
                  key={stepItem.step}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center pl-12 lg:pl-0"
                >
                  {/* Mobile Node Indicator */}
                  <div
                    className={`lg:hidden absolute left-0 top-1 size-9 rounded-full flex items-center justify-center font-serif text-sm font-bold border-2 transition-colors duration-300 ${
                      isReached
                        ? "bg-gold-harvest text-midnight-deep border-gold-harvest shadow-xs"
                        : "bg-ivory-canvas text-midnight border-gold-harvest/50"
                    }`}
                  >
                    {stepItem.step}
                  </div>

                  {/* Step Editorial Content */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven
                        ? "lg:col-start-8 lg:pl-10 border-l-2 border-gold-harvest"
                        : "lg:col-start-1 lg:pr-10 lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-teal-living/60 pl-6 lg:pl-0"
                    } py-2`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isEven ? "justify-start" : "lg:justify-end"
                      }`}
                    >
                      <span className="text-xs uppercase tracking-[0.2em] font-semibold text-teal-living">
                        {stepItem.subtitle}
                      </span>
                      <BotanicalMotif size={18} orientation={isEven ? "right" : "left"} />
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.15rem] font-bold text-midnight mb-4 leading-tight">
                      {stepItem.title}
                    </h3>

                    <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed font-normal">
                      {stepItem.description}
                    </p>
                  </div>

                  {/* Desktop Center Node Medallion on the Golden Path */}
                  <div className="hidden lg:flex lg:col-span-2 lg:col-start-6 justify-center">
                    <div
                      className={`size-16 rounded-full border-2 flex flex-col items-center justify-center transition-all duration-500 ${
                        isReached
                          ? "bg-midnight-deep text-gold-harvest border-gold-harvest shadow-[0_0_24px_rgba(213,160,68,0.35)] scale-105"
                          : "bg-ivory-canvas text-midnight border-gold-harvest/50"
                      }`}
                    >
                      <span className="text-[9px] uppercase tracking-widest opacity-70 font-sans">
                        Step
                      </span>
                      <span className="font-serif italic text-xl font-bold leading-none">
                        {stepItem.step}
                      </span>
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
