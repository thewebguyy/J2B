import React from "react";
import { Mail, Phone, Calendar } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const EventsThreshold: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-midnight-deep text-ivory-surface overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <PathRibbon variant="soft-horizon" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
        
        {/* Top Motif */}
        <div className="inline-flex flex-col items-center mb-6">
          <PathRibbon variant="ascending-beacon" className="scale-75 mb-2" />
          <div className="flex items-center gap-2">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-harvest">
              Reserve Your Place
            </span>
            <BotanicalMotif size={20} orientation="left" />
          </div>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          Step into our next circle{" "}
          <span className="italic font-normal text-gold-harvest block mt-1">
            and be reminded of your strength.
          </span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-ivory-surface/85 max-w-2xl mx-auto leading-relaxed mb-12">
          Gatherings are intentionally kept intimate so every voice can be welcomed. Reach out directly to enquire about dates, schedule details, or booking your seat.
        </p>

        {/* Action Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
          <MagneticButton href="mailto:hello@journey2better.com?subject=Events%20and%20Retreat%20Enquiry" variant="gold">
            <Mail className="size-4 mr-2" />
            <span>Enquire via Email</span>
          </MagneticButton>

          <MagneticButton href="tel:+447960964839" variant="teal">
            <Phone className="size-4 mr-2" />
            <span>Call / WhatsApp Us</span>
          </MagneticButton>
        </div>

        {/* Direct Contact Bar */}
        <div className="pt-8 border-t border-ivory-surface/15 text-xs text-ivory-surface/70">
          hello@journey2better.com &bull; +44 7960 964839 &bull; London & Across the UK
        </div>

      </div>
    </section>
  );
};
