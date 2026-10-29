import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeEthos } from "@/components/home/HomeEthos";
import { HomePillars } from "@/components/home/HomePillars";
import { HomeThreshold } from "@/components/home/HomeThreshold";

export const metadata: Metadata = {
  title: "Journey 2 Better — Come as you are | A Sisterhood for Women",
  description:
    "A sisterhood of women rising together — connection, personal growth, live events, and unwavering support in the quiet work of becoming.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeEthos />
      <HomePillars />
      <HomeThreshold />
    </>
  );
}
