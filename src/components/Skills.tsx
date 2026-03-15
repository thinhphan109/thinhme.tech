"use client";

import { skills } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

const categoryColors: Record<string, string> = {
  Automation: "from-peach to-peach-light",
  Development: "from-lavender to-lavender-light",
  Hardware: "from-mint to-mint-light",
};

const categoryBg: Record<string, string> = {
  Automation: "bg-peach/10 text-peach dark:bg-peach/20",
  Development: "bg-lavender/10 text-lavender dark:bg-lavender/20",
  Hardware: "bg-mint/10 text-mint dark:bg-mint/20",
};

const categoryIcon: Record<string, string> = {
  Automation: "⚡",
  Development: "💻",
  Hardware: "🔧",
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-6 py-32"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-lavender/10 blur-[120px] dark:bg-lavender/5"
        style={{ animation: "blob-float 20s ease-in-out infinite" }}
      />

      {/* Section Title */}
      <div className="reveal mb-12">
        <p
          className="mb-2 text-xs tracking-[0.3em] uppercase text-lavender"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          02 — Skills
        </p>
        <h2
          className="text-4xl font-bold text-navy md:text-5xl dark:text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          My Toolkit
        </h2>
        <p className="mt-3 text-sm text-gray dark:text-gray-light">
          Hover hoặc tap vào từng skill để xem chi tiết
        </p>
      </div>

      {/* Category Filter */}
      <div className="reveal mb-10 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-navy text-white shadow-lg dark:bg-white dark:text-navy"
                : "bg-cream-dark text-gray hover:bg-navy/5 dark:bg-dark-card dark:text-gray-light dark:hover:bg-white/10"
            }`}
          >
            {cat !== "All" && <span className="mr-1.5">{categoryIcon[cat]}</span>}
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map((skill, i) => (
          <div
            key={skill.name}
            className={`reveal group rounded-2xl border border-navy/5 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-white/5 dark:bg-dark-card dark:hover:border-white/10 dark:hover:shadow-lavender/5 ${
              hoveredSkill === skill.name ? "scale-[1.02]" : ""
            }`}
            style={{
              transitionDelay: `${i * 80}ms`,
              animationDelay: `${i * 80}ms`,
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-navy dark:text-white">
                {skill.name}
              </h3>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  categoryBg[skill.category]
                }`}
              >
                {skill.category}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2.5 overflow-hidden rounded-full bg-cream-dark dark:bg-dark-bg">
              <div
                className={`skill-bar-fill h-full rounded-full bg-gradient-to-r ${
                  categoryColors[skill.category]
                } ${animated ? "animate" : ""}`}
                style={
                  { "--skill-level": `${skill.level}%` } as React.CSSProperties
                }
              />
              {/* Shimmer effect */}
              {animated && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{ animation: "marquee 2s linear infinite", animationDelay: `${i * 200}ms` }}
                />
              )}
            </div>

            {/* Level with animation */}
            <div className="mt-2 flex items-center justify-between">
              <div className="flex gap-1">
                {[...Array(5)].map((_, star) => (
                  <div
                    key={star}
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      star < Math.round(skill.level / 20)
                        ? categoryColors[skill.category].includes("peach")
                          ? "bg-peach"
                          : categoryColors[skill.category].includes("lavender")
                          ? "bg-lavender"
                          : "bg-mint"
                        : "bg-cream-dark dark:bg-dark-bg"
                    }`}
                  />
                ))}
              </div>
              <p
                className="text-xs font-semibold text-gray dark:text-gray-light"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                {skill.level}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
