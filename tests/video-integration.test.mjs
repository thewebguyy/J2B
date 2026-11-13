import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) =>
  readFileSync(join(repoRoot, relativePath), "utf8").replace(/\r\n/g, "\n");

test("Four-scene sequential narrative order is defined in correct order", () => {
  const videosDef = read("src/content/videos.ts");
  const heroComponent = read("src/components/home/HomeHero.tsx");

  assert.ok(videosDef.includes("HERO_VIDEO_SCENES"), "HERO_VIDEO_SCENES must be exported");
  assert.ok(videosDef.includes("scene-1-journey"), "Scene 1 must be The Journey");
  assert.ok(videosDef.includes("scene-2-reflection"), "Scene 2 must be Reflection");
  assert.ok(videosDef.includes("scene-3-connection"), "Scene 3 must be Connection");
  assert.ok(videosDef.includes("scene-4-becoming"), "Scene 4 must be Becoming");

  // Verify exact order in array
  const s1Idx = videosDef.indexOf("scene-1-journey");
  const s2Idx = videosDef.indexOf("scene-2-reflection");
  const s3Idx = videosDef.indexOf("scene-3-connection");
  const s4Idx = videosDef.indexOf("scene-4-becoming");

  assert.ok(s1Idx < s2Idx, "Scene 1 must precede Scene 2");
  assert.ok(s2Idx < s3Idx, "Scene 2 must precede Scene 3");
  assert.ok(s3Idx < s4Idx, "Scene 3 must precede Scene 4");

  // Verify HomeHero uses HERO_VIDEO_SCENES
  assert.ok(heroComponent.includes("HERO_VIDEO_SCENES"), "HomeHero must use HERO_VIDEO_SCENES");
});

test("All optimized video files and poster frames exist in public directory", () => {
  const expectedFiles = [
    "public/videos/scene-1-journey.mp4",
    "public/videos/scene-1-journey-mobile.mp4",
    "public/videos/scene-2-reflection.mp4",
    "public/videos/scene-2-reflection-mobile.mp4",
    "public/videos/scene-3-connection.mp4",
    "public/videos/scene-3-connection-mobile.mp4",
    "public/videos/scene-4-becoming.mp4",
    "public/videos/scene-4-becoming-mobile.mp4",
    "public/videos/posters/scene-1-journey-poster.jpg",
    "public/videos/posters/scene-2-reflection-poster.jpg",
    "public/videos/posters/scene-3-connection-poster.jpg",
    "public/videos/posters/scene-4-becoming-poster.jpg",
  ];

  for (const f of expectedFiles) {
    assert.ok(existsSync(join(repoRoot, f)), `Missing expected media asset: ${f}`);
  }
});

test("HomeHero double-buffers video slots to prevent black frames and visible file switching", () => {
  const hero = read("src/components/home/HomeHero.tsx");

  assert.ok(hero.includes("videoRefA"), "HomeHero must manage Slot A");
  assert.ok(hero.includes("videoRefB"), "HomeHero must manage Slot B");
  assert.ok(hero.includes("activeSlot"), "HomeHero must track active slot");
  assert.ok(hero.includes("triggerTransition"), "HomeHero must implement smooth transition");
  assert.ok(hero.includes("prefers-reduced-motion: reduce"), "HomeHero must respect reduced motion");
  assert.ok(hero.includes("saveData"), "HomeHero must respect Save-Data");
  assert.ok(hero.includes("Pause film") && hero.includes("Play film"), "HomeHero must provide playback controls");
});

test("Page-to-video mapping correctly integrates scenes on secondary routes", () => {
  const aboutHero = read("src/components/about/AboutHero.tsx");
  const communityHero = read("src/components/community/CommunityHero.tsx");
  const eventsHero = read("src/components/events/EventsHero.tsx");
  const bookHero = read("src/components/book/BookHero.tsx");
  const resourcesHero = read("src/components/resources/ResourcesHero.tsx");

  assert.ok(aboutHero.includes("PAGE_VIDEOS.about"), "AboutHero must use PAGE_VIDEOS.about");
  assert.ok(communityHero.includes("PAGE_VIDEOS.community"), "CommunityHero must use PAGE_VIDEOS.community");
  assert.ok(eventsHero.includes("PAGE_VIDEOS.events"), "EventsHero must use PAGE_VIDEOS.events");
  assert.ok(bookHero.includes("PAGE_VIDEOS.book"), "BookHero must use PAGE_VIDEOS.book");
  assert.ok(resourcesHero.includes("PAGE_VIDEOS.resources"), "ResourcesHero must use PAGE_VIDEOS.resources");
});

