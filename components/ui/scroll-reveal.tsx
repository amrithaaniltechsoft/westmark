"use client";

import { useEffect, useRef, useState } from "react";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";
  delayMs?: number;
  durationMs?: number;
}

export function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  delayMs = 0,
  durationMs = 500,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // If IntersectionObserver is not available or reduced-motion is requested, show immediately
    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -40px 0px", // triggers slightly before scrolling fully into view
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const variantHiddenClasses: Record<string, string> = {
    "fade-up": "opacity-0 translate-y-6",
    "fade-down": "opacity-0 -translate-y-6",
    "fade-left": "opacity-0 translate-x-6",
    "fade-right": "opacity-0 -translate-x-6",
    "zoom-in": "opacity-0 scale-95",
    fade: "opacity-0",
  };

  const hiddenClass = variantHiddenClasses[variant] || "opacity-0 translate-y-6";
  const visibleClass = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transition-all ease-out will-change-[transform,opacity] ${
        revealed ? visibleClass : hiddenClass
      } ${className}`}
    >
      {children}
    </div>
  );
}

