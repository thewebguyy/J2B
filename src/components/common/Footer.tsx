import React from "react";
import { brandPositioning, j2bContent } from "@/content/j2b";
import Link from "next/link";
import { Mail, Phone, Heart, ArrowUpRight, ArrowRight, MessageCircle } from "lucide-react";
import { LogoMark, BrandMonogramSVG } from "@/components/brand/LogoMark";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";
import { PathRibbon } from "@/components/brand/PathRibbon";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-midnight-deep text-ivory-surface pt-20 sm:pt-28 pb-12 overflow-hidden border-t-2 border-gold-harvest/30">
      {/* Background Path of Becoming trace & Atmospheric Watermark */}
      <div className="pointer-events-none absolute inset-0 opacity-15" aria-hidden="true">
        <PathRibbon variant="soft-horizon" className="opacity-40" />
      </div>

      {/* Grand Embossed Brand Monogram Watermark in the Background */}
      <div
        className="pointer-events-none absolute -right-16 -bottom-16 w-80 sm:w-96 lg:w-[440px] opacity-[0.06] select-none"
        aria-hidden="true"
      >
        <BrandMonogramSVG className="w-full h-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14 z-10">
        
        {/* =========================================================================
            1. GRAND EDITORIAL COLOPHON SIGN-OFF
           ========================================================================= */}
        <div className="pb-16 sm:pb-20 border-b border-ivory-surface/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2.5 mb-5 px-3 py-1 rounded-full bg-ivory-surface/10 border border-gold-harvest/40">
                <span className="size-1.5 rounded-full bg-gold-harvest animate-pulse" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-gold-harvest">
                  The Journey Continues
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] font-bold text-white leading-[1.15] mb-6">
                Every step forward counts.{" "}
                <span className="italic font-normal text-gold-harvest block sm:inline">
                  You don&apos;t have to walk it alone.
                </span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-ivory-surface/80 max-w-2xl leading-relaxed">
                Whether you&apos;re starting fresh, untangling a big decision, or just looking for genuine conversation without pretension — there is a seat at the table for you.
              </p>
            </div>

            {/* Direct Quick-Action Threshold Pills */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full">
              <a
                href="https://wa.me/447960964839"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-gold-harvest hover:bg-gold-light text-midnight-deep px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="size-4 text-midnight-deep" />
                  <span>Say Hello on WhatsApp</span>
                </div>
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="mailto:hello@journey2better.com?subject=Hello%20Journey%202%20Better"
                className="inline-flex items-center justify-between gap-3 rounded-full bg-ivory-surface/10 hover:bg-ivory-surface/15 text-ivory-surface px-6 py-3.5 text-xs font-semibold uppercase tracking-wider border border-ivory-surface/25 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="size-4 text-gold-harvest" />
                  <span>Write an Email</span>
                </div>
                <ArrowUpRight className="size-3.5 text-ivory-surface/60" />
              </a>
            </div>

          </div>
        </div>

        {/* =========================================================================
            2. FOUR ARCHITECTURAL COLUMNS
           ========================================================================= */}
        <div className="py-16 sm:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 border-b border-ivory-surface/15">
          
          {/* Column 1: Brand Anchor & Ethos (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <LogoMark size="footer" showTagline={true} className="mb-6" />
              <p className="text-ivory-surface/80 text-sm leading-relaxed max-w-sm font-sans font-normal mt-4">
                {brandPositioning.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-ivory-surface/10 flex items-center gap-2.5 text-xs text-ivory-surface/70">
              <BotanicalMotif size={20} />
              <span>Life lessons, personal growth and shared experiences</span>
              <Heart className="size-3 text-gold-harvest inline ml-0.5" />
            </div>
          </div>

          {/* Column 2: The Pathways (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-harvest mb-6 pb-2 border-b border-ivory-surface/10">
              The Pathways
            </h3>
            <ul className="space-y-3.5 text-sm font-sans text-ivory-surface/80">
              <li>
                <Link
                  href="/"
                  className="hover:text-gold-harvest transition-colors flex items-center justify-between group"
                >
                  <span>Home</span>
                  <ArrowUpRight className="size-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold-harvest" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gold-harvest transition-colors flex items-center justify-between group"
                >
                  <span>About Our Story</span>
                  <ArrowUpRight className="size-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold-harvest" />
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-gold-harvest transition-colors flex items-center justify-between group"
                >
                  <span>Community Offerings</span>
                  <ArrowUpRight className="size-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold-harvest" />
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-gold-harvest transition-colors flex items-center justify-between group"
                >
                  <span>Future Programmes &amp; Events</span>
                  <ArrowUpRight className="size-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold-harvest" />
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="hover:text-gold-harvest transition-colors flex items-center justify-between group"
                >
                  <span>The Memoir</span>
                  <ArrowUpRight className="size-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold-harvest" />
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-gold-harvest transition-colors flex items-center justify-between group"
                >
                  <span>Resources</span>
                  <ArrowUpRight className="size-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold-harvest" />
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-gold-harvest transition-colors flex items-center justify-between group"
                >
                  <span>Merchandise Preview</span>
                  <ArrowUpRight className="size-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold-harvest" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold-harvest transition-colors flex items-center justify-between group"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="size-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-gold-harvest" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: The Looking Ahead (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-harvest mb-6 pb-2 border-b border-ivory-surface/10">
              Looking Ahead
            </h3>
            <ul className="space-y-4 text-xs font-sans">
              <li className="p-3 rounded-lg bg-ivory-surface/5 border border-ivory-surface/10 hover:border-gold-harvest/40 transition-colors">
                <span className="text-[10px] uppercase tracking-widest text-gold-harvest font-semibold block mb-0.5">
                  Forthcoming &bull; Details TBC
                </span>
                <span className="text-sm font-serif italic text-white block">The Founder’s Memoir</span>
                <span className="text-ivory-surface/65 mt-0.5 block">Life experiences and lessons learned</span>
              </li>

              <li className="p-3 rounded-lg bg-ivory-surface/5 border border-ivory-surface/10 hover:border-gold-harvest/40 transition-colors">
                <span className="text-[10px] uppercase tracking-widest text-teal-light font-semibold block mb-0.5">
                  Planned &bull; Start TBC
                </span>
                <span className="text-sm font-serif italic text-white block">Becoming Better Together</span>
                <span className="text-ivory-surface/65 mt-0.5 block">A planned 10-week workshop programme</span>
              </li>

              <li className="p-3 rounded-lg bg-ivory-surface/5 border border-ivory-surface/10 hover:border-gold-harvest/40 transition-colors">
                <span className="text-[10px] uppercase tracking-widest text-gold-light font-semibold block mb-0.5">
                  Annual &bull; Details TBC
                </span>
                <span className="text-sm font-serif italic text-white block">Events &amp; Shared Experiences</span>
                <span className="text-ivory-surface/65 mt-0.5 block">Dates, formats and locations to be confirmed</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Personal Connection (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-harvest mb-6 pb-2 border-b border-ivory-surface/10">
              Personal Connection
            </h3>
            <p className="text-xs text-ivory-surface/75 mb-5 leading-relaxed">
              We respond personally to every message. Introduce yourself or message us with any questions about our future plans.
            </p>

            <div className="space-y-3 text-xs">
              <a
                href="mailto:hello@journey2better.com?subject=Hello%20Journey%202%20Better"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-ivory-surface/5 hover:bg-ivory-surface/10 border border-ivory-surface/10 hover:border-gold-harvest/40 transition-all text-ivory-surface/90 hover:text-gold-harvest group"
                aria-label="Send an introduction email to hello@journey2better.com"
              >
                <div className="flex size-8 items-center justify-center rounded-full bg-gold-harvest/20 text-gold-harvest group-hover:bg-gold-harvest group-hover:text-midnight transition-colors flex-shrink-0">
                  <Mail className="size-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[10px] text-ivory-surface/60 uppercase tracking-wider">Email Us</span>
                  <span className="font-medium truncate block text-sm">hello@journey2better.com</span>
                </div>
              </a>

              <a
                href="https://wa.me/447960964839"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-ivory-surface/5 hover:bg-ivory-surface/10 border border-ivory-surface/10 hover:border-gold-harvest/40 transition-all text-ivory-surface/90 hover:text-gold-harvest group"
                aria-label="Send a WhatsApp text or voice note on +44 7960 964839"
              >
                <div className="flex size-8 items-center justify-center rounded-full bg-gold-harvest/20 text-gold-harvest group-hover:bg-gold-harvest group-hover:text-midnight transition-colors flex-shrink-0">
                  <Phone className="size-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[10px] text-ivory-surface/60 uppercase tracking-wider">WhatsApp</span>
                  <span className="font-medium truncate block text-sm">+44 7960 964839</span>
                </div>
              </a>
            </div>

            <p className="mt-4 text-[11px] font-serif italic text-ivory-surface/60">
              No sales pressure &bull; Just real conversation
            </p>
          </div>

        </div>

        {/* =========================================================================
            3. LIVE COMMUNITY RHYTHM STATUS BANNER
           ========================================================================= */}
        <div className="py-6 border-b border-ivory-surface/15 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-ivory-surface/80">
          <div className="flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Our Direction:</span>
            <span className="text-gold-harvest font-serif italic">Growing through stories and encouragement</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-ivory-surface/65 text-[11px]">
            <span>All walks of life</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Shared experiences</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Future plans TBC</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Come As You Are</span>
          </div>
        </div>

        <p className="pt-6 text-sm leading-relaxed text-ivory-surface/85">{j2bContent.healthDisclaimer}</p>

        {/* =========================================================================
            4. LEGAL & ATTRIBUTION BAR
           ========================================================================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-surface/50">
          <p>© {new Date().getFullYear()} Journey 2 Better. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Becoming — A Living Journey &bull; Dedicated to personal growth, honest connection, and mutual encouragement
          </p>
        </div>

      </div>
    </footer>
  );
};
