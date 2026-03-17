"use client";

import { projects } from "@/lib/data";
import { ExternalLink, Github, Star } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  fadeInUp,
  sectionTitle,
  defaultViewport,
} from "@/lib/animations";

const langColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  Python: "bg-yellow-500",
  "C++": "bg-pink-500",
  JavaScript: "bg-amber-400",
  Java: "bg-red-500",
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

// 3D Tilt Card with Spotlight
function TiltProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    rotateX.set((y - 0.5) * -10);
    rotateY.set((x - 0.5) * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-3xl border border-navy/5 bg-white dark:border-white/8 dark:bg-dark-card ${project.featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
        }`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Spotlight glow overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at calc(var(--mx) * 100%) calc(var(--my) * 100%), rgba(255,176,156,0.12), transparent 40%)`,
        }}
      />
      {/* Glow border */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at calc(var(--mx) * 100%) calc(var(--my) * 100%), rgba(196,181,253,0.3), transparent 40%)`,
        }}
      />

      {/* Image Area */}
      <div
        className={`relative overflow-hidden ${project.featured ? "h-72 md:h-full" : "h-56"
          }`}
      >
        <div
          className={`h-full w-full transition-all duration-700 ${index % 4 === 0
              ? "bg-gradient-to-br from-peach/40 via-lavender/30 to-mint/20 dark:from-peach/20 dark:via-lavender/15 dark:to-mint/10"
              : index % 4 === 1
                ? "bg-gradient-to-br from-lavender/40 via-mint/30 to-peach/20 dark:from-lavender/20 dark:via-mint/15 dark:to-peach/10"
                : index % 4 === 2
                  ? "bg-gradient-to-br from-mint/40 via-peach/30 to-lavender/20 dark:from-mint/20 dark:via-peach/15 dark:to-lavender/10"
                  : "bg-gradient-to-br from-peach/30 via-mint/40 to-lavender/20 dark:from-peach/15 dark:via-mint/20 dark:to-lavender/10"
            }`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-3">
            <motion.span
              className="text-[5rem] font-extrabold leading-none text-navy/8 dark:text-white/8"
              style={{ fontFamily: "var(--font-syne)", transform: "translateZ(30px)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.span>
            <div className="flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 backdrop-blur-sm dark:bg-dark-bg/60">
              <span className={`h-2.5 w-2.5 rounded-full ${langColors[project.language] || "bg-gray"}`} />
              <span className="text-xs font-medium text-navy dark:text-white">{project.language}</span>
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-navy/70 opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:opacity-100 dark:bg-dark-bg/80">
          <motion.a
            href={project.url}
            className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live"
            whileHover={{ scale: 1.15, backgroundColor: "#FFB09C" }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={project.github}
            className="cursor-pointer flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source"
            whileHover={{ scale: 1.15, backgroundColor: "#C4B5FD" }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="h-5 w-5" />
          </motion.a>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <motion.div
            className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 backdrop-blur-sm dark:bg-dark-card/80"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <Star className="h-3 w-3 text-peach" fill="currentColor" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-navy dark:text-white">{t("projects.featured")}</span>
          </motion.div>
        )}
      </div>

      {/* Info */}
      <div className="relative z-10 p-6 md:p-8">
        <h3
          className="mb-2 text-xl font-bold text-navy dark:text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {t(`proj.${project.id}.title`)}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-gray dark:text-gray-light">
          {t(`proj.${project.id}.desc`)}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((techName, techIdx) => (
            <motion.span
              key={techName}
              className="rounded-full border border-navy/10 bg-cream-dark/50 px-3 py-1 text-[11px] font-semibold text-navy transition-colors hover:border-peach/50 hover:bg-peach/10 dark:border-white/10 dark:bg-dark-bg/50 dark:text-gray-light dark:hover:border-peach/50 dark:hover:text-peach"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + techIdx * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {techName}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-32 overflow-hidden">
      {/* Background blobs */}
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-peach/10 blur-[120px] dark:bg-peach/5"
        style={{ animation: "blob-float-reverse 16s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-mint/10 blur-[100px] dark:bg-mint/5"
        style={{ animation: "blob-float 20s ease-in-out infinite 4s" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(26,26,46,0.025)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.015)_1px,transparent_1px)]" />

      {/* Section Title */}
      <motion.div
        className="mb-16"
        variants={sectionTitle}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <p
          className="mb-2 text-xs tracking-[0.3em] uppercase text-mint"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {t("projects.label")}
        </p>
        <h2
          className="text-4xl font-bold text-navy md:text-5xl dark:text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {t("projects.title")}
        </h2>
        <p className="mt-3 text-sm text-gray dark:text-gray-light">
          {t("projects.desc")}
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2" style={{ perspective: "1200px" }}>
        {projects.map((project, i) => (
          <TiltProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* View all on GitHub */}
      <motion.div
        className="mt-12 flex justify-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <motion.a
          href="https://github.com/thinhphan109"
          target="_blank"
          rel="noopener noreferrer"
          className="group cursor-pointer flex items-center gap-2 rounded-full border-2 border-navy/10 px-6 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white dark:border-white/10 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-navy"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="h-4 w-4" />
          {t("projects.viewAll")}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
