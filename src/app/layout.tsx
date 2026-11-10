import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { brandPositioning } from "@/content/j2b";
import { organizationSchema, pageMetadata, siteUrl } from "@/content/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#02404D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  ...pageMetadata("/", brandPositioning.title, brandPositioning.description),
  metadataBase: new URL(siteUrl),
  applicationName: "Journey 2 Better",
  authors: [{ name: "Journey 2 Better", url: siteUrl }],
  creator: "Journey 2 Better",
  publisher: "Journey 2 Better",
  formatDetection: { email: false, address: false, telephone: false },
  keywords: ["Journey2Better", "Journey 2 Better", "J2B", "Sade Omatsuli", "memoir", "life stories", "life lessons", "personal growth", "community", "mutual encouragement"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory-canvas text-foreground antialiased selection:bg-teal-living selection:text-white botanical-grain">
        <Navigation />
        <main id="main-content" className="flex-1 relative z-10 pt-[94px] sm:pt-[106px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
