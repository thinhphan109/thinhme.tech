"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    setDark(!dark);
    if (!dark) {
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
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-xl dark:bg-dark-card/80 dark:shadow-lavender/10"
      aria-label="Toggle theme"
    >
      {dark ? (
        <Sun className="h-5 w-5 text-peach" />
      ) : (
        <Moon className="h-5 w-5 text-navy" />
      )}
    </button>
  );
}
