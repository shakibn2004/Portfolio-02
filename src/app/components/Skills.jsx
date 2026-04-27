"use client";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

const SKILLS = [
  { name: "React.js",    level: 95, icon: "⚛️",  color: "#61dafb" },
  { name: "JavaScript",  level: 96, icon: "🟨",  color: "#f7df1e" },
  { name: "Node.js",     level: 91, icon: "🟢",  color: "#68a063" },
  { name: "MongoDB",     level: 92, icon: "🍃",  color: "#00ed64" },
  { name: "Next.js",     level: 88, icon: "▲",   color: "#ffffff" },
  { name: "Express.js",  level: 90, icon: "⚡",  color: "#00f5a0" },
  { name: "TypeScript",  level: 82, icon: "🔷",  color: "#3178c6" },
  { name: "REST APIs",   level: 93, icon: "🔗",  color: "#ff6b6b" },
  { name: "GraphQL",     level: 78, icon: "🔺",  color: "#e535ab" },
  { name: "Tailwind CSS",level: 90, icon: "🎨",  color: "#38bdf8" },
  { name: "Docker",      level: 74, icon: "🐳",  color: "#2496ed" },
  { name: "Git & GitHub",level: 95, icon: "🐙",  color: "#f05032" },
];

const TOOLS = ["VS Code","Postman","MongoDB Atlas","Vercel","AWS EC2","Figma","Jira","Linux","Nginx","Redis"];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-[6%] bg-dark-300">
      <SectionTitle number="02" title="Skills" />

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
        {SKILLS.map((skill, i) => (
          <div key={skill.name}
            className="bg-dark-100 border border-white/5 rounded-2xl p-5 card-hover">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{skill.icon}</span>
              <span className="font-semibold text-gray-200 flex-1">{skill.name}</span>
              <span className="font-mono text-sm font-bold" style={{ color: skill.color }}>
                {skill.level}%
              </span>
            </div>
            {/* Bar */}
            <div className="h-1.5 bg-dark-400 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full skill-bar-fill"
                style={{
                  width: visible ? `${skill.level}%` : "0%",
                  background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                  transitionDelay: `${i * 0.07}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tools & Tech strip */}
      <div className="border-t border-white/5 pt-10">
        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">
          Tools &amp; Platforms
        </p>
        <div className="flex flex-wrap gap-2.5">
          {TOOLS.map((tool) => (
            <span key={tool}
              className="bg-dark-50 border border-white/8 text-gray-400 text-xs font-medium px-4 py-2 rounded-full">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
