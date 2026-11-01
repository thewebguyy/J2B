import React from "react";
import { Mail, Phone, Calendar } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const EventsThreshold: React.FC = () => {
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
                Reserve Your Place
              </span>
              <span className="h-px w-10 bg-gold-harvest/50" aria-hidden="true" />
            </div>

            <h2 className="font-serif editorial-h2 font-bold text-white leading-tight mb-6 reveal-heading">
              Come along to our next circle —{" "}
              <span className="italic font-normal text-gold-harvest block mt-1">
                there&apos;s a seat waiting for you.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-ivory-surface/85 max-w-2xl leading-relaxed">
              We keep our gatherings small so everyone can talk and be heard. Send an email or message us on WhatsApp to ask about upcoming dates and see what feels right for you.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pl-8 border-l border-gold-harvest/35 flex flex-col items-start">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto lg:w-full mb-8">
              <MagneticButton href="mailto:hello@journey2better.com?subject=Gathering%20Dates%20and%20Information" variant="gold" className="w-full justify-center">
                <Mail className="size-4 mr-2" />
                <span>Ask About Dates by Email</span>
              </MagneticButton>

              <MagneticButton href="https://wa.me/447960964839" variant="teal" className="w-full justify-center">
                <Phone className="size-4 mr-2" />
                <span>Message Us on WhatsApp</span>
              </MagneticButton>
            </div>

            <div className="pt-6 border-t border-ivory-surface/15 w-full text-xs text-ivory-surface/75">
              Small groups &bull; hello@journey2better.com &bull; +44 7960 964839
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
