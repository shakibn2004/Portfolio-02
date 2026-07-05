"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Skills", /*"Experience"*/, "Projects", /*"Achievements"*/, "Strategy", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center py-3 bg-dark-400/95 backdrop-blur-xl border-b border-accent/10 justify-between px-[5%] transition-all duration-300
        ${scrolled ? "py-3 bg-dark-400/95 backdrop-blur-xl border-b border-accent/10" : "py-5 bg-transparent"}`}>

        {/* Logo */}
        <button onClick={() => scrollTo("Home")}
          className="font-mono text-xl font-bold text-white tracking-tight">
          <span><span className="text-accent">&#60;</span>Dev</span><span className="text-accent text-2xl">.</span><span>Shakib<span className="text-accent">/&#62;</span></span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                ${active === link
                  ? "text-accent bg-accent/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}>
              {link}
            </button>
          ))}
        </div>

        {/* Hire Me Button */}
        <button onClick={() => scrollTo("Contact")}
          className="hidden md:block btn-primary text-sm py-2.5 px-5">
          Hire Me
        </button>

        {/* Mobile Burger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-accent text-2xl font-bold w-10 h-10 flex items-center justify-center">
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-15 left-0 right-0 z-40 md:hidden bg-black border-b border-accent/10 transition-all duration-300
        ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
        <div className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map((link) => (
            <button key={link} onClick={() => scrollTo(link)}
              className={`text-left py-3 px-4 rounded-lg text-sm font-medium transition-colors
                ${active === link ? "text-accent bg-accent/10" : "text-gray-400 hover:text-white"}`}>
              {link}
            </button>
          ))}
          <button onClick={() => scrollTo("Contact")}
            className="btn-primary mt-3 text-center text-sm">
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
}
