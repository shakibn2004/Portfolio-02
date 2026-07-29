"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

/**
 * ScrollReveal Component
 * 
 * Animation Types:
 * - "zoom-in": Starts scaled down (0.85) and zooms in to 1.0 as it enters viewport center.
 * - "zoom-out": Starts scaled up (1.15) and zooms out to 1.0 as it enters viewport.
 * - "scale-up": Scales 0.9 -> 1.0 with upward translate.
 * - "parallax": Moves vertical y-position relative to scroll position.
 * - "ease-in-out": Smooth custom cubic-bezier ease entrance.
 */
export function ScrollReveal({
  children,
  animation = "zoom-in",
  delay = 0,
  duration = 0.8,
  parallaxSpeed = -40,
  className = "",
  once = false,
  amount = 0.2,
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax translation tied directly to scroll position
  const yParallaxRaw = useTransform(scrollYProgress, [0, 1], [parallaxSpeed, -parallaxSpeed]);
  const yParallax = useSpring(yParallaxRaw, { stiffness: 100, damping: 20 });

  // Scroll scale transformation for continuous zoom feel
  const scaleRaw = useTransform(scrollYProgress, [0, 0.45, 0.9], [0.88, 1, 0.96]);
  const scaleContinuous = useSpring(scaleRaw, { stiffness: 90, damping: 22 });

  if (animation === "parallax") {
    return (
      <motion.div ref={containerRef} style={{ y: yParallax }} className={className}>
        {children}
      </motion.div>
    );
  }

  if (animation === "continuous-zoom") {
    return (
      <motion.div ref={containerRef} style={{ scale: scaleContinuous }} className={className}>
        {children}
      </motion.div>
    );
  }

  // Pre-configured whileInView variants for high control
  const variants = {
    "zoom-in": {
      hidden: { opacity: 0, scale: 0.82, y: 30 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out curve
        },
      },
    },
    "zoom-out": {
      hidden: { opacity: 0, scale: 1.18, y: -20 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    },
    "scale-up": {
      hidden: { opacity: 0, scale: 0.9, y: 40 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 90,
          damping: 18,
          delay,
        },
      },
    },
    "ease-in-out": {
      hidden: { opacity: 0, y: 50, scale: 0.94 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1], // Quadratic ease-in-out pattern
        },
      },
    },
  };

  const selectedVariant = variants[animation] || variants["zoom-in"];

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={selectedVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
