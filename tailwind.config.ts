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
        cream: {
          DEFAULT: "var(--cream)",
          light: "#FCFAF7",
          dark: "#F3EDE3",
        },
        blush: {
          DEFAULT: "var(--blush)",
          light: "#FBF3F1",
          dark: "#EEDCD6",
        },
        plum: {
          DEFAULT: "var(--plum)",
          deep: "var(--plum-deep)",
          light: "#6B2348",
        },
        berry: {
          DEFAULT: "var(--berry)",
          dark: "#751E36",
          light: "#A83353",
        },
        gold: {
          DEFAULT: "var(--gold)",
          light: "#EAD49E",
          dark: "#BA9444",
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
        "thread-draw": "threadDraw 2s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "soft-pulse": "softPulse 4s ease-in-out infinite",
      },
      keyframes: {
        threadDraw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        softPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
