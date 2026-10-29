import React from "react";
import Image from "next/image";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pb-28 bg-ivory-canvas overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Header Breadcrumb / Label */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-living">
              The Why &bull; About Journey 2 Better
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-midnight leading-[1.1] tracking-tight mb-8">
            Becoming is not something{" "}
            <span className="italic font-normal text-gold-harvest block sm:inline">
              we do alone.
            </span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-charcoal/85 leading-relaxed font-normal">
            Journey 2 Better was founded in the UK out of a simple, undeniable human truth: every woman desires to grow, yet too many are asked to navigate life&apos;s pivotal transitions in isolation.
          </p>
        </div>

        {/* Editorial Feature Lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Origin Story Narrative */}
          <div className="lg:col-span-7 bg-ivory-surface rounded-3xl p-8 sm:p-12 border border-ivory-border shadow-sm relative overflow-hidden">
            <PathRibbon variant="narrative-flow" className="absolute top-0 right-0 w-64 opacity-20 pointer-events-none" />

            <span className="text-xs uppercase tracking-widest font-semibold text-gold-harvest block mb-4">
              Our Founding Intention
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mb-6 leading-snug">
              Creating a sanctuary where honesty replaces the pressure to perform.
            </h2>

            <div className="space-y-4 text-charcoal/80 font-sans text-base leading-relaxed">
              <p>
                In a culture saturated with curated success stories and relentless productivity, women frequently find themselves carrying family, career, and personal expectations without a safe place to speak truthfully about the fatigue, the uncertainty, or the quiet longing for more.
              </p>
              <p>
                Journey 2 Better is being built as that companion. A community where you don&apos;t have to present an edited version of yourself to belong. Whether you are thriving, rebuilding, or simply searching for like-minded companions, your seat at the table is prepared.
              </p>
            </div>
          </div>

          {/* Right: Authentic Logo Artwork & Symbolism */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm rounded-3xl p-4 bg-gradient-to-b from-ivory-surface to-ivory-canvas border border-gold-harvest/40 shadow-xl">
              <div className="relative aspect-[1206/986] rounded-2xl overflow-hidden bg-ivory-canvas flex items-center justify-center">
                <Image
                  src="/images/logo.jpeg"
                  alt="Journey 2 Better — Two silhouettes in harmony"
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Symbolism Annotation */}
              <div className="mt-4 pt-4 border-t border-ivory-border/80 text-center">
                <p className="font-serif italic text-sm text-midnight">
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
