import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Journey 2 Better — UK Community for Personal Growth",
    short_name: "Journey 2 Better",
    description:
      "Your companion on the journey to better. A welcoming UK community for anyone navigating life's changes with honest conversation, community circles, mentoring, and retreats.",
    start_url: "/",
    display: "standalone",
    background_color: "#FCF9E8",
    theme_color: "#02404D",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
