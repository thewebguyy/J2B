import React from "react";

interface BotanicalMotifProps {
  className?: string;
  size?: number;
  orientation?: "left" | "right" | "up";
  variant?: "default" | "watermark" | "silhouette-echo" | "vignette";
}

/**
 * BotanicalMotif — Organic dual-leaf & silhouette-inspired motif directly inspired by the logo's floral accents.
 * Comprises one Living Teal leaf and one Harvest Gold leaf in graceful organic curve, plus watermark/silhouette variants.
 */
export const BotanicalMotif: React.FC<BotanicalMotifProps> = ({
  className = "",
  size = 32,
  orientation = "right",
  variant = "default",
}) => {
  const transform =
    orientation === "left"
      ? "scale(-1, 1)"
      : orientation === "up"
      ? "rotate(-45 16 16)"
      : undefined;

  if (variant === "watermark") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        aria-hidden="true"
        style={{ transform }}
      >
        {/* Organic Living Teal Botanical Frond */}
        <path
          d="M28 212C34 156 76 86 184 52C178 128 134 186 58 204C46 206.8 36 209.5 28 212Z"
          fill="#036E76"
          fillOpacity="0.07"
          stroke="#036E76"
          strokeWidth="1.2"
          strokeOpacity="0.22"
        />
        {/* Harvest Gold Secondary Leaf */}
        <path
          d="M84 188C92 142 132 104 208 112C198 164 156 194 106 192C98 191.6 90 190 84 188Z"
          fill="#D5A044"
          fillOpacity="0.09"
          stroke="#D5A044"
          strokeWidth="1.2"
          strokeOpacity="0.28"
        />
        {/* Delicate Ascending Golden Stem */}
        <path
          d="M20 220C58 184 108 140 196 86"
          stroke="#D5A044"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.35"
          strokeDasharray="4 6"
        />
        <circle cx="196" cy="86" r="4" fill="#D5A044" fillOpacity="0.35" />
      </svg>
    );
  }

  if (variant === "silhouette-echo") {
    return (
      <svg
        viewBox="0 0 360 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        aria-hidden="true"
      >
        {/* Left Midnight Teal Silhouette Contour Echo */}
        <path
          d="M168 48C112 52 76 98 78 154C80 198 106 232 102 276C98 318 66 352 48 396C94 374 142 332 162 274C182 216 146 164 168 102C176 78 184 58 168 48Z"
          fill="#02404D"
          fillOpacity="0.05"
          stroke="#02404D"
          strokeWidth="1.2"
          strokeOpacity="0.16"
        />
        {/* Right Living Teal Silhouette Contour Echo */}
        <path
          d="M204 56C258 62 292 108 288 166C284 212 254 246 262 292C270 334 302 364 316 404C268 382 218 340 198 282C178 224 214 170 196 108C190 84 188 64 204 56Z"
          fill="#036E76"
          fillOpacity="0.06"
          stroke="#036E76"
          strokeWidth="1.2"
          strokeOpacity="0.2"
        />
        {/* Central Flowing Golden Pathway */}
        <path
          d="M142 416C146 346 218 288 206 198C198 136 174 92 184 44"
          stroke="#D5A044"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeOpacity="0.45"
          className="path-draw-enter"
        />
        {/* Rising Sun Beacon */}
        <circle cx="186" cy="28" r="10" fill="#D5A044" fillOpacity="0.25" />
        <circle cx="186" cy="28" r="4.5" fill="#D5A044" fillOpacity="0.65" />
      </svg>
    );
  }

  if (variant === "vignette") {
    return (
      <svg
        viewBox="0 0 320 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none select-none ${className}`}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="livingTealWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#036E76" stopOpacity="0.14" />
            <stop offset="65%" stopColor="#D5A044" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#FCF9E8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="160" cy="130" rx="150" ry="115" fill="url(#livingTealWash)" />
        <path
          d="M48 210C68 148 124 92 238 64C226 138 178 192 92 208C74 211 60 211 48 210Z"
          fill="#036E76"
          fillOpacity="0.08"
          stroke="#036E76"
          strokeWidth="1.3"
          strokeOpacity="0.28"
        />
        <path
          d="M108 194C126 146 174 112 262 122C246 174 198 202 138 198C126 197 116 196 108 194Z"
          fill="#D5A044"
          fillOpacity="0.11"
          stroke="#D5A044"
          strokeWidth="1.3"
          strokeOpacity="0.35"
        />
        <path
          d="M36 222C94 178 158 132 276 88"
          stroke="#D5A044"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeOpacity="0.5"
          className="path-draw-enter"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block flex-shrink-0 transition-transform duration-300 ${className}`}
      aria-hidden="true"
      style={{ transform }}
    >
      {/* Living Teal Leaf */}
      <path
        d="M6 30C6 30 10 16 26 12C26 12 24 26 12 28C10 28.3 8 29.2 6 30Z"
        fill="#036E76"
      />
      {/* Harvest Gold Leaf */}
      <path
        d="M14 26C14 26 18 16 30 18C30 18 28 26 18 27C16.5 27.2 15 26.6 14 26Z"
        fill="#D5A044"
      />
      {/* Delicate central stem */}
      <path
        d="M6 30C9 27 13 25 18 25"
        stroke="#D5A044"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};
