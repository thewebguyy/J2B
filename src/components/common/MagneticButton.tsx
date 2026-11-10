"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { isReducedMotion } from "@/utils/motion";

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "teal" | "gold" | "outline";
  className?: string;
  id?: string;
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  id,
  ariaLabel,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const match = window.matchMedia("(hover: hover) and (pointer: fine)");
      setCanHover(match.matches && !isReducedMotion());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    setOffset({
      x: Math.max(-6, Math.min(6, deltaX)),
      y: Math.max(-6, Math.min(6, deltaY)),
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-midnight hover:bg-midnight-deep text-ivory-canvas border border-gold-harvest/40 hover:border-gold-harvest shadow-sm transition-all duration-200",
    secondary:
      "bg-ivory-surface hover:bg-ivory-dark text-midnight border border-border hover:border-gold-harvest/50 transition-all duration-200",
    teal:
      "bg-teal-living hover:bg-teal-hover text-white border border-gold-harvest/25 shadow-sm transition-all duration-200",
    gold:
      "bg-gold-harvest hover:bg-gold-light text-midnight-deep border border-gold-deep/20 shadow-sm transition-all duration-200",
    outline:
      "border border-midnight/40 bg-ivory-canvas/70 hover:border-midnight hover:bg-ivory-surface text-midnight transition-all duration-200",
  };

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: canHover ? `translate(${offset.x}px, ${offset.y}px)` : "none",
        transition: offset.x === 0 && offset.y === 0 ? "transform 450ms cubic-bezier(0.25, 1, 0.5, 1)" : "none",
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider min-h-[46px] ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );

  const isFullWidth = className.includes("w-full");
  const outerClassName = isFullWidth ? "w-full inline-block" : "inline-block";

  if (href) {
    return (
      <Link href={href} id={id} aria-label={ariaLabel} className={outerClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} id={id} aria-label={ariaLabel} className={outerClassName}>
      {content}
    </button>
  );
};
