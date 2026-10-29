import React from "react";
import { Video, MapPin, Sparkles, Clock, ArrowRight } from "lucide-react";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

const EVENTS_DATA = [
  {
    id: "rise-reflect",
    title: "Rise & Reflect Morning Circle",
    format: "Virtual Gathering • Zoom",
    cadence: "Recurring Morning Rhythm",
    icon: Video,
    description:
      "Start your morning with mental clarity, gentle guided breathwork, and intentional journaling prompts. A quiet sanctuary to ground your spirit before the noise and responsibilities of the day begin.",
    features: [
      "Guided grounding reflection & breathwork",
      "Curated journaling prompts on self-trust and courage",
      "Intimate breakout conversations with fellow sisters",
      "Join from the quiet comfort of your home",
    ],
    accent: "teal",
    ctaText: "Register Interest for Next Circle",
    ctaHref: "mailto:hello@journey2better.com?subject=Rise%20and%20Reflect%20Enquiry",
  },
  {
    id: "better-together",
    title: "Better Together Workshop",
    format: "In-Person Intensive • Central London",
    cadence: "Seasonal Intensive Sessions",
    icon: MapPin,
    description:
      "A dedicated half-day or full-day in-person workshop focusing on real life architecture: establishing healthy boundaries, overcoming decision fatigue, and mapping your personal development with practical tools.",
    features: [
      "Interactive life-design and boundary exercises",
      "Deep group discussions and shared sister wisdom",
      "Nourishing communal lunch and herbal teas included",
      "Beautiful central London sanctuary venue",
    ],
    accent: "gold",
    ctaText: "Enquire About London Workshop",
    ctaHref: "mailto:hello@journey2better.com?subject=London%20Workshop%20Enquiry",
  },
  {
    id: "sisterhood-retreat",
    title: "Annual Sisterhood Retreat",
    format: "Immersive Weekend • UK Countryside Sanctuary",
    cadence: "Annual Flagship Gathering",
    icon: Sparkles,
    description:
      "Our most transformative gathering of the year. Step away from daily duties and immerse yourself in a tranquil countryside estate for three days of rest, mindful movement, evening fireside reflections, and lifelong sisterhood.",
    features: [
      "2 nights luxury countryside sanctuary accommodation",
      "All wholesome farm-to-table meals and beverages",
      "Daily guided reflection circles and wellness practices",
      "Dedicated whitespace for solitude, journaling, and nature walks",
    ],
    accent: "midnight",
    ctaText: "Enquire About Retreat Dates",
    ctaHref: "mailto:hello@journey2better.com?subject=Annual%20Retreat%20Enquiry",
  },
];

export const EventsCards: React.FC = () => {
  return (
    <section id="gatherings" className="relative py-24 sm:py-32 bg-ivory-surface border-y border-ivory-border overflow-hidden">
      {/* Chapter Transition */}
      <PathRibbon variant="chapter-divider" className="-mt-16 mb-12" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <BotanicalMotif size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold text-teal-living">
              Curated Gatherings
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-midnight leading-tight mb-6">
            Spaces designed to pause, reflect, and renew.
          </h2>

          <p className="font-sans text-base sm:text-lg text-charcoal/80 leading-relaxed">
            We offer both accessible digital morning circles and deeply restorative in-person experiences so that every sister can find her cadence of connection.
          </p>
        </div>

        {/* Event Cards */}
        <div className="space-y-12">
          {EVENTS_DATA.map((event, idx) => {
            const Icon = event.icon;
            const isGold = event.accent === "gold";
            const isMidnight = event.accent === "midnight";

            return (
              <div
                key={event.id}
                id={event.id}
                className={`rounded-3xl p-8 sm:p-12 border transition-all duration-300 relative overflow-hidden ${
                  isGold
                    ? "bg-gradient-to-br from-ivory-canvas to-gold-subtle/30 border-gold-harvest/50 shadow-sm"
                    : isMidnight
                    ? "bg-midnight-deep text-ivory-surface border-midnight shadow-md"
                    : "bg-ivory-canvas border-ivory-border shadow-sm"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left: Event Details */}
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div
                        className={`p-2.5 rounded-xl border flex items-center justify-center ${
                          isMidnight
                            ? "bg-midnight text-gold-harvest border-gold-harvest/30"
                            : "bg-ivory-surface text-teal-living border-ivory-border"
                        }`}
                      >
                        <Icon className="size-5" />
                      </div>
                      <span
                        className={`text-xs uppercase tracking-widest font-semibold ${
                          isMidnight ? "text-gold-harvest" : "text-teal-living"
                        }`}
                      >
                        {event.format}
                      </span>
                    </div>

                    <h3
                      className={`font-serif text-3xl sm:text-4xl font-bold mb-4 ${
                        isMidnight ? "text-white" : "text-midnight"
                      }`}
                    >
                      {event.title}
                    </h3>

                    <p
                      className={`font-sans text-base sm:text-lg leading-relaxed font-normal mb-8 ${
                        isMidnight ? "text-ivory-surface/85" : "text-charcoal/85"
                      }`}
                    >
                      {event.description}
                    </p>

                    <a
                      href={event.ctaHref}
                      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs ${
                        isMidnight
                          ? "bg-gold-harvest hover:bg-gold-deep text-midnight-deep"
                          : "bg-midnight hover:bg-midnight-deep text-ivory-canvas border border-gold-harvest/40"
                      }`}
                    >
                      <span>{event.ctaText}</span>
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>

                  {/* Right: Feature Highlights Box */}
                  <div
                    className={`lg:col-span-5 rounded-2xl p-6 sm:p-8 border ${
                      isMidnight
                        ? "bg-midnight/70 border-ivory-surface/15 text-ivory-surface"
                        : "bg-ivory-surface border-ivory-border/80 text-charcoal/85"
                    }`}
                  >
                    <h4
                      className={`font-serif text-lg font-bold mb-4 ${
                        isMidnight ? "text-gold-harvest" : "text-midnight"
                      }`}
                    >
                      Experience Elements:
                    </h4>
                    <ul className="space-y-3 font-sans text-sm">
                      {event.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Clock
                            className={`size-4 flex-shrink-0 mt-0.5 ${
                              isMidnight ? "text-gold-harvest" : "text-teal-living"
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
