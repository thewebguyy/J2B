/**
 * Motion System Design Tokens
 * Breath Easing: Mimics deep, grounding respiration (slow start, gentle acceleration, long smooth deceleration)
 */

export const BREATH_EASING = "cubic-bezier(0.25, 1, 0.5, 1)";
export const BREATH_EASING_ARRAY = [0.25, 1, 0.5, 1] as const;

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
