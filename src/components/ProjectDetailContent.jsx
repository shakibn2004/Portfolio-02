"use client";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ExternalLink, 
  Layers, 
  AlertTriangle, 
  Rocket, 
  CheckCircle2, 
  Code2, 
  Globe 
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
    },
  },
};

export default function ProjectDetailContent({ project }) {
  return (
    <main className="min-h-screen bg-dark-400 text-gray-100 pt-28 pb-20 px-[5%] relative overflow-hidden">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-grid bg-grid-60 pointer-events-none opacity-40" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: project.color }}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto relative z-10 space-y-12"
      >
        {/* Top Bar / Navigation */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-between"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-dark-100 border border-white/10 text-gray-300 hover:text-accent hover:border-accent/40 transition-all duration-200 text-sm font-semibold group cursor-none"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </motion.div>

          <span
            className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold border"
            style={{
              color: project.color,
              borderColor: `${project.color}44`,
              background: `${project.color}15`,
            }}
          >
            {project.status} Project
          </span>
        </motion.div>

        {/* Hero Header */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-400 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </motion.div>

        {/* Image & Action Header Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-dark-100/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-dark-300 overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority
              className="object-cover object-top hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent opacity-80" />
          </div>

          {/* Quick Action Links */}
          <div className="p-6 md:p-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-dark-200/50">
            <div className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ background: project.color }}
              />
              <span className="text-sm font-mono text-gray-400">
                Client Repository &amp; Live Deployment
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-black transition-all duration-200 hover:opacity-90 shadow-lg cursor-none"
                style={{
                  background: project.color,
                  boxShadow: `0 8px 24px ${project.accentGlow}`,
                }}
              >
                <Globe className="w-4 h-4" />
                Live Project Demo
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </motion.a>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)", borderColor: "white" }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-gray-200 border border-white/15 transition-all duration-200 cursor-none"
              >
                <FaGithub className="w-4 h-4" />
                GitHub Repository (Client)
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Main Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Description & Details) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Brief Description */}
            <motion.section 
              variants={itemVariants}
              whileHover={{ borderColor: "rgba(0, 245, 160, 0.2)" }}
              className="bg-dark-100/70 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 text-accent font-mono text-sm font-bold uppercase tracking-wider">
                <Code2 className="w-5 h-5" />
                <span>Overview &amp; Purpose</span>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-[1.85] font-normal">
                {project.desc}
              </p>
            </motion.section>

            {/* Challenges Faced */}
            <motion.section 
              variants={itemVariants}
              whileHover={{ borderColor: "rgba(251, 191, 36, 0.2)" }}
              className="bg-dark-100/70 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 text-amber-400 font-mono text-sm font-bold uppercase tracking-wider">
                <AlertTriangle className="w-5 h-5" />
                <span>Challenges Faced During Development</span>
              </div>

              <div className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6, borderColor: "rgba(251, 191, 36, 0.3)" }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-dark-200/80 border border-white/5 transition-all duration-200 cursor-none"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-400/10 text-amber-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {challenge}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Potential Improvements & Future Plans */}
            <motion.section 
              variants={itemVariants}
              whileHover={{ borderColor: "rgba(123, 97, 255, 0.2)" }}
              className="bg-dark-100/70 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 text-purple font-mono text-sm font-bold uppercase tracking-wider">
                <Rocket className="w-5 h-5" />
                <span>Potential Improvements &amp; Future Plans</span>
              </div>

              <div className="space-y-4">
                {project.improvements.map((improvement, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6, borderColor: "rgba(123, 97, 255, 0.3)" }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-dark-200/80 border border-white/5 transition-all duration-200 cursor-none"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {improvement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column (Tech Stack & Links Card) */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Technology Stack */}
            <section className="bg-dark-100/70 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 sticky top-28">
              <div className="flex items-center gap-3 text-accent font-mono text-sm font-bold uppercase tracking-wider">
                <Layers className="w-5 h-5" />
                <span>Main Technology Stack</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.08 }}
                    className="px-3.5 py-1.5 rounded-xl border text-sm font-semibold transition-all duration-200 cursor-none"
                    style={{
                      color: project.color,
                      borderColor: `${project.color}44`,
                      background: `${project.color}12`,
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider">
                  Quick Links
                </h4>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5, borderColor: `${project.color}44` }}
                  className="flex items-center justify-between p-3 rounded-xl bg-dark-200 border border-white/5 text-gray-300 hover:text-white text-sm transition-all cursor-none"
                >
                  <span className="font-semibold">Live Web App</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </motion.a>

                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5, borderColor: `${project.color}44` }}
                  className="flex items-center justify-between p-3 rounded-xl bg-dark-200 border border-white/5 text-gray-300 hover:text-white text-sm transition-all cursor-none"
                >
                  <span className="font-semibold">GitHub Client Source</span>
                  <FaGithub className="w-4 h-4 text-gray-400" />
                </motion.a>
              </div>
            </section>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
