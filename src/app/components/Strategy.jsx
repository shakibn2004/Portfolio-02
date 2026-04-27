import SectionTitle from "./SectionTitle";

const STEPS = [
  {
    num:   "01",
    icon:  "🔍",
    title: "Discovery & Architecture",
    desc:  "Deep dive into requirements, define the tech stack, design DB schemas, and plan scalable architecture — before writing a single line of code.",
    color: "#00f5a0",
    items: ["Requirements gathering", "Tech stack decision", "DB schema design", "Architecture blueprint"],
  },
  {
    num:   "02",
    icon:  "🔄",
    title: "Agile Development",
    desc:  "2-week sprints with daily standups, continuous integration, and demo sessions. Transparent progress, no surprises, always on schedule.",
    color: "#7b61ff",
    items: ["2-week sprints", "Daily standups", "CI/CD pipelines", "Live demo sessions"],
  },
  {
    num:   "03",
    icon:  "✅",
    title: "Code Quality First",
    desc:  "Clean code, SOLID principles, 80%+ test coverage, and thorough code reviews ensure your codebase stays maintainable from day one.",
    color: "#00c9ff",
    items: ["Clean code principles", "80%+ test coverage", "Peer code reviews", "SOLID principles"],
  },
  {
    num:   "04",
    icon:  "🛡️",
    title: "Performance & Security",
    desc:  "Optimised queries, Redis caching, HTTPS, rate limiting, and OWASP best practices baked into every deployment.",
    color: "#ff9a3c",
    items: ["Query optimisation", "Redis caching", "OWASP security", "Load testing"],
  },
  {
    num:   "05",
    icon:  "🚀",
    title: "Deployment & Monitoring",
    desc:  "Docker-based deployments on AWS/Vercel, automated rollbacks, uptime monitoring, and detailed performance dashboards.",
    color: "#ff6b6b",
    items: ["Docker containers", "AWS / Vercel deploy", "Uptime monitoring", "Auto rollback"],
  },
  {
    num:   "06",
    icon:  "🤝",
    title: "Post-Launch Support",
    desc:  "30-day post-launch support, detailed documentation, knowledge transfer sessions, and long-term maintenance packages.",
    color: "#ffd700",
    items: ["30-day free support", "Full documentation", "Knowledge transfer", "Maintenance plans"],
  },
];

export default function Strategy() {
  return (
    <section id="strategy" className="py-24 px-[6%] bg-dark-300">
      <SectionTitle number="06" title="Strategy" />
      <p className="text-gray-500 text-base mt-[-44px] mb-14 max-w-lg">
        My proven process for delivering high-quality software — from kickoff to go-live.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {STEPS.map((step, i) => (
          <div key={step.num}
            className="relative bg-dark-100 border border-white/5 rounded-2xl p-7 card-hover overflow-hidden group">

            {/* Background number watermark */}
            <div className="absolute top-4 right-5 font-mono text-[64px] font-black leading-none select-none transition-all duration-300 group-hover:opacity-20"
              style={{ color: step.color, opacity: 0.08 }}>
              {step.num}
            </div>

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
              style={{ background: step.color + "15", border: `1px solid ${step.color}33` }}>
              {step.icon}
            </div>

            <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-[1.75] mb-5">{step.desc}</p>

            {/* Bullet items */}
            <ul className="space-y-1.5">
              {step.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: step.color }} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Step connector arrow for large grid */}
            {(i + 1) % 3 !== 0 && i !== STEPS.length - 1 && (
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-accent/30 font-bold text-xl hidden xl:block z-10">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
