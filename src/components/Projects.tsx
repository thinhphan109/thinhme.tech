"use client";

import { projects } from "@/lib/data";
import { ExternalLink, Github, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const langColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  Python: "bg-yellow-500",
  "C++": "bg-pink-500",
  JavaScript: "bg-amber-400",
  Java: "bg-red-500",
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-6 py-32"
    >
      {/* Background blob */}
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-peach/10 blur-[120px] dark:bg-peach/5"
        style={{ animation: "blob-float-reverse 16s ease-in-out infinite" }}
      />

      {/* Section Title */}
      <div className="reveal mb-16">
        <p
          className="mb-2 text-xs tracking-[0.3em] uppercase text-mint"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          03 — Projects
        </p>
        <h2
          className="text-4xl font-bold text-navy md:text-5xl dark:text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Selected Works
        </h2>
        <p className="mt-3 text-sm text-gray dark:text-gray-light">
          Các dự án cá nhân từ GitHub — hover để xem thêm
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className={`reveal project-card group relative overflow-hidden rounded-3xl border border-navy/5 bg-white dark:border-white/8 dark:bg-dark-card ${
              project.featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
            }`}
          >
            {/* Image Area */}
            <div
              className={`relative overflow-hidden ${
                project.featured ? "h-72 md:h-full" : "h-56"
              }`}
            >
              {/* Gradient background */}
              <div
                className={`h-full w-full transition-all duration-700 ${
                  i % 4 === 0
                    ? "bg-gradient-to-br from-peach/40 via-lavender/30 to-mint/20 dark:from-peach/20 dark:via-lavender/15 dark:to-mint/10"
                    : i % 4 === 1
                    ? "bg-gradient-to-br from-lavender/40 via-mint/30 to-peach/20 dark:from-lavender/20 dark:via-mint/15 dark:to-peach/10"
                    : i % 4 === 2
                    ? "bg-gradient-to-br from-mint/40 via-peach/30 to-lavender/20 dark:from-mint/20 dark:via-peach/15 dark:to-lavender/10"
                    : "bg-gradient-to-br from-peach/30 via-mint/40 to-lavender/20 dark:from-peach/15 dark:via-mint/20 dark:to-lavender/10"
                }`}
              >
                <div className="flex h-full flex-col items-center justify-center gap-3">
                  {/* Project number */}
                  <span
                    className="text-[5rem] font-extrabold leading-none text-navy/8 transition-all duration-500 group-hover:scale-110 group-hover:text-navy/15 dark:text-white/8 dark:group-hover:text-white/15"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Language dot */}
                  <div className="flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 backdrop-blur-sm dark:bg-dark-bg/60">
                    <span className={`h-2.5 w-2.5 rounded-full ${langColors[project.language] || "bg-gray"}`} />
                    <span className="text-xs font-medium text-navy dark:text-white">{project.language}</span>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-navy/70 opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:opacity-100 dark:bg-dark-bg/80">
                <a
                  href={project.url}
                  className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy transition-all duration-300 hover:scale-110 hover:bg-peach"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
                <a
                  href={project.github}
                  className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy transition-all duration-300 hover:scale-110 hover:bg-lavender"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 backdrop-blur-sm dark:bg-dark-card/80">
                  <Star className="h-3 w-3 text-peach" fill="currentColor" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy dark:text-white">Featured</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-6 md:p-8">
              <h3
                className="mb-2 text-xl font-bold text-navy dark:text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {project.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-gray dark:text-gray-light">
                {project.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-navy/10 bg-cream-dark/50 px-3 py-1 text-[11px] font-semibold text-navy transition-colors hover:border-peach/50 hover:bg-peach/10 dark:border-white/10 dark:bg-dark-bg/50 dark:text-gray-light dark:hover:border-peach/50 dark:hover:text-peach"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View all on GitHub */}
      <div className="reveal mt-12 flex justify-center">
        <a
          href="https://github.com/thinhphan109"
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer flex items-center gap-2 rounded-full border-2 border-navy/10 px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white dark:border-white/10 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-navy"
        >
          <Github className="h-4 w-4" />
          View All on GitHub
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
