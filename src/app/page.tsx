import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeTruth } from "@/components/home/HomeTruth";
import { HomePillars } from "@/components/home/HomePillars";
import { HomeThreshold } from "@/components/home/HomeThreshold";

export const metadata: Metadata = {
  title: "Journey 2 Better — Becoming: A Living Journey | UK Women's Community",
  description:
    "Your companion on the journey to better. A UK sisterhood of women rising together — intentional connection, personal growth, mindful gatherings, and everyday encouragement.",
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
