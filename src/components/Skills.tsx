"use client";

import { skills } from "@/lib/data";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  sectionTitle,
  defaultViewport,
} from "@/lib/animations";
import TechOrbit from "./TechOrbit";

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

const skillCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-6 py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-lavender/10 blur-[120px] dark:bg-lavender/5"
        style={{ animation: "blob-float 20s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-20 h-[350px] w-[350px] rounded-full bg-mint/12 blur-[100px] dark:bg-mint/6"
        style={{ animation: "blob-float-reverse 16s ease-in-out infinite 2s" }}
      />
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,26,46,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,46,0.02)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)]" />

      {/* Section Title */}
      <motion.div
        className="mb-12"
        variants={sectionTitle}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
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
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="mb-10 flex flex-wrap gap-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-navy text-white shadow-lg dark:bg-white dark:text-navy"
                : "bg-cream-dark text-gray hover:bg-navy/5 dark:bg-dark-card dark:text-gray-light dark:hover:bg-white/10"
            }`}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            layout
          >
            {cat !== "All" && <span className="mr-1.5">{categoryIcon[cat]}</span>}
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" layout>
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className={`group rounded-2xl border border-navy/5 bg-white p-6 dark:border-white/5 dark:bg-dark-card dark:hover:border-white/10 ${
                hoveredSkill === skill.name ? "scale-[1.02]" : ""
              }`}
              custom={i}
              variants={skillCardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.12)",
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
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${
                    categoryColors[skill.category]
                  }`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              </div>

              {/* Level */}
              <div className="mt-2 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, star) => (
                    <motion.div
                      key={star}
                      className={`h-1.5 w-1.5 rounded-full ${
                        star < Math.round(skill.level / 20)
                          ? categoryColors[skill.category].includes("peach")
                            ? "bg-peach"
                            : categoryColors[skill.category].includes("lavender")
                            ? "bg-lavender"
                            : "bg-mint"
                          : "bg-cream-dark dark:bg-dark-bg"
                      }`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.8 + star * 0.1, type: "spring" }}
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Tech Stack Orbit */}
      <motion.div
        className="mt-20 flex flex-col items-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      >
        <p
          className="mb-4 text-center text-xs tracking-[0.3em] uppercase text-gray dark:text-gray-light"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          Tech Universe
        </p>
        <TechOrbit />
      </motion.div>
    </section>
  );
}
