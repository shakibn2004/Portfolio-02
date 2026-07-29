"use client";

import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";
import { 
  Telescope, 
  Code2, 
  CheckCircle2, 
  ShieldCheck, 
  Rocket, 
  Headphones, 
  Sparkles, 
  ArrowRight 
} from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: Telescope,
    title: "Discovery & Architecture",
    tagline: "Planning for Scale",
    desc: "Deep dive into requirements, define the technology stack, design database schemas, and map out scalable system architecture before writing code.",
    color: "#ffffff",
    accentGlow: "rgba(255, 255, 255, 0.08)",
    items: ["Requirements Gathering", "Tech Stack Blueprint", "Database Schema Design", "API Architecture Plan"],
  },
  {
    num: "02",
    icon: Code2,
    title: "Agile Development",
    tagline: "Sprint Execution",
    desc: "Iterative 2-week sprints with continuous deployment, daily progress updates, and transparent client review sessions with no surprises.",
    color: "#e4e4e7",
    accentGlow: "rgba(255, 255, 255, 0.08)",
    items: ["2-Week Iterative Sprints", "Continuous Integration", "Staging Preview Builds", "Regular Progress Demos"],
  },
  {
    num: "03",
    icon: CheckCircle2,
    title: "Code Quality & Testing",
    tagline: "SOLID Standards",
    desc: "Clean code principles, modular components, automated unit/integration tests, and thorough code reviews for long-term maintainability.",
    color: "#d4d4d8",
    accentGlow: "rgba(255, 255, 255, 0.08)",
    items: ["Clean Code Practices", "Automated Testing", "Peer Code Reviews", "SOLID Architecture"],
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "Performance & Security",
    tagline: "Hardened & Fast",
    desc: "Database indexing, Redis caching, HTTPS, rate limiting, and OWASP security guidelines baked directly into production servers.",
    color: "#a1a1aa",
    accentGlow: "rgba(255, 255, 255, 0.08)",
    items: ["Query Optimization", "Redis Cache Layer", "OWASP Security Standards", "Load & Stress Testing"],
  },
  {
    num: "05",
    icon: Rocket,
    title: "Deployment & Cloud",
    tagline: "Production Release",
    desc: "Docker containerization, automated CI/CD pipelines to Vercel/AWS, zero-downtime releases, and automated health monitoring.",
    color: "#ffffff",
    accentGlow: "rgba(255, 255, 255, 0.08)",
    items: ["Docker Containers", "Vercel / AWS Deploy", "Uptime & Health Checks", "Zero-Downtime Rollout"],
  },
  {
    num: "06",
    icon: Headphones,
    title: "Post-Launch Support",
    tagline: "Long-term Maintenance",
    desc: "Comprehensive documentation, 30-day post-launch warranty, developer knowledge transfer, and optional maintenance packages.",
    color: "#e4e4e7",
    accentGlow: "rgba(255, 255, 255, 0.08)",
    items: ["30-Day Post-Launch Warranty", "System Documentation", "Knowledge Transfer", "Maintenance Support"],
  },
];

export default function Strategy() {
  return (
    <section id="strategy" className="py-24 px-[6%] bg-dark-300 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid bg-grid-60 opacity-30 pointer-events-none" />

      {/* Header */}
      <SectionTitle number="06" title="Strategy & Process" />

      {/* Grid of 6 Strategy Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12 relative z-10">
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <ScrollReveal
              key={step.num}
              animation="zoom-in"
              delay={i * 0.08}
              duration={0.7}
            >
              <motion.div 
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  borderColor: `${step.color}66`,
                  boxShadow: `0 14px 40px ${step.accentGlow}`,
                }}
                className="relative bg-dark-100/90 backdrop-blur-xl border border-white/10 rounded-3xl p-7 flex flex-col justify-between group cursor-none transition-all duration-500 overflow-hidden h-full"
                style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
              >
              {/* Top Accent Line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
              />

              {/* Watermark Step Number */}
              <div 
                className="absolute top-4 right-6 font-mono text-[70px] font-black leading-none select-none transition-all duration-500 group-hover:scale-110 opacity-10 group-hover:opacity-20"
                style={{ color: step.color }}
              >
                {step.num}
              </div>

              {/* Step Card Content */}
              <div>
                {/* Icon Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      background: `${step.color}15`, 
                      borderColor: `${step.color}35`,
                      color: step.color
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                      Step {step.num} • {step.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Step Items Bullet List */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="text-[10px] font-mono uppercase text-gray-500 tracking-wider mb-2">
                  Key Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {step.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <span 
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: step.color }} 
                      />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
