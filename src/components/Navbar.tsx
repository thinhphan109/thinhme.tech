"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AccentPicker from "./AccentPicker";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { key: "nav.home", href: "#hero" },
  { key: "nav.about", href: "#about" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" },
];

const navLinkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.08, delayChildren: 0.1 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: 20 },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Init theme
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    if (newDark) {
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
            ? "bg-white/70 shadow-lg backdrop-blur-xl dark:bg-dark-bg/70"
            : "bg-transparent"
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="font-[var(--font-syne)] text-lg font-bold tracking-wider text-navy transition-colors hover:text-peach dark:text-white dark:hover:text-peach"
            style={{ fontFamily: "var(--font-syne)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            thinhme<span className="text-peach">.tech</span>
          </motion.a>

          {/* Right side: Desktop Nav + Theme toggle + Mobile hamburger */}
          <div className="flex items-center gap-12">
            {/* Desktop Nav */}
            <div className="hidden items-center gap-10 md:flex">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="relative cursor-pointer text-sm font-medium text-gray transition-colors duration-300 hover:text-navy dark:text-gray-light dark:hover:text-white"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                  custom={i}
                  variants={navLinkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -2 }}
                >
                  {t(item.key)}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[2px] bg-peach"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-cream-dark/80 text-navy transition-all duration-300 hover:bg-peach/20 dark:bg-dark-card/80 dark:text-white dark:hover:bg-lavender/20"
                aria-label="Toggle theme"
                whileHover={{ scale: 1.15, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {mounted ? (
                    dark ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="h-4 w-4 text-peach" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="h-4 w-4" />
                      </motion.div>
                    )
                  ) : (
                    <span className="h-4 w-4" />
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Accent Color Picker */}
              <AccentPicker />

              {/* Language Toggle */}
              <LanguageToggle />

              {/* Mobile toggle */}
              <motion.button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="cursor-pointer md:hidden text-navy dark:text-white"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-white/95 backdrop-blur-xl dark:bg-dark-bg/95 md:hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer text-2xl font-bold text-navy transition-colors hover:text-peach dark:text-white dark:hover:text-peach"
                style={{ fontFamily: "var(--font-syne)" }}
                variants={mobileLinkVariants}
                whileHover={{ scale: 1.1, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(item.key)}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
