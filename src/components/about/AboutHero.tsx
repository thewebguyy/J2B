"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-cream">
      {/* Subtle Grain Texture */}
      <div className="pointer-events-none absolute inset-0 editorial-grain opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Asymmetrical Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Title Block (7 cols) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-blush px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-plum border border-border/80 mb-6">
              <span className="size-1.5 rounded-full bg-berry" />
              <span>About Us • Our Origins</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-plum leading-[1.05] mb-8 text-balance">
              A community built on{" "}
              <span className="font-serif italic text-berry font-light">
                sisterhood.
              </span>
            </h1>

            <p className="font-serif italic text-2xl sm:text-3xl text-plum/90 font-light leading-snug mb-8 max-w-2xl">
              &ldquo;Women grow faster, heal deeper, and dream bigger when they are
              surrounded by other women who believe in them.&rdquo;
            </p>
          </div>

          {/* Right Narrative Spacing (5 cols) */}
          <div className="lg:col-span-5 lg:pt-14">
            <div className="border-l-2 border-gold/60 pl-6 sm:pl-8 space-y-5">
              <p className="font-sans text-base sm:text-lg text-foreground/85 leading-relaxed">
                What started as a handful of women meeting to talk honestly about
                life has grown into a community that spans homes, workplaces, and
                time zones.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                The conversations are still the heart of it — real, warm, and
                unhurried. We gather not to impress one another, but to be known.
              </p>
              <div className="pt-4">
                <MagneticButton href="#values" variant="outline">
                  <span>Explore our values</span>
                  <ArrowRight className="size-3.5" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>

        {/* Documentary Gallery Spread (Asymmetric 3-image editorial frame) */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">
          <div className="sm:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden bg-blush border border-border shadow-[0_20px_40px_-15px_rgba(56,18,38,0.1)]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80')`,
              }}
              role="img"
              aria-label="Women sharing an honest, supportive conversation around a table"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent opacity-50" />
            <div className="absolute bottom-6 left-6 text-white text-xs font-mono uppercase tracking-widest bg-plum/70 backdrop-blur px-3 py-1 rounded-full">
              The First Circles • London
            </div>
          </div>

          <div className="sm:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden bg-blush border border-border shadow-[0_20px_40px_-15px_rgba(56,18,38,0.1)]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80')`,
              }}
              role="img"
              aria-label="Quiet reflective moment of a woman smiling outdoors"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent opacity-50" />
            <div className="absolute bottom-6 left-6 text-white text-xs font-mono uppercase tracking-widest bg-plum/70 backdrop-blur px-3 py-1 rounded-full">
              Unhurried Pacing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
