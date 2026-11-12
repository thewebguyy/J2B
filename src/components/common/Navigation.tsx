"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Mail, MessageCircle } from "lucide-react";
import { LogoMark } from "@/components/brand/LogoMark";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

interface NavItem {
  href: string;
  label: string;
  description?: string;
}

const PRIMARY_LINKS: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
  { href: "/book", label: "The Memoir" },
];

const EXPLORE_LINKS: NavItem[] = [
  {
    href: "/resources",
    label: "Resources",
    description: "Provisional study guides, journals & daily companions",
  },
  {
    href: "/shop",
    label: "Shop Preview",
    description: "Catalogue preview of future keepsakes & apparel",
  },
];

const ALL_MOBILE_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Our Story" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Future Events" },
  { href: "/book", label: "The Memoir" },
  { href: "/resources", label: "Resources" },
  { href: "/shop", label: "Shop Preview" },
  { href: "/contact", label: "Contact" },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreMenuOpen, setExploreMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const exploreTriggerRef = useRef<HTMLButtonElement>(null);
  const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change without pulling focus back
  useEffect(() => {
    setMobileMenuOpen(false);
    setExploreMenuOpen(false);
  }, [pathname]);

  const closeMobileDrawer = useCallback((restoreFocus: boolean) => {
    setMobileMenuOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => {
        mobileTriggerRef.current?.focus();
      });
    }
  }, []);

  const closeExploreDropdown = useCallback((restoreFocus: boolean) => {
    setExploreMenuOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => {
        exploreTriggerRef.current?.focus();
      });
    }
  }, []);

  // Lock body scroll and prevent background interaction while mobile drawer is open
  useEffect(() => {
    const header = document.querySelector("header");
    const main = document.getElementById("main-content");
    const footer = document.querySelector("footer");

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      header?.setAttribute("inert", "");
      main?.setAttribute("inert", "");
      main?.setAttribute("aria-hidden", "true");
      footer?.setAttribute("inert", "");
      footer?.setAttribute("aria-hidden", "true");
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    } else {
      document.body.style.overflow = "";
      header?.removeAttribute("inert");
      main?.removeAttribute("inert");
      main?.removeAttribute("aria-hidden");
      footer?.removeAttribute("inert");
      footer?.removeAttribute("aria-hidden");
    }

    return () => {
      document.body.style.overflow = "";
      header?.removeAttribute("inert");
      main?.removeAttribute("inert");
      main?.removeAttribute("aria-hidden");
      footer?.removeAttribute("inert");
      footer?.removeAttribute("aria-hidden");
    };
  }, [mobileMenuOpen]);

  // Global Escape + Mobile Drawer Focus Trap
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (mobileMenuOpen) {
          event.preventDefault();
          closeMobileDrawer(true);
          return;
        }
        if (exploreMenuOpen) {
          event.preventDefault();
          const insideDropdown = dropdownRef.current?.contains(document.activeElement) ?? false;
          closeExploreDropdown(insideDropdown);
        }
        return;
      }

      if (event.key === "Tab" && mobileMenuOpen && drawerRef.current) {
        const focusables = Array.from(
          drawerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;

        if (!drawerRef.current.contains(active)) {
          event.preventDefault();
          first.focus();
          return;
        }

        if (event.shiftKey && active === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, exploreMenuOpen, closeMobileDrawer, closeExploreDropdown]);

  // Outside click/pointer dismissal for desktop Explore dropdown
  useEffect(() => {
    if (!exploreMenuOpen) return;
    const handlePointerOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExploreMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handlePointerOutside);
    document.addEventListener("touchstart", handlePointerOutside, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handlePointerOutside);
      document.removeEventListener("touchstart", handlePointerOutside);
    };
  }, [exploreMenuOpen]);

  const handleExploreTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setExploreMenuOpen(true);
      requestAnimationFrame(() => {
        menuItemRefs.current[0]?.focus();
      });
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setExploreMenuOpen(true);
      requestAnimationFrame(() => {
        menuItemRefs.current[EXPLORE_LINKS.length - 1]?.focus();
      });
    }
  };

  const handleMenuItemKeyDown = (event: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = (index + 1) % EXPLORE_LINKS.length;
      menuItemRefs.current[nextIndex]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      const prevIndex = (index - 1 + EXPLORE_LINKS.length) % EXPLORE_LINKS.length;
      menuItemRefs.current[prevIndex]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      menuItemRefs.current[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      menuItemRefs.current[EXPLORE_LINKS.length - 1]?.focus();
    }
  };

  const isExploreActive = EXPLORE_LINKS.some((item) => pathname === item.href);

  return (
    <>
      <header
        aria-hidden={mobileMenuOpen ? "true" : undefined}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ivory-canvas/95 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(2,64,77,0.06)] border-b border-ivory-border/80 py-2 sm:py-2.5"
            : "bg-ivory-canvas/95 backdrop-blur-sm border-b border-ivory-border/50 py-2 sm:py-2.5"
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

          {/* Desktop Editorial Navigation (Clean, composed, 1024px+) */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-8 text-[13.5px] font-sans tracking-[0.02em] text-midnight/85"
            aria-label="Primary Navigation"
          >
            {PRIMARY_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 transition-colors duration-200 hover:text-midnight font-medium whitespace-nowrap ${
                    isActive ? "text-midnight font-semibold" : "text-midnight/80"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gold-harvest rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}

            {/* Accessible "Explore" Dropdown Menu */}
            <div
              className="relative"
              ref={dropdownRef}
              onBlur={(event) => {
                if (exploreMenuOpen && !dropdownRef.current?.contains(event.relatedTarget as Node)) {
                  setExploreMenuOpen(false);
                }
              }}
            >
              <button
                ref={exploreTriggerRef}
                id="explore-menu-button"
                type="button"
                onClick={() => setExploreMenuOpen((prev) => !prev)}
                onKeyDown={handleExploreTriggerKeyDown}
                aria-expanded={exploreMenuOpen}
                aria-haspopup="menu"
                aria-controls="explore-menu"
                className={`relative inline-flex items-center gap-1.5 py-2 transition-colors duration-200 hover:text-midnight font-medium whitespace-nowrap ${
                  isExploreActive ? "text-midnight font-semibold" : "text-midnight/80"
                }`}
              >
                <span>Explore</span>
                <ChevronDown
                  className={`size-3.5 text-muted-foreground transition-transform duration-200 ${
                    exploreMenuOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
                {isExploreActive && (
                  <span
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gold-harvest rounded-full"
                    aria-hidden="true"
                  />
                )}
              </button>

              {exploreMenuOpen && (
                <div
                  id="explore-menu"
                  role="menu"
                  aria-labelledby="explore-menu-button"
                  className="absolute left-1/2 top-full mt-2 w-72 rounded-2xl bg-ivory-canvas p-2.5 shadow-[0_18px_40px_-10px_rgba(2,64,77,0.18)] border border-ivory-border z-50 animate-dropdown-enter"
                >
                  {EXPLORE_LINKS.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        ref={(el) => {
                          menuItemRefs.current[idx] = el;
                        }}
                        href={item.href}
                        role="menuitem"
                        aria-current={isActive ? "page" : undefined}
                        onKeyDown={(e) => handleMenuItemKeyDown(e, idx)}
                        onClick={() => setExploreMenuOpen(false)}
                        className={`group block p-3 rounded-xl transition-colors ${
                          isActive
                            ? "bg-ivory-surface border-l-2 border-gold-harvest text-midnight font-semibold"
                            : "hover:bg-ivory-surface text-midnight/85 hover:text-midnight"
                        }`}
                      >
                        <div className="flex items-center justify-between text-sm font-medium">
                          <span>{item.label}</span>
                          {isActive && (
                            <span className="size-1.5 rounded-full bg-gold-harvest" aria-hidden="true" />
                          )}
                        </div>
                        {item.description && (
                          <p className="mt-1 text-xs text-muted-foreground font-normal leading-normal">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Header Action Button */}
          <div className="hidden lg:flex items-center gap-3.5 flex-shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-midnight px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory-canvas border border-gold-harvest/40 shadow-sm transition-all duration-200 hover:bg-midnight-deep hover:border-gold-harvest min-h-[44px] whitespace-nowrap"
            >
              <span>Get in Touch</span>
              <ArrowRight className="size-3.5 text-gold-harvest transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            ref={mobileTriggerRef}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Open menu"
            className="lg:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5 text-midnight hover:text-teal-living focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-harvest rounded-xl bg-ivory-surface/90 border border-ivory-border"
          >
            <Menu className="size-5 text-midnight" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Full-Viewport Mobile Navigation Modal Drawer (Sibling to header so backdrop-filter never traps fixed inset-0) */}
      {mobileMenuOpen && (
        <div
          ref={drawerRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="lg:hidden fixed inset-0 z-[60] bg-ivory-canvas flex flex-col justify-between overflow-y-auto animate-drawer-enter"
        >
          <div>
            {/* Modal Top Bar aligned cleanly with page header */}
            <div className="flex items-center justify-between px-5 sm:px-8 py-2 border-b border-ivory-border/80 bg-ivory-canvas">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-harvest rounded-lg flex-shrink-0 min-h-[44px] inline-flex items-center"
                aria-label="Journey 2 Better Homepage"
              >
                <LogoMark size="nav" />
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => closeMobileDrawer(true)}
                aria-label="Close menu"
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] p-2.5 text-midnight hover:text-teal-living focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-harvest rounded-xl bg-ivory-surface border border-ivory-border"
              >
                <X className="size-5 text-midnight" aria-hidden="true" />
              </button>
            </div>

            <div className="px-6 pt-5 pb-4 flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-ivory-border/70">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-living">
                  Navigation
                </span>
                <BotanicalMotif size={18} />
              </div>

              <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
                {ALL_MOBILE_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3.5 rounded-xl transition-colors font-serif text-xl sm:text-2xl min-h-[46px] ${
                        isActive
                          ? "text-midnight bg-ivory-surface font-semibold border-l-2 border-gold-harvest"
                          : "text-midnight/85 hover:bg-ivory-surface/70 hover:text-midnight"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{link.label}</span>
                      {isActive ? (
                        <span className="size-2 rounded-full bg-gold-harvest" aria-hidden="true" />
                      ) : (
                        <ArrowRight className="size-4 text-midnight/35" aria-hidden="true" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Mobile Drawer Bottom Actions */}
          <div className="px-6 pt-4 pb-6 border-t border-ivory-border/80 flex flex-col gap-2.5 bg-ivory-surface/40">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-midnight py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-ivory-canvas border border-gold-harvest/45 shadow-sm min-h-[48px]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="size-4 text-gold-harvest" aria-hidden="true" />
            </Link>

            <div className="flex items-center justify-center gap-4 pt-1 text-xs text-muted-foreground font-sans">
              <a
                href="mailto:hello@journey2better.com"
                className="hover:text-midnight inline-flex items-center gap-1.5 transition-colors min-h-[44px] px-3 py-2 rounded-lg"
              >
                <Mail className="size-3.5 text-gold-deep" aria-hidden="true" />
                <span>Email Us</span>
              </a>
              <span aria-hidden="true">&bull;</span>
              <a
                href="https://wa.me/447960964839"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-midnight inline-flex items-center gap-1.5 transition-colors min-h-[44px] px-3 py-2 rounded-lg"
              >
                <MessageCircle className="size-3.5 text-teal-living" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
