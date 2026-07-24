"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  ArrowUpRight, 
  Menu, 
  X, 
  Code2, 
  Terminal, 
  User, 
  Layers, 
  Briefcase, 
  Send 
} from "lucide-react";

const NAV_ITEMS = [
  { id: "Home", label: "Home", icon: Terminal },
  { id: "About", label: "About", icon: User },
  { id: "Skills", label: "Skills", icon: Code2 },
  { id: "Projects", label: "Projects", icon: Layers },
  { id: "Strategy", label: "Strategy", icon: Briefcase },
  { id: "Contact", label: "Contact", icon: Send },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section Scroll-Spy for active link highlight on home page
      if (pathname === "/") {
        const scrollPosition = window.scrollY + 220; // Navbar offset threshold
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

        if (isAtBottom) {
          setActive("Contact");
          return;
        }

        for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
          const item = NAV_ITEMS[i];
          const el = document.getElementById(item.id.toLowerCase());
          if (el) {
            const absoluteTop = el.getBoundingClientRect().top + window.scrollY;
            if (scrollPosition >= absoluteTop - 50) {
              setActive(item.id);
              break;
            }
          }
        }
      }
    };

    handleScroll(); // Initial check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNav = (id) => {
    const targetId = id.toLowerCase();
    setActive(id);
    setMenuOpen(false);

    if (pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${targetId}`);
    }
  };

  const handleLogoClick = () => {
    setActive("Home");
    setMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "pt-3 px-4 sm:px-8" : "pt-5 px-6 sm:px-12"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "max-w-6xl bg-dark-100/80 backdrop-blur-2xl border border-white/15 rounded-full px-6 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
              : "max-w-7xl bg-dark-400/40 backdrop-blur-md border border-white/5 rounded-2xl px-6 py-3"
          }`}
        >
          {/* Brand Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 text-left group cursor-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-dark-200 border border-white/15 flex items-center justify-center group-hover:border-accent/60 transition-all duration-300 shadow-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src="/logo-concept-2.svg"
                alt="Shakib Logo"
                width={22}
                height={22}
                className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-white text-base leading-tight tracking-tight group-hover:text-accent transition-colors">
                  Shakib<span className="text-accent">.dev</span>
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
              </div>
              <span className="text-[10px] font-mono text-gray-400 tracking-wider">
                FULL-STACK ENGINEER
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links Pill Container */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-200/60 p-1.5 rounded-full border border-white/8">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id && pathname === "/";
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 cursor-none ${
                    isActive ? "text-accent" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-accent/15 border border-accent/40 rounded-full"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Hire Me CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={() => handleNav("Contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 245, 160, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 py-2 rounded-full font-bold text-xs text-black bg-gradient-to-r from-accent via-cyan-400 to-purple transition-all duration-300 cursor-none shadow-lg flex items-center gap-1.5"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-xl bg-dark-200 border border-white/10 text-white hover:text-accent transition-colors cursor-none"
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Sheet Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden bg-dark-100/98 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl cursor-none"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
                <span className="text-xs font-mono font-bold uppercase text-gray-400">
                  Navigation
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-accent/10 border border-accent/30 text-accent font-semibold">
                  Md. Nazmus Shakib
                </span>
              </div>

              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id && pathname === "/";
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item.id)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-semibold transition-all cursor-none ${
                      isActive
                        ? "bg-accent/15 border border-accent/40 text-accent"
                        : "text-gray-300 hover:bg-white/5 hover:text-white border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? "text-accent" : "text-gray-500"}`} />
                      <span>{item.label}</span>
                    </div>
                    {isActive && <Sparkles className="w-4 h-4 text-accent" />}
                  </button>
                );
              })}

              <button
                onClick={() => handleNav("Contact")}
                className="btn-primary mt-4 py-3 text-center text-xs font-bold w-full flex items-center justify-center gap-2 cursor-none"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
