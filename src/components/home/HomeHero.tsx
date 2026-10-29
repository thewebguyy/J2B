"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-[86vh] flex items-center pt-6 pb-16 sm:pb-24 lg:pb-28 overflow-hidden">
      {/* Right-Margin Silhouette & Path Echo bleeding toward the right viewport margin */}
      <div
        className="pointer-events-none absolute -right-16 sm:-right-10 lg:-right-6 top-6 bottom-0 w-[340px] sm:w-[440px] lg:w-[540px] opacity-85 -z-10"
        aria-hidden="true"
      >
        <BotanicalMotif variant="silhouette-echo" className="w-full h-full" />
      </div>

      {/* Left-Margin Organic Botanical Watermark */}
      <div
        className="pointer-events-none absolute -left-12 top-14 w-64 h-64 sm:w-80 sm:h-80 opacity-75 -z-10"
        aria-hidden="true"
      >
        <BotanicalMotif variant="watermark" size={300} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
        {/* Asymmetric Editorial Composition (7 / 5 staggered with left golden margin anchor) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Expressive Editorial Narrative with Golden Path Margin Spine */}
          <div className="lg:col-span-8 relative pl-0 sm:pl-8 lg:pl-10 pt-2 lg:pt-6">
            {/* Delicate Golden Line weaving down the left editorial margin */}
            <div className="hidden sm:block absolute left-0 top-2 bottom-4 w-6 pointer-events-none" aria-hidden="true">
              <PathRibbon variant="margin-anchor" className="h-full" />
            </div>

            {/* Editorial Eyebrow — Unboxed magazine folio style */}
            <div className="inline-flex items-center gap-3 mb-6">
              <BotanicalMotif size={20} />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                Your companion on the journey to better
              </span>
              <span className="h-px w-10 bg-gold-harvest/60" aria-hidden="true" />
            </div>

            {/* Expressive Left-Aligned Editorial Headline */}
            <h1 className="font-serif editorial-display font-bold text-midnight mb-8 max-w-3xl reveal-heading">
              Every journey begins{" "}
              <span className="italic font-normal text-teal-living block sm:inline">
                somewhere
              </span>
              <span className="text-gold-harvest">.</span>
            </h1>

            {/* Editorial Staggered Lead Copy */}
            <div className="sm:pl-6 lg:pl-10 border-l-2 border-gold-harvest/50 max-w-2xl mb-10">
              <p className="font-sans text-lg sm:text-xl text-charcoal/90 font-normal leading-relaxed">
                Becoming the woman you are meant to be is deeply personal — but it was never intended to be lonely. Journey 2 Better is a welcoming UK sisterhood for mindful growth, meaningful connection, and everyday encouragement.
              </p>
            </div>

            {/* Primary & Secondary Call to Actions + Editorial Note */}
            <div className="sm:pl-6 lg:pl-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <MagneticButton href="/community#join" variant="primary">
                <span>Begin Your Journey</span>
                <ArrowRight className="size-4 text-gold-harvest" />
              </MagneticButton>

              <MagneticButton href="/about" variant="outline">
                <span>Read Our Story</span>
              </MagneticButton>
            </div>

            {/* Grounded Editorial Truth Footnote */}
            <div className="mt-10 sm:pl-6 lg:pl-10 flex items-center gap-3 text-xs text-muted-foreground font-sans">
              <Sparkles className="size-3.5 text-gold-harvest flex-shrink-0" />
              <span>No pretenses. No prerequisites. Come as you are in the messy middle.</span>
            </div>
          </div>

          {/* Right Column: Asymmetric Overlapping Brand Sanctuary Vignette */}
          <div className="lg:col-span-4 lg:mt-14 relative flex flex-col items-start lg:items-end">
            <div className="relative w-full max-w-sm lg:mr-[-1.5rem]">
              {/* Unboxed Editorial Artwork Plate with Overlapping Frame */}
              <div className="relative bg-ivory-canvas border-l-2 border-b-2 border-gold-harvest/50 p-3 sm:p-4 shadow-[0_20px_50px_-20px_rgba(2,64,77,0.14)]">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2.5 pb-2 border-b border-ivory-border">
                  <span>BECOMING &bull; UK SISTERHOOD</span>
                  <span className="text-gold-deep font-semibold">EST. LONDON</span>
                </div>

                <div className="relative aspect-[1206/986] overflow-hidden bg-ivory-canvas">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Journey 2 Better — Two silhouettes in harmony with the golden path of becoming"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>

              {/* Overlapping Editorial Marginalia Pull-Quote */}
              <blockquote className="relative mt-4 sm:-mt-6 sm:-ml-8 z-10 bg-midnight-deep text-ivory-surface p-5 sm:p-6 border-l-4 border-gold-harvest shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <BotanicalMotif size={15} orientation="up" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-harvest">
                    The Living Thread
                  </span>
                </div>
                <p className="font-serif italic text-sm sm:text-base text-ivory-surface/95 leading-snug">
                  &ldquo;A gentle reminder that growth happens together, one honest step at a time.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
