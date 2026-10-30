import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Calendar } from "lucide-react";

const ONBOARDING_TIERS = [
  {
    tier: "01 • Gentle First Step",
    commitment: "Low Commitment",
    title: "Receive the Monthly Letter",
    description:
      "Quiet written reflections, journaling prompts, and early notice of seasonal London gatherings sent to your inbox once a month.",
    actionLabel: "Request the Monthly Letter",
    href: "mailto:hello@journey2better.com?subject=Monthly%20Reflection%20Letter",
    icon: Mail,
    external: true,
  },
  {
    tier: "02 • Shared Morning Rhythm",
    commitment: "Medium Commitment",
    title: "Attend a Sunrise Reflection",
    description:
      "Join an upcoming virtual Rise & Reflect morning circle from home. Camera-optional, unhurried breathwork, and honest sisterhood.",
    actionLabel: "See the Gatherings Calendar",
    href: "/events",
    icon: Calendar,
    external: false,
  },
  {
    tier: "03 • Direct Personal Connection",
    commitment: "Personal Conversation",
    title: "Send a WhatsApp or Email Note",
    description:
      "Have a question about our circles or mentorship? Send a brief WhatsApp text or voice note directly to introduce yourself.",
    actionLabel: "Message Us on WhatsApp (+44 7960 964839)",
    href: "https://wa.me/447960964839",
    icon: MessageCircle,
    external: true,
  },
];

export const HomeThreshold: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-ivory-canvas border-t border-ivory-border overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-20">
          <div className="lg:col-span-7">
            <span className="font-serif italic text-base sm:text-lg text-teal-living block mb-3">
              III. How to Step In &mdash; At Your Own Pace
            </span>

            <h2 className="font-serif editorial-h2 font-bold text-midnight leading-tight reveal-heading">
              You do not need to have it all figured out{" "}
              <span className="italic font-normal text-gold-deep block sm:inline mt-1">
                to begin walking.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8 border-l border-gold-harvest/50">
            <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed">
              Every woman enters our community differently. Choose the level of connection that feels most supportive for your current season.
            </p>
          </div>
        </div>

        {/* 3 Clear Tiers of Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ONBOARDING_TIERS.map((item, idx) => {
            const Icon = item.icon;
            const isMiddle = idx === 1;

            return (
              <article
                key={item.title}
                className={`p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isMiddle
                    ? "bg-midnight-deep text-ivory-surface border-t-4 border-gold-harvest shadow-md"
                    : "bg-ivory-surface text-midnight border border-ivory-border hover:border-gold-harvest/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5 pb-3 border-b border-current/10">
                    <span
                      className={`text-[11px] uppercase tracking-[0.18em] font-semibold ${
                        isMiddle ? "text-gold-harvest" : "text-teal-living"
                      }`}
                    >
                      {item.tier}
                    </span>
                    <span
                      className={`text-[11px] font-serif italic ${
                        isMiddle ? "text-ivory-surface/75" : "text-muted-foreground"
                      }`}
                    >
                      {item.commitment}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-2xl font-bold mb-3 ${
                      isMiddle ? "text-white" : "text-midnight"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`font-sans text-sm sm:text-base leading-relaxed mb-8 ${
                      isMiddle ? "text-ivory-surface/85" : "text-charcoal/80"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {item.external ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center justify-between gap-3 pt-4 border-t text-xs font-semibold uppercase tracking-[0.16em] transition-colors group ${
                      isMiddle
                        ? "border-ivory-surface/15 text-gold-harvest hover:text-gold-light"
                        : "border-ivory-border text-midnight hover:text-teal-living"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="size-4 flex-shrink-0" />
                      <span>{item.actionLabel}</span>
                    </span>
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`inline-flex items-center justify-between gap-3 pt-4 border-t text-xs font-semibold uppercase tracking-[0.16em] transition-colors group ${
                      isMiddle
                        ? "border-ivory-surface/15 text-gold-harvest hover:text-gold-light"
                        : "border-ivory-border text-midnight hover:text-teal-living"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="size-4 flex-shrink-0" />
                      <span>{item.actionLabel}</span>
                    </span>
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
