"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { PROJECTS } from "@/data/projectsData";
import Reveal, { SectionHead } from "./Reveal";

const ease = [0.16, 1, 0.3, 1];

function ProjectImage({ p, priority }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // inner parallax: the screenshot drifts slightly slower than the frame
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <Link
      href={`/projects/${p.id}`}
      aria-label={`${p.name} case study`}
      className="group block"
    >
      <motion.div
        ref={ref}
        initial={{ clipPath: "inset(12% 8% 12% 8% round 24px)", opacity: 0.4 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0% round 24px)", opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.3, ease }}
        className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line bg-surface"
      >
        <motion.div style={{ y }} className="absolute -inset-y-[7%] inset-x-0">
          <Image
            src={p.image}
            alt={`${p.name} — screenshot of the landing page`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 700px, 100vw"
            className="object-cover object-top transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.035]"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />
        <span className="absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-medium text-on-fg opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
          View case study <ArrowRight className="h-4 w-4" />
        </span>
      </motion.div>
    </Link>
  );
}

function ProjectRow({ p, index }) {
  const flip = index % 2 === 1;
  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <ProjectImage p={p} priority={index === 0} />
      </div>

      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <Reveal>
          <div className="flex items-center gap-3 text-sm text-subtle">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {p.status}
            </span>
            <span aria-hidden className="h-px w-6 bg-line-strong" />
            <span>{p.tech.slice(0, 3).join(", ")}</span>
          </div>

          <h3
            className="mt-4 font-display text-4xl font-semibold leading-none tracking-[-0.03em] text-fg sm:text-5xl"
            style={{ fontVariationSettings: '"wdth" 92' }}
          >
            <Link href={`/projects/${p.id}`} className="transition-colors hover:text-signal">
              {p.name}
            </Link>
          </h3>
          <p className="mt-3 text-lg text-fg/80">{p.tagline}</p>
          <p className="mt-4 leading-relaxed text-muted">{p.desc}</p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {p.tech.map((t) => (
              <li key={t} className="rounded-full border border-line px-3 py-1 text-[13px] text-muted">
                {t}
              </li>
            ))}
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
        </Reveal>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section border-t border-line">
      <div className="shell">
        <SectionHead id="projects-title" title="Selected work">
          A few recent builds — each one designed, coded and deployed end to end. Open any project for the
          full story: the problem, the hard parts, and what&rsquo;s next.
        </SectionHead>

        <div className="space-y-28 sm:space-y-36">
          {PROJECTS.map((p, i) => (
            <ProjectRow key={p.id} p={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-28 flex flex-col items-start justify-between gap-6 rounded-3xl border border-line bg-surface p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight text-fg">More on GitHub</p>
            <p className="mt-1 text-muted">Experiments, assignments and open-source contributions.</p>
          </div>
          <a
            href="https://github.com/shakibn2004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <FaGithub className="h-4 w-4" />
            github.com/shakibn2004
            <ArrowUpRight className="btn-icon h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
