import React from "react";
import { ArrowRight, Mail, Phone, Heart } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";

export const HomeThreshold: React.FC = () => {
  return (
    <section
      id="threshold"
      className="relative py-32 sm:py-44 bg-plum-deep text-cream overflow-hidden border-t border-gold/20"
    >
      {/* Editorial Decorative Subtle Rings */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full border border-gold/15 opacity-50"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full border border-gold/15 opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center z-10">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold mb-8">
          <Heart className="size-3 text-gold" />
          <span>The Next Step</span>
        </div>

        {/* Primary Claret Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-cream leading-[1.1] mb-8 text-balance">
          Walk the rest of the way{" "}
          <span className="font-serif italic text-gold font-light">
            together.
          </span>
        </h2>

        {/* Supporting Narrative */}
        <p className="font-sans text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
          Come as you are. There are no expectations to perform, no prerequisites,
          and no judgment. Just a circle of women who will know your story and cheer
          for your growth.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          <MagneticButton
            href="mailto:hello@journey2better.com?subject=Joining%20Journey%202%20Better"
            variant="primary"
            className="w-full sm:w-auto"
          >
            <span>Request An Invitation</span>
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

        {/* Honest Privacy & Welcome Notice */}
        <div className="pt-8 border-t border-cream/10 text-xs text-cream/60 max-w-lg mx-auto">
          <p>
            We reply to every woman personally. Share a little about where you
            are in your journey, and we will introduce you to a circle that fits
            your season.
          </p>
        </div>
      </div>
    </section>
  );
};
