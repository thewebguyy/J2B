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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-ivory-canvas/95 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(2,64,77,0.08)] border-b border-ivory-border py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Brand Lockup */}
        <Link
          href="/"
          className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-harvest rounded-lg"
          aria-label="Journey 2 Better Homepage"
        >
          <LogoMark size="nav" />
        </Link>

        {/* Desktop Editorial Navigation */}
        <nav
          className="hidden md:flex items-center gap-10 text-sm font-sans tracking-[0.04em] text-midnight/85"
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
                      className="path-draw-enter"
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
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/community#join"
            className="group inline-flex items-center gap-2 rounded-full bg-midnight px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory-canvas border border-gold-harvest/40 shadow-sm transition-all duration-300 hover:bg-midnight-deep hover:border-gold-harvest hover:shadow"
          >
            <span>Begin Journey</span>
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
          className="md:hidden inline-flex p-2 text-midnight hover:text-teal-living focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-harvest rounded-lg"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-ivory-canvas/98 backdrop-blur-2xl border-t border-ivory-border px-8 py-10 flex flex-col justify-between z-40 transition-all duration-300 overflow-y-auto"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Navigation
              </span>
              <BotanicalMotif size={24} />
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex items-center justify-between font-serif text-3xl py-1 transition-colors ${
                    isActive ? "text-teal-living italic font-medium" : "text-midnight hover:text-teal-living"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <svg
                      viewBox="0 0 80 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-20 h-3 overflow-visible"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6C24 2 48 10 76 5"
                        stroke="#D5A044"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="76" cy="5" r="2.5" fill="#D5A044" />
                    </svg>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-ivory-border flex flex-col gap-4">
            <Link
              href="/community#join"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-midnight py-4 text-center text-sm font-semibold tracking-wide text-ivory-canvas border border-gold-harvest/50 shadow"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="size-4 text-gold-harvest" />
            </Link>
            <div className="text-center text-xs text-muted-foreground">
              hello@journey2better.com • UK Women&apos;s Community
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
