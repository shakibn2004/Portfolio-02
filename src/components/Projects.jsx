import Link from "next/link";
import SectionTitle from "./SectionTitle";

const PROJECTS = [
  {
    name: "BloodBridge",
    image: "SkillSphere.png",
    desc: "BloodBridge is a full-stack blood donation platform built to bridge the gap between blood donors and recipients across Bangladesh. The platform enables users to register as donors, search for donors by blood group and location, post urgent donation requests, and connect directly with volunteers ready to help.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Motion"],
    color: "#ff0000",
    live: "https://assainment-10-client.vercel.app",
    github: "https://github.com/shakibn2004/Assainment-10-client",
    status: "Live",
  },
  {
    name: "PawHome",
    image: "📋",
    desc: "PawHome is a full-stack pet adoption web application designed to connect loving families with pets in need of a forever home.",
    tech: ["React", "Next js", "Express", "MongoDB"],
    color: "#e17100",
    live: "https://assainment-09-client.vercel.app",
    github: "https://github.com/shakibn2004/Assainment-09-Client",
    status: "Live",
  },
  {
    name: "SkillSphere",
    image: "🏥",
    desc: "The purpose of the project is to build a course selling website where visitor can explore different skill development course and can enroll on the course",
    tech: ["Next.js", "Node.js"],
    color: "#3730e8",
    live: "https://assainment-08.vercel.app",
    github: "https://github.com/shakibn2004/Assainment-08",
    status: "Live",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-[6%] bg-dark-300">
      <SectionTitle number="04" title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <div key={p.name}
            className="group flex flex-col bg-dark-100 border border-white/5 rounded-2xl overflow-hidden card-hover">

            {/* Card Top */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4"
              style={{ background: p.color + "10" }}>
              <span className="text-4xl"></span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                  style={{ color: p.color, borderColor: p.color + "44", background: p.color + "15" }}>
                  {p.status}
                </span>
                <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 flex flex-col px-6 pb-6">
              <h3 className="text-lg font-bold mb-2" style={{ color: p.color }}>{p.name}</h3>
              <p className="text-gray-500 text-sm leading-[1.75] flex-1 mb-4">{p.desc}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-full border text-gray-400"
                    style={{ borderColor: p.color + "44" }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-white/5">
                <a href={p.live}
                  className="flex-1 text-center text-sm font-bold py-2 rounded-lg text-black transition-all duration-200 hover:opacity-90"
                  style={{ background: p.color }}>
                  Live Demo
                </a>
                <a href={p.github}
                  className="flex-1 text-center text-sm font-semibold py-2 rounded-lg text-gray-400 border border-white/10 hover:border-white/25 hover:text-white transition-all duration-200">
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All button */}
      <div className="flex justify-center mt-12">
        <Link href="https://github.com/shakibn2004" target="_blank" rel="noreferrer"
          className="btn-outline inline-flex items-center gap-2">
          View All on GitHub
        </Link>
      </div>
    </section>
  );
}
