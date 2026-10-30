"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { scrollToSection } from "./SmoothScroll";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

const ease = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: the section crossing the upper third of the viewport is "active"
  useEffect(() => {
    if (!onHome) return;
    const els = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    els.forEach((el) => io.observe(el));
    const top = () => window.scrollY < 200 && setActive(null);
    window.addEventListener("scroll", top, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", top);
    };
  }, [onHome]);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    if (menuOpen) window.__lenis?.stop();
    else window.__lenis?.start();
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const go = (id) => {
    setMenuOpen(false);
    if (onHome) scrollToSection(id);
    else router.push(id === "home" ? "/" : `/#${id}`);
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.9 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-[background-color,border-color,backdrop-filter] duration-500 border-b ${
            scrolled || menuOpen
              ? "bg-canvas/75 backdrop-blur-xl border-line"
              : "bg-transparent border-transparent"
          }`}
        >
          <div className="shell flex h-16 items-center justify-between gap-6">
            <button
              onClick={() => go("home")}
              className="flex items-center gap-2.5 rounded-lg"
              aria-label="Nazmus Shakib — back to top"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-line-strong bg-surface text-fg">
                <Logo className="h-5 w-5" />
              </span>
              <span className="font-display text-[17px] font-semibold tracking-tight">Nazmus Shakib</span>
            </button>

            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = onHome && active === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => go(item.id)}
                        aria-current={isActive ? "true" : undefined}
                        className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                          isActive ? "text-fg" : "text-muted hover:text-fg"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-active"
                            transition={{ type: "spring", stiffness: 420, damping: 36 }}
                            className="absolute inset-0 rounded-full bg-raised"
                          />
                        )}
                        <span className="relative">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button onClick={() => go("contact")} className="btn btn-solid hidden h-9 px-4 text-sm md:inline-flex">
                Hire me
                <ArrowUpRight className="btn-icon h-4 w-4" />
              </button>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="relative grid h-9 w-9 place-items-center rounded-full border border-line-strong md:hidden"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span className="sr-only">Menu</span>
                <span
                  className={`absolute h-px w-4 bg-fg transition-transform duration-500 ease-out-expo ${
                    menuOpen ? "rotate-45" : "-translate-y-[3px]"
                  }`}
                />
                <span
                  className={`absolute h-px w-4 bg-fg transition-transform duration-500 ease-out-expo ${
                    menuOpen ? "-rotate-45" : "translate-y-[3px]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 z-40 flex flex-col bg-canvas pt-24 md:hidden"
          >
            <nav aria-label="Mobile" className="shell flex-1">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <li key={item.id} className="overflow-hidden">
                    <motion.button
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.05 }}
                      onClick={() => go(item.id)}
                      className="font-display block py-1 text-5xl font-semibold tracking-tight"
                      style={{ fontVariationSettings: '"wdth" 90' }}
                    >
                      {item.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="shell border-t border-line py-6 text-sm text-muted"
            >
              <a href="mailto:shakibn2004@gmail.com" className="text-fg">
                shakibn2004@gmail.com
              </a>
              <p className="mt-1">Khulna, Bangladesh</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
