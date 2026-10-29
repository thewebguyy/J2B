import type { Metadata } from "next";
import { EventsHero } from "@/components/events/EventsHero";
import { EventsRiseReflect } from "@/components/events/EventsRiseReflect";
import { EventsPhysical } from "@/components/events/EventsPhysical";
import { EventsTimeline } from "@/components/events/EventsTimeline";
import { EventsThreshold } from "@/components/events/EventsThreshold";

export const metadata: Metadata = {
  title: "Events & Gatherings — Workshops & Retreats | Journey 2 Better",
  description:
    "Workshops, retreats and gatherings that inspire and energise. Rise & Reflect morning circles, London intensives, and our annual spring sisterhood retreat.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsRiseReflect />
      <EventsPhysical />
      <EventsTimeline />
      <EventsThreshold />
    </>
  );
}
