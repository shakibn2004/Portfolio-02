"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none bg-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-zinc-200 via-white to-zinc-400 shadow-[0_0_10px_rgba(255,255,255,0.4)] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
