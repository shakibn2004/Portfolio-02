"use client";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { FaGitAlt, FaNodeJs, FaPinterest, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const SKILLS = [
  { name: "React.js",    level: 95, icon: <FaReact size={50} color="#61dafb"/>,  color: "#61dafb" },
  { name: "JavaScript",  level: 96, icon: <IoLogoJavascript size={50} color="#f7df1e" />,  color: "#f7df1e" },
  { name: "Node.js",     level: 91, icon: <FaNodeJs size={50} color="#68a063"  />,  color: "#68a063" },
  { name: "MongoDB",     level: 92, icon: <BiLogoMongodb size={50} color="#00ed64" />,  color: "#00ed64" },
  { name: "Next.js",     level: 88, icon: <SiNextdotjs size={50} color="#ffffff" />,   color: "#ffffff" },
  { name: "Express.js",  level: 90, icon: <SiExpress size={50} color="#00f5a0" />,  color: "#00f5a0" },
  { name: "REST APIs",   level: 93, icon: <FaPinterest size={50} color="#ffffff" />,  color: "#ff6b6b" },
  { name: "Tailwind CSS",level: 90, icon: <RiTailwindCssFill size={50} color="#38bdf8" />,  color: "#38bdf8" },
  { name: "Git & GitHub",level: 95, icon: <FaGitAlt size={50} color="#f05032" />,  color: "#f05032" },
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
      <div className="grid grid-cols-3 lg:grid-cols-9 gap-4 my-14 justify-items-center">
        {SKILLS.map((skill, i) => (
          <div key={skill.name} className="glass-effect rounded-xl w-fit px-5 py-5 justify-self-center">
            {skill.icon}
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
