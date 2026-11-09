import { pageMetadata } from "@/content/seo";
import { EventsHero } from "@/components/events/EventsHero";
import { EventsCards } from "@/components/events/EventsCards";
import { EventsTimeline } from "@/components/events/EventsTimeline";
import { EventsThreshold } from "@/components/events/EventsThreshold";

export const metadata = pageMetadata("/events", "Future Programmes & Events | Journey 2 Better", "Explore plans for Better Together, annual events and the founder’s memoir launch. Dates, locations and details are TBC.");

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
