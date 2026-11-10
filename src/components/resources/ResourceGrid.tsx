import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

const RESOURCES = [
  {
    number: "01",
    title: "28 Days to Becoming Better Journal",
    description:
      "A guided journal following the memoir’s arc across four weeks, with a short reflection, a scripture, journal prompts and a declaration for each day.",
  },
  {
    number: "02",
    title: "Becoming Better Together Study Guide",
    description:
      "A ten-session small-group study guide that explores the memoir chapter by chapter, with discussion questions, reflection steps and leader notes.",
  },
  {
    number: "03",
    title: "Daily Victories",
    description:
      "A daily encouragement companion built around small, faithful steps, with short reflections, prayers and one focus to carry through the day.",
  },
  {
    number: "04",
    title: "Declaration Cards",
    description:
      "A set of chapter-linked declaration cards drawn from the memoir, created for reflection and everyday encouragement.",
  },
];

export const ResourceGrid: React.FC = () => (
  <section className="relative py-20 sm:py-28 bg-ivory-surface border-y border-ivory-border overflow-hidden">
    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
              Provisional companions
            </span>
          </div>
          <h2 className="font-serif editorial-h2 font-bold text-midnight reveal-heading">
            Four resources taking shape.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pl-6 border-l border-gold-harvest/50">
          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
            Each resource is being refined before release. They draw on the memoir and are offered
            as optional companions, not requirements.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {RESOURCES.map((resource) => (
          <article
            key={resource.title}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-ivory-canvas border border-ivory-border/90 border-t-2 border-t-gold-harvest tactile-surface hover:border-gold-harvest/50"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif italic text-3xl sm:text-4xl font-bold text-gold-harvest/60">
                  {resource.number}
                </span>
                <span className="rounded-full border border-teal-living/40 bg-teal-subtle/50 px-3 py-1 text-[10px] uppercase tracking-[0.16em] font-semibold text-teal-living">
                  In development
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mb-2.5 leading-tight">
                {resource.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
                {resource.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-ivory-border bg-ivory-canvas p-6 sm:p-8">
        <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
          Several of these resources draw on a faith-based perspective. They are optional
          companions, and Journey2Better remains a welcoming space for people of all backgrounds
          and beliefs. Resource formats, availability and pricing have not been confirmed.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <Link
          href="/contact?interest=book-resources"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-midnight hover:bg-midnight-deep text-ivory-canvas px-6 py-3.5 text-xs font-semibold uppercase tracking-wider border border-gold-harvest/45 transition-all duration-200"
        >
          <span>Register resource interest</span>
          <ArrowRight className="size-4 text-gold-harvest" />
        </Link>
        <span className="font-sans text-xs text-muted-foreground">
          An enquiry does not reserve a resource or confirm a purchase.
        </span>
      </div>
    </div>
  </section>
);
