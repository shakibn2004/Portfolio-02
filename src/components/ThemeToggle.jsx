"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "motion/react";
import { Moon, Flame, Sun } from "lucide-react";

const THEME_OPTIONS = [
  { id: "dark", label: "Dark", icon: Moon, desc: "Minimal Dark" },
  { id: "light", label: "Light", icon: Sun, desc: "Minimal Light" },
];

export default function ThemeToggle({ compact = false }) {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-24 h-8 bg-dark-200/50 rounded-full animate-pulse border border-white/10" />
    );
  }

  return (
    <div
      className={`relative flex items-center bg-dark-300/80 border border-white/10 p-1 rounded-full shadow-inner ${
        compact ? "gap-0.5" : "gap-1"
      }`}
      role="radiogroup"
      aria-label="Select color theme"
    >
      {THEME_OPTIONS.map((option) => {
        const Icon = option.icon;
        const isActive = theme === option.id;

        return (
          <button
            key={option.id}
            onClick={() => setTheme(option.id)}
            className={`relative flex items-center justify-center gap-1.5 rounded-full transition-colors duration-300 cursor-none ${
              compact ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-xs font-semibold"
            } ${
              isActive
                ? "text-accent font-bold"
                : "text-gray-400 hover:text-white"
            }`}
            title={`${option.label} Mode (${option.desc})`}
            role="radio"
            aria-checked={isActive}
          >
            {isActive && (
              <motion.div
                layoutId="themeActiveIndicator"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute inset-0 bg-accent/15 border border-accent/40 rounded-full shadow-sm"
              />
            )}
            <Icon
              className={`relative z-10 transition-transform duration-300 ${
                compact ? "w-3.5 h-3.5" : "w-4 h-4"
              } ${isActive ? "scale-110 text-accent" : "opacity-70"}`}
            />
            {!compact && <span className="relative z-10 text-[11px]">{option.label}</span>}
          </button>
        );
      })}
    </div>
  );
}
