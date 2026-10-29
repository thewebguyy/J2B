import React from "react";
import Link from "next/link";
import { Mail, Phone, Heart, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-plum-deep text-cream pt-20 pb-12 overflow-hidden border-t border-gold/15">
      {/* Subtle background ambient thread motif */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        aria-hidden="true"
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 200 C300 100, 600 450, 1000 250 C1300 100, 1500 350, 1600 400"
            stroke="var(--gold)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-cream/15">
          {/* Brand Manifesto Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block group mb-6">
                <span className="font-serif text-3xl text-cream tracking-tight group-hover:text-gold transition-colors">
                  Journey
                </span>
                <span className="font-serif italic text-2xl text-gold font-light ml-1">
                  2
                </span>
                <span className="font-serif text-3xl text-cream tracking-tight ml-1 group-hover:text-gold transition-colors">
                  Better
                </span>
              </Link>
              <p className="text-cream/80 text-base leading-relaxed max-w-sm font-sans font-normal">
                A sisterhood of women rising together — growing, connecting, and
                becoming the best versions of themselves in the messy middle of
                life.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-cream/10 flex items-center gap-2 text-xs text-cream/60">
              <span>A sanctuary founded with intention in the UK</span>
              <Heart className="size-3 text-gold inline" />
            </div>
          </div>

          {/* Editorial Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
              Editorial Journey
            </h3>
            <ul className="space-y-3.5 text-sm font-sans text-cream/75">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>The Invitation (Home)</span>
                  <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>The Story (About Us)</span>
                  <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold" />
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>The Connection (Community)</span>
                  <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold" />
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>The Gathering (Events)</span>
                  <ArrowUpRight className="size-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Genuine Client Contact */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-6">
              Connect Directly
            </h3>
            <p className="text-xs text-cream/70 mb-5 leading-relaxed">
              We respond to every message personally. Reach out to ask about
              sister circles, mentorship, or our next gathering.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@journey2better.com"
                className="flex items-center gap-3 text-cream/90 hover:text-gold transition-colors py-1"
                aria-label="Send email to hello@journey2better.com"
              >
                <div className="flex size-8 items-center justify-center rounded-full bg-cream/10 text-gold">
                  <Mail className="size-4" />
                </div>
                <span>hello@journey2better.com</span>
              </a>
              <a
                href="tel:+447960964839"
                className="flex items-center gap-3 text-cream/90 hover:text-gold transition-colors py-1"
                aria-label="Call or WhatsApp on +44 7960 964839"
              >
                <div className="flex size-8 items-center justify-center rounded-full bg-cream/10 text-gold">
                  <Phone className="size-4" />
                </div>
                <span>+44 7960 964839</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Journey 2 Better. All rights reserved.</p>
          <p className="text-center sm:text-right">
            The Woven Thread • Designed with care for women rising together
          </p>
        </div>
      </div>
    </footer>
  );
};
