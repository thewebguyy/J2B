import React from "react";

export const AboutMessyMiddle: React.FC = () => {
  return (
    <section className="relative py-32 sm:py-44 bg-blush/50 border-y border-border/80 overflow-hidden">
      {/* Background Watermark Typography */}
      <div
        className="pointer-events-none absolute -left-12 top-1/2 -translate-y-1/2 font-serif italic text-9xl sm:text-[15rem] text-plum/[0.03] select-none font-light leading-none -z-0"
        aria-hidden="true"
      >
        becoming
      </div>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 z-10">
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="size-2 rounded-full bg-berry" />
          <span className="text-xs font-semibold uppercase tracking-widest text-plum">
            The Space We Hold
          </span>
        </div>

        {/* Major Typographic Centerpiece */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-plum font-normal tracking-tight leading-[1.12] mb-12 text-balance">
          We create space for the{" "}
          <span className="font-serif italic text-berry font-light">
            messy middle of life
          </span>{" "}
          as much as the milestones.
        </h2>

        {/* Staggered Narrative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 pt-6">
          <div className="border-t border-gold/40 pt-6">
            <p className="font-serif text-2xl text-plum mb-3 font-normal">
              Not Just The Highlights
            </p>
            <p className="font-sans text-base sm:text-lg text-foreground/80 leading-relaxed">
              Modern culture asks women to present only the finished product: the
              promotion, the perfect home, the effortless balance. We believe
              the sacred work happens while things are still taking shape.
            </p>
          </div>

          <div className="border-t border-gold/40 pt-6">
            <p className="font-serif text-2xl text-plum mb-3 font-normal">
              The Quiet Work of Becoming
            </p>
            <p className="font-sans text-base sm:text-lg text-foreground/80 leading-relaxed">
              Career transitions, motherhood, loss, creative pivots, and the
              unspoken recalibrations of identity. In our circles, there is no
              need to tidy up your story before you share it.
            </p>
          </div>
        </div>

        {/* Atmospheric Quote Footnote */}
        <div className="mt-16 pt-8 border-t border-border/80 flex items-center justify-between flex-wrap gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <span>Real • Warm • Unhurried</span>
          <span>Journey 2 Better Sanctuary</span>
        </div>
      </div>
    </section>
  );
};
