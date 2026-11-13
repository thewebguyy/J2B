import type { Metadata } from "next";
import { pageMetadata } from "@/content/seo";
import { BookHero } from "@/components/book/BookHero";
import { BookStory } from "@/components/book/BookStory";

export const metadata: Metadata = pageMetadata(
  "/book",
  "My Journey to Becoming Better: A Memoir by Sade Omatsuli",
  "A forthcoming reflective memoir rooted in Sade Omatsuli's lived experiences, lessons and the founding of Journey2Better."
);

export default function BookPage() {
  return (
    <>
      <BookHero />
      <BookStory />
    </>
  );
}
