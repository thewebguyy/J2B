import React from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const CommunityThreshold: React.FC = () => {
  return (
    <section id="join" className="relative py-24 sm:py-32 bg-midnight-deep text-ivory-surface overflow-hidden">
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
              Begin Today
            </span>
            <BotanicalMotif size={20} orientation="left" />
          </div>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          Reach out directly to join{" "}
          <span className="italic font-normal text-gold-harvest block mt-1">
            our next sister circle.
          </span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-ivory-surface/85 max-w-2xl mx-auto leading-relaxed mb-12">
          We keep communication direct, warm, and personal. Send us an email or message to introduce yourself, and we will gladly connect you to our upcoming gathering.
        </p>

        {/* Action Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
          <MagneticButton href="mailto:hello@journey2better.com?subject=Joining%20Journey%202%20Better" variant="gold">
            <Mail className="size-4 mr-2" />
            <span>Send Us An Email</span>
          </MagneticButton>

          <MagneticButton href="tel:+447960964839" variant="teal">
            <Phone className="size-4 mr-2" />
            <span>Call or WhatsApp</span>
          </MagneticButton>
        </div>

        {/* Verification Note */}
        <div className="pt-8 border-t border-ivory-surface/15 text-xs text-ivory-surface/70">
          hello@journey2better.com &bull; +44 7960 964839 &bull; London & United Kingdom
        </div>

      </div>
    </section>
  );
};
