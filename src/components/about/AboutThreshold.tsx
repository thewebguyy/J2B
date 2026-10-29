import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const AboutThreshold: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-midnight-deep text-ivory-surface overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <PathRibbon variant="soft-horizon" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Emblem Top Motif */}
        <div className="inline-flex flex-col items-center mb-6">
          <PathRibbon variant="ascending-beacon" className="scale-75 mb-2" />
          <div className="flex items-center gap-2">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-harvest">
              The Path Ahead
            </span>
            <BotanicalMotif size={20} orientation="left" />
          </div>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          The story of Journey 2 Better is{" "}
          <span className="italic font-normal text-gold-harvest block mt-1">
            being written with you.
          </span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-ivory-surface/85 max-w-2xl mx-auto leading-relaxed mb-12">
          As an emerging UK sisterhood, our greatest strength is the intentionality of our members. When you step into this community, you don&apos;t just attend — you help shape a space where women truly thrive.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <MagneticButton href="/community#join" variant="gold">
            <span>Join Our Sisterhood</span>
            <ArrowRight className="size-4" />
          </MagneticButton>

          <MagneticButton href="mailto:hello@journey2better.com" variant="teal">
            <Mail className="size-4 mr-1 text-gold-harvest" />
            <span>Say Hello Directly</span>
          </MagneticButton>
        </div>

      </div>
    </section>
  );
};
