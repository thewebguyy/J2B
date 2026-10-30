import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const AboutThreshold: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-midnight-deep text-ivory-surface overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-25" aria-hidden="true">
        <PathRibbon variant="soft-horizon" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-5">
              <BotanicalMotif size={20} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-harvest">
                The Path Ahead
              </span>
              <span className="h-px w-10 bg-gold-harvest/50" aria-hidden="true" />
            </div>

            <h2 className="font-serif editorial-h2 font-bold text-white leading-tight mb-6 reveal-heading">
              The story of Journey 2 Better is{" "}
              <span className="italic font-normal text-gold-harvest block mt-1">
                being written with you.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-ivory-surface/85 max-w-2xl leading-relaxed">
              As an emerging UK sisterhood, our greatest strength is the intentionality of our members. When you step into this community, you don&apos;t just attend — you help shape a space where women truly thrive.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pl-8 border-l border-gold-harvest/35 flex flex-col sm:flex-row lg:flex-col gap-4">
            <MagneticButton href="/community#join" variant="gold" className="w-full justify-between">
              <span>Introduce Yourself</span>
              <ArrowRight className="size-4" />
            </MagneticButton>

            <MagneticButton href="/events" variant="teal" className="w-full justify-center">
              <span>See the Gatherings Calendar</span>
            </MagneticButton>
          </div>

        </div>
      </div>
    </section>
  );
};
