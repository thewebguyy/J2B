import { pageMetadata } from "@/content/seo";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutFounder } from "@/components/about/AboutFounder";
import { AboutMessyMiddle } from "@/components/about/AboutMessyMiddle";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutThreshold } from "@/components/about/AboutThreshold";

export const metadata = pageMetadata("/about", "About Our Story | Journey 2 Better", "Discover the story and purpose behind Journey2Better: life experiences, personal growth and encouragement.");

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutFounder />
      <AboutMessyMiddle />
      <AboutValues />
      <AboutThreshold />
    </>
  );
}
