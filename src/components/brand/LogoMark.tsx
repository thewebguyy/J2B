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
export const LogoMark: React.FC<LogoMarkProps> = ({
  className = "",
  size = "nav",
  showTagline = false,
}) => {
  if (size === "nav") {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        {/* Crisp circular cropped emblem view for high-density nav */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold-harvest/40 bg-ivory-surface shadow-sm flex-shrink-0">
          <Image
            src="/images/logo.jpeg"
            alt="Journey 2 Better Emblem"
            width={80}
            height={80}
            className="w-full h-full object-cover object-top scale-125"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-lg tracking-tight font-bold text-midnight leading-none">
            Journey <span className="font-sans text-teal-living font-extrabold">2</span> <span className="text-gold-harvest">Better</span>
          </span>
          <span className="text-[10px] tracking-wider uppercase text-muted-foreground font-medium font-sans mt-0.5">
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
      <Image
        src="/images/logo.jpeg"
        alt="J2B"
        width={64}
        height={64}
        className="w-full h-full object-cover scale-125"
      />
    </div>
  );
};
