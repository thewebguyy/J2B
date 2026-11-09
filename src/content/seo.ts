import type { Metadata } from "next";
import { brandPositioning } from "./j2b";

// Preserve the existing public origin until the production domain is approved.
export const siteUrl = "https://j2b-theta.vercel.app";
export const socialImage = {
  url: "/images/sanctuary-gathering.jpg",
  width: 1200,
  height: 800,
  alt: "Journey 2 Better — Life Stories, Personal Growth & Community",
};

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = new URL(path, siteUrl).href;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Journey 2 Better", locale: "en_GB", type: "website", images: [socialImage] },
    twitter: { card: "summary_large_image", title, description, images: [socialImage.url] },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Journey 2 Better",
      alternateName: ["J2B", "Journey2Better", "Journey to Better"],
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/images/logo.jpeg`, caption: "Journey 2 Better Logo" },
      description: brandPositioning.description,
      email: "hello@journey2better.com",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Journey 2 Better",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-GB",
    },
  ],
};
