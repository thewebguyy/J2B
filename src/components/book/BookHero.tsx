import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";
import { brandPositioning } from "@/content/j2b";

export const BookHero: React.FC = () => (
  <section className="relative pt-10 pb-20 sm:pb-28 bg-ivory-canvas overflow-hidden">
    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 mb-6">
            <BotanicalMotif size={20} />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
              The Memoir
            </span>
            <span className="h-px w-10 bg-gold-harvest/60" aria-hidden="true" />
          </div>

          <h1 className="font-serif editorial-display font-bold text-midnight mb-6 reveal-heading">
            My Journey to{" "}
            <span className="italic font-normal text-gold-deep">Becoming Better</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-charcoal/85 leading-relaxed max-w-2xl mb-4">
            A forthcoming reflective memoir by Sade Omatsuli, rooted in lived experience and the
            lessons gathered along the way.
          </p>
          <p className="font-sans text-base sm:text-lg text-charcoal/75 leading-relaxed max-w-2xl mb-8">
            {brandPositioning.memoir}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#story"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-midnight hover:bg-midnight-deep text-ivory-canvas px-7 py-3.5 text-xs font-semibold uppercase tracking-wider border border-gold-harvest/45 transition-all duration-300"
            >
              <span>Explore the story</span>
              <ArrowRight className="size-4 text-gold-harvest" />
            </Link>
            <Link
              href="/contact?interest=book-resources"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-midnight/55 bg-ivory-canvas/70 hover:border-midnight text-midnight px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <span>Register book interest</span>
            </Link>
          </div>
        </div>

        {/* Text-led book treatment — no fabricated cover imagery. */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <figure className="relative w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden bg-midnight-deep border border-gold-harvest/40 shadow-[0_30px_70px_-30px_rgba(2,64,77,0.55)]">
            <div className="absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true">
              <PathRibbon variant="soft-horizon" />
            </div>
            <div className="relative h-full flex flex-col justify-between p-8 sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold-harvest font-semibold">
                  Forthcoming Memoir
                </span>
                <BotanicalMotif size={24} />
              </div>

              <div>
                <span className="block h-px w-16 bg-gold-harvest/70 mb-6" aria-hidden="true" />
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ivory-surface leading-tight">
                  My Journey to Becoming Better
                </h2>
              </div>

              <div>
                <span className="block h-px w-16 bg-gold-harvest/70 mb-4" aria-hidden="true" />
                <p className="font-serif italic text-lg text-gold-harvest">Sade Omatsuli</p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-ivory-surface/60 mt-2">
                  Journey2Better
                </p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
);
