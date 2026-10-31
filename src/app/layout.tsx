import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Journey 2 Better — A Community for Women in the UK",
  description:
    "Your companion on the journey to better. A welcoming community of women in the UK meeting up, talking honestly, and supporting each other through life's changes.",
  metadataBase: new URL("https://j2b-theta.vercel.app"),
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
        alt: "Journey 2 Better — Your companion on the journey to better",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
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
