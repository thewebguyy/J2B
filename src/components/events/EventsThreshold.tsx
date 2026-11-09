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
                Ask a Question
              </span>
              <span className="h-px w-10 bg-gold-harvest/50" aria-hidden="true" />
            </div>

            <h2 className="font-serif editorial-h2 font-bold text-white leading-tight mb-6 reveal-heading">
              Curious about what comes next?{" "}
              <span className="italic font-normal text-gold-harvest block mt-1">
                We welcome your questions.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-ivory-surface/85 max-w-2xl leading-relaxed">
              Email or message us about future plans. Dates and details are TBC. Contacting us is an enquiry, not a confirmed booking, registration or book order.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pl-8 border-l border-gold-harvest/35 flex flex-col items-start">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto lg:w-full mb-8">
              <MagneticButton href="/contact?interest=workshops-retreats-events" variant="gold" className="w-full justify-center">
                <Calendar className="size-4 mr-2" />
                <span>Make an enquiry</span>
              </MagneticButton>

              <MagneticButton href="https://wa.me/447960964839" variant="teal" className="w-full justify-center">
                <Phone className="size-4 mr-2" />
                <span>Message Us on WhatsApp</span>
              </MagneticButton>
            </div>

            <div className="pt-6 border-t border-ivory-surface/15 w-full text-xs text-ivory-surface/75">
              Details TBC &bull;{" "}
              <a href="mailto:hello@journey2better.com" className="underline decoration-gold-harvest/50 hover:text-gold-harvest transition-colors">
                hello@journey2better.com
              </a>{" "}
              &bull; +44 7960 964839
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
