/**
 * Motion System Design Tokens & GSAP Helpers
 * Breath Easing: Mimics deep, grounding respiration (slow start, gentle acceleration, long smooth deceleration)
 */

export const BREATH_EASING = "cubic-bezier(0.25, 1, 0.5, 1)";
export const BREATH_EASING_ARRAY = [0.25, 1, 0.5, 1] as const;

export const GSAP_EASE = "power3.out";
export const GSAP_EASE_SOFT = "power2.out";

export const DURATIONS = {
  instant: 150,
  deliberate: 400,
  breath: 650,
  unhurried: 900,
  ambient: 1400,
} as const;

export function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

let scrollTriggerRegistered = false;

export async function loadGsapWithScrollTrigger() {
  const gsapModule = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  const gsap = gsapModule.gsap || gsapModule.default;
  if (!scrollTriggerRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    scrollTriggerRegistered = true;
  }
  return { gsap, ScrollTrigger };
}
