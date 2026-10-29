import React from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const HomeTruth: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-ivory-surface border-y border-ivory-border/70 overflow-hidden">
      {/* Chapter Transition */}
      <PathRibbon variant="chapter-divider" className="-mt-16 mb-8" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-living">
              The Human Truth
            </span>
            <BotanicalMotif size={20} orientation="left" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
            So many women carry everything quietly.{" "}
            <span className="italic font-normal text-gold-harvest block mt-1">
              Here, you don&apos;t have to do it alone.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
            We are conditioned to be strong, capable, and self-sufficient. But true personal growth isn&apos;t a solitary endurance test. It is a shared journey that flourishes when we are met with understanding.
          </p>
        </div>

        {/* 3 Intimate Pillars of Truth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Truth 1: The Transitions */}
          <div className="bg-ivory-canvas rounded-2xl p-8 border border-ivory-border shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-gold-harvest/40">
            <div>
              <span className="font-serif italic text-3xl text-gold-harvest font-semibold block mb-4">
                01
              </span>
              <h3 className="font-serif text-2xl font-bold text-midnight mb-3">
                Life Transitions
              </h3>
              <p className="font-sans text-sm text-charcoal/75 leading-relaxed">
                Whether you are changing careers, redefining motherhood, healing, or questioning your direction, having sisters who listen without judgment makes the path clearer.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-ivory-border flex items-center gap-2 text-xs font-semibold text-teal-living">
              <span>A space to exhale</span>
            </div>
          </div>

          {/* Truth 2: The Messy Middle */}
          <div className="bg-ivory-canvas rounded-2xl p-8 border border-gold-harvest/40 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-gold-harvest relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-harvest/10 rounded-bl-full pointer-events-none" />
            <div>
              <span className="font-serif italic text-3xl text-teal-living font-semibold block mb-4">
                02
              </span>
              <h3 className="font-serif text-2xl font-bold text-midnight mb-3">
                The Messy Middle
              </h3>
              <p className="font-sans text-sm text-charcoal/75 leading-relaxed">
                Transformation is rarely linear. We honour the uncertain middle ground where you are shedding who you were and stepping courageously into who you are becoming.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-ivory-border flex items-center gap-2 text-xs font-semibold text-gold-harvest">
              <span>Honouring your process</span>
            </div>
          </div>

          {/* Truth 3: Safe Belonging */}
          <div className="bg-ivory-canvas rounded-2xl p-8 border border-ivory-border shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-teal-living/40">
            <div>
              <span className="font-serif italic text-3xl text-midnight font-semibold block mb-4">
                03
              </span>
              <h3 className="font-serif text-2xl font-bold text-midnight mb-3">
                True Companionship
              </h3>
              <p className="font-sans text-sm text-charcoal/75 leading-relaxed">
                No competition. No hierarchy. Just genuine women walking beside you, holding your aspirations with respect, and celebrating every small milestone along the way.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-ivory-border flex items-center gap-2 text-xs font-semibold text-midnight">
              <span>Walking side by side</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
