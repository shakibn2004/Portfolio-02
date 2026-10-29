"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTypescript } from "react-icons/si";
import portrait from "../../public/Profissional-image.png";
import { scrollToSection } from "./SmoothScroll";

const ease = [0.16, 1, 0.3, 1];

const STATS = [
  { value: "2+", label: "years building for the web" },
  { value: "30+", label: "projects shipped" },
  { value: "10+", label: "happy clients" },
];

/* ── Code that "types" itself into the editor card ───────────────────── */
// Each line is a list of [token, kind] pairs so it can be syntax-coloured.
const CODE = [
  [["const ", "kw"], ["developer", "id"], [" = {", "p"]],
  [["  name", "key"], [": ", "p"], ["'Nazmus Shakib'", "str"], [",", "p"]],
  [["  stack", "key"], [": [", "p"], ["'MERN'", "str"], [", ", "p"], ["'Next.js'", "str"], ["],", "p"]],
  [["  basedIn", "key"], [": ", "p"], ["'Khulna, BD'", "str"], [",", "p"]],
  [["  available", "key"], [": ", "p"], ["true", "kw"], [",", "p"]],
  [["  ships", "key"], [": ", "p"], ["'idea → prod'", "str"], [",", "p"]],
  [["};", "p"]],
];
const TOKEN_CLASS = {
  kw: "text-signal",
  id: "text-fg",
  key: "text-fg/90",
  str: "text-[var(--code-str)]",
  p: "text-subtle",
};
const lineLength = (line) => line.reduce((n, [t]) => n + t.length, 0);
// Pre-computed typing schedule: each line starts after the previous one finishes
const TIMING = CODE.reduce((acc, line) => {
  const start = acc.length ? acc[acc.length - 1].start + acc[acc.length - 1].dur + 0.05 : 0.9;
  acc.push({ start, dur: Math.max(0.12, lineLength(line) * 0.018) });
  return acc;
}, []);

function CodeCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface/85 shadow-[var(--shadow)] backdrop-blur-xl">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-3 font-mono text-[11px] text-subtle">shakib.ts</span>
      </div>
      <pre className="px-3 py-3.5 font-mono text-[10px] leading-[1.75] sm:px-4 sm:py-4 sm:text-[12.5px]" aria-hidden>
        {CODE.map((line, i) => {
          const { start: d, dur } = TIMING[i];
          const last = i === CODE.length - 1;
          return (
            <div key={i} className="flex">
              <span className="w-4 shrink-0 select-none text-right text-subtle/60 sm:w-6">{i + 1}</span>
              <motion.span
                className="relative ml-3 sm:ml-4 inline-block whitespace-pre"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: dur, delay: d, ease: "linear" }}
              >
                {line.map(([t, k], j) => (
                  <span key={j} className={TOKEN_CLASS[k]}>
                    {t}
                  </span>
                ))}
              </motion.span>
              {last && (
                <motion.span
                  className="ml-0.5 inline-block h-[1.2em] w-[7px] translate-y-[0.15em] bg-signal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ delay: d + dur, duration: 1.1, repeat: Infinity, times: [0, 0.05, 0.5, 0.55] }}
                />
              )}
            </div>
          );
        })}
      </pre>
    </div>
  );
}

/* ── Small floating tech badge ───────────────────────────────────────── */
function Chip({ icon: Icon, label, className, delay, floatDelay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay }}
      className={`absolute z-30 ${className}`}
    >
      <div
        className="hero-float flex items-center gap-2 rounded-full border border-line bg-canvas/80 py-1.5 pl-2 pr-3 text-[12px] font-medium text-fg shadow-[var(--shadow)] backdrop-blur-md sm:text-[13px]"
        style={{ animationDelay: `${floatDelay}s` }}
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-raised">
          <Icon className="h-3.5 w-3.5" />
        </span>
        {label}
      </div>
    </motion.div>
  );
}

/** Live local time in Khulna — helps international clients plan calls */
function LocalTime() {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Dhaka", hour: "numeric", minute: "2-digit" });
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
    <span className="-mb-[0.06em] block overflow-hidden pb-[0.06em]">
      <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1.1, ease, delay }}>
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Pointer depth: each layer drifts a different amount (mouse only)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 20 });
  const sy = useSpring(my, { stiffness: 70, damping: 20 });
  const backX = useTransform(sx, (v) => v * -14);
  const backY = useTransform(sy, (v) => v * -10);
  const frontX = useTransform(sx, (v) => v * 16);
  const frontY = useTransform(sy, (v) => v * 12);
  const chipX = useTransform(sx, (v) => v * 28);
  const chipY = useTransform(sy, (v) => v * 20);

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      ref={ref}
      id="home"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative overflow-hidden pt-28 sm:pt-32"
    >
      {/* Backdrop: dotted field fading out from the composition + soft signal light */}
      <div aria-hidden className="hero-dots pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-24 h-[760px] w-[760px] rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(closest-side, color-mix(in srgb, var(--signal) 20%, transparent), transparent)" }}
      />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Left: name + intro */}
          <motion.div style={{ y: nameY }} className="lg:col-span-6 xl:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pl-2.5 pr-3.5 text-sm text-muted backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 [animation-duration:2.4s]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for freelance projects
            </motion.p>

            <h1
              className="font-display text-[clamp(4.25rem,21vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.03em] text-fg lg:text-[clamp(6rem,10.4vw,10rem)]"
              style={{ fontVariationSettings: '"wdth" 84, "opsz" 96' }}
            >
              <span className="sr-only">Md Nazmus Shakib — Full-Stack Web Developer</span>
              <span aria-hidden>
                <RevealLine delay={0.2}>Nazmus</RevealLine>
                <RevealLine delay={0.32}>
                  Shakib<span className="text-signal">.</span>
                </RevealLine>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.7 }}
              className="mt-8 max-w-[33rem] text-lg leading-relaxed text-muted sm:text-xl"
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
                Download resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right: layered composition — editor behind, portrait in front, tech badges around */}
          <motion.div style={{ y: stageY }} className="lg:col-span-6 xl:col-span-5">
            <div className="relative mx-auto aspect-[1/1.18] w-full max-w-[520px]">
              {/* Back: code editor */}
              <motion.div
                style={{ x: backX, y: backY }}
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ duration: 1.1, ease, delay: 0.45 }}
                className="absolute left-[2%] top-[5%] z-10 w-[70%]"
              >
                <CodeCard />
              </motion.div>

              {/* Front: portrait card */}
              <motion.div
                style={{ x: frontX, y: frontY }}
                className="absolute bottom-0 right-0 z-20 w-[56%]"
              >
                <motion.div
                  initial={{ clipPath: "inset(100% 0% 0% 0% round 26px)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0% round 26px)" }}
                  transition={{ duration: 1.25, ease, delay: 0.55 }}
                  className="relative aspect-[4/5] overflow-hidden rounded-[26px] border border-line-strong bg-surface shadow-[var(--shadow)]"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(110% 75% at 50% 100%, color-mix(in srgb, var(--signal) 30%, transparent), transparent 62%), linear-gradient(180deg, var(--raised), var(--surface))",
                    }}
                  />
                  <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, ease, delay: 0.55 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={portrait}
                      alt="Portrait of Md Nazmus Shakib"
                      fill
                      priority
                      placeholder="blur"
                      sizes="(min-width: 1024px) 320px, 60vw"
                      className="object-contain object-bottom"
                    />
                  </motion.div>
                  <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between rounded-xl border border-line bg-canvas/75 px-3 py-2 text-[12px] backdrop-blur-md sm:text-[13px]">
                    <span className="text-fg">Khulna, BD</span>
                    <span className="text-muted">
                      <LocalTime />
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Badges */}
              <motion.div style={{ x: chipX, y: chipY }} className="pointer-events-none absolute inset-0">
                <Chip icon={SiReact} label="React" className="right-[6%] top-[9%]" delay={1.3} floatDelay={0} />
                <Chip icon={SiTypescript} label="TypeScript" className="-left-[3%] top-0" delay={1.4} floatDelay={1.7} />
                <Chip icon={SiNextdotjs} label="Next.js" className="left-[4%] top-[55%]" delay={1.5} floatDelay={1.2} />
                <Chip icon={SiNodedotjs} label="Node.js" className="left-[14%] bottom-[14%]" delay={1.6} floatDelay={2.1} />
                <Chip icon={SiMongodb} label="MongoDB" className="-right-[4%] bottom-[22%]" delay={1.7} floatDelay={0.6} />
              </motion.div>
            </div>
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
