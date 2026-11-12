import React from "react";
import { brandPositioning, j2bContent } from "@/content/j2b";
import Link from "next/link";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/brand/LogoMark";
import { MotionReveal } from "@/components/common/MotionReveal";

const footerLinkClass =
  "flex items-center min-h-[44px] w-full py-1.5 hover:text-gold-harvest transition-colors";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-midnight-deep text-ivory-surface pt-14 sm:pt-16 pb-10 overflow-hidden border-t border-gold-harvest/25">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 z-10">

        {/* Three-Column Mobile-First Footer Grid */}
        <MotionReveal y={14} duration={0.65}>
          <div className="pb-10 sm:pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 border-b border-ivory-surface/15">

          {/* Column 1: What is Journey2Better? */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <LogoMark size="footer" showTagline={false} className="mb-4" />
              <p className="text-ivory-surface/85 text-sm leading-relaxed max-w-sm font-sans mt-3">
                {brandPositioning.description}
              </p>
            </div>

            <p className="mt-5 pt-4 border-t border-ivory-surface/15 text-xs font-sans text-ivory-surface/75 max-w-sm leading-relaxed">
              {brandPositioning.availability}
            </p>
          </div>

          {/* Column 2: Where can I go next? */}
          <div className="lg:col-span-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-harvest mb-4 pb-2 border-b border-ivory-surface/15">
              Pathways
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm font-sans text-ivory-surface/85">
              <li>
                <Link href="/" className={footerLinkClass}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={footerLinkClass}>
                  About Our Story
                </Link>
              </li>
              <li>
                <Link href="/community" className={footerLinkClass}>
                  Community
                </Link>
              </li>
              <li>
                <Link href="/events" className={footerLinkClass}>
                  Future Plans
                </Link>
              </li>
              <li>
                <Link href="/book" className={footerLinkClass}>
                  The Memoir
                </Link>
              </li>
              <li>
                <Link href="/resources" className={footerLinkClass}>
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/shop" className={footerLinkClass}>
                  Shop Preview
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: How do I contact the organization? */}
          <div className="lg:col-span-4">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-harvest mb-4 pb-2 border-b border-ivory-surface/15">
              Contact
            </h2>
            <div className="space-y-2.5 text-xs font-sans text-ivory-surface/90">
              <a
                href="mailto:hello@journey2better.com"
                className="flex items-center justify-between gap-2.5 p-3 rounded-xl bg-ivory-surface/5 hover:bg-ivory-surface/10 border border-ivory-surface/15 transition-colors min-h-[52px]"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="size-4 text-gold-harvest flex-shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <span className="block text-[10px] text-ivory-surface/75 uppercase tracking-wider">
                      Email
                    </span>
                    <span className="font-medium text-white block text-xs xl:text-sm break-all sm:break-normal">
                      hello@journey2better.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="size-3.5 text-ivory-surface/70 flex-shrink-0" aria-hidden="true" />
              </a>

              <a
                href="https://wa.me/447960964839"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2.5 p-3 rounded-xl bg-ivory-surface/5 hover:bg-ivory-surface/10 border border-ivory-surface/15 transition-colors min-h-[52px]"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <MessageCircle className="size-4 text-gold-harvest flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="block text-[10px] text-ivory-surface/75 uppercase tracking-wider">
                      WhatsApp
                    </span>
                    <span className="font-medium text-white block text-xs xl:text-sm">
                      +44 7960 964839
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="size-3.5 text-ivory-surface/70 flex-shrink-0" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-3 text-xs font-sans text-ivory-surface/75 leading-relaxed">
              We respond personally to every enquiry.
            </p>
          </div>

          </div>
        </MotionReveal>

        {/* Health Disclaimer */}
        <p className="pt-6 pb-6 text-xs sm:text-sm leading-relaxed text-ivory-surface/80 border-b border-ivory-surface/15">
          {j2bContent.healthDisclaimer}
        </p>

        {/* Legal & Privacy */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory-surface/75">
          <p>&copy; {new Date().getFullYear()} Journey 2 Better. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact#privacy"
              className="inline-flex items-center min-h-[44px] px-2 hover:text-gold-harvest transition-colors underline decoration-ivory-surface/30 underline-offset-4"
            >
              Privacy Notice
            </Link>
            <span aria-hidden="true">&bull;</span>
            <span>The Living Journey</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
