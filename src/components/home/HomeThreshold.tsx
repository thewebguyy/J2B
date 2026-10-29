import React from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const HomeThreshold: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-midnight-deep text-ivory-surface overflow-hidden">
      {/* Background Living Ribbon trace */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <PathRibbon variant="soft-horizon" className="w-full h-full" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Emblem Top Accent */}
        <div className="inline-flex flex-col items-center mb-6">
          <PathRibbon variant="ascending-beacon" className="scale-75 mb-2" />
          <div className="flex items-center gap-2">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-harvest">
              The Invitation
            </span>
            <BotanicalMotif size={20} orientation="left" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          You do not need to have it all figured out{" "}
          <span className="italic font-normal text-gold-harvest block mt-1">
            to begin walking.
          </span>
        </h2>

        {/* Honest Storytelling Copy */}
        <p className="font-sans text-base sm:text-xl text-ivory-surface/85 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
          Every transformation begins with the courage to seek companionship. Journey 2 Better is here to hold space for your story, celebrate your milestones, and remind you of your strength.
        </p>

        {/* Action Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
          <MagneticButton href="/community#join" variant="gold">
            <span>Connect With Our Sisterhood</span>
            <ArrowRight className="size-4" />
          </MagneticButton>

          <MagneticButton href="/events" variant="teal">
            <span>View Upcoming Circles</span>
          </MagneticButton>
        </div>

        {/* Direct Contact Bar */}
        <div className="pt-10 border-t border-ivory-surface/15 flex flex-wrap items-center justify-center gap-8 text-xs text-ivory-surface/75">
          <a
            href="mailto:hello@journey2better.com"
            className="flex items-center gap-2 hover:text-gold-harvest transition-colors"
          >
            <Mail className="size-4 text-gold-harvest" />
            <span>hello@journey2better.com</span>
          </a>
          <span className="hidden sm:inline text-ivory-surface/30">•</span>
          <a
            href="tel:+447960964839"
            className="flex items-center gap-2 hover:text-gold-harvest transition-colors"
          >
            <Phone className="size-4 text-gold-harvest" />
            <span>+44 7960 964839</span>
          </a>
          <span className="hidden sm:inline text-ivory-surface/30">•</span>
          <span>United Kingdom</span>
        </div>

      </div>
    </section>
  );
};
