import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { ShopHero } from "@/components/shop/ShopHero";
import { ShopCatalogue } from "@/components/shop/ShopCatalogue";

export const metadata: Metadata = pageMetadata(
  "/shop",
  "Merchandise Preview — Books, Journals & Keepsakes",
  "A preview of future Journey2Better offerings, including books, journals, apparel and keepsakes. Nothing is currently for sale."
);

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ShopCatalogue />
    </>
  );
}
