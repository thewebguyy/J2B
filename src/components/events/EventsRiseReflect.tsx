import React from "react";
import { ArrowRight, Clock, Video, BookOpen } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";

export const EventsRiseReflect: React.FC = () => {
  return (
    <section id="gatherings" className="relative py-28 sm:py-36 bg-blush/40 border-y border-border/80 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Composition Block (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden bg-blush border border-border shadow-[0_20px_40px_-15px_rgba(56,18,38,0.1)] group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80')`,
                }}
                role="img"
                aria-label="A morning coffee, journal, and quiet reflection space"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent opacity-60" />

              {/* Verified Metadata Tag */}
              <div className="absolute top-6 left-6 text-xs font-mono uppercase tracking-widest text-white bg-plum/75 backdrop-blur px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <Video className="size-3 text-gold" />
                <span>Monthly Online Gathering</span>
              </div>
            </div>
          </div>

          {/* Text & Action Block (6 cols) */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-3xl font-light text-gold">01</span>
              <span className="h-px w-8 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-widest text-berry">
                First Saturday of Every Month
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-plum font-normal tracking-tight mb-5">
              Rise &amp; Reflect Morning Circle
            </h2>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-6">
              <Clock className="size-3.5 text-berry" />
              <span>9:00am UK Time • 60 Minutes • Virtual Circle</span>
            </div>

            <p className="font-serif italic text-xl text-plum/90 font-light leading-snug mb-6">
              &ldquo;An hour of journalling, honest conversation and gentle
              goal-setting to start the month grounded.&rdquo;
            </p>

            <p className="font-sans text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
              A quiet, grounding container before the noise of the month begins.
              We open with a reflective prompt, write together in silence, and
              share insights with women who hold space for your truth.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href="mailto:hello@journey2better.com?subject=Save%20My%20Place%20-%20Rise%20and%20Reflect"
                variant="primary"
              >
                <span>Save My Place</span>
                <ArrowRight className="size-4" />
              </MagneticButton>

              <span className="text-xs text-muted-foreground">
                Free for members • Open to new sisters
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
