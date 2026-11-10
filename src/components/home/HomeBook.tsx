import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { brandPositioning } from "@/content/j2b";

export const HomeBook: React.FC = () => (
  <section className="relative py-20 sm:py-28 bg-ivory-canvas overflow-hidden">
    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-xs aspect-[3/4] rounded-xl overflow-hidden bg-midnight-deep border border-gold-harvest/40 shadow-[0_24px_60px_-28px_rgba(2,64,77,0.5)]">
            <div className="absolute inset-0 flex flex-col justify-between p-7">
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.28em] text-gold-harvest font-semibold">
                  Forthcoming Memoir
                </span>
                <BotanicalMotif size={20} />
              </div>
              <div>
                <span className="block h-px w-12 bg-gold-harvest/70 mb-4" aria-hidden="true" />
                <p className="font-serif text-3xl font-bold text-ivory-surface leading-tight">
                  My Journey to Becoming Better
                </p>
              </div>
              <p className="font-serif italic text-sm text-gold-harvest">Sade Omatsuli</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
              The memoir
            </span>
          </div>
          <h2 className="font-serif editorial-h2 font-bold text-midnight mb-6 reveal-heading">
            It begins with{" "}
            <span className="italic font-normal text-gold-deep">one honest story.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed mb-8 max-w-2xl">
            {brandPositioning.memoir}
          </p>
          <div className="flex flex-col sm:flex-row gap-3.5">
            <Link
              href="/book"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-midnight hover:bg-midnight-deep text-ivory-canvas px-6 py-3.5 text-xs font-semibold uppercase tracking-wider border border-gold-harvest/45 transition-all duration-200 min-h-[46px]"
            >
              <span>Discover the memoir</span>
              <ArrowRight className="size-4 text-gold-harvest" />
            </Link>
            <Link
              href="/contact?interest=book-resources"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-midnight/40 bg-ivory-surface/60 hover:border-midnight hover:bg-ivory-surface text-midnight px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 min-h-[46px]"
            >
              Register book interest
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
