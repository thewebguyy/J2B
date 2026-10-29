import React from "react";
import { ArrowRight, Mail, Phone, Calendar } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";

export const EventsThreshold: React.FC = () => {
  return (
    <section
      id="waitlist"
      className="relative py-32 sm:py-44 bg-plum-deep text-cream overflow-hidden border-t border-gold/20"
    >
      {/* Decorative Golden Thread Ring Motif */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        aria-hidden="true"
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 50 150 Q 500 450 950 150"
            stroke="var(--gold)"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold mb-8">
          <Calendar className="size-3 text-gold" />
          <span>Member Priority Access</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-cream leading-[1.1] mb-8 text-balance">
          Never miss a{" "}
          <span className="font-serif italic text-gold font-light">
            gathering.
          </span>
        </h2>

        <p className="font-sans text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
          Dates for upcoming workshops and our spring retreat are shared with
          members first. Reach out to be added to the priority list.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <MagneticButton
            href="mailto:hello@journey2better.com?subject=Events%20Waitlist%20Request"
            variant="primary"
            className="w-full sm:w-auto"
          >
            <span>Join the Events Waitlist</span>
            <ArrowRight className="size-4" />
          </MagneticButton>

          <a
            href="tel:+447960964839"
            className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-gold transition-colors py-3 px-4"
          >
            <Phone className="size-4" />
            <span>Or message us on WhatsApp</span>
          </a>
        </div>

        <div className="pt-8 border-t border-cream/10 text-xs text-cream/60 max-w-lg mx-auto space-y-2">
          <p>
            We respect your inbox. You will only receive announcements regarding
            verified gathering dates, London workshops, and retreat bookings.
          </p>
          <p className="font-mono text-gold/80">hello@journey2better.com • +44 7960 964839</p>
        </div>
      </div>
    </section>
  );
};
