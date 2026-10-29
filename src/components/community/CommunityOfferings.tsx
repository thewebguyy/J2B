import React from "react";
import { Users, Sparkles, MessageCircle, HeartHandshake } from "lucide-react";

export const CommunityOfferings: React.FC = () => {
  return (
    <section id="offerings" className="relative py-28 sm:py-36 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-2xl mb-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="size-2 rounded-full bg-berry" />
            <span className="text-xs font-semibold uppercase tracking-widest text-plum">
              How We Gather
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-plum font-normal tracking-tight leading-[1.1] text-balance">
            Our core{" "}
            <span className="font-serif italic text-berry font-light">
              programmes.
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-foreground/80 mt-6 leading-relaxed">
            Three grounded touchpoints designed to fit around real commitments,
            career seasons, and personal transitions.
          </p>
        </div>

        {/* Offering 1: Sister Circles (The Emotional Center) */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-28 sm:mb-36">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden bg-blush border border-border shadow-[0_20px_40px_-15px_rgba(56,18,38,0.1)] group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')`,
                }}
                role="img"
                aria-label="Small group of women in unhurried conversation"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent opacity-60" />
              <div className="absolute top-6 left-6 text-xs font-mono uppercase tracking-widest text-white bg-plum/70 backdrop-blur px-3 py-1 rounded-full">
                Monthly • London &amp; Online
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-3xl font-light text-gold">01</span>
              <span className="h-px w-8 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-widest text-berry">
                Core Circle
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-plum font-normal tracking-tight mb-5">
              Sister Circles
            </h3>

            <p className="font-serif italic text-xl text-plum/90 font-light leading-snug mb-6">
              &ldquo;Small monthly groups where you are heard by name, not lost in a
              crowd.&rdquo;
            </p>

            <p className="font-sans text-base sm:text-lg text-foreground/80 leading-relaxed mb-6">
              Meeting once a month in intentionally capped circles. These are not
              lectures or workshops — they are intimate living rooms where women
              speak truthfully about where they are, without judgment or advice-giving.
            </p>

            <div className="p-5 rounded-2xl bg-blush/60 border border-border/80 text-sm text-foreground/75 leading-relaxed">
              <div className="flex items-start gap-3">
                <Users className="size-4 text-berry mt-1 shrink-0" />
                <span>
                  Intentionally intimate groups to ensure every woman has time
                  and space to share honestly.
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Offering 2: Mentorship (Pairwise & Generative) */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-28 sm:mb-36">
          <div className="lg:col-span-6 lg:order-2 relative">
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden bg-blush border border-border shadow-[0_20px_40px_-15px_rgba(56,18,38,0.1)] group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80')`,
                }}
                role="img"
                aria-label="Two women mentoring and listening to one another"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-transparent opacity-60" />
              <div className="absolute top-6 left-6 text-xs font-mono uppercase tracking-widest text-white bg-plum/70 backdrop-blur px-3 py-1 rounded-full">
                1-on-1 • Generative
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-3xl font-light text-gold">02</span>
              <span className="h-px w-8 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-widest text-berry">
                Pairwise Journey
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-plum font-normal tracking-tight mb-5">
              Mentorship
            </h3>

            <p className="font-serif italic text-xl text-plum/90 font-light leading-snug mb-6">
              &ldquo;Pair with a woman a few steps ahead of you — and become that
              woman for someone else.&rdquo;
            </p>

            <p className="font-sans text-base sm:text-lg text-foreground/80 leading-relaxed mb-6">
              Mentorship at Journey 2 Better is grounded in lived wisdom rather
              than corporate ladders. Whether you are re-entering work, navigating
              motherhood, or stepping into a new creative endeavour, you walk with
              someone who knows the terrain.
            </p>

            <div className="p-5 rounded-2xl bg-blush/60 border border-border/80 text-sm text-foreground/75 leading-relaxed">
              <div className="flex items-start gap-3">
                <HeartHandshake className="size-4 text-berry mt-1 shrink-0" />
                <span>
                  Mutual pairings where both women learn, encourage, and hold
                  space for each other&apos;s becoming.
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Offering 3: Everyday Encouragement (Quiet Supporting Sanctuary) */}
        <article className="rounded-3xl bg-blush/40 border border-border/80 p-8 sm:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-3xl font-light text-gold">03</span>
                <span className="h-px w-8 bg-border" />
                <span className="text-xs font-semibold uppercase tracking-widest text-berry">
                  Between Gatherings
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-plum font-normal tracking-tight mb-4">
                Everyday Encouragement
              </h3>

              <p className="font-serif italic text-xl text-plum/90 font-light leading-snug mb-4">
                &ldquo;A steady stream of check-ins, prayers, prompts and practical help
                between meetings.&rdquo;
              </p>

              <p className="font-sans text-base text-foreground/80 leading-relaxed">
                Sisterhood doesn&apos;t end when the circle closes. We maintain a
                gentle, private channel of reflections, mutual support, and
                encouragement so you are reminded of your community throughout the week.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-6 rounded-2xl bg-white/80 border border-border space-y-4">
                <div className="flex items-center gap-3 text-sm text-plum font-medium">
                  <MessageCircle className="size-4 text-berry" />
                  <span>Weekly Reflective Prompts</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-plum font-medium">
                  <Sparkles className="size-4 text-gold" />
                  <span>Prayer &amp; Thoughtful Check-ins</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-plum font-medium">
                  <Users className="size-4 text-berry" />
                  <span>Practical Local Support</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
