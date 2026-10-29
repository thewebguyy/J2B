import type { Metadata } from "next";
import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityOfferings } from "@/components/community/CommunityOfferings";
import { CommunitySteps } from "@/components/community/CommunitySteps";
import { CommunityThreshold } from "@/components/community/CommunityThreshold";

export const metadata: Metadata = {
  title: "Community — The Together | Journey 2 Better",
  description:
    "There is room for you here. Discover our Sister Circles, 1-on-1 Mentorship, and Everyday Encouragement in our UK women's community.",
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
