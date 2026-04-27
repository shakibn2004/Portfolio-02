"use client"
const NAV_LINKS = ["Home","About","Skills","Experience","Projects","Achievements","Strategy","Contact"];

const SOCIALS = [
  { name: "GitHub",    icon: "🐙", href: "https://github.com",   color: "#e0e0e0" },
  { name: "LinkedIn",  icon: "💼", href: "https://linkedin.com",  color: "#0a66c2" },
  { name: "Twitter",   icon: "🐦", href: "https://twitter.com",   color: "#1da1f2" },
  { name: "Dev.to",    icon: "📝", href: "https://dev.to",        color: "#00f5a0" },
  { name: "Upwork",    icon: "💚", href: "https://upwork.com",    color: "#6fda44" },
  { name: "YouTube",   icon: "🎥", href: "https://youtube.com",   color: "#ff0000" },
  { name: "Hashnode",  icon: "🔵", href: "https://hashnode.com",  color: "#2962ff" },
  { name: "CodePen",   icon: "✏️", href: "https://codepen.io",    color: "#ffffff" },
];

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-500 border-t border-white/5">

      {/* CTA Banner */}
      <div className="relative overflow-hidden bg-linear-to-r from-accent/10 via-purple/10 to-accent/5 border-b border-white/5 px-[6%] py-12 text-center">
        <div className="absolute inset-0 bg-grid bg-grid-60 opacity-30 pointer-events-none" />
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 relative z-10">
          Ready to start your project?
        </h2>
        <p className="text-gray-500 text-sm mb-6 relative z-10">
          Let&apos;s turn your idea into a production-ready application.
        </p>
        <button onClick={() => scrollTo("Contact")}
          className="btn-primary relative z-10 inline-block">
          🚀 Get In Touch
        </button>
      </div>

      {/* Main Footer */}
      <div className="px-[6%] py-14">
        <div className="flex flex-col lg:flex-row gap-12 justify-between">

          {/* Brand Column */}
          <div className="max-w-[280px]">
            <div className="font-mono text-2xl font-bold text-white mb-4">
              <span className="text-accent">&lt;</span>Dev<span className="text-accent">/&gt;</span>
            </div>
            <p className="text-gray-500 text-sm leading-[1.8] mb-6">
              Professional MERN Stack Developer crafting scalable, performant web applications from Khulna, Bangladesh.
            </p>
            {/* Social Icons Row */}
            <div className="flex flex-wrap gap-2">
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer"
                  title={s.name}
                  className="w-9 h-9 bg-dark-100 border border-white/8 rounded-xl flex items-center justify-center text-base hover:border-accent/30 hover:bg-dark-50 transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Navigation</h4>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <button key={link} onClick={() => scrollTo(link)}
                  className="text-gray-500 text-sm hover:text-accent transition-colors text-left">
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Services</h4>
            <div className="flex flex-col gap-2.5">
              {["MERN Stack Development","Next.js Applications","REST & GraphQL APIs","MongoDB Architecture","React UI Development","Technical Consultation"].map((s) => (
                <span key={s} className="text-gray-500 text-sm hover:text-accent transition-colors cursor-default">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Contact</h4>
            <div className="flex flex-col gap-3">
              {[
                ["📧", "rahim.dev@gmail.com"],
                ["📍", "Khulna, Bangladesh"],
                ["⏰", "Mon–Sat, 9AM–9PM"],
                ["⚡", "Response in 24h"],
              ].map(([icon, val]) => (
                <div key={val} className="flex items-center gap-2.5 text-gray-500 text-sm">
                  <span>{icon}</span>
                  <span>{val}</span>
                </div>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-xs font-semibold">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-[6%] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-gray-600 text-xs">
          © 2025 Md. Rahim — MERN Stack Developer. All rights reserved.
        </span>
        <span className="text-gray-600 text-xs flex items-center gap-1.5">
          Made with <span className="text-red-500">❤️</span> in Khulna 🇧🇩
        </span>
      </div>
    </footer>
  );
}
