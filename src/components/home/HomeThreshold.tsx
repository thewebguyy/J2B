import React from "react";
import { brandPositioning } from "@/content/j2b";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Calendar } from "lucide-react";
import { MotionReveal } from "@/components/common/MotionReveal";

const ONBOARDING_TIERS = [
  {
    "tier": "01 • Connect",
    "commitment": "By email",
    "title": "Say hello",
    "description": "Ask a question or tell us which part of the journey interests you. You do not need to share private experiences.",
    "actionLabel": "Email hello@journey2better.com",
    "href": "mailto:hello@journey2better.com?subject=Hello%20from%20the%20website",
    "icon": Mail,
    "external": true
  },
  {
    "tier": "02 • Looking ahead",
    "commitment": "Details TBC",
    "title": "Explore future plans",
    "description": "Learn about the planned Better Together programme, annual events and memoir launch. Dates and details are still to be confirmed.",
    "actionLabel": "Explore Future Plans",
    "href": "/events",
    "icon": Calendar,
    "external": false
  },
  {
    "tier": "03 • Stay curious",
    "commitment": "Our story",
    "title": "Discover the purpose",
    "description": "Explore the vision behind a growing personal-development brand, beginning with life experiences and lessons learned.",
    "actionLabel": "Read Our Story",
    "href": "/about",
    "icon": MessageCircle,
    "external": false
  }
];

export const HomeThreshold: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-ivory-canvas border-t border-ivory-border overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-20">
          <div className="lg:col-span-7">
            <span className="font-serif italic text-base sm:text-lg text-teal-living block mb-3">
              Getting started
            </span>

            <h2 className="font-serif editorial-h2 font-bold text-midnight leading-tight reveal-heading">
              You don&apos;t need to have it all figured out{" "}
              <span className="italic font-normal text-gold-deep block sm:inline mt-1">
                to get started.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8 border-l border-gold-harvest/50">
            <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
              {brandPositioning.availability}
            </p>
          </div>
        </div>

        {/* 3 Clear Pathways of Commitment */}
        <MotionReveal staggerSelector="article" stagger={0.1} y={18}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {ONBOARDING_TIERS.map((item, idx) => {
              const Icon = item.icon;
              const isMiddle = idx === 1;

              return (
                <article
                  key={item.title}
                  className={`p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 tactile-surface bg-ivory-surface text-midnight border ${
                    isMiddle
                      ? "border-gold-harvest/60 shadow-sm"
                      : "border-ivory-border hover:border-gold-harvest/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-ivory-border/80">
                      <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-teal-living">
                        {item.tier}
                      </span>
                      <span className="text-[11px] font-serif italic text-muted-foreground">
                        {item.commitment}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-midnight mb-2.5">
                      {item.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base leading-relaxed text-charcoal/80 mb-6">
                      {item.description}
                    </p>
                  </div>

                  {item.external ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center justify-between gap-3 pt-4 border-t border-ivory-border text-xs font-semibold uppercase tracking-[0.16em] transition-colors group text-midnight hover:text-teal-living min-h-[44px]"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="size-4 flex-shrink-0 text-gold-deep" />
                        <span>{item.actionLabel}</span>
                      </span>
                      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-between gap-3 pt-4 border-t border-ivory-border text-xs font-semibold uppercase tracking-[0.16em] transition-colors group text-midnight hover:text-teal-living min-h-[44px]"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="size-4 flex-shrink-0 text-gold-deep" />
                        <span>{item.actionLabel}</span>
                      </span>
                      <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
