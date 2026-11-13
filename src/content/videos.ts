export interface VideoScene {
  id: string;
  title: string;
  description: string;
  desktopSrc: string;
  mobileSrc: string;
  posterSrc: string;
  durationSeconds: number;
}

export const HERO_VIDEO_SCENES: readonly VideoScene[] = [
  {
    id: "scene-1-journey",
    title: "The Journey",
    description: "Sunlit ascending path through lush woodland, inviting forward movement",
    desktopSrc: "/videos/scene-1-journey.mp4",
    mobileSrc: "/videos/scene-1-journey-mobile.mp4",
    posterSrc: "/videos/posters/scene-1-journey-poster.jpg",
    durationSeconds: 7.93,
  },
  {
    id: "scene-2-reflection",
    title: "Reflection",
    description: "Grounded moment of quiet contemplation and introspection in warm light",
    desktopSrc: "/videos/scene-2-reflection.mp4",
    mobileSrc: "/videos/scene-2-reflection-mobile.mp4",
    posterSrc: "/videos/posters/scene-2-reflection-poster.jpg",
    durationSeconds: 7.93,
  },
  {
    id: "scene-3-connection",
    title: "Connection",
    description: "Warm, candid stroll and shared conversation across backgrounds",
    desktopSrc: "/videos/scene-3-connection.mp4",
    mobileSrc: "/videos/scene-3-connection-mobile.mp4",
    posterSrc: "/videos/posters/scene-3-connection-poster.jpg",
    durationSeconds: 7.93,
  },
  {
    id: "scene-4-becoming",
    title: "Becoming",
    description: "Winding woodland trail bathed in golden dawn light, completing the loop",
    desktopSrc: "/videos/scene-4-becoming.mp4",
    mobileSrc: "/videos/scene-4-becoming-mobile.mp4",
    posterSrc: "/videos/posters/scene-4-becoming-poster.jpg",
    durationSeconds: 7.93,
  },
] as const;

export const PAGE_VIDEOS = {
  about: {
    title: "About Our Story",
    desktopSrc: "/videos/scene-1-journey.mp4",
    mobileSrc: "/videos/scene-1-journey-mobile.mp4",
    posterSrc: "/videos/posters/scene-1-journey-poster.jpg",
    description: "The ascending journey through life transitions",
  },
  community: {
    title: "Community",
    desktopSrc: "/videos/scene-3-connection.mp4",
    mobileSrc: "/videos/scene-3-connection-mobile.mp4",
    posterSrc: "/videos/posters/scene-3-connection-poster.jpg",
    description: "People walking together and encouraging one another",
  },
  events: {
    title: "Events",
    desktopSrc: "/videos/scene-3-connection.mp4",
    mobileSrc: "/videos/scene-3-connection-mobile.mp4",
    posterSrc: "/videos/posters/scene-3-connection-poster.jpg",
    description: "Shared moments and community gathering rhythm",
  },
  book: {
    title: "The Memoir",
    desktopSrc: "/videos/scene-2-reflection.mp4",
    mobileSrc: "/videos/scene-2-reflection-mobile.mp4",
    posterSrc: "/videos/posters/scene-2-reflection-poster.jpg",
    description: "Personal reflection, life stories, and self-discovery",
  },
  resources: {
    title: "Resources",
    desktopSrc: "/videos/scene-4-becoming.mp4",
    mobileSrc: "/videos/scene-4-becoming-mobile.mp4",
    posterSrc: "/videos/posters/scene-4-becoming-poster.jpg",
    description: "The winding path of study, growth, and practice",
  },
} as const;

