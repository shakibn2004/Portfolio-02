import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projectsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { FaGithub } from "react-icons/fa6";
import { 
  ArrowLeft, 
  ExternalLink, 
  Layers, 
  AlertTriangle, 
  Rocket, 
  CheckCircle2, 
  Code2, 
  Globe 
} from "lucide-react";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} | Project Details`,
    description: project.desc,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen bg-dark-400 text-gray-100 pt-28 pb-20 px-[5%] relative overflow-hidden">
        {/* Background Grid & Glows */}
        <div className="absolute inset-0 bg-grid bg-grid-60 pointer-events-none opacity-40" />
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ background: project.color }}
        />

        <div className="max-w-6xl mx-auto relative z-10 space-y-12">
          {/* Top Bar / Navigation */}
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-dark-100 border border-white/10 text-gray-300 hover:text-accent hover:border-accent/40 transition-all duration-200 text-sm font-semibold group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Link>

            <span
              className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold border"
              style={{
                color: project.color,
                borderColor: `${project.color}44`,
                background: `${project.color}15`,
              }}
            >
              {project.status} Project
            </span>
          </div>

          {/* Hero Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-400 max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Image & Action Header Card */}
          <div className="bg-dark-100/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-dark-300 overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                unoptimized
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-transparent to-transparent opacity-80" />
            </div>

            {/* Quick Action Links */}
            <div className="p-6 md:p-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-dark-200/50">
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ background: project.color }}
                />
                <span className="text-sm font-mono text-gray-400">
                  Client Repository &amp; Live Deployment
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-black transition-all duration-200 hover:opacity-90 shadow-lg"
                  style={{
                    background: project.color,
                    boxShadow: `0 8px 24px ${project.accentGlow}`,
                  }}
                >
                  <Globe className="w-4 h-4" />
                  Live Project Demo
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-gray-200 border border-white/15 hover:border-white/40 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-200"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub Repository (Client)
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>

          {/* Main Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column (Description & Details) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Brief Description */}
              <section className="bg-dark-100/70 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3 text-accent font-mono text-sm font-bold uppercase tracking-wider">
                  <Code2 className="w-5 h-5" />
                  <span>Overview &amp; Purpose</span>
                </div>
                <p className="text-gray-300 text-base md:text-lg leading-[1.85] font-normal">
                  {project.desc}
                </p>
              </section>

              {/* Challenges Faced */}
              <section className="bg-dark-100/70 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3 text-amber-400 font-mono text-sm font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Challenges Faced During Development</span>
                </div>

                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl bg-dark-200/80 border border-white/5 hover:border-amber-400/30 transition-colors"
                    >
                      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-amber-400/10 text-amber-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Potential Improvements & Future Plans */}
              <section className="bg-dark-100/70 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3 text-purple font-mono text-sm font-bold uppercase tracking-wider">
                  <Rocket className="w-5 h-5" />
                  <span>Potential Improvements &amp; Future Plans</span>
                </div>

                <div className="space-y-4">
                  {project.improvements.map((improvement, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 p-4 rounded-xl bg-dark-200/80 border border-white/5 hover:border-purple/30 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {improvement}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column (Tech Stack & Links Card) */}
            <div className="space-y-8">
              {/* Technology Stack */}
              <section className="bg-dark-100/70 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6 sticky top-28">
                <div className="flex items-center gap-3 text-accent font-mono text-sm font-bold uppercase tracking-wider">
                  <Layers className="w-5 h-5" />
                  <span>Main Technology Stack</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3.5 py-1.5 rounded-xl border text-sm font-semibold transition-all duration-200 hover:scale-105"
                      style={{
                        color: project.color,
                        borderColor: `${project.color}44`,
                        background: `${project.color}12`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider">
                    Quick Links
                  </h4>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-dark-200 border border-white/5 text-gray-300 hover:text-white hover:border-accent/40 text-sm transition-all"
                  >
                    <span className="font-semibold">Live Web App</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-dark-200 border border-white/5 text-gray-300 hover:text-white hover:border-accent/40 text-sm transition-all"
                  >
                    <span className="font-semibold">GitHub Client Source</span>
                    <FaGithub className="w-4 h-4 text-gray-400" />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
