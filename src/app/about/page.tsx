import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMessyMiddle } from "@/components/about/AboutMessyMiddle";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutThreshold } from "@/components/about/AboutThreshold";

export const metadata: Metadata = {
  title: "About Our Story & Values",
  description:
    "Why Journey 2 Better was founded in the UK. Discover our ethos, the messy middle of life, and our core values of honesty, belonging, courage, and celebration.",
  alternates: {
    canonical: "https://j2b-theta.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMessyMiddle />
      <AboutValues />
      <AboutThreshold />
    </>
  );
}
