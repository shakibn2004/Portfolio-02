"use client";

import { motion } from "motion/react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { 
  Download, 
  MapPin, 
  Mail, 
  GraduationCap, 
  Briefcase, 
  Globe, 
  Phone, 
  MessageCircle, 
  Code2, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Layers 
} from "lucide-react";

import ScrollReveal from "./ScrollReveal";

const PERSONAL_INFO = [
  { icon: MapPin, label: "Location", value: "Khulna, Bangladesh", color: "#e4e4e7" },
  { icon: Mail, label: "Email", value: "shakibn2004@gmail.com", href: "mailto:shakibn2004@gmail.com", color: "#e4e4e7" },
  { icon: GraduationCap, label: "Degree", value: "B.Sc. in BECM", color: "#e4e4e7" },
  { icon: Briefcase, label: "Experience", value: "2+ Years Active", color: "#e4e4e7" },
  { icon: Globe, label: "Website", value: "nazmus-shakib.space", href: "https://nazmus-shakib.space", color: "#e4e4e7" },
  { icon: Phone, label: "Phone", value: "+880 9678640848", href: "tel:+8809678640848", color: "#e4e4e7" },
  { icon: MessageCircle, label: "WhatsApp", value: "+880 1407306010", href: "https://wa.me/8801407306010", color: "#10b981" },
];

const HIGHLIGHTS = [
  { icon: Code2, title: "Clean Architecture", desc: "Building modular, maintainable, and well-documented codebase." },
  { icon: Cpu, title: "Scalable APIs", desc: "Designing robust Node.js REST APIs with optimized database models." },
  { icon: Layers, title: "Modern UI/UX", desc: "Crafting fluid, high-performance responsive interfaces with Next.js." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-[6%] bg-dark-400 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <SectionTitle number="01" title="About Me" />

      <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-center lg:items-start mt-12">
        {/* Left — Avatar & Status Card with Scroll Zoom-In */}
        <ScrollReveal animation="zoom-in" duration={0.8} className="shrink-0 relative group">
          {/* Card Frame */}
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl bg-dark-100 border border-white/10 p-4 flex flex-col items-center justify-between shadow-2xl group-hover:border-accent/40 transition-all duration-500 overflow-hidden">
            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-purple/10 pointer-events-none" />

            {/* Avatar Circle Container with Scroll Zoom-Out Effect */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mt-4 rounded-2xl bg-dark-200 border border-white/10 p-2 overflow-hidden flex items-center justify-center">
              <motion.div
                initial={{ scale: 1.18 }}
                whileInView={{ scale: 1.0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src="/Avatar.svg"
                  alt="Md. Nazmus Shakib Avatar"
                  fill
                  priority
                  className="object-contain p-2 group-hover:scale-108 transition-transform duration-500"
                />
              </motion.div>
            </div>

            {/* Status Info Footer */}
            <div className="w-full bg-dark-200/80 backdrop-blur-md border border-white/5 rounded-2xl p-3.5 flex items-center justify-between z-10">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white leading-tight">
                    Md. Nazmus Shakib
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    Full-Stack Engineer
                  </span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-accent/10 border border-accent/30 text-accent">
                Available
              </span>
            </div>
          </div>

          {/* Floating Skill Badge */}
          <div className="absolute -bottom-4 -right-4 bg-dark-100/90 backdrop-blur-xl border border-white/15 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl">
            <Terminal className="w-4 h-4 text-accent" />
            <span className="text-xs font-mono font-bold text-white">MERN &amp; Next.js</span>
          </div>
        </ScrollReveal>

        {/* Right — Bio & Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 min-w-0 space-y-8"
        >
          {/* Main Subtitle & Bio */}
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Web Developer</span>
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
            >
              Architecting High-Performance <span className="text-gradient">Web Applications</span>
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 leading-[1.85] text-base md:text-lg"
            >
              I am a dedicated Full-Stack Developer based in Khulna, Bangladesh with over <strong className="text-white font-semibold">2+ years of experience</strong> engineering scalable web systems. My expertise covers production-ready backend architectures with <strong className="text-accent">Node.js, Express &amp; MongoDB</strong>, paired with high-performance responsive client interfaces powered by <strong className="text-accent">React &amp; Next.js</strong>.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 leading-[1.85] text-base font-normal"
            >
              From complex SaaS platforms and e-commerce solutions to real-time applications, I translate ambitious product visions into clean, maintainable, and secure digital experiences.
            </motion.p>
          </div>

          {/* 3 Highlight Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {HIGHLIGHTS.map((h, i) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: "rgba(0, 245, 160, 0.3)" }}
                  className="p-4 rounded-2xl bg-dark-100/70 border border-white/5 flex flex-col gap-2 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white mt-1">{h.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{h.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Personal Info Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {PERSONAL_INFO.map((item, idx) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-3 bg-dark-100/80 border border-white/8 hover:border-accent/30 rounded-xl px-4 py-3  transition-colors">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-gray-200 truncate">
                      {item.value}
                    </span>
                  </div>
                </div>
              );

              return (
                <motion.div key={idx} variants={itemVariants}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block "
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Actions */}
          <motion.div variants={itemVariants} className="pt-2 flex flex-wrap gap-4">
            <motion.a
              href="/NAZMUS_SHAKIB_ FRONTEND_DEVELOPER_RESUME.pdf"
              download
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 245, 160, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2  text-sm font-bold"
            >
              <Download className="w-4 h-4" /> Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
