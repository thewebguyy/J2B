"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-[86vh] flex items-center pt-8 pb-20 sm:pb-24 lg:pb-28 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 w-full">
        {/* Tactile Editorial Sanctuary Composition — Unobstructed Left Reading Flow + Warm Documentary Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Unobstructed Editorial Narrative (Zero colliding background line art) */}
          <div className="lg:col-span-7 pt-2 lg:pt-4">
            {/* Editorial Folio Header — No generic leaf/sparkle icons */}
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="font-serif italic text-sm text-gold-deep">
                Issue 01 &mdash;
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                Your companion on the journey to better
              </span>
            </div>

            {/* Expressive Left-Aligned Editorial Headline on Clean Unobstructed Canvas */}
            <h1 className="font-serif editorial-display font-bold text-midnight mb-8 max-w-2xl reveal-heading">
              Every journey begins{" "}
              <span className="italic font-normal text-teal-living block sm:inline">
                somewhere
              </span>
              <span className="text-gold-harvest">.</span>
            </h1>

            {/* Editorial Staggered Lead Copy */}
            <div className="pl-5 sm:pl-7 border-l-2 border-gold-harvest/65 max-w-xl mb-10">
              <p className="font-sans text-lg sm:text-xl text-charcoal/90 font-normal leading-relaxed">
                Becoming the woman you are meant to be is deeply personal — but it was never intended to be lonely. Journey 2 Better is a welcoming UK sisterhood for mindful growth, meaningful connection, and everyday encouragement.
              </p>
            </div>

            {/* Explicit Primary CTA & High-Contrast Secondary CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <MagneticButton href="/events" variant="primary">
                <span>Explore Upcoming Circles</span>
                <ArrowRight className="size-4 text-gold-harvest" />
              </MagneticButton>

              <MagneticButton href="/about" variant="outline">
                <span>Read Our Story</span>
              </MagneticButton>
            </div>

            {/* Editorial Footnote Annotation (No AI sparkle icon) */}
            <div className="mt-10 pt-5 border-t border-ivory-border/90 max-w-lg">
              <p className="font-serif italic text-sm text-muted-foreground">
                <span className="text-midnight font-semibold not-italic uppercase tracking-[0.15em] text-[11px] mr-2">
                  Editorial Note:
                </span>
                No pretenses. No prerequisites. Come as you are in the messy middle.
              </p>
            </div>
          </div>

          {/* Right Column: Warm Natural-Light Sanctuary Photography & Overlapping Print Plate */}
          <div className="lg:col-span-5 relative flex flex-col items-start lg:items-end">
            <div className="relative w-full max-w-lg">
              {/* Primary Atmospheric Photograph: Morning Tea & Open Journal in a Quiet London Room */}
              <figure className="relative bg-ivory-surface p-3 sm:p-4 border border-ivory-border shadow-[0_24px_60px_-20px_rgba(2,64,77,0.18)]">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2.5 pb-2 border-b border-ivory-border">
                  <span>SANCTUARY &bull; MORNING TABLE</span>
                  <span className="font-serif italic normal-case tracking-normal text-xs text-midnight">
                    London &amp; Across the UK
                  </span>
                </div>

                <div className="relative aspect-[16/11] overflow-hidden bg-midnight-deep">
                  <Image
                    src="/images/sanctuary-gathering.jpg"
                    alt="Warm morning light falling across a wooden table in a quiet London sanctuary with two ceramic mugs of herbal tea and an open journal"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 480px"
                    priority
                  />
                </div>

                <figcaption className="mt-3 flex items-center justify-between text-[11px] font-sans text-muted-foreground">
                  <span>Intimate circles &bull; Unhurried conversation</span>
                  <span className="text-gold-deep font-serif italic">Fig. 01</span>
                </figcaption>
              </figure>

              {/* Overlapping Editorial Marginalia Pull-Quote & Secondary Stillness Detail */}
              <div className="relative mt-4 sm:-mt-8 sm:-ml-6 z-10 grid grid-cols-12 gap-4 items-end">
                <blockquote className="col-span-12 sm:col-span-8 bg-midnight-deep text-ivory-surface p-5 sm:p-6 border-l-4 border-gold-harvest shadow-xl">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-harvest block mb-1.5">
                    The Living Thread
                  </span>
                  <p className="font-serif italic text-sm sm:text-base text-ivory-surface/95 leading-snug">
                    &ldquo;A gentle reminder that growth happens together, one honest step at a time.&rdquo;
                  </p>
                </blockquote>

                <div className="hidden sm:block sm:col-span-4 bg-ivory-canvas p-1.5 border border-ivory-border shadow-md">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/images/journal-stillness.jpg"
                      alt="Uncoated cotton paper journal and ceramic teacup on woven linen"
                      fill
                      className="object-cover"
                      sizes="140px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
