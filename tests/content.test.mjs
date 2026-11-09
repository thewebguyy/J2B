import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(repoRoot, p), "utf8").replace(/\r\n/g, "\n");

function listFiles(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) listFiles(full, out);
    else if (/\.(ts|tsx)$/.test(entry)) out.push(full);
  }
  return out;
}

const rel = (p) => relative(repoRoot, p).replace(/\\/g, "/");

test("content layer preserves the eight client values", () => {
  const content = read("src/content/j2b.ts");
  const values = [
    "Authenticity",
    "Compassion",
    "Community",
    "Empowerment",
    "Growth",
    "Hope",
    "Inclusions",
    "Respect",
  ];
  for (const value of values) {
    assert.ok(content.includes(value), `missing value: ${value}`);
  }
});

test("content layer preserves the five community pillars", () => {
  const content = read("src/content/j2b.ts");
  const pillars = [
    "Life Lessons",
    "Personal Growth",
    "Relationships and understanding",
    "New Beginnings",
    "Encouragement and Community",
  ];
  for (const pillar of pillars) {
    assert.ok(content.includes(pillar), `missing pillar: ${pillar}`);
  }
});

test("content layer preserves guidelines, disclaimer, welcome, vision and founder", () => {
  const content = read("src/content/j2b.ts");
  const required = [
    "Respect differences in faith",
    "Share personal stories only by choice",
    "Do not attack, shame, harass",
    "Seek consent before reposting",
    "Community conversations are not substitutes",
    "Moderators may remove harmful content",
    "This is general information and support group, not medical advice",
    "Journey2Better is a welcoming community",
    "A world in which people feel supported",
    "Sade Omatsuli",
    "hello@journey2better.com",
  ];
  for (const phrase of required) {
    assert.ok(content.includes(phrase), `missing phrase: ${phrase}`);
  }
});

test("public source carries no UK/London-only audience positioning", () => {
  const forbidden = [
    /\bLondon\b/i,
    /UK community/i,
    /community in the UK/i,
    /UK-wide/i,
    /UK-based/i,
    /\bcountryside\b/i,
    /\bZoom\b/i,
    /Free to join/i,
    /\bweekly\b/i,
    /\bfortnight\b/i,
    /\bsisterhood\b/i,
  ];
  const failures = [];
  for (const full of listFiles(join(repoRoot, "src"))) {
    const path = rel(full);
    // The founder's biography keeps accurate personal history in the UK.
    if (path === "src/content/j2b.ts") continue;
    // Sitemap changeFrequency describes crawl cadence, not an audience.
    if (path === "src/app/sitemap.ts") continue;
    read(path).split("\n").forEach((line, index) => {
      // Asset filename, not positioning copy.
      if (line.includes("about-sisterhood.jpg")) return;
      for (const pattern of forbidden) {
        if (pattern.test(line)) {
          failures.push(`${path}:${index + 1}: ${line.trim()}`);
          break;
        }
      }
    });
  }
  assert.deepEqual(failures, []);
});

test("About and Community sections are sourced from the shared content layer", () => {
  const founder = read("src/components/about/AboutFounder.tsx");
  assert.ok(founder.includes("j2bContent.founder"), "founder section must use the shared founder content");

  const pillars = read("src/components/community/CommunityPillars.tsx");
  assert.ok(pillars.includes("j2bContent.pillars"), "pillars section must use the shared pillars content");

  const guidelines = read("src/components/community/CommunityGuidelines.tsx");
  assert.ok(
    guidelines.includes("j2bContent.communityGuidelines"),
    "guidelines section must use the shared guidelines content"
  );
  assert.ok(
    guidelines.includes("j2bContent.healthDisclaimer"),
    "guidelines section must surface the shared health disclaimer"
  );
});

test("About and Community pages render their Sprint 2 sections", () => {
  const about = read("src/app/about/page.tsx");
  assert.ok(about.includes("AboutFounder"), "About page must render the founder section");
  assert.ok(about.includes("AboutValues"), "About page must render the values and vision section");

  const community = read("src/app/community/page.tsx");
  assert.ok(community.includes("CommunityPillars"), "Community page must render the five pillars");
  assert.ok(community.includes("CommunityGuidelines"), "Community page must render the guidelines");
  assert.ok(community.includes("CommunityOfferings"), "Community page must render the shared direction");
});
