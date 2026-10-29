import React from "react";

export const HomeEthos: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-blush/40 border-y border-border/70 overflow-hidden">
      {/* Editorial Watermark Detail */}
      <div
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-serif italic text-9xl sm:text-[14rem] text-plum/[0.03] select-none font-light leading-none -z-0"
        aria-hidden="true"
      >
        sisterhood
      </div>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 z-10 text-center">
        {/* Editorial Section Label */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="h-px w-8 bg-gold" />
          <span className="text-xs font-semibold uppercase tracking-widest text-plum">
            Our Purpose &amp; Ethos
          </span>
          <span className="h-px w-8 bg-gold" />
        </div>

        {/* Oversized Statement */}
        <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl text-plum font-normal leading-[1.25] tracking-tight mb-10 text-balance">
          &ldquo;Journey 2 Better exists to create a powerful community where women
          lift each other up, share their stories, and grow into their fullest
          potential.&rdquo;
        </blockquote>

        {/* Sub-statement with breath pacing */}
        <p className="font-serif italic text-xl sm:text-2xl text-berry font-light max-w-2xl mx-auto leading-relaxed">
          Because every woman deserves a community that believes in her before
          she even speaks.
        </p>
      </div>
    </section>
  );
};
