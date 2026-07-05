import SectionTitle from "./SectionTitle";

const EXPERIENCES = [
  {
    role: "Senior MERN Stack Developer",
    company: "TechNova Solutions",
    period: "2022 – Present",
    type: "Full-time",
    desc: "Led a team of 5 developers building scalable SaaS platforms. Architected microservice backends with Node.js and deployed CI/CD pipelines reducing release time by 60%.",
    tags: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
    dot: "#00f5a0",
  },
  {
    role: "Full Stack Developer",
    company: "DevCraft Agency",
    period: "2020 – 2022",
    type: "Full-time",
    desc: "Developed 15+ client web apps from scratch. Introduced Next.js SSR/SSG patterns that improved Core Web Vitals scores by 40% across all client projects.",
    tags: ["Next.js", "Express", "GraphQL", "PostgreSQL"],
    dot: "#7b61ff",
  },
  {
    role: "Junior Web Developer",
    company: "Pixel Studios",
    period: "2018 – 2020",
    type: "Full-time",
    desc: "Built responsive React SPAs and REST APIs. Maintained and optimised MongoDB schemas, reducing average query times by 35%.",
    tags: ["React", "MongoDB", "REST API", "CSS3"],
    dot: "#38bdf8",
  },
  {
    role: "Freelance Web Developer",
    company: "Upwork / Fiverr",
    period: "2017 – Present",
    type: "Freelance",
    desc: "Delivered 30+ freelance projects for international clients. Maintained a Top-Rated badge with an average 4.9/5 rating across platforms.",
    tags: ["React", "Node.js", "WordPress", "MySQL"],
    dot: "#ffd700",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-[6%] bg-dark-400">
      <SectionTitle number="03" title="Experience" />

      <div className="relative mt-14">
        {/* Centre connector line — hidden on mobile */}
        <div className="timeline-line hidden lg:block" />

        <div className="flex flex-col gap-10">
          {EXPERIENCES.map((ex, i) => (
            <div key={i}
              className={`relative flex flex-col lg:flex-row items-start gap-6
                ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Card */}
              <div className="flex-1 lg:max-w-[calc(50%-40px)]">
                <div className="bg-dark-100 border border-white/5 rounded-2xl p-7 card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{ex.role}</h3>
                      <p className="text-sm font-semibold" style={{ color: ex.dot }}>{ex.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full border"
                        style={{ color: ex.dot, borderColor: ex.dot + "44", background: ex.dot + "12" }}>
                        {ex.period}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{ex.type}</span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-[1.8] mb-5">{ex.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {ex.tags.map((tag) => (
                      <span key={tag}
                        className="bg-dark-300 border border-white/8 text-gray-400 text-xs font-medium px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline dot — desktop */}
              <div className="hidden lg:flex flex-col items-center mt-7 shrink-0 px-2 relative z-10">
                <div className="w-4 h-4 rounded-full border-2 border-dark-400 shrink-0"
                  style={{ background: ex.dot, boxShadow: `0 0 12px ${ex.dot}` }} />
              </div>
              <div className="hidden lg:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
