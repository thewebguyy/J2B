"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";

export const CommunityHero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-cream">
      {/* Subtle Grain Overlay */}
      <div
        className="pointer-events-none absolute inset-0 editorial-grain opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Headline Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-blush px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-plum border border-border/80 mb-6">
              <Heart className="size-3 text-berry" />
              <span>The Sisterhood Community</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-plum leading-[1.05] mb-8 text-balance">
              You were never meant to do it{" "}
              <span className="font-serif italic text-berry font-light">
                alone.
              </span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-foreground/85 leading-relaxed max-w-xl mb-10 font-normal">
              Our community is small enough to feel like family and wide enough to
              open doors you did not know existed.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <MagneticButton href="#join" variant="primary">
                <span>Request an Invitation</span>
                <ArrowRight className="size-4" />
              </MagneticButton>

              <Link
                href="#offerings"
                className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-plum hover:text-berry py-3 px-2 transition-colors duration-300"
              >
                <span>Explore Sister Circles</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  ↓
                </span>
              </Link>
            </div>
          </div>

          {/* Visual Composition Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-blush border border-border shadow-[0_24px_50px_-15px_rgba(56,18,38,0.12)]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=1000&q=80')`,
                  }}
                  role="img"
                  aria-label="Women sitting closely together sharing in warm community"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/75 via-plum/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                  <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">
                    Monthly Sister Circles
                  </p>
                  <p className="font-serif italic text-2xl text-cream font-light">
                    &ldquo;Heard by name, not lost in a crowd.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
