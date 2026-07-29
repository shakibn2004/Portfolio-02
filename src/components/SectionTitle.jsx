"use client";

import { motion } from "motion/react";

export default function SectionTitle({ number, title }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-4 mb-4"
    >
      <motion.span 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "backOut" }}
        className="font-mono text-xs font-bold text-accent/80 tracking-widest px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20"
      >
        {number}
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white leading-none tracking-tight"
      >
        {title}
      </motion.h2>

      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 h-px bg-gradient-to-r from-accent/50 via-purple/30 to-transparent origin-left" 
      />
    </motion.div>
  );
}

