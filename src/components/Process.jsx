"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Reveal from "./Reveal";

const STEPS = [
  {
    title: "Discovery & architecture",
    desc: "We dig into requirements together, then I choose the stack, design the database schema and map out the system before any code is written.",
    items: ["Requirements call", "Tech stack plan", "Database schema", "API outline"],
  },
  {
    title: "Build in short sprints",
    desc: "Two-week iterations with a staging link you can click through after every sprint — regular demos, no surprises at the end.",
    items: ["Two-week sprints", "Staging previews", "Progress demos", "Continuous integration"],
  },
  {
    title: "Quality & testing",
    desc: "Clean, modular components, automated unit and integration tests, and careful reviews so the codebase stays easy to change.",
    items: ["Automated tests", "Code reviews", "Clean architecture"],
  },
  {
    title: "Performance & security",
    desc: "Indexes and caching where they matter, HTTPS, rate limiting and OWASP-guided hardening built in — not bolted on.",
    items: ["Query tuning", "Redis caching", "OWASP checks", "Load testing"],
  },
  {
    title: "Deploy",
    desc: "Automated CI/CD to Vercel or AWS, containerised where it helps, with zero-downtime releases and health monitoring.",
    items: ["CI/CD pipeline", "Vercel / AWS", "Uptime monitoring"],
  },
  {
    title: "Launch support",
    desc: "Written documentation, a 30-day post-launch warranty and a proper hand-over — with optional ongoing maintenance.",
    items: ["30-day warranty", "Documentation", "Hand-over session"],
  },
];

function Step({ step, index, progress }) {
  const start = index / STEPS.length;
  const lit = useTransform(progress, [start - 0.02, start + 0.04], [0, 1]);
  const dotScale = useTransform(lit, [0, 1], [0.6, 1]);

  return (
    <li className="relative grid grid-cols-[48px_1fr] gap-x-5 pb-14 last:pb-0 sm:grid-cols-[64px_1fr] sm:gap-x-8">
      {/* node on the line */}
      <div className="relative flex justify-center">
        <motion.span
          style={{ scale: dotScale }}
          className="relative z-10 mt-1.5 grid h-4 w-4 place-items-center rounded-full border border-line-strong bg-canvas"
        >
          <motion.span style={{ opacity: lit }} className="h-2 w-2 rounded-full bg-signal" />
        </motion.span>
      </div>

      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm tabular-nums text-subtle">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="text-2xl font-semibold tracking-tight text-fg sm:text-[1.75rem]">{step.title}</h3>
        </div>
        <p className="mt-3 max-w-[38rem] leading-relaxed text-muted">{step.desc}</p>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-fg/80">
          {step.items.map((it) => (
            <li key={it} className="flex items-center gap-2">
              <span aria-hidden className="h-px w-3 bg-line-strong" />
              {it}
            </li>
          ))}
        </ul>
      </Reveal>
    </li>
  );
}

export default function Process() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 65%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="process" aria-labelledby="process-title" className="section border-t border-line">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 id="process-title" className="section-title overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                How I work
              </motion.span>
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
                A clear, six-step process so you always know what&rsquo;s happening, what&rsquo;s next and
                what you&rsquo;ll receive.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ol ref={listRef} className="relative">
            {/* rail + progress fill */}
            <span aria-hidden className="absolute bottom-2 left-[24px] top-2 w-px bg-line sm:left-[32px]" />
            <motion.span
              aria-hidden
              style={{ scaleY: progress }}
              className="absolute bottom-2 left-[24px] top-2 w-px origin-top bg-signal sm:left-[32px]"
            />
            {STEPS.map((s, i) => (
              <Step key={s.title} step={s} index={i} progress={progress} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
