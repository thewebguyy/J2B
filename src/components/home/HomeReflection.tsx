import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { j2bContent } from "@/content/j2b";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { MotionReveal } from "@/components/common/MotionReveal";

/**
 * HomeReflection: Dedicated editorial space for the founder's reflection callout.
 * Displays the client-supplied reflection verbatim while proposed copy edits await approval.
 */
export const HomeReflection: React.FC = () => {
  const { eyebrow, proposedPolished, attribution } = j2bContent.reflection;

  return (
    <section
      aria-labelledby="home-reflection-heading"
      className="relative py-14 sm:py-20 bg-ivory-canvas border-t border-ivory-border/80 overflow-hidden"
    >
      <div className="relative mx-auto max-w-5xl px-5 sm:px-10 lg:px-14">
        <MotionReveal y={18} duration={0.75}>
          <div className="relative rounded-2xl bg-midnight-deep text-ivory-canvas border border-gold-harvest/35 px-6 py-10 sm:px-12 sm:py-14 shadow-[0_24px_60px_-28px_rgba(2,64,77,0.45)] overflow-hidden">
            <BotanicalMotif
              variant="watermark"
              size={220}
              orientation="left"
              className="absolute -right-10 -bottom-10 opacity-30 pointer-events-none"
            />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2.5 mb-5">
                <BotanicalMotif size={18} />
                <span
                  id="home-reflection-heading"
                  className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-harvest"
                >
                  {eyebrow}
                </span>
              </div>

              <blockquote className="pl-5 sm:pl-7 border-l-2 border-gold-harvest/80">
                <p className="font-serif italic text-xl sm:text-2xl lg:text-[1.85rem] text-white leading-snug sm:leading-[1.38] font-normal">
                  &ldquo;{proposedPolished}&rdquo;
                </p>
              </blockquote>

              <div className="mt-7 pt-5 border-t border-ivory-surface/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="font-sans text-xs sm:text-sm text-ivory-surface/80 tracking-wide">
                  {attribution}
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-harvest hover:text-gold-light transition-colors min-h-[44px] py-2"
                >
                  <span>Why we started</span>
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};

