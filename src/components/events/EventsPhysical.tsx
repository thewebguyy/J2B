import React from "react";
import { ArrowRight, MapPin, Compass, SunMedium } from "lucide-react";
import { MagneticButton } from "@/components/common/MagneticButton";

export const EventsPhysical: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-2xl mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="size-2 rounded-full bg-berry" />
            <span className="text-xs font-semibold uppercase tracking-widest text-plum">
              In-Person Experiences
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum font-normal tracking-tight leading-[1.1] text-balance">
            Physical{" "}
            <span className="font-serif italic text-berry font-light">
              gatherings.
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-foreground/80 mt-6 leading-relaxed">
            There is a distinct power in breathing the same air, sharing meals,
            and having conversations that carry into the evening.
          </p>
        </div>

        {/* Gathering 1: Better Together Workshop (London) */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-28 sm:mb-36">
          <div className="lg:col-span-6 lg:order-2 relative">
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden bg-blush border border-border shadow-[0_20px_40px_-15px_rgba(56,18,38,0.1)] group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80')`,
                }}
                role="img"
                aria-label="Women participating together in a London workshop room"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent opacity-60" />
              <div className="absolute top-6 left-6 text-xs font-mono uppercase tracking-widest text-white bg-plum/75 backdrop-blur px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <MapPin className="size-3 text-gold" />
                <span>Quarterly • London Venue</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-3xl font-light text-gold">02</span>
              <span className="h-px w-8 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-widest text-berry">
                Quarterly Immersion
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-plum font-normal tracking-tight mb-5">
              Better Together Workshop
            </h3>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-6">
              <Compass className="size-3.5 text-berry" />
              <span>Half-Day Workshop • Central London • Small Cohort</span>
            </div>

            <p className="font-serif italic text-xl text-plum/90 font-light leading-snug mb-6">
              &ldquo;A half-day workshop on confidence, boundaries and building the
              life you actually want.&rdquo;
            </p>

            <p className="font-sans text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
              A dedicated Saturday intensive designed to step out of daily
              distractions. We unpack practical frameworks for healthy boundary
              setting, personal clarity, and emotional resilience in work and
              relationships.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href="mailto:hello@journey2better.com?subject=London%20Workshop%20Save%20My%20Place"
                variant="primary"
              >
                <span>Save My Place</span>
                <ArrowRight className="size-4" />
              </MagneticButton>

              <span className="text-xs text-muted-foreground">
                Limited cohort size to ensure deep engagement
              </span>
            </div>
          </div>
        </article>

        {/* Gathering 2: Annual Sisterhood Retreat (Spring) */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden bg-blush border border-border shadow-[0_20px_40px_-15px_rgba(56,18,38,0.1)] group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80')`,
                }}
                role="img"
                aria-label="Peaceful coastal landscape representing the annual retreat sanctuary"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent opacity-60" />
              <div className="absolute top-6 left-6 text-xs font-mono uppercase tracking-widest text-white bg-plum/75 backdrop-blur px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <SunMedium className="size-3 text-gold" />
                <span>Annual Spring Gathering</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-3xl font-light text-gold">03</span>
              <span className="h-px w-8 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-widest text-berry">
                Announced Each Spring
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-plum font-normal tracking-tight mb-5">
              Annual Sisterhood Retreat
            </h3>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-6">
              <span>Two Nights Away • UK Countryside Sanctuary</span>
            </div>

            <p className="font-serif italic text-xl text-plum/90 font-light leading-snug mb-6">
              &ldquo;Two nights away with the women who know your story — rest,
              worship, laughter and long walks.&rdquo;
            </p>

            <p className="font-sans text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
              Our flagship annual gathering in the English countryside. Step away
              from all duties and expectations to be poured into: home-cooked
              meals, long walks, fireside conversations, and restorative silence.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href="mailto:hello@journey2better.com?subject=Spring%20Retreat%20Waitlist"
                variant="primary"
              >
                <span>Save My Place</span>
                <ArrowRight className="size-4" />
              </MagneticButton>

              <span className="text-xs text-muted-foreground">
                Dates announced to waitlist members first
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
