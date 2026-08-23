"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    const move = (e: MouseEvent) => {
      setEnabled(true);
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const hide = () => setVisible(false);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("[data-cursor]");
      if (interactive) {
        setExpanded(true);
        setLabel(interactive.getAttribute("data-cursor-label"));
      } else {
        setExpanded(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", handleOver);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", handleOver);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0",
      )}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      aria-hidden
    >
      <div
        className={cn(
          "relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-kreeda-blue bg-kreeda-blue/20 transition-all duration-300",
          expanded ? "h-16 w-16" : "h-3 w-3",
        )}
      >
        {label && (
          <span className="absolute inset-0 flex items-center justify-center text-[9px] uppercase tracking-widest text-white">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
