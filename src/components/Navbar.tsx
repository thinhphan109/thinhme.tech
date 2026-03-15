"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

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
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 shadow-lg backdrop-blur-xl dark:bg-dark-bg/70"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#hero"
            className="font-[var(--font-syne)] text-lg font-bold tracking-wider text-navy transition-colors hover:text-peach dark:text-white dark:hover:text-peach"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            thinhme<span className="text-peach">.tech</span>
          </a>

          {/* Right side: Desktop Nav + Theme toggle + Mobile hamburger */}
          <div className="flex items-center gap-12">
            {/* Desktop Nav */}
            <div className="hidden items-center gap-10 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative cursor-pointer text-sm font-medium text-gray transition-colors duration-300 hover:text-navy dark:text-gray-light dark:hover:text-white"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-peach transition-all duration-300 hover:w-full" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-cream-dark/80 text-navy transition-all duration-300 hover:scale-110 hover:bg-peach/20 dark:bg-dark-card/80 dark:text-white dark:hover:bg-lavender/20"
                aria-label="Toggle theme"
              >
                {mounted ? (
                  dark ? (
                    <Sun className="h-4 w-4 text-peach" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )
                ) : (
                  <span className="h-4 w-4" />
                )}
              </button>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="cursor-pointer md:hidden text-navy dark:text-white"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-white/95 backdrop-blur-xl transition-all duration-500 dark:bg-dark-bg/95 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className="cursor-pointer text-2xl font-bold text-navy transition-colors hover:text-peach dark:text-white dark:hover:text-peach"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}

