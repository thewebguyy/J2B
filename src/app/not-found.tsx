import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LogoMark } from "@/components/brand/LogoMark";
import { BotanicalMotif } from "@/components/brand/BotanicalMotif";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-ivory-canvas px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-xl text-center">
        <div className="flex justify-center mb-8">
          <LogoMark size="hero" />
        </div>

        <div className="inline-flex items-center gap-2 mb-4">
          <BotanicalMotif size={20} />
          <span className="text-xs uppercase tracking-[0.22em] font-semibold text-teal-living">
            404 &bull; Page not found
          </span>
        </div>

        <h1 className="font-serif editorial-h2 font-bold text-midnight mb-6">
          This path took a{" "}
          <span className="italic font-normal text-gold-deep">
            different turn.
          </span>
        </h1>

        <p className="font-sans text-base sm:text-lg text-charcoal/85 leading-relaxed mb-10 max-w-md mx-auto">
          The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back to familiar ground.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-midnight hover:bg-midnight-deep text-ivory-canvas px-8 py-3.5 text-xs font-semibold uppercase tracking-wider border border-gold-harvest/40 transition-all duration-300 shadow-xs"
        >
          <ArrowLeft className="size-4 text-gold-harvest" />
          <span>Back to Homepage</span>
        </Link>
      </div>
    </main>
  );
}
