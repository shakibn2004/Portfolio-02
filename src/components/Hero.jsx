"use client";
import { useRef } from "react";
import Image from "next/image";
import Profitional from '../../public/Profissional-image.png';
import { Download } from "lucide-react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { motion, useMotionValue, useMotionTemplate, useSpring, useScroll, useTransform } from "motion/react";

import Scroll3DFly from "./Scroll3DFly";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  },
};

export default function Hero() {
  const sectionRef = useRef(null);

  // Scroll Progress linked transformations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroScaleRaw = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacityRaw = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const heroYRaw = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const heroScale = useSpring(heroScaleRaw, { stiffness: 100, damping: 20 });
  const heroOpacity = useSpring(heroOpacityRaw, { stiffness: 100, damping: 20 });
  const heroY = useSpring(heroYRaw, { stiffness: 100, damping: 20 });

  // Motion values for spotlight tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for spotlight movement
  const spotlightX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const spotlightY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  function handleMouseMove({ clientX, clientY, currentTarget }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Custom code snippet for the mockup terminal
  const codeLines = [
    { line: 1, content: "const developer = {", indent: 0 },
    { line: 2, content: "name: 'Md. Nazmus Shakib',", indent: 2, isString: true },
    { line: 3, content: "stack: ['MERN', 'TypeScript', 'Postgres'],", indent: 2 },
    { line: 4, content: "codeQuality: 'SOLID & Clean',", indent: 2, isString: true },
    { line: 5, content: "deliversOnTime: true,", indent: 2, isKeyword: true },
    { line: 6, content: "passion: () => 'Turning ideas into code'", indent: 2 },
    { line: 7, content: "};", indent: 0 }
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-[6%] pt-32 pb-16 gap-12 overflow-hidden bg-dark-400"
    >
      <motion.div 
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-12"
      >
      {/* Interactive Spotlight Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: useMotionTemplate`radial-gradient(500px circle at ${spotlightX}px ${spotlightY}px, rgba(0, 245, 160, 0.08), transparent 75%)`
        }}
      />

      {/* Grid BG */}
      <div className="absolute inset-0 bg-grid bg-grid-60 pointer-events-none z-0 opacity-80" />

      {/* Static Glows for Depth */}
      <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] rounded-full bg-accent/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-[5%] w-[350px] h-[350px] rounded-full bg-purple/5 blur-[100px] pointer-events-none z-0" />

      {/* Left Column — Core Details */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 max-w-xl z-10 text-left space-y-6"
      >
        {/* Monospace Greetings Comment */}
        <motion.div
          variants={itemVariants}
          className="font-mono text-xs text-accent/80 tracking-[0.25em] font-bold"
        >
          {"// INITIALIZING DEVELOPER SESSION"}
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants} className="space-y-3">
          <div className="text-gray-500 font-mono text-xs tracking-wider uppercase">
            [ Md. Nazmus Shakib ]
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-black leading-[0.95] tracking-tight text-white font-display">
            Nazmus
            <span className="block bg-clip-text text-transparent hero-gradient-text">
              Shakib.
            </span>
          </h1>
        </motion.div>

        {/* Role Subtitle Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 bg-dark-100 border border-white/10 rounded-xl px-4 py-2"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-xs text-gray-300 font-semibold uppercase tracking-widest">
            Full-Stack MERN Engineer
          </span>
        </motion.div>

        {/* Description with Highlighted Typography */}
        <motion.p
          variants={itemVariants}
          className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg font-normal"
        >
          I craft{" "}
          <span className="text-white font-semibold">
            high-performance backend APIs
          </span>{" "}
          and{" "}
          <span className="text-white font-semibold">
            pixel-perfect user interfaces
          </span>
          . Specialized in{" "}
          <span className="text-zinc-200 font-medium font-mono">TypeScript</span>,{" "}
          <span className="text-zinc-200 font-medium font-mono">Next.js</span>,{" "}
          <span className="text-zinc-200 font-medium font-mono">Node.js</span>, and{" "}
          <span className="text-zinc-200 font-medium font-mono">MongoDB/Postgres</span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 pt-2"
        >
          <motion.button
            whileHover={{ 
              scale: 1.04, 
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.96 }}
            className="btn-primary flex items-center justify-center gap-2"
            onClick={() => scrollTo("projects")}
          >
            Explore Projects →
          </motion.button>
          <motion.a
            href="/NAZMUS_SHAKIB_ FRONTEND_DEVELOPER_RESUME.pdf"
            download
            whileHover={{ 
              scale: 1.04, 
              borderColor: "rgba(255, 255, 255, 0.4)", 
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            }}
            whileTap={{ scale: 0.96 }}
            className=" border border-white/10 bg-white/5 backdrop-blur-md px-6 py-3.5 rounded-xl text-white font-bold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 whitespace-nowrap"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>RESUME</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-8 sm:gap-12 pt-4"
        >
          {[["2+", "Years Exp."], ["30+", "Projects"], ["10+", "Happy Clients"]].map(([val, label]) => (
            <div key={label} className="flex flex-col">
              <span className="font-display text-3xl font-black text-white leading-none">{val}</span>
              <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider mt-1.5">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Column — Layered Terminal & Avatar Deck with 3D Scroll Fly */}
      <Scroll3DFly
        startScale={0.8}
        startRotateX={18}
        startTranslateY={80}
        className="flex-1 w-full lg:max-w-[500px] flex items-center justify-center relative z-10 min-h-[400px]"
      >
        {/* Layer 1: Glassmorphic IDE Terminal (Background) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          className="w-full max-w-[420px] aspect-[4/3] rounded-2xl bg-dark-100/60 backdrop-blur-xl border border-white/5 shadow-2xl p-5 font-mono text-[11px] sm:text-xs text-left pointer-events-none select-none absolute -left-4 top-4 z-0 hidden sm:block"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <span className="text-[10px] text-gray-500">shakib.ts — Visual Studio Code</span>
            <div className="w-10" />
          </div>
          {/* Code Editor body */}
          <div className="space-y-1.5 opacity-80">
            {codeLines.map((line) => (
              <div key={line.line} className="flex gap-3">
                <span className="text-gray-600 select-none">{line.line}</span>
                <span 
                  style={{ paddingLeft: `${line.indent * 8}px` }} 
                  className={
                    line.isString 
                      ? "text-accent" 
                      : line.isKeyword 
                        ? "text-purple" 
                        : "text-gray-300"
                  }
                >
                  {line.content}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Layer 2: Glowing Avatar Frame (Foreground) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
          className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 shrink-0 z-10 flex items-center justify-center sm:-right-12 sm:-top-8"
        >
          {/* Pulsing Back Glow */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-accent/20 to-purple/20 blur-xl animate-pulse" />

          {/* Outer Border Frame */}
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-dark-200/80 backdrop-blur-md p-3 shadow-2xl flex items-center justify-center">
            {/* Avatar Circle Wrapper */}
            <div className="w-full h-full rounded-2xl bg-dark-300 border border-accent/25 overflow-hidden flex items-center justify-center glow-accent-sm">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '80%', height: '100%' }}
                src={Profitional}
                alt="Md. Nazmus Shakib Profile"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Outer Animated Spinning Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
            className="absolute -inset-4 rounded-3xl border border-dashed border-accent/20 pointer-events-none"
          />

          {/* Layer 3: parralax Floating Badges */}
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity }}
            className="flex items-center gap-1.5 absolute -top-3 -right-3 bg-black border border-accent/30 text-accent font-semibold text-[10px] sm:text-xs px-2.5 py-1.5 rounded-lg shadow-lg"
          >
            <FaReact />React
          </motion.span>
          <motion.span
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.8, ease: "easeInOut", repeat: Infinity, delay: 0.4 }}
            className="flex items-center gap-1.5 absolute -bottom-4 -right-1 bg-black border border-white/10 text-sky-300 font-semibold text-[10px] sm:text-xs px-2.5 py-1.5 rounded-lg shadow-lg"
          >
            <SiTypescript />TypeScript
          </motion.span>
          <motion.span
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, delay: 0.8 }}
            className="flex items-center gap-1.5 absolute -bottom-4 -left-4 bg-black border border-blue-500/20 text-blue-400 font-semibold text-[10px] sm:text-xs px-2.5 py-1.5 rounded-lg shadow-lg"
          >
            <SiPostgresql />PostgreSQL
          </motion.span>
          <motion.span
            animate={{ y: [0, -11, 0] }}
            transition={{ duration: 3.3, ease: "easeInOut", repeat: Infinity, delay: 0.2 }}
            className="flex items-center gap-1.5 absolute top-12 -left-6 bg-black border border-purple/30 text-purple font-semibold text-[10px] sm:text-xs px-2.5 py-1.5 rounded-lg shadow-lg"
          >
            <SiNextdotjs />Next.js
          </motion.span>
        </motion.div>
      </Scroll3DFly>
      </motion.div>
    </section>
  );
}
