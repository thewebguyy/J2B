import type { Metadata } from "next";
import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityOfferings } from "@/components/community/CommunityOfferings";
import { CommunitySteps } from "@/components/community/CommunitySteps";
import { CommunityThreshold } from "@/components/community/CommunityThreshold";

export const metadata: Metadata = {
  title: "Community Offerings & Sister Circles",
  description:
    "Explore Journey 2 Better offerings: small-group Sister Circles, 1-on-1 Mentorship, and Everyday Encouragement for women in the UK.",
  alternates: {
    canonical: "https://j2b-theta.vercel.app/community",
  },
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
