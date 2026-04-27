import SectionTitle from "./SectionTitle";

const PROJECTS = [
  {
    name:   "ShopFlow",
    emoji:  "🛒",
    desc:   "Full-featured e-commerce platform with real-time inventory, Stripe payments, admin dashboard, and product analytics. Handles 10k+ daily users.",
    tech:   ["Next.js","Node.js","MongoDB","Stripe","Redis"],
    color:  "#00f5a0",
    live:   "#",
    github: "#",
    status: "Live",
  },
  {
    name:   "TaskForge",
    emoji:  "📋",
    desc:   "Real-time project management tool with WebSocket collaboration, Kanban boards, time tracking, and AI-powered task prioritisation.",
    tech:   ["React","Express","Socket.io","MongoDB","OpenAI"],
    color:  "#7b61ff",
    live:   "#",
    github: "#",
    status: "Live",
  },
  {
    name:   "MedTrack",
    emoji:  "🏥",
    desc:   "Healthcare appointment and patient record system with role-based auth, PDF export, SMS notifications, and HIPAA-compliant data handling.",
    tech:   ["Next.js","Node.js","PostgreSQL","Twilio","JWT"],
    color:  "#ff6b6b",
    live:   "#",
    github: "#",
    status: "Live",
  },
  {
    name:   "CryptoLens",
    emoji:  "📈",
    desc:   "Live cryptocurrency dashboard with portfolio tracking, price alerts, and historical chart analytics powered by WebSocket streams.",
    tech:   ["React","WebSockets","Chart.js","Node.js","MongoDB"],
    color:  "#ffd700",
    live:   "#",
    github: "#",
    status: "Live",
  },
  {
    name:   "EduNest",
    emoji:  "🎓",
    desc:   "Online learning platform with HLS video streaming, interactive quizzes, auto-generated certificates, and instructor analytics.",
    tech:   ["Next.js","Express","MongoDB","AWS S3","FFmpeg"],
    color:  "#00c9ff",
    live:   "#",
    github: "#",
    status: "Beta",
  },
  {
    name:   "AuthVault",
    emoji:  "🔐",
    desc:   "Open-source authentication microservice supporting OAuth2, 2FA TOTP, magic links, and fine-grained RBAC permissions.",
    tech:   ["Node.js","JWT","Redis","Docker","TypeScript"],
    color:  "#ff9a3c",
    live:   "#",
    github: "#",
    status: "Open Source",
  },
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
        <a href="https://github.com" target="_blank" rel="noreferrer"
          className="btn-outline inline-flex items-center gap-2">
           View All on GitHub
        </a>
      </div>
    </section>
  );
}
