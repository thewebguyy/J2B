import React from "react";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";

export const AboutThreshold: React.FC = () => {
  return (
    <section
      id="join"
      className="relative py-32 sm:py-44 bg-plum-deep text-cream overflow-hidden border-t border-gold/20"
    >
      {/* Decorative Warm Ambient Motif */}
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
          <circle cx="500" cy="300" r="280" stroke="var(--gold)" strokeWidth="1" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold mb-8">
          <Sparkles className="size-3 text-gold" />
          <span>An Open Invitation</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-cream leading-[1.1] mb-8 text-balance">
          Take the next{" "}
          <span className="font-serif italic text-gold font-light">
            brave step.
          </span>
        </h2>

        <p className="font-sans text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
          Whether you are ready to join a monthly circle in London, connect
          virtually from home, or simply begin an honest conversation — you are
          warmly welcomed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <MagneticButton
            href="mailto:hello@journey2better.com?subject=Joining%20Journey%202%20Better"
            variant="primary"
            className="w-full sm:w-auto"
          >
            <span>Connect With Us</span>
            <ArrowRight className="size-4" />
          </MagneticButton>

          <a
            href="tel:+447960964839"
            className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-gold transition-colors py-3 px-4"
          >
            <Phone className="size-4" />
            <span>Call or WhatsApp: +44 7960 964839</span>
          </a>
        </div>

        <div className="pt-8 border-t border-cream/10 text-xs text-cream/60 max-w-lg mx-auto">
          <p>
            No complex signups or automated funnels. Every enquiry is read and
            answered by one of our community facilitators.
          </p>
        </div>
      </div>
    </section>
  );
};
