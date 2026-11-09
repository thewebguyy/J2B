import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => readFileSync(join(repoRoot, relativePath), "utf8").replace(/\r\n/g, "\n");

test("Book, Resources and Shop routes reuse the shared SEO utility", () => {
  for (const [route, page] of [
    ["/book", "src/app/book/page.tsx"],
    ["/resources", "src/app/resources/page.tsx"],
    ["/shop", "src/app/shop/page.tsx"],
  ]) {
    const source = read(page);
    assert.ok(source.includes("pageMetadata"), `${page} must use pageMetadata`);
    assert.ok(source.includes(`pageMetadata(\n  "${route}"`), `${page} must set the ${route} canonical`);
  }
});

test("Resources page presents all four provisional resources", () => {
  const grid = read("src/components/resources/ResourceGrid.tsx");
  const hero = read("src/components/resources/ResourcesHero.tsx");
  for (const resource of [
    "28 Days to Becoming Better Journal",
    "Becoming Better Together Study Guide",
    "Daily Victories",
    "Declaration Cards",
  ]) {
    assert.ok(grid.includes(resource), `missing resource: ${resource}`);
  }
  assert.ok(grid.includes("In development"), "resources must show provisional status");
  assert.ok(hero.includes("not yet available"), "resources must state they are not yet available");
});

test("no draft Google Drive source documents are exposed", () => {
  const sources = [
    "src/components/resources/ResourceGrid.tsx",
    "src/components/resources/ResourcesHero.tsx",
    "src/app/resources/page.tsx",
    "src/components/book/BookHero.tsx",
    "src/components/book/BookStory.tsx",
  ];
  for (const source of sources) {
    const text = read(source);
    assert.ok(!/drive\.google|googleusercontent|docs\.google/i.test(text), `${source} must not link draft documents`);
  }
});

test("Shop page is a catalogue preview without ecommerce controls or invented pricing", () => {
  const catalogue = read("src/components/shop/ShopCatalogue.tsx");
  for (const category of [
    "Books",
    "Journals",
    "Face caps",
    "Mugs",
    "T-shirts",
    "Sweatshirts",
    "Inspirational keepsakes",
  ]) {
    assert.ok(catalogue.includes(category), `missing merchandise category: ${category}`);
  }
  assert.ok(catalogue.includes("catalogue preview"), "shop must state it is a preview");
  assert.ok(!/add to cart|checkout|£|\$\d/i.test(catalogue), "shop must not imply a real purchase");
});

test("navigation, footer and sitemap include the new routes", () => {
  const nav = read("src/components/common/Navigation.tsx");
  const footer = read("src/components/common/Footer.tsx");
  const sitemap = read("src/app/sitemap.ts");
  for (const route of ["/book", "/resources", "/shop"]) {
    assert.ok(nav.includes(`"${route}"`), `navigation missing ${route}`);
    assert.ok(footer.includes(`href="${route}"`), `footer missing ${route}`);
    assert.ok(sitemap.includes(`${route}`), `sitemap missing ${route}`);
  }
});

test("homepage surfaces the book section", () => {
  const home = read("src/app/page.tsx");
  assert.ok(home.includes("HomeBook"), "homepage must include the book section");
});

test("no fabricated book cover image is referenced", () => {
  const files = [
    "src/components/book/BookHero.tsx",
    "src/components/home/HomeBook.tsx",
  ];
  for (const file of files) {
    assert.ok(!/book-cover|cover\.(jpg|jpeg|png|webp)/i.test(read(file)), `${file} must not use a fabricated cover`);
  }
});
