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
              <span className="font-serif italic text-sm text-gold-deep">
                The Why &mdash;
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                About Journey 2 Better
              </span>
              <span className="h-px w-10 bg-gold-harvest/60" aria-hidden="true" />
            </div>

            <h1 className="font-serif editorial-display font-bold text-midnight mb-8 reveal-heading">
              Becoming is not something{" "}
              <span className="italic font-normal text-gold-harvest block sm:inline">
                we do alone.
              </span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-charcoal/85 leading-relaxed font-normal max-w-2xl">
              Journey 2 Better was founded in the UK out of a simple, undeniable human truth: every woman desires to grow, yet too many are asked to navigate life&apos;s pivotal transitions in isolation.
            </p>
          </div>
        </div>

        {/* Editorial Feature Lockup: Unboxed Pull-Quote Style with Generous Gold Left Border */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left: Origin Story Narrative (Unboxed Editorial Pull-Quote Spread on Warm Ivory) */}
          <div className="lg:col-span-7 pl-6 sm:pl-10 lg:pl-12 border-l-4 border-gold-harvest py-2 relative">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-deep">
                Our Founding Intention
              </span>
              <BotanicalMotif size={16} orientation="up" />
            </div>

            <h2 className="font-serif editorial-pullquote font-bold text-midnight mb-6">
              &ldquo;Creating a sanctuary where honesty replaces the pressure to perform.&rdquo;
            </h2>

            <div className="space-y-5 text-charcoal/85 font-sans text-base sm:text-lg leading-relaxed max-w-2xl">
              <p>
                In a culture saturated with curated success stories and relentless productivity, women frequently find themselves carrying family, career, and personal expectations without a safe place to speak truthfully about the fatigue, the uncertainty, or the quiet longing for more.
              </p>
              <p>
                Journey 2 Better is being built as that companion. A community where you don&apos;t have to present an edited version of yourself to belong. Whether you are thriving, rebuilding, or simply searching for like-minded companions, your seat at the table is prepared.
              </p>
            </div>
          </div>

          {/* Right: Authentic Logo Artwork & Symbolism Editorial Plate */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
            <div className="relative w-full max-w-sm bg-ivory-surface/70 border-l-2 border-b-2 border-gold-harvest/50 p-5 sm:p-6 shadow-[0_18px_45px_-18px_rgba(2,64,77,0.12)]">
              <div className="relative aspect-[1206/986] overflow-hidden bg-ivory-canvas flex items-center justify-center">
                <Image
                  src="/images/logo.jpeg"
                  alt="Journey 2 Better — Two silhouettes in harmony"
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Symbolism Annotation */}
              <div className="mt-4 pt-4 border-t border-ivory-border/80">
                <p className="font-serif italic text-sm text-midnight leading-snug">
                  Two silhouettes in harmony &bull; The ascending golden pathway &bull; Companions on the journey
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
