import React from "react";
import Link from "next/link";
import { Mail, Phone, Heart, ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/brand/LogoMark";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-midnight-deep text-ivory-surface pt-20 pb-12 overflow-hidden border-t border-gold-harvest/20">
      {/* Background Path of Becoming trace */}
      <div className="pointer-events-none absolute inset-0 opacity-15" aria-hidden="true">
        <PathRibbon variant="soft-horizon" className="opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-ivory-surface/15">
          {/* Official Brand Lockup & Tagline */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <LogoMark size="footer" showTagline={true} className="mb-6" />
              <p className="text-ivory-surface/80 text-sm leading-relaxed max-w-sm font-sans font-normal mt-4">
                A sisterhood of women rising together — navigating the messy middle of life with genuine connection, personal development, and unwavering companionship.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-ivory-surface/10 flex items-center gap-2 text-xs text-ivory-surface/60">
              <BotanicalMotif size={20} />
              <span>Founded with intention in the United Kingdom</span>
              <Heart className="size-3 text-gold-harvest inline ml-1" />
            </div>
          </div>

          {/* Editorial Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-harvest mb-6">
              The Journey
            </h3>
            <ul className="space-y-3.5 text-sm font-sans text-ivory-surface/75">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>The Beginning (Home)</span>
                  <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold-harvest" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>The Why (About)</span>
                  <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold-harvest" />
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>The Together (Community)</span>
                  <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold-harvest" />
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>The Moments (Events)</span>
                  <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold-harvest" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Authentic Contact Channels with Clear Context */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-harvest mb-6">
              Personal Connection
            </h3>
            <p className="text-xs text-ivory-surface/75 mb-5 leading-relaxed">
              We respond personally to every sister. Send an email to introduce yourself or message us on WhatsApp with any questions about upcoming circles.
            </p>
            <div className="space-y-3.5 text-sm">
              <a
                href="mailto:hello@journey2better.com?subject=Hello%20Journey%202%20Better"
                className="flex items-center gap-3 text-ivory-surface/90 hover:text-gold-harvest transition-colors py-1 group"
                aria-label="Send an introduction email to hello@journey2better.com"
              >
                <div className="flex size-8 items-center justify-center rounded-full bg-ivory-surface/10 text-gold-harvest group-hover:bg-gold-harvest group-hover:text-midnight transition-colors">
                  <Mail className="size-4" />
                </div>
                <div>
                  <span className="block text-xs text-ivory-surface/60">Write to us directly</span>
                  <span>hello@journey2better.com</span>
                </div>
              </a>
              <a
                href="https://wa.me/447960964839"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-ivory-surface/90 hover:text-gold-harvest transition-colors py-1 group"
                aria-label="Send a WhatsApp text or voice note on +44 7960 964839"
              >
                <div className="flex size-8 items-center justify-center rounded-full bg-ivory-surface/10 text-gold-harvest group-hover:bg-gold-harvest group-hover:text-midnight transition-colors">
                  <Phone className="size-4" />
                </div>
                <div>
                  <span className="block text-xs text-ivory-surface/60">WhatsApp text or voice note</span>
                  <span>+44 7960 964839</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-surface/50">
          <p>© {new Date().getFullYear()} Journey 2 Better. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Becoming — A Living Journey • Dedicated to women rising and growing together in the UK
          </p>
        </div>
      </div>
    </footer>
  );
};
