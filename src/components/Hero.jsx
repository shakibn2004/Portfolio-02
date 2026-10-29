"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import portrait from "../../public/Profissional-image.png";
import { scrollToSection } from "./SmoothScroll";

const ease = [0.16, 1, 0.3, 1];

const STATS = [
  { value: "2+", label: "years building for the web" },
  { value: "30+", label: "projects shipped" },
  { value: "10+", label: "happy clients" },
];

/** Live local time in Khulna — helps international clients plan calls */
function LocalTime() {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dhaka",
      hour: "numeric",
      minute: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time ?? "—"}</span>;
}

/** A line of the name that rises out of a mask on load */
function RevealLine({ children, delay }) {
  return (
    <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Gentle pointer-follow tilt on the portrait panel (desktop pointers only)
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 120, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 120, damping: 18 });
  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 6);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 6);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <section ref={ref} id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* soft light behind the portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[720px] w-[720px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, color-mix(in srgb, var(--signal) 22%, transparent), transparent)" }}
      />

      <div className="shell relative">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left: name + intro */}
          <motion.div style={{ y: nameY }} className="lg:col-span-7 lg:pb-10">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-2.5 pr-3.5 text-sm text-muted backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 [animation-duration:2.4s]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for freelance projects
            </motion.p>

            <h1
              className="font-display text-[clamp(4.25rem,21vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.03em] text-fg lg:text-[clamp(7rem,12.8vw,11.5rem)]"
              style={{ fontVariationSettings: '"wdth" 84, "opsz" 96' }}
            >
              <span className="sr-only">Md Nazmus Shakib — Full-Stack Web Developer</span>
              <span aria-hidden>
                <RevealLine delay={0.2}>Nazmus</RevealLine>
                <RevealLine delay={0.32}>Shakib</RevealLine>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.7 }}
              className="mt-8 max-w-[34rem] text-lg leading-relaxed text-muted sm:text-xl"
            >
              Full-stack developer building fast, dependable web apps with{" "}
              <span className="text-fg">React, Next.js, Node.js and MongoDB</span> — from first sketch to
              production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.82 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <button onClick={() => scrollToSection("projects")} className="btn btn-solid">
                See my work
                <ArrowDown className="btn-icon btn-icon-down h-4 w-4" />
              </button>
              <a href="/NAZMUS_SHAKIB_ FRONTEND_DEVELOPER_RESUME.pdf" download className="btn btn-ghost">
                <Download className="h-4 w-4" />
                Download résumé
              </a>
            </motion.div>
          </motion.div>

          {/* Right: portrait panel */}
          <motion.div
            style={{ y: portraitY }}
            className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:mx-0 lg:ml-auto"
          >
            <motion.div
              onPointerMove={onMove}
              onPointerLeave={onLeave}
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
              initial={{ clipPath: "inset(100% 0% 0% 0% round 28px)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}
              transition={{ duration: 1.3, ease, delay: 0.35 }}
              className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-surface"
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 80% at 50% 100%, color-mix(in srgb, var(--signal) 26%, transparent), transparent 60%), linear-gradient(180deg, var(--raised), var(--surface))",
                }}
              />
              <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease, delay: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={portrait}
                  alt="Portrait of Md Nazmus Shakib"
                  fill
                  priority
                  placeholder="blur"
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-contain object-bottom"
                />
              </motion.div>

              {/* caption bar */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl border border-line bg-canvas/70 px-4 py-3 text-sm backdrop-blur-md">
                <span className="text-fg">Khulna, Bangladesh</span>
                <span className="text-muted">
                  <LocalTime /> local
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mt-16 grid grid-cols-3 border-t border-line sm:mt-20"
        >
          {STATS.map((s, i) => (
            <div key={s.label} className={`py-6 sm:py-8 ${i > 0 ? "border-l border-line pl-4 sm:pl-8" : ""}`}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">{s.value}</dd>
              <dd className="mt-1.5 text-xs leading-snug text-muted sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
