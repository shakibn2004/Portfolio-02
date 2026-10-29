"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ArrowRight, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "@/data/projectsData";
import Reveal, { SectionHead } from "./Reveal";

const host = (url) => {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
};

/** Screenshot presented inside a minimal browser window, with the live address in the bar */
function BrowserFrame({ p, priority }) {
  return (
    <Link
      href={`/projects/${p.id}`}
      aria-label={`${p.name} case study`}
      className="group/frame relative block overflow-hidden rounded-2xl border border-line-strong bg-canvas shadow-[var(--shadow)]"
    >
      <div className="flex items-center gap-3 border-b border-line bg-raised/60 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        </div>
        <div className="mx-auto flex min-w-0 items-center gap-1.5 rounded-md bg-canvas/70 px-3 py-1 text-[11px] text-muted sm:text-xs">
          <Lock className="h-3 w-3 shrink-0" />
          <span className="truncate">{host(p.live)}</span>
        </div>
        <span className="w-[42px]" aria-hidden />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={p.image}
          alt={`${p.name} — screenshot of the landing page`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 760px, 100vw"
          className="object-cover object-top transition-transform duration-[1.4s] ease-out-expo group-hover/frame:scale-[1.04]"
        />
        <span className="absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-on-fg opacity-0 shadow-lg transition-all duration-500 ease-out-expo group-hover/frame:translate-y-0 group-hover/frame:opacity-100">
          View case study <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

/** True on large screens, where the cards pin and stack */
function useIsDesktop() {
  const [is, setIs] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIs(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return is;
}

/**
 * One project card. On large screens cards pin to the top and stack;
 * as the next card slides over, the previous one eases back and dims.
 */
function ProjectCard({ p, index, total, progress, stacked }) {
  // Card i is pinned at progress i/(total-1); the next card covers it by (i+1)/(total-1)
  const step = 1 / Math.max(total - 1, 1);
  const pinnedAt = Math.min(index * step, 1);
  const coveredAt = Math.min((index + 1) * step, 1);
  const isLast = index === total - 1;
  const targetScale = 1 - (total - index - 1) * 0.035;
  // Ranges must be strictly ascending; the last card never shrinks or dims
  const scale = useTransform(progress, isLast ? [0, 1] : [pinnedAt, 1], isLast ? [1, 1] : [1, targetScale]);
  const dim = useTransform(
    progress,
    isLast ? [0, 1] : [pinnedAt + step * 0.35, coveredAt],
    isLast ? [0, 0] : [0, 0.4]
  );

  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
      <motion.article
        style={stacked ? { scale, top: `${index * 18}px` } : undefined}
        className="relative w-full origin-top overflow-hidden rounded-[32px] border border-line bg-surface p-5 sm:p-8 lg:p-10"
      >
        {/* soft light in the card corner */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(closest-side, color-mix(in srgb, var(--signal) 16%, transparent), transparent)" }}
        />

        <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Text */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="flex items-center gap-3 text-sm text-subtle">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-fg">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 [animation-duration:2.4s]" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                {p.status}
              </span>
              <span className="tabular-nums">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <h3
              className="mt-5 font-display text-[2.6rem] font-semibold leading-[0.95] tracking-[-0.03em] text-fg sm:text-6xl"
              style={{ fontVariationSettings: '"wdth" 90, "opsz" 96' }}
            >
              <Link href={`/projects/${p.id}`} className="transition-colors duration-300 hover:text-signal">
                {p.name}
              </Link>
            </h3>
            <p className="mt-4 text-lg leading-snug text-fg/85">{p.tagline}</p>
            <p className="mt-4 line-clamp-3 leading-relaxed text-muted">{p.desc}</p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {p.tech.slice(0, 6).map((t) => (
                <li key={t} className="rounded-full border border-line bg-canvas/50 px-3 py-1 text-[13px] text-muted">
                  {t}
                </li>
              ))}
              {p.tech.length > 6 && (
                <li className="rounded-full px-2 py-1 text-[13px] text-subtle">+{p.tech.length - 6}</li>
              )}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
              <Link href={`/projects/${p.id}`} className="btn btn-solid h-11">
                Read case study
                <ArrowRight className="btn-icon h-4 w-4" />
              </Link>
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="link-draw inline-flex items-center gap-1 text-fg">
                Live site <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-draw inline-flex items-center gap-1.5 text-fg">
                <FaGithub className="h-4 w-4" /> Code
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <BrowserFrame p={p} priority={index === 0} />
          </div>
        </div>

        {/* dims the card as the next one covers it */}
        {stacked && (
          <motion.div aria-hidden style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-canvas" />
        )}
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const stackRef = useRef(null);
  const stacked = useIsDesktop();
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  return (
    <section id="projects" aria-labelledby="projects-title" className="section border-t border-line">
      <div className="shell">
        <SectionHead id="projects-title" title="Selected work">
          A few recent builds — each one designed, coded and deployed end to end. Open any project for the
          full story: the problem, the hard parts, and what&rsquo;s next.
        </SectionHead>

        <div ref={stackRef} className="space-y-6 lg:space-y-0">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} total={PROJECTS.length} progress={scrollYProgress} stacked={stacked} />
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:p-10 lg:mt-10">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight text-fg">More on GitHub</p>
            <p className="mt-1 text-muted">Experiments, assignments and open-source contributions.</p>
          </div>
          <a href="https://github.com/shakibn2004" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <FaGithub className="h-4 w-4" />
            github.com/shakibn2004
            <ArrowUpRight className="btn-icon h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
