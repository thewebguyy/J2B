"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden flex items-center">
      {/* Editorial Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 editorial-grain opacity-60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Typographic Storytelling Column (Asymmetric 7-col) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Editorial Eyebrow with living thread accent */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-blush/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-plum border border-border/80 mb-8 animate-fade-in-up">
              <span className="size-1.5 rounded-full bg-berry" />
              <span>A UK Sisterhood for Real Life</span>
            </div>

            {/* Primary Headline: "Come as you are." */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-plum leading-[1.05] mb-8 text-balance">
              Come as{" "}
              <span className="font-serif italic text-berry font-light underline decoration-gold/60 decoration-wavy decoration-1 underline-offset-8">
                you are.
              </span>
            </h1>

            {/* Narrative Body */}
            <p className="font-sans text-lg sm:text-xl text-foreground/85 leading-relaxed max-w-xl mb-10 font-normal">
              A warm, unhurried sanctuary where women lift each other up, share
              their stories, and grow into their fullest potential through every
              season of life.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <MagneticButton href="#threshold" variant="primary">
                <span>Join the Community</span>
                <ArrowRight className="size-4" />
              </MagneticButton>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-plum hover:text-berry py-3 px-2 transition-colors duration-300"
              >
                <span>Read our story</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Gentle Trust Marker */}
            <div className="mt-14 pt-8 border-t border-border/70 flex items-center gap-4 text-xs text-muted-foreground">
              <p>
                Meeting across London and online • Monthly circles, workshops &amp; retreats
              </p>
            </div>
          </div>

          {/* Editorial Visual Composition Column (Asymmetric 5-col) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Layered Editorial Card with tactile border */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-blush border border-border/90 shadow-[0_24px_50px_-15px_rgba(56,18,38,0.12)]">
                {/* Authentic Documentary Visual Framing */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80')`,
                  }}
                  role="img"
                  aria-label="Women meeting together in warm, unhurried conversation"
                />

                {/* Soft Warm Film Grain & Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum/80 via-plum/20 to-transparent" />

                {/* Editorial Caption Inside Frame */}
                <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">
                    The Gathering
                  </p>
                  <p className="font-serif italic text-xl sm:text-2xl font-light text-cream leading-snug">
                    &ldquo;Heard by name, not lost in a crowd.&rdquo;
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Thread Motif Accent Behind */}
              <div
                className="pointer-events-none absolute -bottom-6 -right-6 size-32 rounded-full border border-gold/40 -z-10 opacity-70"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
