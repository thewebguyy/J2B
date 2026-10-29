import React from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const AboutMessyMiddle: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-ivory-surface border-y border-ivory-border overflow-hidden">
      {/* Chapter Transition */}
      <PathRibbon variant="chapter-divider" className="-mt-16 mb-12" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6">
          <BotanicalMotif size={20} />
          <span className="text-xs uppercase tracking-widest font-semibold text-teal-living">
            Signature Philosophy
          </span>
          <BotanicalMotif size={20} orientation="left" />
        </div>

        {/* Central Bold Statement */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-midnight leading-[1.15] mb-10">
          We exist for the{" "}
          <span className="italic font-normal text-gold-harvest">
            messy middle of life.
          </span>
        </h2>

        {/* Narrative Flow */}
        <div className="space-y-6 text-charcoal/85 font-sans text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto text-left sm:text-center font-normal">
          <p>
            The world loves to celebrate the starting line and applaud the finish line. But almost all of life is lived in the stretch between: the quiet mornings of uncertainty, the moments of self-doubt, the unexpected career crossroads, and the emotional transitions that don&apos;t fit into a tidy narrative.
          </p>
          <p className="font-serif italic text-2xl sm:text-3xl text-midnight font-medium py-4">
            &ldquo;You do not need to wait until you are &lsquo;finished&rsquo; to be worthy of deep connection.&rdquo;
          </p>
          <p>
            In Journey 2 Better, the messy middle is not something to hide or apologize for. It is the sacred, fertile ground where real resilience, self-knowledge, and lifelong sisterhood take root.
          </p>
        </div>

        {/* Visual 3-Stage Progression */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="bg-ivory-canvas rounded-2xl p-6 border border-ivory-border shadow-xs">
            <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground block mb-2">
              Phase 01 &bull; The Spark
            </span>
            <h3 className="font-serif text-xl font-bold text-midnight mb-2">
              The Decision to Grow
            </h3>
            <p className="text-sm text-charcoal/75 leading-relaxed">
              Acknowledging that your current life season demands renewal, courage, and a deliberate step forward.
            </p>
          </div>

          <div className="bg-ivory-canvas rounded-2xl p-6 border border-gold-harvest/50 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-gold-harvest" />
            <span className="text-xs uppercase tracking-wider font-semibold text-gold-harvest block mb-2">
              Phase 02 &bull; The Messy Middle
            </span>
            <h3 className="font-serif text-xl font-bold text-midnight mb-2">
              The Shared Journey
            </h3>
            <p className="text-sm text-charcoal/75 leading-relaxed">
              Navigating questions, vulnerability, and evolving priorities with sisters who walk beside you every step of the way.
            </p>
          </div>

          <div className="bg-ivory-canvas rounded-2xl p-6 border border-ivory-border shadow-xs">
            <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground block mb-2">
              Phase 03 &bull; Becoming
            </span>
            <h3 className="font-serif text-xl font-bold text-midnight mb-2">
              Stepping Into Wholeness
            </h3>
            <p className="text-sm text-charcoal/75 leading-relaxed">
              Standing tall in your grounded identity, equipped with clarity, self-compassion, and an enduring community.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
