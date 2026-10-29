"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-20 md:pb-28 overflow-hidden">
      {/* Background Ambient Path of Becoming */}
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-subtle rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-subtle rounded-full blur-3xl -z-10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Expressive Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Curated Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-ivory-surface border border-gold-harvest/30 mb-8 shadow-xs">
              <BotanicalMotif size={18} />
              <span className="text-xs uppercase tracking-widest font-semibold text-midnight">
                Your companion on the journey to better
              </span>
            </div>

            {/* High-Character Editorial Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-midnight leading-[1.08] tracking-tight mb-7">
              Every journey begins{" "}
              <span className="italic font-normal text-teal-living block sm:inline">
                somewhere.
              </span>
            </h1>

            {/* Authentic Brand Narrative */}
            <p className="font-sans text-lg sm:text-xl text-charcoal/85 font-normal leading-relaxed max-w-xl mb-10">
              Becoming the woman you are meant to be is deeply personal — but it was never intended to be lonely. Journey 2 Better is a welcoming UK sisterhood for mindful growth, meaningful connection, and everyday encouragement.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <MagneticButton href="/community#join" variant="primary">
                <span>Begin Your Journey</span>
                <ArrowRight className="size-4 text-gold-harvest" />
              </MagneticButton>

              <MagneticButton href="/about" variant="outline">
                <span>Read Our Story</span>
              </MagneticButton>
            </div>

            {/* Truth Note */}
            <div className="mt-10 pt-6 border-t border-ivory-border/80 flex items-center gap-3 text-xs text-muted-foreground font-sans">
              <Sparkles className="size-3.5 text-gold-harvest flex-shrink-0" />
              <span>No pretenses. No prerequisites. Come as you are in the messy middle.</span>
            </div>
          </div>

          {/* Right Column: Visual Sanctuary Lockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              
              {/* Organic Arched Frame holding Authentic Logo Artwork */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-b from-ivory-surface via-ivory-canvas to-ivory-surface border border-gold-harvest/40 shadow-2xl overflow-hidden">
                <div className="relative aspect-[1206/986] rounded-2xl overflow-hidden bg-ivory-canvas flex items-center justify-center">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Journey 2 Better — Two silhouettes in harmony with the golden path of becoming"
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>

                {/* Subtle Inner Gold Ribbon Accent */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold-harvest/15 rounded-full blur-xl pointer-events-none" />
              </div>

              {/* Ascending Path Beacon Motif at top-left corner */}
              <div className="absolute -top-6 -left-6 hidden sm:block">
                <PathRibbon variant="ascending-beacon" className="scale-90" />
              </div>

              {/* Floating Editorial Quote Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-ivory-canvas/95 backdrop-blur-md border border-ivory-border rounded-2xl p-4 sm:p-5 shadow-xl max-w-xs transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <BotanicalMotif size={16} orientation="up" />
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-teal-living">
                    Sisterhood
                  </span>
                </div>
                <p className="font-serif italic text-sm text-midnight leading-snug">
                  &ldquo;A gentle reminder that growth happens together, one honest step at a time.&rdquo;
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
