import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { j2bContent } from "@/content/j2b";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

export const AboutFounder: React.FC = () => {
  const founder = j2bContent.founder;
  const body = founder.biography.slice(0, 4);
  const contactLine = founder.biography[4];

  return (
    <section className="relative py-20 sm:py-28 bg-ivory-surface border-y border-ivory-border overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Intentional text-led monogram placeholder: no approved photograph exists. */}
          <div className="lg:col-span-4">
            <figure className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-midnight-deep border border-gold-harvest/40 shadow-[0_24px_60px_-24px_rgba(2,64,77,0.45)] flex items-center justify-center">
              <BotanicalMotif
                variant="watermark"
                size={240}
                orientation="left"
                className="absolute -bottom-8 -right-8 opacity-40"
              />
              <div className="relative text-center px-8 py-12">
                <span
                  aria-hidden="true"
                  className="font-serif italic text-7xl sm:text-8xl font-bold text-gold-harvest leading-none block tracking-tight"
                >
                  S&nbsp;O
                </span>
                <span className="mt-5 h-px w-14 bg-gold-harvest/60 mx-auto block" aria-hidden="true" />
                <span className="mt-5 font-serif italic text-lg sm:text-xl text-ivory-surface block">
                  Founder, Journey2Better
                </span>
              </div>
            </figure>
          </div>

          {/* Founder narrative */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2.5 mb-5">
              <BotanicalMotif size={20} />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
                About the founder
              </span>
            </div>

            <h2 className="font-serif editorial-h2 font-bold text-midnight mb-3 reveal-heading">
              {founder.name}
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-gold-deep mb-8">
              Registered Mental Health Nurse &bull; Chartered Manager (CMI) &bull; Faith-based leader
            </p>

            <div className="space-y-5 text-charcoal/85 font-sans text-base sm:text-lg leading-relaxed max-w-3xl">
              {body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 rounded-xl p-6 sm:p-8 bg-ivory-canvas border-l-2 border-gold-harvest">
              <p className="font-sans text-base sm:text-lg text-charcoal/90 leading-relaxed">
                {contactLine}
              </p>
              <a
                href="/contact?interest=speaking"
                className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-midnight hover:bg-midnight-deep text-ivory-canvas px-6 py-3.5 text-xs font-semibold uppercase tracking-wider border border-gold-harvest/45 transition-all duration-200"
              >
                <Mail className="size-4 text-gold-harvest" />
                <span>Work with Sade</span>
                <ArrowRight className="size-4 text-gold-harvest" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
