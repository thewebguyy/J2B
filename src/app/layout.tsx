import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/common/Navigation";
import { Footer } from "@/components/common/Footer";
import { GoldenThread } from "@/components/common/GoldenThread";

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

export const metadata: Metadata = {
  title: "Journey 2 Better — The Woven Thread | A Digital Sanctuary",
  description:
    "A sisterhood of women rising together — connection, personal growth, live events, and unwavering support in the messy middle of life.",
  metadataBase: new URL("https://journey2better.lovable.app"),
  openGraph: {
    title: "Journey 2 Better — The Woven Thread",
    description:
      "A sisterhood of women rising together — connection, personal growth, live events, and unwavering support.",
    url: "https://journey2better.lovable.app",
    siteName: "Journey 2 Better",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream text-foreground antialiased selection:bg-berry selection:text-white">
        <Navigation />
        <GoldenThread />
        <main id="main-content" className="flex-1 relative z-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
