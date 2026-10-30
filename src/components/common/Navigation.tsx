"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { LogoMark } from "@/components/brand/LogoMark";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-ivory-canvas/98 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(2,64,77,0.08)] border-b border-ivory-border py-3.5"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand Lockup */}
        <Link
          href="/"
          className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-harvest rounded-lg flex-shrink-0"
          aria-label="Journey 2 Better Homepage"
        >
          <LogoMark size="nav" />
        </Link>

        {/* Desktop Editorial Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-sans tracking-[0.04em] text-midnight/85"
          aria-label="Primary Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-1.5 transition-colors duration-300 hover:text-midnight font-medium ${
                  isActive ? "text-midnight font-semibold" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{link.label}</span>
                {isActive ? (
                  <svg
                    viewBox="0 0 64 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute -bottom-1.5 left-0 w-full h-2.5 overflow-visible pointer-events-none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 6C16 2 32 9 48 4C54 2.5 59 4.5 62 5"
                      stroke="#D5A044"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="48" cy="4" r="2" fill="#D5A044" />
                  </svg>
                ) : (
                  <span
                    className="pointer-events-none absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-gold-harvest/45 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 rounded-full bg-midnight px-5 lg:px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory-canvas border border-gold-harvest/45 shadow-xs transition-all duration-300 hover:bg-midnight-deep hover:border-gold-harvest hover:shadow"
          >
            <span>Upcoming Gatherings</span>
            <ArrowRight className="size-3.5 text-gold-harvest transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex items-center justify-center p-2.5 text-midnight hover:text-teal-living focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-harvest rounded-xl bg-ivory-surface/80 border border-ivory-border"
        >
          {mobileMenuOpen ? <X className="size-6 text-midnight" /> : <Menu className="size-6 text-midnight" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-[65px] h-[calc(100dvh-65px)] bg-ivory-canvas border-t border-ivory-border px-6 py-8 flex flex-col justify-between z-50 shadow-2xl overflow-y-auto"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between pb-3 border-b border-ivory-border">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-living">
                Menu
              </span>
              <BotanicalMotif size={22} />
            </div>

            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 px-3 rounded-xl transition-colors font-serif text-2xl ${
                      isActive
                        ? "text-teal-living bg-ivory-surface font-semibold"
                        : "text-midnight hover:bg-ivory-surface/60 hover:text-teal-living"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <span className="text-xs font-sans uppercase tracking-widest text-gold-deep font-semibold">
                        Active
                      </span>
                    ) : (
                      <ArrowRight className="size-4 text-midnight/30" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-ivory-border flex flex-col gap-4 mt-6">
            <Link
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-midnight py-3.5 text-center text-sm font-semibold tracking-wide text-ivory-canvas border border-gold-harvest/50 shadow"
            >
              <span>Explore Upcoming Gatherings</span>
              <ArrowRight className="size-4 text-gold-harvest" />
            </Link>
            <div className="text-center text-xs text-muted-foreground font-sans">
              hello@journey2better.com &bull; UK Women&apos;s Community
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
