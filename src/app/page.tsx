import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeTruth } from "@/components/home/HomeTruth";
import { HomePillars } from "@/components/home/HomePillars";
import { HomeThreshold } from "@/components/home/HomeThreshold";

export const metadata: Metadata = {
  title: "Journey 2 Better — UK Community for Personal Growth & Companionship",
  description:
    "Your companion on the journey to better. A welcoming UK community for anyone navigating life's changes with honest conversation, community circles, mentoring, and retreats in London and online.",
  alternates: {
    canonical: "https://j2b-theta.vercel.app",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTruth />
      <HomePillars />
      <HomeThreshold />
    </>
  );
}
