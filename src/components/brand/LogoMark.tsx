import React from "react";
import Image from "next/image";

interface LogoMarkProps {
  className?: string;
  size?: "nav" | "footer" | "hero" | "compact";
  showTagline?: boolean;
}

const OFFICIAL_LOGO_SRC = "/images/logo.jpeg";
const OFFICIAL_LOGO_ALT = "Journey 2 Better — Your companion on the journey to better";

/**
 * LogoMark — Official Journey 2 Better Brand Artwork Lockup
 * Renders the unmodified client-provided artwork (1206x986, matching j2b logo.jpeg)
 * at its native proportions within an intentional Warm Ivory surface frame.
 */
export const LogoMark: React.FC<LogoMarkProps> = ({
  className = "",
  size = "nav",
  showTagline = false,
}) => {
  if (size === "nav") {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <div className="w-[82px] sm:w-[92px] rounded-xl overflow-hidden bg-ivory-canvas border border-gold-harvest/35 p-1 shadow-sm flex-shrink-0">
          <Image
            src={OFFICIAL_LOGO_SRC}
            alt={OFFICIAL_LOGO_ALT}
            width={1206}
            height={986}
            quality={95}
            priority
            sizes="(max-width: 640px) 84px, 96px"
            className="w-full h-auto block"
          />
        </div>
      </div>
    );
  }

  if (size === "hero") {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="w-48 sm:w-60 md:w-72 rounded-2xl overflow-hidden shadow-xl border border-gold-harvest/30 bg-ivory-canvas p-2">
          <Image
            src={OFFICIAL_LOGO_SRC}
            alt={OFFICIAL_LOGO_ALT}
            width={1206}
            height={986}
            quality={95}
            priority
            sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 288px"
            className="w-full h-auto block"
          />
        </div>
      </div>
    );
  }

  if (size === "footer") {
    return (
      <div className={`flex flex-col items-start gap-3 select-none ${className}`}>
        <div className="w-36 sm:w-44 rounded-xl overflow-hidden bg-ivory-canvas border border-gold-harvest/35 p-1.5 shadow-md">
          <Image
            src={OFFICIAL_LOGO_SRC}
            alt="Journey 2 Better"
            width={1206}
            height={986}
            quality={95}
            sizes="(max-width: 640px) 144px, 176px"
            className="w-full h-auto block"
          />
        </div>
        {showTagline && (
          <p className="text-xs sm:text-sm font-sans text-ivory-surface/80 italic tracking-wide max-w-xs">
            &ldquo;Your companion on the journey to better&rdquo;
          </p>
        )}
      </div>
    );
  }

  // Compact
  return (
    <div className={`w-11 rounded-lg overflow-hidden bg-ivory-canvas border border-gold-harvest/35 p-0.5 flex-shrink-0 ${className}`}>
      <Image
        src={OFFICIAL_LOGO_SRC}
        alt="Journey 2 Better"
        width={1206}
        height={986}
        quality={95}
        sizes="48px"
        className="w-full h-auto block"
      />
    </div>
  );
};
