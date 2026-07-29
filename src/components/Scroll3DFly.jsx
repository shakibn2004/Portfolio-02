"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

/**
 * Scroll3DFly Component
 * 
 * Creates a dramatic 3D perspective scale-zoom-fly effect as the element scrolls into view.
 * The element starts tilted back (rotateX: 25deg), scaled down (scale: 0.76), and flies forward into 3D view.
 */
export default function Scroll3DFly({
  children,
  className = "",
  startScale = 0.78,
  endScale = 1.0,
  startRotateX = 22,
  startTranslateY = 100,
  perspective = 1200,
  springConfig = { stiffness: 90, damping: 20, mass: 0.8 },
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Raw Motion transformations linked to scroll progress
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [startScale, endScale]);
  const rotateXRaw = useTransform(scrollYProgress, [0, 1], [startRotateX, 0]);
  const yRaw = useTransform(scrollYProgress, [0, 1], [startTranslateY, 0]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.6], [0.2, 1]);
  const blurRaw = useTransform(scrollYProgress, [0, 0.8], [8, 0]);

  // Inertial springs for butter-smooth 60fps response
  const scale = useSpring(scaleRaw, springConfig);
  const rotateX = useSpring(rotateXRaw, springConfig);
  const y = useSpring(yRaw, springConfig);
  const opacity = useSpring(opacityRaw, springConfig);

  return (
    <div
      ref={containerRef}
      style={{ perspective: `${perspective}px` }}
      className={`w-full relative ${className}`}
    >
      <motion.div
        style={{
          scale,
          rotateX,
          y,
          opacity,
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
