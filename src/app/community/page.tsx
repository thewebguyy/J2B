import type { Metadata } from "next";
import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityOfferings } from "@/components/community/CommunityOfferings";
import { CommunitySteps } from "@/components/community/CommunitySteps";
import { CommunityThreshold } from "@/components/community/CommunityThreshold";

export const metadata: Metadata = {
  title: "The Community — Sister Circles & Mentorship | Journey 2 Better",
  description:
    "Circles, mentorship and daily encouragement for women rising together. Small enough to feel like family, wide enough to open doors you did not know existed.",
};

export default function CommunityPage() {
  return (
    <>
      <CommunityHero />
      <CommunityOfferings />
      <CommunitySteps />
      <CommunityThreshold />
    </>
  );
}
