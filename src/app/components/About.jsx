import { Download } from "lucide-react";
import SectionTitle from "./SectionTitle";

const INFO = [
  ["📍", "Location", "Khulna, Bangladesh"],
  ["📧", "Email", "shakibn2004@gmail.com"],
  ["🎓", "Degree", "B.Sc. in BECM"],
  ["💼", "Experience", "2+ Years"],
  ["🌐", "Website", "nazmus-shakib.space"],
  ["📞", "Phone", "+880 9678640848"],
];

export default function About() {
  return (
    <section id="about" className="py-24 px-[6%] bg-dark-400">
      <SectionTitle number="01" title="About Me" />

      <div className="flex flex-col lg:flex-row gap-16 items-center mt-14">

        {/* Left — Image Box */}
        <div className="shrink-0 relative">
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-3xl bg-dark-100 border-2 border-accent/20 flex items-center justify-center text-[90px] relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-purple/5" />
            🧑‍💻
            {/* Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-black text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
              MERN Expert
            </div>
          </div>
          {/* Decorative dots */}
          <div className="absolute -top-4 -left-4 w-20 h-20 grid grid-cols-4 gap-1.5 opacity-20">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent" />
            ))}
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-bold text-white mb-5">
            Full Stack Developer &amp; Problem Solver
          </h3>

          <p className="text-gray-500 leading-[1.85] text-[15px] mb-4">
            I&apos;m a professional MERN Stack developer based in Khulna, Bangladesh with
            <strong className="text-gray-300"> 2+ years </strong> of hands-on experience building
            production-ready web applications. I specialise in scalable backend APIs with
            Node.js &amp; Express, dynamic frontends with React &amp; Next.js, and efficient
            NoSQL databases with MongoDB.
          </p>
          <p className="text-gray-500 leading-[1.85] text-[15px] mb-8">
            My passion is turning complex problems into simple, elegant digital solutions.
            Whether you need an e-commerce platform, a SaaS dashboard, or a real-time
            collaboration tool — I bring the full stack to life with clean, maintainable code.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {INFO.map(([icon, key, value]) => (
              <div key={key} className="flex items-center gap-3 bg-dark-100 border border-white/5 rounded-xl px-4 py-3">
                <span className="text-gray-500 text-sm font-medium">{key}:</span>
                <span className="text-gray-200 text-sm font-semibold truncate">{value}</span>
              </div>
            ))}
          </div>

          <button className="btn-primary flex gap-2"><Download /> Download CV</button>
        </div>
      </div>
    </section>
  );
}
