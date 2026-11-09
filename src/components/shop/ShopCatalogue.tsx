import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

const CATALOGUE = [
  {
    number: "01",
    title: "Books",
    description: "The forthcoming memoir and future companion reads.",
    interest: "book-resources",
  },
  {
    number: "02",
    title: "Journals",
    description: "Reflective journals for daily practice and honest note-taking.",
    interest: "book-resources",
  },
  {
    number: "03",
    title: "Face caps",
    description: "Future Journey2Better headwear with the brand mark.",
    interest: "merchandise",
  },
  {
    number: "04",
    title: "Mugs",
    description: "A mug for slow, honest conversations over a warm drink.",
    interest: "merchandise",
  },
  {
    number: "05",
    title: "T-shirts",
    description: "Everyday pieces carrying a message of encouragement.",
    interest: "merchandise",
  },
  {
    number: "06",
    title: "Sweatshirts",
    description: "Soft, comfortable layers for cooler days.",
    interest: "merchandise",
  },
  {
    number: "07",
    title: "Inspirational keepsakes",
    description: "Small reminders of hope, growth and the journey forward.",
    interest: "merchandise",
  },
];

export const ShopCatalogue: React.FC = () => (
  <section className="relative py-20 sm:py-28 bg-ivory-surface border-y border-ivory-border overflow-hidden">
    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
              The collection
            </span>
          </div>
          <h2 className="font-serif editorial-h2 font-bold text-midnight reveal-heading">
            Seven ideas for the future.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pl-6 border-l border-gold-harvest/50">
          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
            Register your interest in a category and we will share updates when details are
            confirmed. This does not reserve an item.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {CATALOGUE.map((item) => (
          <article
            key={item.title}
            className="flex flex-col justify-between p-7 sm:p-8 bg-ivory-canvas border-t-4 border-gold-harvest tactile-surface"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-serif italic text-3xl font-bold text-gold-harvest/60">
                  {item.number}
                </span>
                <span className="rounded-full border border-midnight/25 px-3 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold text-midnight/70">
                  Future offering
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-midnight mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
                {item.description}
              </p>
            </div>
            <Link
              href={`/contact?interest=${item.interest}`}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-living hover:text-gold-deep transition-colors"
            >
              <span>Register interest</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-ivory-border bg-ivory-canvas p-6 sm:p-8">
        <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
          This is a catalogue preview, not an online shop. No products, prices, sizes, stock levels
          or delivery options have been confirmed, and no payment is collected anywhere on this
          site. Interest enquiries help the founder understand what to develop next.
        </p>
      </div>
    </div>
  </section>
);
