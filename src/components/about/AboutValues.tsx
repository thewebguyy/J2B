import React from "react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { j2bContent } from "@/content/j2b";

export const AboutValues: React.FC = () => (
  <section className="relative py-20 sm:py-28 bg-ivory-canvas overflow-hidden">
    <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-24">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">Our values</span>
          </div>
          <h2 className="font-serif editorial-h2 font-bold text-midnight reveal-heading">What we stand for.</h2>
        </div>
        <div className="lg:col-span-5 lg:pl-6 border-l border-gold-harvest/50">
          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">Eight values guide the community we are building.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {j2bContent.values.map((value, index) => (
          <article key={value.title} className={`${index % 4 === 0 || index % 4 === 3 ? "md:col-span-7" : "md:col-span-5"} ${index % 4 === 0 ? "bg-midnight-deep text-ivory-surface" : "bg-ivory-surface text-midnight"} p-8 sm:p-11 border-l-4 border-gold-harvest relative overflow-hidden tactile-surface`}>
            <div className="flex items-center justify-between mb-5">
              <span className="font-serif italic text-4xl font-bold">{String(index + 1).padStart(2, "0")}</span>
              <BotanicalMotif size={22} />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">{value.title}</h3>
            <p className="font-sans text-base leading-relaxed">{value.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pl-6 border-l-4 border-gold-harvest">
        <div>
          <h2 className="font-serif text-2xl font-bold text-midnight mb-4">Our vision</h2>
          <p className="text-charcoal leading-relaxed">{j2bContent.vision}</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl font-bold text-midnight mb-4">Our mission</h2>
          <p className="text-charcoal leading-relaxed">{j2bContent.about[1]}</p>
        </div>
      </div>
    </div>
  </section>
);
