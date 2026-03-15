import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-navy/5 px-6 py-10 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* Logo */}
        <a
          href="#hero"
          className="cursor-pointer text-lg font-bold tracking-wider text-navy transition-colors hover:text-peach dark:text-white dark:hover:text-peach"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          thinhme<span className="text-peach">.tech</span>
        </a>

        {/* Center */}
        <p className="flex items-center gap-1.5 text-xs text-gray dark:text-gray-light">
          Built with <Heart className="h-3 w-3 text-peach" fill="currentColor" /> using
          Next.js & TailwindCSS
        </p>

        {/* Copyright */}
        <p
          className="text-xs text-gray dark:text-gray-light"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          © {new Date().getFullYear()} Thinh Phan
        </p>
      </div>
    </footer>
  );
}
