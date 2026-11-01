import type { Metadata } from "next";
import { EventsHero } from "@/components/events/EventsHero";
import { EventsCards } from "@/components/events/EventsCards";
import { EventsTimeline } from "@/components/events/EventsTimeline";
import { EventsThreshold } from "@/components/events/EventsThreshold";

export const metadata: Metadata = {
  title: "Events, Morning Circles & Retreats",
  description:
    "Join our Rise & Reflect morning circles on Zoom, Better Together London workshops, and Annual Sisterhood Retreat in the English countryside.",
  alternates: {
    canonical: "https://j2b-theta.vercel.app/events",
  },
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsCards />
      <EventsTimeline />
      <EventsThreshold />
    </>
  );
}
