"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_4px_20px_-10px_rgba(56,18,38,0.06)] border-b border-border/60 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group flex items-baseline gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-berry rounded"
          aria-label="Journey 2 Better Homepage"
        >
          <span className="font-serif text-2xl tracking-tight text-plum transition-colors group-hover:text-berry">
            Journey
          </span>
          <span className="font-serif italic text-xl text-gold font-medium">
            2
          </span>
          <span className="font-serif text-2xl tracking-tight text-plum transition-colors group-hover:text-berry">
            Better
          </span>
        </Link>

        {/* Desktop Editorial Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm tracking-wide font-sans text-foreground/80"
          aria-label="Primary Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-300 hover:text-plum ${
                  isActive ? "text-plum font-semibold" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold rounded-full"
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
            className="group inline-flex items-center gap-2 rounded-full bg-berry px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-plum hover:shadow"
          >
            <span>Join Us</span>
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex p-2 text-plum hover:text-berry focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-berry rounded-lg"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-cream/98 backdrop-blur-xl border-t border-border px-8 py-10 flex flex-col justify-between z-40 transition-all duration-300"
        >
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navigation
            </p>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-serif text-3xl transition-colors ${
                    isActive ? "text-berry italic font-medium" : "text-plum hover:text-berry"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-8 border-t border-border/80 flex flex-col gap-4">
            <Link
              href="/community#join"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-berry py-4 text-center text-sm font-semibold tracking-wide text-white shadow"
            >
              <span>Request An Invitation</span>
              <ArrowRight className="size-4" />
            </Link>
            <div className="text-center text-xs text-muted-foreground">
              hello@journey2better.com • London, UK
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
