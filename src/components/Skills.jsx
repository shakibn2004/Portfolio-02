"use client";
import SectionTitle from "./SectionTitle";
import { FaGitAlt, FaNodeJs, FaPinterest, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiNextdotjs, SiTypescript, SiPostgresql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react";

const ROW1 = [
  { name: "React.js",    level: 95, icon: <FaReact size={36} />,  color: "#f4f4f5" },
  { name: "JavaScript",  level: 96, icon: <IoLogoJavascript size={36} />,  color: "#e4e4e7" },
  { name: "TypeScript",  level: 94, icon: <SiTypescript size={36} />,  color: "#f4f4f5" },
  { name: "Node.js",     level: 91, icon: <FaNodeJs size={36} />,  color: "#d4d4d8" },
  { name: "Express.js",  level: 90, icon: <SiExpress size={36} />,  color: "#e4e4e7" },
];

const ROW2 = [
  { name: "Next.js",     level: 88, icon: <SiNextdotjs size={36} />,   color: "#ffffff" },
  { name: "MongoDB",     level: 92, icon: <BiLogoMongodb size={36} />,  color: "#e4e4e7" },
  { name: "PostgreSQL",  level: 89, icon: <SiPostgresql size={36} />,  color: "#d4d4d8" },
  { name: "Tailwind CSS",level: 90, icon: <RiTailwindCssFill size={36} />,  color: "#f4f4f5" },
  { name: "REST APIs",   level: 93, icon: <FaPinterest size={36} />,  color: "#e4e4e7" },
  { name: "Git & GitHub",level: 95, icon: <FaGitAlt size={36} />,  color: "#d4d4d8" },
];

const TOOLS = ["VS Code","Postman","MongoDB Atlas","Vercel","AWS EC2","Figma","Jira","Linux","Nginx","Redis"];

function MarqueeRow({ items, direction = "left", speed = 25 }) {
  // Duplicate the items list to build a seamless infinite loop wrapper.
  const duplicatedItems = [...items, ...items, ...items, ...items];
  const xTranslation = direction === "left" ? [0, "-25%"] : ["-25%", 0];

  return (
    <div 
      className="flex overflow-hidden w-full py-4 select-none"
      style={{
        maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)"
      }}
    >
      <motion.div
        animate={{ x: xTranslation }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        className="flex gap-6 whitespace-nowrap min-w-max flex-nowrap"
      >
        {duplicatedItems.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            whileHover={{ 
              scale: 1.08,
              y: -5,
              borderColor: skill.color,
              boxShadow: `0 8px 30px ${skill.color}33`,
              backgroundColor: "rgba(255, 255, 255, 0.08)"
            }}
            style={{ 
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
            className="flex items-center gap-4 bg-dark-100/80 backdrop-blur-md rounded-2xl px-6 py-4  transition-all duration-300"
          >
            <div style={{ color: skill.color }} className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-bold text-sm tracking-tight">{skill.name}</span>
              <span className="text-gray-500 font-mono text-[10px] mt-0.5">{skill.level}% Mastery</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-[6%] bg-dark-300 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <SectionTitle number="02" title="Skills" />

      {/* Redesigned Marquees */}
      <ScrollReveal animation="zoom-in" duration={0.8} className="flex flex-col gap-4 my-14 relative z-10">
        <MarqueeRow items={ROW1} direction="left" speed={22} />
        <MarqueeRow items={ROW2} direction="right" speed={25} />
      </ScrollReveal>

      {/* Tools & Tech strip */}
      <ScrollReveal animation="scale-up" delay={0.1} className="border-t border-white/5 pt-10">
        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
          Tools &amp; Platforms
        </p>
        <div className="flex flex-wrap gap-2.5">
          {TOOLS.map((tool) => (
            <motion.span 
              key={tool}
              whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.12)", color: "#00f5a0" }}
              className="bg-dark-50 border border-white/8 text-gray-400 text-xs font-medium px-4 py-2 rounded-full  transition-colors duration-200"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
