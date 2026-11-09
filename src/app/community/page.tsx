import { pageMetadata } from "@/content/seo";
import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityPillars } from "@/components/community/CommunityPillars";
import { CommunityOfferings } from "@/components/community/CommunityOfferings";
import { CommunityGuidelines } from "@/components/community/CommunityGuidelines";
import { CommunitySteps } from "@/components/community/CommunitySteps";
import { CommunityThreshold } from "@/components/community/CommunityThreshold";

export const metadata = pageMetadata("/community", "Community & Shared Growth | Journey 2 Better", "A community taking shape around shared experiences, personal growth and mutual encouragement across backgrounds and beliefs.");

export default function CommunityPage() {
  return (
    <>
      <CommunityHero />
      <CommunityPillars />
      <CommunityOfferings />
      <CommunityGuidelines />
      <CommunitySteps />
      <CommunityThreshold />
    </>
  );
}
