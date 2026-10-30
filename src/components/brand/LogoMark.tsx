import React from "react";
import Image from "next/image";

interface LogoMarkProps {
  className?: string;
  size?: "nav" | "footer" | "hero" | "compact";
  showTagline?: boolean;
}

/**
 * LogoMark — Official Journey 2 Better Brand Asset Lockup
 * Utilizes the client-provided logo artwork with authentic proportions and typography.
 */
/**
 * Pure SVG Monogram of the official Journey 2 Better emblem (Two silhouettes in harmony,
 * ascending golden pathway, sun beacon, and dual botanical leaves — zero clipped embedded text).
 */
const BrandMonogramSVG: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Warm Ivory Sanctuary Canvas */}
    <circle cx="32" cy="32" r="30" fill="#FCF9E8" />
    {/* Rising Sun Beacon */}
    <circle cx="33.5" cy="11.5" r="4.2" fill="#D5A044" />
    {/* Left Midnight Teal Silhouette Harmony Arc */}
    <path
      d="M27.5 16.5C19.5 17.5 15 24 16 32C16.8 38.5 21 42 19.5 48.5C24.5 45.5 28.5 39.5 29.5 32.5C30.5 25.5 28 20.5 27.5 16.5Z"
      fill="#02404D"
    />
    {/* Right Living Teal Silhouette Harmony Arc */}
    <path
      d="M36.5 17C44 18.2 48.5 24.5 47.5 32.5C46.8 39 42.5 42.5 44 49C39 46 35 40 34 33C33 26 35.5 21 36.5 17Z"
      fill="#036E76"
    />
    {/* Ascending Harvest Gold Pathway Ribbon */}
    <path
      d="M24 52C24.5 42 35.5 35.5 33.5 24C32.5 19 30.5 15.5 31.5 13.5C34.5 16.5 37.5 22.5 36.5 29.5C35.2 38.5 28.5 44.5 31 52.5L24 52Z"
      fill="#D5A044"
    />
    {/* Left Teal Botanical Leaf */}
    <path
      d="M16 44C14 39.5 14.5 34.5 14.5 34.5C14.5 34.5 18 38.5 19 42.5L16 44Z"
      fill="#036E76"
    />
    {/* Right Gold & Teal Botanical Leaves */}
    <path
      d="M45 43.5C46 38.5 51.5 35.5 51.5 35.5C51.5 35.5 50.5 41 46.5 44.5L45 43.5Z"
      fill="#D5A044"
    />
    <path
      d="M46 46.5C48 43 53 41.5 53 41.5C53 41.5 51.5 46 47.5 48L46 46.5Z"
      fill="#036E76"
    />
  </svg>
);

export const LogoMark: React.FC<LogoMarkProps> = ({
  className = "",
  size = "nav",
  showTagline = false,
}) => {
  if (size === "nav") {
    return (
      <div className={`flex items-center gap-3.5 select-none ${className}`}>
        {/* Clean SVG Monogram Emblem — No clipped embedded text */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold-harvest/65 bg-ivory-canvas shadow-xs flex-shrink-0">
          <BrandMonogramSVG />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-lg sm:text-[1.15rem] tracking-tight font-bold text-midnight leading-none">
            Journey <span className="font-sans text-teal-living font-extrabold">2</span>{" "}
            <span className="text-gold-harvest">Better</span>
          </span>
          <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground font-medium font-sans mt-1">
            The Living Journey
          </span>
        </div>
      </div>
    );
  }

  if (size === "hero") {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="relative w-48 sm:w-60 md:w-72 aspect-[1206/986] rounded-2xl overflow-hidden shadow-xl border border-gold-harvest/30 bg-ivory-canvas">
          <Image
            src="/images/logo.jpeg"
            alt="Journey 2 Better — Your companion on the journey to better"
            fill
            className="object-contain p-2"
            priority
          />
        </div>
      </div>
    );
  }

  if (size === "footer") {
    return (
      <div className={`flex flex-col items-start gap-4 select-none ${className}`}>
        <div className="relative w-44 sm:w-52 aspect-[1206/986] rounded-xl overflow-hidden bg-ivory-canvas border border-gold-harvest/30 shadow-md">
          <Image
            src="/images/logo.jpeg"
            alt="Journey 2 Better"
            fill
            className="object-contain p-1.5"
          />
        </div>
        {showTagline && (
          <p className="text-sm font-sans text-ivory-surface/90 italic tracking-wide max-w-xs">
            &ldquo;Your companion on the journey to better&rdquo;
          </p>
        )}
      </div>
    );
  }

  // Compact
  return (
    <div className={`relative w-8 h-8 rounded-full overflow-hidden border border-gold-harvest/50 ${className}`}>
      <BrandMonogramSVG />
    </div>
  );
};
