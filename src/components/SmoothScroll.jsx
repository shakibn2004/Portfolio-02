"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";

/**
 * Inertial smooth scrolling (Lenis) + global motion settings.
 * - Turned off entirely when the visitor prefers reduced motion.
 * - Exposes the instance on window so scrollToSection() can use it.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      anchors: { offset: -80 },
    });
    window.__lenis = lenis;

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function scrollToSection(id) {
  if (typeof window === "undefined") return;
  const el = id === "home" ? 0 : document.getElementById(id);
  if (el === null) return;
  if (window.__lenis) {
    window.__lenis.scrollTo(el, { offset: id === "home" ? 0 : -80 });
  } else if (el === 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
