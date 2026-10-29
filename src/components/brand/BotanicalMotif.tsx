import React from "react";

interface BotanicalMotifProps {
  className?: string;
  size?: number;
  orientation?: "left" | "right" | "up";
}

/**
 * BotanicalMotif — Organic dual-leaf motif directly inspired by the logo's floral accents.
 * Comprises one Living Teal leaf and one Harvest Gold leaf in graceful organic curve.
 */
export const BotanicalMotif: React.FC<BotanicalMotifProps> = ({
  className = "",
  size = 32,
  orientation = "right",
}) => {
  const transform =
    orientation === "left"
      ? "scale(-1, 1)"
      : orientation === "up"
      ? "rotate(-45 16 16)"
      : undefined;

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
