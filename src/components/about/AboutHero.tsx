import React from "react";
import Image from "next/image";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-20 sm:pb-28 bg-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        
        {/* Staggered Asymmetric Editorial Hero with Left Golden Line Anchor */}
        <div className="relative pl-0 sm:pl-10 lg:pl-14 mb-16 sm:mb-24">
          <div className="hidden sm:block absolute left-0 top-1 bottom-0 w-8 pointer-events-none" aria-hidden="true">
            <PathRibbon variant="margin-anchor" className="h-full" />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                About us
              </span>
              <span className="h-px w-10 bg-gold-harvest/60" aria-hidden="true" />
            </div>

            <h1 className="font-serif editorial-display font-bold text-midnight mb-8 reveal-heading">
              Growing is easier{" "}
              <span className="italic font-normal text-gold-harvest block sm:inline">
                when you&apos;re not alone.
              </span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-charcoal/85 leading-relaxed font-normal max-w-2xl">
              Journey 2 Better started in the UK for one simple reason: women want to grow, but too many of us go through life&apos;s big changes on our own.
            </p>
          </div>
        </div>

        {/* Editorial Feature Lockup: Unboxed Pull-Quote Style with Generous Gold Left Border */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left: Origin Story Narrative (Unboxed Editorial Pull-Quote Spread on Warm Ivory) */}
          <div className="lg:col-span-7 pl-6 sm:pl-10 lg:pl-12 border-l-4 border-gold-harvest py-2 relative">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-deep">
                Why we started
              </span>
              <BotanicalMotif size={16} orientation="up" />
            </div>

            <h2 className="font-serif editorial-pullquote font-bold text-midnight mb-6">
              &ldquo;A place where you can be honest, instead of pretending you&apos;re fine.&rdquo;
            </h2>

            <div className="space-y-5 text-charcoal/85 font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                Life asks a lot of women — family, work, everyone else&apos;s needs. Most of us have nowhere to say how tired or unsure we really feel, or that we want something more.
              </p>
              <p>
                Journey 2 Better is being built to be that place. You don&apos;t need to have your life together to belong here. Whether things are going well, falling apart or somewhere in between, there&apos;s a seat for you.
              </p>
            </div>
          </div>

          {/* Right: Authentic Still-Life Photography & Community Details */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
            <figure className="relative w-full max-w-md bg-ivory-surface p-4 sm:p-5 border border-ivory-border shadow-[0_20px_50px_-20px_rgba(2,64,77,0.15)]">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3 pb-2 border-b border-ivory-border">
                <span>COMMUNITY &bull; COMPANIONSHIP</span>
                <span className="font-serif italic normal-case tracking-normal text-xs text-midnight">
                  London &amp; UK
                </span>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden bg-midnight-deep">
                <Image
                  src="/images/about-sisterhood.jpg"
                  alt="Two pairs of hands resting by steaming ceramic tea mugs, soft linen, and an open journal at a wooden table in London"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>

              <figcaption className="mt-3 flex items-center justify-between text-[11px] font-sans text-muted-foreground">
                <span>Real conversation &bull; Cups of tea &bull; No posturing</span>
                <span className="text-gold-deep font-serif italic">Fig. 02</span>
              </figcaption>
            </figure>
          </div>

        </div>

      </div>
    </section>
  );
};
