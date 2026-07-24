"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Instant spring for inner precision core
  const cursorX = useSpring(0, { stiffness: 600, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 600, damping: 30 });

  // Fluid trailing spring for outer halo ring
  const ringX = useSpring(0, { stiffness: 220, damping: 22 });
  const ringY = useSpring(0, { stiffness: 220, damping: 22 });

  useEffect(() => {
    // Touch device detection
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target && target.closest) {
        const isInteractive = target.closest("a, button, input, select, textarea, [role='button'], .btn-primary, .btn-outline, .group");
        setIsHovered(!!isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Trailing Halo Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          borderColor: isHovered ? "rgba(0, 245, 160, 0.85)" : "rgba(0, 245, 160, 0.35)",
          backgroundColor: isHovered ? "rgba(0, 245, 160, 0.15)" : "rgba(0, 245, 160, 0.02)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 24 }}
        className="fixed top-0 left-0 w-9 h-9 -mt-4.5 -ml-4.5 rounded-full border border-accent/40 backdrop-blur-[1px] shadow-[0_0_20px_rgba(0,245,160,0.25)]"
      />

      {/* Inner Precision Core Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
        className="fixed top-0 left-0 w-2.5 h-2.5 -mt-1.25 -ml-1.25 rounded-full bg-accent shadow-[0_0_12px_#00f5a0]"
      />
    </div>
  );
}
