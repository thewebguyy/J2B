import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMessyMiddle } from "@/components/about/AboutMessyMiddle";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutThreshold } from "@/components/about/AboutThreshold";

export const metadata: Metadata = {
  title: "About Us — Our Story & Values | Journey 2 Better",
  description:
    "Our story, our values, and the women at the heart of the community. A sisterhood built for the messy middle of life and the quiet work of becoming.",
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
