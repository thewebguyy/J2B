import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        charcoal: "#12242B",
        // New canonical palette: BECOMING — A LIVING JOURNEY
        ivory: {
          DEFAULT: "var(--ivory)",
          canvas: "#FCF9E8",
          surface: "#F7F2E2",
          card: "#FFFFFF",
          border: "#E9E1C9",
          dark: "#E3DABF",
        },
        midnight: {
          DEFAULT: "var(--midnight)",
          deep: "#012B34",
          light: "#045667",
        },
        teal: {
          DEFAULT: "var(--teal)",
          living: "#036E76",
          bright: "#0A8B95",
          subtle: "#E6F3F4",
          hover: "#02555C",
        },
        gold: {
          DEFAULT: "var(--gold)",
          harvest: "#D5A044",
          light: "#E5B660",
          deep: "#B6832A",
          subtle: "#FAF2DE",
        },
        border: "var(--border)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "path-draw": "pathDraw 2.4s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "gentle-float": "gentleFloat 6s ease-in-out infinite",
        "sun-glow": "sunGlow 4s ease-in-out infinite",
      },
      keyframes: {
        pathDraw: {
          "0%": { strokeDashoffset: "1200" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gentleFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        sunGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
