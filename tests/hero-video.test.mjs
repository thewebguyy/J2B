import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) =>
  readFileSync(join(repoRoot, relativePath), "utf8").replace(/\r\n/g, "\n");

test("HomeHero implements genuine HTML5 video background with required attributes and fallbacks", () => {
  const hero = read("src/components/home/HomeHero.tsx");

  assert.ok(hero.includes("<video"), "HomeHero must render a native HTML5 <video> element");
  assert.ok(hero.includes("autoPlay"), "video must support autoplay");
  assert.ok(hero.includes("muted"), "video must be muted");
  assert.ok(hero.includes("playsInline"), "video must include playsInline for iOS/Safari");
  assert.ok(hero.includes("object-cover"), "video must use object-cover");
  assert.ok(hero.includes("prefers-reduced-motion: reduce"), "HomeHero must respect prefers-reduced-motion");
  assert.ok(hero.includes("saveData"), "HomeHero must respect Save-Data preferences");
  assert.ok(hero.includes("HERO_VIDEO_SCENES"), "HomeHero must reference sequential video scenes");
  assert.ok(
    hero.includes('"Pause background film"') && hero.includes('"Play background film"'),
    "HomeHero must expose an accessible Pause/Play control"
  );
  assert.ok(!hero.includes("INCLUSIVE_SILHOUETTES"), "HomeHero must not fall back to static silhouette cards");
});
