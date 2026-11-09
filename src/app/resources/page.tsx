import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { ResourcesHero } from "@/components/resources/ResourcesHero";
import { ResourceGrid } from "@/components/resources/ResourceGrid";
import { MentorshipSpeaking } from "@/components/resources/MentorshipSpeaking";

export const metadata: Metadata = pageMetadata(
  "/resources",
  "Resources — Journals, Study Guide & Companion Tools",
  "Provisional Journey2Better resources being developed alongside the memoir, including a 28-day journal, study guide, Daily Victories and declaration cards."
);

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourceGrid />
      <MentorshipSpeaking />
    </>
  );
}
