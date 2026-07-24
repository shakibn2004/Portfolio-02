"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaSquareUpwork, FaYoutube } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { 
  ArrowUp, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle,
  Sparkles, 
  Code2, 
  Layers 
} from "lucide-react";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Strategy", "Contact"];

const SOCIALS = [
  { name: "GitHub", icon: <FaGithub />, href: "https://github.com/shakibn2004", color: "#ffffff" },
  { name: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shakibn2004/", color: "#0a66c2" },
  { name: "Twitter", icon: <RiTwitterXFill />, href: "https://x.com/shakibn2004", color: "#1da1f2" },
  { name: "Facebook", icon: <FaFacebookSquare />, href: "https://www.facebook.com/shakibn2004", color: "#1877f2" },
  { name: "Upwork", icon: <FaSquareUpwork />, href: "https://upwork.com", color: "#6fda44" },
  { name: "YouTube", icon: <FaYoutube />, href: "https://www.youtube.com/@NazmusShakibVlogs", color: "#ff0000" },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNav = (id) => {
    const targetId = id.toLowerCase();
    if (pathname === "/") {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${targetId}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-500 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      {/* CTA Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-accent/10 via-purple/10 to-cyan-500/5 border-b border-white/10 px-[6%] py-16 text-center">
        <div className="absolute inset-0 bg-grid bg-grid-60 opacity-25 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Elevate Your Web Presence?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Have a Project in Mind? <span className="text-gradient">Let&apos;s Build It.</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Whether you need a high-converting full-stack app, a complex SaaS MVP, or custom API architecture — I bring your vision to life on time and on budget.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <motion.button
              onClick={() => handleNav("Contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 245, 160, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm py-3.5 px-8 font-bold flex items-center gap-2 cursor-none shadow-xl"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={() => handleNav("Projects")}
              whileHover={{ scale: 1.05, borderColor: "white", backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 rounded-xl border border-white/15 text-white text-sm font-semibold cursor-none transition-all"
            >
              Explore Projects
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="px-[6%] py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-between">
          {/* Column 1: Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-dark-100 border border-white/15 flex items-center justify-center shadow-md brand-logo-container">
                <Image
                  src="/logo-concept-2.svg"
                  alt="Shakib Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-xl leading-tight tracking-tight">
                  Shakib<span className="text-accent">.dev</span>
                </span>
                <span className="text-[10px] font-mono text-gray-400 tracking-wider">
                  FULL-STACK ENGINEER
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-[1.8]">
              Professional Full-Stack Software Engineer specializing in MERN, Next.js, and cloud application development from Khulna, Bangladesh.
            </p>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Available for Work &amp; Roles</span>
            </div>

            {/* Social Icons Row */}
            <div className="flex flex-wrap gap-2 pt-2">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.name}
                  whileHover={{ scale: 1.1, y: -2, borderColor: s.color }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 bg-dark-100/90 border border-white/10 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all cursor-none shadow-md"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4 text-accent" />
              <span>Navigation</span>
            </h4>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNav(link)}
                  className="text-gray-400 text-sm hover:text-accent transition-colors text-left flex items-center gap-2 group cursor-none"
                >
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs">→</span>
                  <span>{link}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-4">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Code2 className="w-4 h-4 text-accent" />
              <span>Expertise</span>
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-gray-400">
              {[
                "Full-Stack MERN Architecture",
                "Next.js App Router Engineering",
                "RESTful & GraphQL API Design",
                "MongoDB Schema Optimization",
                "Responsive React UI Systems",
                "Technical Consultation & Code Review",
              ].map((service, idx) => (
                <span key={idx} className="hover:text-gray-200 transition-colors cursor-default">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Direct Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <span>Get In Touch</span>
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:shakibn2004@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors group cursor-none"
              >
                <div className="w-8 h-8 rounded-lg bg-dark-100 border border-white/10 flex items-center justify-center group-hover:border-accent/40 text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <span>shakibn2004@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-dark-100 border border-white/10 flex items-center justify-center text-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Khulna, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-dark-100 border border-white/10 flex items-center justify-center text-accent">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Response within 12h</span>
              </div>

              <a
                href="tel:+8809678640848"
                className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors group cursor-none"
              >
                <div className="w-8 h-8 rounded-lg bg-dark-100 border border-white/10 flex items-center justify-center group-hover:border-accent/40 text-accent">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+880 9678640848</span>
              </a>

              <a
                href="https://wa.me/8801407306010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors group cursor-none"
              >
                <div className="w-8 h-8 rounded-lg bg-dark-100 border border-white/10 flex items-center justify-center group-hover:border-emerald-400/40 text-emerald-400">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>WhatsApp: +880 1407306010</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar with Back to Top */}
      <div className="border-t border-white/8 px-[6%] py-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 bg-dark-400/50">
        <span className="text-gray-500 text-xs font-mono text-center sm:text-left">
          © 2026 Md. Nazmus Shakib — Full-Stack Engineer. All rights reserved.
        </span>

        {/* Scroll To Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 245, 160, 0.2)", borderColor: "#00f5a0" }}
          whileTap={{ scale: 0.9 }}
          className="p-2.5 rounded-full bg-dark-100 border border-white/15 text-white hover:text-accent transition-all shadow-md cursor-none flex items-center gap-2 text-xs font-mono font-semibold"
          title="Scroll to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4 text-accent" />
        </motion.button>
      </div>
    </footer>
  );
}
