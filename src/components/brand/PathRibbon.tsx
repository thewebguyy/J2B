import React from "react";

interface PathRibbonProps {
  variant?: "ascending-beacon" | "narrative-flow" | "chapter-divider" | "soft-horizon";
  className?: string;
}

/**
 * PathRibbon — The Path of Becoming signature visual motif.
 * Derived from the flowing golden pathway and ascending sun beacon in the Journey 2 Better logo.
 */
export const PathRibbon: React.FC<PathRibbonProps> = ({
  variant = "narrative-flow",
  className = "",
}) => {
  if (variant === "ascending-beacon") {
    return (
      <div className={`relative inline-flex flex-col items-center select-none ${className}`} aria-hidden="true">
        {/* Sun Beacon Apex */}
        <div className="w-4 h-4 rounded-full bg-gold-harvest shadow-[0_0_12px_rgba(213,160,68,0.5)] animate-sun-glow mb-1" />
        <svg
          width="48"
          height="120"
          viewBox="0 0 48 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* Ivory highlight ribbon */}
          <path
            d="M24 0C24 35 12 60 18 90C22 108 30 115 32 120"
            stroke="#FCF9E8"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="opacity-70"
          />
          {/* Main Harvest Gold ascending curve */}
          <path
            d="M24 0C26 30 38 55 30 85C24 105 16 112 14 120"
            stroke="#D5A044"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="path-ribbon"
          />
          {/* Delicate teal guide strand */}
          <path
            d="M24 10C24 40 18 70 26 100"
            stroke="#036E76"
            strokeWidth="1"
            strokeDasharray="3 3"
            strokeLinecap="round"
            className="opacity-40"
          />
        </svg>
      </div>
    );
  }

  if (variant === "chapter-divider") {
    return (
      <div className={`w-full max-w-4xl mx-auto py-10 flex items-center justify-center relative overflow-hidden select-none ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 800 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 text-gold-harvest"
        >
          {/* Soft background glow trace */}
          <path
            d="M0 32C150 10 250 54 400 32C550 10 650 54 800 32"
            stroke="#E9E1C9"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Golden Living Thread */}
          <path
            d="M80 32C200 12 300 52 400 32C500 12 600 52 720 32"
            stroke="#D5A044"
            strokeWidth="2"
            strokeLinecap="round"
            className="path-ribbon"
          />
          {/* Center Sun & Botanical Nodes */}
          <circle cx="400" cy="32" r="5" fill="#D5A044" />
          <circle cx="400" cy="32" r="9" stroke="#036E76" strokeWidth="1" strokeDasharray="2 2" className="opacity-60" />
        </svg>
      </div>
    );
  }

  if (variant === "soft-horizon") {
    return (
      <div className={`w-full overflow-hidden leading-none select-none ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 1440 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48C320 16 640 72 960 36C1200 8 1360 40 1440 48"
            stroke="#D5A044"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="opacity-35"
          />
          <path
            d="M0 56C360 28 720 80 1080 44C1280 20 1400 48 1440 56"
            stroke="#036E76"
            strokeWidth="1"
            strokeDasharray="4 4"
            className="opacity-25"
          />
        </svg>
      </div>
    );
  }

  // Default: narrative-flow
  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16"
      >
        <path
          d="M0 40C120 10 240 70 360 35C460 6 540 50 600 40"
          stroke="#D5A044"
          strokeWidth="2"
          strokeLinecap="round"
          className="path-ribbon"
        />
        <circle cx="360" cy="35" r="3.5" fill="#D5A044" />
      </svg>
    </div>
  );
};
