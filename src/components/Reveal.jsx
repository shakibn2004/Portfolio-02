"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1];

/** Subtle one-time entrance: short rise + fade. Used sparingly. */
export default function Reveal({ children, delay = 0, y = 18, className = "", as = "div" }) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/** Section heading: large condensed title, short supporting line to the right. */
export function SectionHead({ id, title, children }) {
  return (
    <div className="section-head">
      <h2 id={id} className="section-title overflow-hidden pb-1">
        <motion.span
          className="block"
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1, ease }}
        >
          {title}
        </motion.span>
      </h2>
      {children && (
        <Reveal delay={0.15} className="text-base leading-relaxed text-muted sm:text-lg">
          {children}
        </Reveal>
      )}
    </div>
  );
}
