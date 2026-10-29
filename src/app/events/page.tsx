import type { Metadata } from "next";
import { EventsHero } from "@/components/events/EventsHero";
import { EventsCards } from "@/components/events/EventsCards";
import { EventsTimeline } from "@/components/events/EventsTimeline";
import { EventsThreshold } from "@/components/events/EventsThreshold";

export const metadata: Metadata = {
  title: "Events — The Moments | Journey 2 Better",
  description:
    "Some moments are better shared. Explore our Rise & Reflect morning circles, Better Together London workshops, and Annual Sisterhood Retreat.",
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
