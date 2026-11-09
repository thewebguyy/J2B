import React from "react";
import Link from "next/link";
import { ArrowRight, PenLine, Mic } from "lucide-react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

const OFFERS = [
  {
    id: "writing-mentorship",
    icon: PenLine,
    eyebrow: "Future opportunity",
    title: "Writing & storytelling mentorship",
    description:
      "The founder hopes to support people who want to explore, shape and write their own life stories. The format and availability of this support are still being confirmed.",
    cta: "Register storytelling interest",
    href: "/contact?interest=writing-mentorship",
    note: "No mentorship sessions are currently bookable.",
  },
  {
    id: "speaking",
    icon: Mic,
    eyebrow: "Enquiries welcome",
    title: "Speaking & facilitation",
    description:
      "Sade welcomes enquiries about speaking or facilitating at events, drawing on her experience in healthcare, leadership and lived resilience.",
    cta: "Make a speaking enquiry",
    href: "/contact?interest=speaking",
    note: "An enquiry does not confirm a speaking engagement.",
  },
];

export const MentorshipSpeaking: React.FC = () => (
  <section className="relative py-20 sm:py-28 bg-midnight-deep text-ivory-surface overflow-hidden">
    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-gold-harvest">
              Stories &amp; speaking
            </span>
          </div>
          <h2 className="font-serif editorial-h2 font-bold text-white reveal-heading">
            Your story, and a voice to share it.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pl-6 border-l border-gold-harvest/40">
          <p className="font-sans text-base sm:text-lg text-ivory-surface/80 leading-relaxed">
            Two of the founder&apos;s intentions for the future: helping others tell their stories,
            and speaking on wellbeing, growth and resilience.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {OFFERS.map((offer) => {
          const Icon = offer.icon;
          return (
            <article
              key={offer.id}
              className="p-7 sm:p-9 bg-[#0D2824] border border-gold-harvest/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-ivory-surface/15">
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 text-gold-harvest" />
                    <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-gold-harvest">
                      {offer.eyebrow}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  {offer.title}
                </h3>
                <p className="font-sans text-base text-ivory-surface/85 leading-relaxed mb-8">
                  {offer.description}
                </p>
              </div>
              <div>
                <Link
                  href={offer.href}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gold-harvest hover:bg-gold-light text-midnight-deep px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
                >
                  <span>{offer.cta}</span>
                  <ArrowRight className="size-4" />
                </Link>
                <p className="mt-3 text-xs text-ivory-surface/60 font-sans">{offer.note}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
