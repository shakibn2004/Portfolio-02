"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { PROJECTS } from "@/data/projectsData";
import { FaGithub } from "react-icons/fa6";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { 
  ExternalLink, 
  ArrowRight, 
  X, 
  Layers, 
  AlertTriangle, 
  Rocket, 
  Globe, 
  Code2, 
  Eye, 
  Sparkles 
} from "lucide-react";



function ProjectCard({ p, idx, total, scrollYProgress, setSelectedProject }) {
  const centerPoint = idx / Math.max(total - 1, 1);
  const spread = 0.85 / Math.max(total - 1, 1);

  const p1 = Math.max(0, centerPoint - spread);
  const p2 = centerPoint;
  const p3 = Math.min(1, centerPoint + spread);

  const keyframes = p1 === p2 ? [0, p2, p3] : p2 === p3 ? [p1, p2, 1] : [p1, p2, p3];

  // Restored full prominent scale (0.88 when inactive, 1.05 when active spotlight)
  const scale = useTransform(scrollYProgress, keyframes, [
    idx === 0 ? 1.05 : 0.88,
    1.05,
    idx === total - 1 ? 1.05 : 0.88,
  ]);

  const opacity = useTransform(scrollYProgress, keyframes, [
    idx === 0 ? 1 : 0.75,
    1,
    idx === total - 1 ? 1 : 0.75,
  ]);

  return (
    <motion.div
      style={{
        scale,
        opacity,
      }}
      whileHover={{
        borderColor: `${p.color}66`,
        boxShadow: `0 20px 45px ${p.accentGlow || "rgba(255, 255, 255, 0.15)"}`,
      }}
      className="group flex flex-col bg-dark-100/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden  transition-shadow duration-300 relative w-[360px] sm:w-[480px] shrink-0"
    >
      {/* Top Color Glow Bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
      />

      {/* Card Top Strip */}
      <div
        className="flex items-center justify-between px-6 py-4 border-b border-white/5"
        style={{ background: `${p.color}0A` }}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" style={{ color: p.color }} />
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-gray-300">
            Featured Case Study
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-[11px] font-mono font-bold px-3 py-0.5 rounded-full border"
            style={{
              color: p.color,
              borderColor: `${p.color}44`,
              background: `${p.color}15`,
            }}
          >
            {p.status}
          </span>
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: p.color }}
          />
        </div>
      </div>

      {/* Banner Screenshot Frame */}
      <div className="relative w-full aspect-[16/10] bg-dark-200 overflow-hidden group/img">
        <Image
          src={p.image}
          alt={p.name}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover/img:scale-108 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-black/20 opacity-80 group-hover/img:opacity-40 transition-opacity duration-500" />

        {/* Quick Action Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
          <button
            onClick={() => setSelectedProject(p)}
            className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300"
          >
            <Eye className="w-4 h-4" /> Quick Preview
          </button>
        </div>

        {/* External Links */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-gray-200 hover:bg-white hover:text-black transition-colors"
            title="View Client GitHub Repository"
          >
            <FaGithub className="w-3.5 h-3.5" />
          </a>
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-gray-200 hover:bg-accent hover:text-black transition-colors"
            title="Open Live Site"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Project Card Body */}
      <div className="flex-1 flex flex-col p-6 space-y-4">
        <div className="space-y-1.5">
          <h3 className="text-2xl font-extrabold text-white group-hover:text-accent transition-colors tracking-tight">
            {p.name}
          </h3>
          <p className="text-xs font-mono text-gray-400 line-clamp-1">
            {p.tagline}
          </p>
        </div>

        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3 flex-1 font-normal">
          {p.desc}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {p.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg border text-gray-300"
              style={{ borderColor: `${p.color}33`, background: `${p.color}0D` }}
            >
              {t}
            </span>
          ))}
          {p.tech.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-1 rounded-lg text-gray-500 bg-white/5 border border-white/5">
              +{p.tech.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons Row */}
        <div className="flex items-center gap-2.5 pt-4 border-t border-white/10">
          <button
            onClick={() => setSelectedProject(p)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold py-3 px-3 rounded-xl text-white bg-white/10 border border-white/10 hover:border-accent/50 hover:bg-white/15  transition-all duration-200 whitespace-nowrap"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </button>

          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold py-3 px-3 rounded-xl text-gray-300 bg-white/5 border border-white/10 hover:border-white hover:text-white hover:bg-white/10  transition-all duration-200 whitespace-nowrap shrink-0"
            title="Client GitHub Repository"
          >
            <FaGithub className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">GitHub</span>
          </a>

          <Link
            href={`/projects/${p.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold py-3 px-3 rounded-xl text-black  transition-all duration-200 hover:opacity-90 shadow-lg whitespace-nowrap"
            style={{ background: p.color, boxShadow: `0 4px 16px ${p.accentGlow}` }}
          >
            <span>Full Page</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Horizontal track animation starts from initial middle offset so Card 1 starts centered
  // Dynamically calculate shift based on total project count
  const maxShiftPercent = PROJECTS.length > 1 ? -((PROJECTS.length - 1) / PROJECTS.length) * 100 * 0.975 : 0;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${maxShiftPercent.toFixed(1)}%`]
  );

  return (
    <section id="projects" ref={targetRef} className="relative h-[480vh] bg-dark-300">
      {/* Sticky viewport container that locks the project section */}
      <div className="sticky top-0 h-screen flex flex-col justify-between overflow-hidden py-6 sm:py-8">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Header */}
        <div className="px-[6%] relative z-10 shrink-0">
          <SectionTitle number="04" title="Featured Work" />
        </div>

        {/* Horizontal Carousel Track - pl-[calc(50vw-240px)] centers Card 1 initially */}
        <div className="relative z-10 w-full overflow-visible py-2 my-auto">
          <motion.div style={{ x }} className="flex items-center gap-8 sm:gap-12 w-max pl-[calc(50vw-180px)] sm:pl-[calc(50vw-240px)]">
            {PROJECTS.map((p, idx) => (
              <ProjectCard
                key={p.id}
                p={p}
                idx={idx}
                total={PROJECTS.length}
                scrollYProgress={scrollYProgress}
                setSelectedProject={setSelectedProject}
              />
            ))}
          </motion.div>
        </div>

        {/* GitHub Profile Button (Inside Sticky Container) */}
        <div className="flex justify-center relative z-10 shrink-0">
          <a
            href="https://github.com/shakibn2004"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex! items-center justify-center gap-2 text-sm hover:border-accent hover:text-accent transition-all duration-200 whitespace-nowrap backdrop-blur-md bg-dark-100/50"
          >
            <FaGithub className="w-4 h-4" />
            <span className="whitespace-nowrap">View All Projects</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-80" />
          </a>
        </div>
      </div>

      {/* Quick Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 100, damping: 16 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-100 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl"
              style={{ borderColor: `${selectedProject.color}44` }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white transition-all z-10"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-10">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold border mb-2"
                  style={{
                    color: selectedProject.color,
                    borderColor: `${selectedProject.color}44`,
                    background: `${selectedProject.color}15`,
                  }}
                >
                  {selectedProject.status} Project
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Modal Banner Image */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-dark-300 border border-white/10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              {/* Description */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
                  <Code2 className="w-4 h-4" />
                  <span>Brief Description</span>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.desc}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>Main Technology Stack Used</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg border text-xs font-semibold"
                      style={{
                        color: selectedProject.color,
                        borderColor: `${selectedProject.color}44`,
                        background: `${selectedProject.color}15`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges Faced */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Challenges Faced</span>
                </div>
                <ul className="space-y-2">
                  {selectedProject.challenges.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 p-3 rounded-xl bg-dark-200 border border-white/5"
                    >
                      <span className="text-amber-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Plans */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple font-mono text-xs font-bold uppercase tracking-wider">
                  <Rocket className="w-4 h-4" />
                  <span>Potential Improvements &amp; Future Plans</span>
                </div>
                <ul className="space-y-2">
                  {selectedProject.improvements.map((imp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-xs sm:text-sm text-gray-300 p-3 rounded-xl bg-dark-200 border border-white/5"
                    >
                      <span className="text-purple font-bold shrink-0 mt-0.5">•</span>
                      <span>{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Links Footer */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-black transition-all hover:opacity-90 whitespace-nowrap"
                    style={{ background: selectedProject.color, boxShadow: `0 4px 12px ${selectedProject.color}33` }}
                  >
                    <Globe className="w-4 h-4 shrink-0" />
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-gray-200 border border-white/15 hover:border-white hover:bg-white/10 transition-all whitespace-nowrap"
                  >
                    <FaGithub className="w-4 h-4 shrink-0" />
                    <span className="whitespace-nowrap">GitHub Repository (Client)</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>

                <Link
                  href={`/projects/${selectedProject.id}`}
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto text-center text-xs font-bold text-accent hover:underline py-2 whitespace-nowrap"
                >
                  Go to Dedicated Project Page →
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
