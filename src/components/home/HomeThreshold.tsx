import React from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const HomeThreshold: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-midnight-deep text-ivory-surface overflow-hidden">
      {/* Background Living Ribbon trace */}
      <div className="absolute inset-0 pointer-events-none opacity-25" aria-hidden="true">
        <PathRibbon variant="soft-horizon" className="w-full h-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          
          {/* Left Asymmetric Editorial Invitation */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-5">
              <BotanicalMotif size={20} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-harvest">
                The Invitation
              </span>
              <span className="h-px w-10 bg-gold-harvest/50" aria-hidden="true" />
            </div>

            <h2 className="font-serif editorial-h2 font-bold text-white leading-tight mb-6 reveal-heading">
              You do not need to have it all figured out{" "}
              <span className="italic font-normal text-gold-harvest block mt-1">
                to begin walking.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-ivory-surface/85 max-w-2xl leading-relaxed font-normal">
              Every transformation begins with the courage to seek companionship. Journey 2 Better is here to hold space for your story, celebrate your milestones, and remind you of your strength.
            </p>
          </div>

          {/* Right Action & Direct UK Contact Block */}
          <div className="lg:col-span-5 lg:pl-8 border-l border-gold-harvest/35 flex flex-col items-start">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto lg:w-full mb-8">
              <MagneticButton href="/community#join" variant="gold" className="w-full justify-between">
                <span>Connect With Our Sisterhood</span>
                <ArrowRight className="size-4" />
              </MagneticButton>

              <MagneticButton href="/events" variant="teal" className="w-full justify-center">
                <span>View Upcoming Circles</span>
              </MagneticButton>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-6 border-t border-ivory-surface/15 w-full flex flex-wrap items-center gap-6 text-xs text-ivory-surface/75">
              <a
                href="mailto:hello@journey2better.com"
                className="flex items-center gap-2 hover:text-gold-harvest transition-colors"
              >
                <Mail className="size-4 text-gold-harvest" />
                <span>hello@journey2better.com</span>
              </a>
              <a
                href="tel:+447960964839"
                className="flex items-center gap-2 hover:text-gold-harvest transition-colors"
              >
                <Phone className="size-4 text-gold-harvest" />
                <span>+44 7960 964839</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
