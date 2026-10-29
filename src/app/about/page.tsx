import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMessyMiddle } from "@/components/about/AboutMessyMiddle";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutThreshold } from "@/components/about/AboutThreshold";

export const metadata: Metadata = {
  title: "About Us — The Why | Journey 2 Better",
  description:
    "Becoming is not something we do alone. Discover the founding ethos, core values, and community purpose behind Journey 2 Better.",
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
