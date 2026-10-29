"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-line-strong text-fg transition-colors hover:border-fg"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      {mounted && (
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={theme}
            initial={{ y: 18, rotate: -45, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -18, rotate: 45, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid place-items-center"
          >
            {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
