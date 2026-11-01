import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";

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
  metadataBase: new URL("https://j2b-theta.vercel.app"),
  title: {
    default: "Journey 2 Better — UK Women's Community & Sisterhood",
    template: "%s | Journey 2 Better",
  },
  description:
    "Your companion on the journey to better. A welcoming UK community for women navigating life's changes with honest conversation, small-group sister circles, mentoring, and countryside retreats in London and online.",
  applicationName: "Journey 2 Better",
  authors: [{ name: "Journey 2 Better", url: "https://j2b-theta.vercel.app" }],
  creator: "Journey 2 Better",
  publisher: "Journey 2 Better",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "Journey 2 Better",
    "Journey to Better",
    "J2B",
    "Journey 2 Better UK",
    "UK women community",
    "London sisterhood",
    "women peer support UK",
    "women life transitions",
    "sister circles London",
    "female personal growth UK",
    "women mentoring London",
    "wellbeing gatherings UK",
    "the messy middle women",
  ],
  alternates: {
    canonical: "https://j2b-theta.vercel.app",
  },
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
  openGraph: {
    title: "Journey 2 Better — Growing is easier when you're not alone",
    description:
      "A welcoming UK sisterhood for mindful growth, honest conversation, and everyday support in the messy middle of life.",
    url: "https://j2b-theta.vercel.app",
    siteName: "Journey 2 Better",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/sanctuary-gathering.jpg",
        width: 1200,
        height: 800,
        alt: "Journey 2 Better — UK Women's Community & Sisterhood",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journey 2 Better — UK Women's Community & Sisterhood",
    description:
      "Growing is easier when you're not alone. Welcome to Journey 2 Better — honest circles, mentoring, and retreats for women in the UK.",
    images: ["/images/sanctuary-gathering.jpg"],
  },
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://j2b-theta.vercel.app/#organization",
        name: "Journey 2 Better",
        alternateName: ["J2B", "Journey to Better", "Journey 2 Better UK"],
        url: "https://j2b-theta.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://j2b-theta.vercel.app/images/logo.jpeg",
          caption: "Journey 2 Better Logo",
        },
        image: "https://j2b-theta.vercel.app/images/sanctuary-gathering.jpg",
        description:
          "A welcoming UK sisterhood for women navigating life's changes with honest conversation, small-group sister circles, mentoring, and retreats in London and online.",
        email: "hello@journey2better.com",
        telephone: "+447960964839",
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+44-7960-964839",
            contactType: "Customer Support",
            email: "hello@journey2better.com",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://j2b-theta.vercel.app/#website",
        url: "https://j2b-theta.vercel.app",
        name: "Journey 2 Better",
        alternateName: "Journey to Better",
        publisher: {
          "@id": "https://j2b-theta.vercel.app/#organization",
        },
        inLanguage: "en-GB",
      },
    ],
  };

  return (
    <html lang="en-GB" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory-canvas text-foreground antialiased selection:bg-teal-living selection:text-white botanical-grain">
        <Navigation />
        <main id="main-content" className="flex-1 relative z-10 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
