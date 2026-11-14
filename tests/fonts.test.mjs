import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(repoRoot, p), "utf8").replace(/\r\n/g, "\n");

test("layout uses self-hosted fonts, not the Google Fonts loader", () => {
  const layout = read("src/app/layout.tsx");
  assert.ok(layout.includes('from "next/font/local"'), "layout must use next/font/local");
  assert.ok(!layout.includes("next/font/google"), "layout must not depend on Google Fonts at build time");
  assert.ok(layout.includes("--font-playfair"), "Playfair CSS variable must be preserved");
  assert.ok(layout.includes("--font-sans"), "sans CSS variable must be preserved");
  assert.ok(layout.includes('display: "swap"'), "font-display: swap must be preserved");
});

test("bundled font assets are present and are valid WOFF2 files", () => {
  const files = [
    "src/fonts/playfair-display-latin.woff2",
    "src/fonts/playfair-display-latin-italic.woff2",
    "src/fonts/plus-jakarta-sans-latin.woff2",
  ];
  for (const file of files) {
    assert.ok(existsSync(join(repoRoot, file)), `missing font asset: ${file}`);
    const bytes = readFileSync(join(repoRoot, file));
    assert.equal(bytes.subarray(0, 4).toString("ascii"), "wOF2", `${file} is not a WOFF2 file`);
  }
  assert.ok(existsSync(join(repoRoot, "src/fonts/OFL.txt")), "SIL OFL license must be present");
});
