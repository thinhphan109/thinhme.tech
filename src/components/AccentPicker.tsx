"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

export const ACCENT_THEMES = {
  peach: {
    label: "Peach",
    primary: "#FFB09C",
    primaryLight: "#FFD4C8",
    secondary: "#C4B5FD",
    secondaryLight: "#DDD6FE",
    tertiary: "#6EE7B7",
    tertiaryLight: "#A7F3D0",
  },
  ocean: {
    label: "Ocean",
    primary: "#60A5FA",
    primaryLight: "#93C5FD",
    secondary: "#34D399",
    secondaryLight: "#6EE7B7",
    tertiary: "#F472B6",
    tertiaryLight: "#F9A8D4",
  },
  violet: {
    label: "Violet",
    primary: "#A78BFA",
    primaryLight: "#C4B5FD",
    secondary: "#F472B6",
    secondaryLight: "#F9A8D4",
    tertiary: "#38BDF8",
    tertiaryLight: "#7DD3FC",
  },
  emerald: {
    label: "Emerald",
    primary: "#34D399",
    primaryLight: "#6EE7B7",
    secondary: "#FBBF24",
    secondaryLight: "#FDE68A",
    tertiary: "#818CF8",
    tertiaryLight: "#A5B4FC",
  },
  rose: {
    label: "Rose",
    primary: "#FB7185",
    primaryLight: "#FDA4AF",
    secondary: "#38BDF8",
    secondaryLight: "#7DD3FC",
    tertiary: "#A3E635",
    tertiaryLight: "#BEF264",
  },
} as const;

export type AccentTheme = keyof typeof ACCENT_THEMES;

function applyAccentTheme(theme: AccentTheme) {
  const t = ACCENT_THEMES[theme];
  const root = document.documentElement;
  root.style.setProperty("--color-peach", t.primary);
  root.style.setProperty("--color-peach-light", t.primaryLight);
  root.style.setProperty("--color-lavender", t.secondary);
  root.style.setProperty("--color-lavender-light", t.secondaryLight);
  root.style.setProperty("--color-mint", t.tertiary);
  root.style.setProperty("--color-mint-light", t.tertiaryLight);
}

export default function AccentPicker() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<AccentTheme>("peach");

  useEffect(() => {
    const saved = localStorage.getItem("accent-theme") as AccentTheme | null;
    if (saved && ACCENT_THEMES[saved]) {
      setCurrent(saved);
      applyAccentTheme(saved);
    }
  }, []);

  const select = (theme: AccentTheme) => {
    setCurrent(theme);
    applyAccentTheme(theme);
    localStorage.setItem("accent-theme", theme);
    setOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-navy/10 bg-white text-navy transition-colors hover:border-peach dark:border-white/10 dark:bg-dark-card dark:text-white dark:hover:border-peach"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Change accent color"
        title="Accent Color"
      >
        <Palette className="h-4 w-4" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              className="absolute right-0 top-12 z-50 flex gap-2 rounded-2xl border border-navy/10 bg-white p-3 shadow-xl dark:border-white/10 dark:bg-dark-card"
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {(Object.keys(ACCENT_THEMES) as AccentTheme[]).map((key) => {
                const theme = ACCENT_THEMES[key];
                const isActive = current === key;
                return (
                  <motion.button
                    key={key}
                    onClick={() => select(key)}
                    className="group relative flex cursor-pointer flex-col items-center gap-1"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    title={theme.label}
                  >
                    <div
                      className={`h-7 w-7 rounded-full border-2 transition-all ${
                        isActive
                          ? "border-navy dark:border-white scale-110 shadow-lg"
                          : "border-transparent hover:border-navy/30 dark:hover:border-white/30"
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary}, ${theme.tertiary})`,
                      }}
                    />
                    <span className="text-[8px] font-medium text-gray dark:text-gray-light">
                      {theme.label}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
