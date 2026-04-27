"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Profitional from '/Profissional-image.png'

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    const items = contentRef.current?.querySelectorAll(".hero-item");
    items?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12}s`;
      el.classList.add("animate-fade-up");
    });
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-between px-[6%] pt-24 pb-16 gap-10 overflow-hidden"
    >
      {/* Grid BG */}
      <div className="absolute inset-0 bg-grid bg-grid-60 pointer-events-none" />

      {/* Glows */}
      <div className="absolute top-1/4 right-[8%] w-125 h-125 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-87.5 h-87.5 rounded-full bg-purple/5 blur-[100px] pointer-events-none" />

      {/* Left Content */}
      <div ref={contentRef} className="flex-1 max-w-150 z-10">

        {/* Available badge */}
        <div className="hero-item inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Available for Freelance
        </div>

        {/* Heading */}
        <h1 className="hero-item text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.08] text-white mb-4">
          Hi, I&apos;m{" "}
          <span className="block text-gradient">Md. Nazmus Shakib</span>
        </h1>

        {/* Role */}
        <div className="hero-item text-2xl md:text-3xl font-bold mb-6">
          <span className="text-gray-300">MERN Stack </span>
          <span className="text-purple">Web Developer</span>
        </div>

        {/* Description */}
        <p className="hero-item text-gray-500 text-base md:text-lg leading-[1.85] mb-9 max-w-125">
          I craft high-performance, scalable full-stack web applications with
          MongoDB, Express, React &amp; Node.js. From clean REST APIs to
          pixel-perfect UIs — I build it end-to-end.
        </p>

        {/* CTA Buttons */}
        <div className="hero-item flex flex-wrap gap-4 mb-12">
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            View Projects →
          </button>
          <button className="btn-outline" onClick={() => scrollTo("contact")}>
            Let&apos;s Talk
          </button>
        </div>

        {/* Stats */}
        <div className="hero-item flex flex-wrap gap-10">
          {[["2+", "Years Exp."], ["30+", "Projects"], ["10+", "Happy Clients"]].map(([val, label]) => (
            <div key={label} className="flex flex-col">
              <span className="font-mono text-3xl font-bold text-accent leading-none">{val}</span>
              <span className="text-gray-500 text-sm mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Avatar */}
      <div className="hidden lg:flex relative w-[320px] h-80 xl:w-90 xl:h-90 shrink-0 z-10 items-center justify-center">

        {/* Spinning Ring */}
        <div className="absolute -inset-4.5 rounded-full border-2 border-dashed border-accent/25 animate-spin-slow" />

        {/* Avatar circle */}
        <div className="w-full h-full rounded-full bg-dark-100 border-2 border-accent/20 flex items-center justify-center text-[90px] glow-accent-sm overflow-hidden">
          <Image width={0} height={0} sizes="100vw" style={{width: '80%', height: '100%'}} src={Profitional} alt="Profitional Iamge"></Image>
        </div>

        {/* Floating Badges */}
        <span className="badge-1 absolute -top-4 -right-6 bg-black border border-accent/40 text-accent font-semibold text-xs px-3 py-1.5 rounded-lg">
          ⚛️ React
        </span>
        <span className="badge-2 absolute -bottom-2 -right-8 bg-black border border-white/10 text-sky-300 font-semibold text-xs px-3 py-1.5 rounded-lg">
          🟢 Node.js
        </span>
        <span className="badge-3 absolute bottom-14 -left-8 bg-black border border-green-500/30 text-green-400 font-semibold text-xs px-3 py-1.5 rounded-lg">
          🍃 MongoDB
        </span>
        <span className="badge-1 absolute top-14 -left-10 bg-black border border-purple/40 text-purple font-semibold text-xs px-3 py-1.5 rounded-lg">
          ▲ Next.js
        </span>
      </div>

    </section>
  );
}
