"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { isReducedMotion } from "@/utils/motion";

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "claret" | "outline";
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
    // Only enable magnetic pull on fine pointer devices with hover capability
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
    // Constrain maximum displacement to 6px for subtle, stable physical feedback
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
      "bg-berry hover:bg-berry-dark text-white shadow-sm hover:shadow transition-all duration-300",
    secondary:
      "bg-blush hover:bg-blush-dark text-plum font-medium transition-all duration-300",
    claret:
      "bg-plum hover:bg-plum-deep text-white border border-gold/30 hover:border-gold/60 transition-all duration-300",
    outline:
      "border border-plum/30 hover:border-plum text-plum hover:bg-blush/40 transition-all duration-300",
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
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} id={id} aria-label={ariaLabel} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} id={id} aria-label={ariaLabel} className="inline-block">
      {content}
    </button>
  );
};
