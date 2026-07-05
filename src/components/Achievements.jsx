import SectionTitle from "./SectionTitle";

const ACHIEVEMENTS = [
  { icon: "🏆", title: "Top Rated Developer",  sub: "Upwork 2023–2024",      val: "Top 3%",  color: "#ffd700" },
  { icon: "⭐", title: "GitHub Stars",          sub: "Open Source Projects",   val: "2.4k+",  color: "#00f5a0" },
  { icon: "💼", title: "Projects Delivered",    sub: "Across 8 countries",     val: "50+",    color: "#7b61ff" },
  { icon: "😊", title: "Client Satisfaction",   sub: "5-star reviews",         val: "98%",    color: "#ff6b6b" },
  { icon: "🚀", title: "Apps in Production",    sub: "Live deployments",       val: "30+",    color: "#00c9ff" },
  { icon: "📝", title: "Blog Followers",        sub: "Dev.to & Medium",        val: "5k+",    color: "#ff9a3c" },
];

const CERTIFICATIONS = [
  { name: "MongoDB Certified Developer",  issuer: "MongoDB Inc.",        year: "2023" },
  { name: "AWS Certified Developer",      issuer: "Amazon Web Services", year: "2022" },
  { name: "React Nanodegree",             issuer: "Udacity",             year: "2021" },
  { name: "Node.js Advanced Concepts",    issuer: "Udemy",               year: "2020" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-[6%] bg-dark-400">
      <SectionTitle number="05" title="Achievements" />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-14 mb-16">
        {ACHIEVEMENTS.map((a) => (
          <div key={a.title}
            className="group bg-dark-100 border border-white/5 rounded-2xl p-6 text-center card-hover flex flex-col items-center">
            <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-200">
              {a.icon}
            </span>
            <div className="font-mono text-3xl font-extrabold mb-2 leading-none"
              style={{ color: a.color }}>
              {a.val}
            </div>
            <div className="text-white text-xs font-bold mb-1">{a.title}</div>
            <div className="text-gray-600 text-xs">{a.sub}</div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/5 pt-12">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-accent font-mono text-sm">↳</span> Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name}
              className="bg-dark-100 border border-accent/10 rounded-xl px-5 py-4 card-hover flex items-start gap-3">
              <span className="text-accent text-lg mt-0.5">🎖️</span>
              <div>
                <div className="text-gray-200 text-sm font-semibold leading-snug mb-1">{cert.name}</div>
                <div className="text-gray-500 text-xs">{cert.issuer} · {cert.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
