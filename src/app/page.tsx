import { pageMetadata } from "@/content/seo";
import { brandPositioning } from "@/content/j2b";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeReflection } from "@/components/home/HomeReflection";
import { HomeTruth } from "@/components/home/HomeTruth";
import { HomeBook } from "@/components/home/HomeBook";
import { HomePillars } from "@/components/home/HomePillars";
import { HomeThreshold } from "@/components/home/HomeThreshold";

export const metadata = pageMetadata("/", brandPositioning.title, brandPositioning.description);

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeReflection />
      <HomeTruth />
      <HomeBook />
      <HomePillars />
      <HomeThreshold />
    </>
  );
}
