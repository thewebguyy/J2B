import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { j2bContent } from "@/content/j2b";

const THEMES = [
  "Identity",
  "Healing",
  "Boundaries",
  "Gratitude",
  "Becoming",
];

export const BookStory: React.FC = () => (
  <section id="story" className="relative py-20 sm:py-28 bg-ivory-surface border-y border-ivory-border overflow-hidden">
    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
              Where the story begins
            </span>
          </div>
          <h2 className="font-serif editorial-h2 font-bold text-midnight mb-6 reveal-heading">
            A life looked at honestly, one lesson at a time.
          </h2>
          <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed mb-5">
            The memoir grows out of Sade&apos;s own journey. It reflects on the experiences,
            turning points and quiet lessons that shaped her, and on the choice to keep growing
            through them.
          </p>
          <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
            {j2bContent.vision}
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="p-7 sm:p-10 bg-ivory-canvas border-l-4 border-gold-harvest mb-8">
            <p className="font-serif italic text-xl sm:text-2xl text-midnight leading-relaxed">
              &ldquo;{j2bContent.founder.biography[2]}&rdquo;
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living mb-5">
              Themes woven through the pages
            </h3>
            <ul className="flex flex-wrap gap-3">
              {THEMES.map((theme) => (
                <li
                  key={theme}
                  className="rounded-full border border-gold-harvest/50 bg-ivory-surface px-4 py-2 font-serif italic text-sm text-midnight"
                >
                  {theme}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 pt-8 border-t border-ivory-border">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-midnight mb-3">
              From one story to a shared journey
            </h3>
            <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed mb-6">
              The memoir is the starting point for Journey2Better: a growing space for personal
              development, shared stories and mutual encouragement. As details of publication,
              price and availability are confirmed, they will be shared here.
            </p>
            <Link
              href="/contact?interest=book-resources"
              className="inline-flex items-center gap-2.5 rounded-full bg-gold-harvest hover:bg-gold-light text-midnight-deep px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <span>Register your book interest</span>
              <ArrowRight className="size-4" />
            </Link>
            <p className="mt-3 text-xs text-muted-foreground font-sans">
              An enquiry is not a confirmed preorder or purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
