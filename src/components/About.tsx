"use client";

import { personalInfo, experiences } from "@/lib/data";
import { MapPin, Briefcase, Calendar, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  sectionTitle,
  scaleIn,
  defaultViewport,
} from "@/lib/animations";

export default function About() {
  const [activeExp, setActiveExp] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.5"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-32 overflow-hidden">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-lavender/15 blur-[120px] dark:bg-lavender/8"
        style={{ animation: "blob-float 18s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-40 h-[400px] w-[400px] rounded-full bg-peach/12 blur-[100px] dark:bg-peach/6"
        style={{ animation: "blob-float-reverse 22s ease-in-out infinite 3s" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(26,26,46,0.03)_1px,transparent_1px)] bg-[size:32px_32px] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      {/* Section Title */}
      <motion.div
        className="mb-16"
        variants={sectionTitle}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <p
          className="mb-2 text-xs tracking-[0.3em] uppercase text-peach"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          01 — About
        </p>
        <h2
          className="text-4xl font-bold text-navy md:text-5xl dark:text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          About Me
        </h2>
      </motion.div>

      {/* Content Grid */}
      <div className="grid gap-16 md:grid-cols-2">
        {/* Left - Avatar & Info */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="relative mb-8">
            <motion.div
              className="relative h-80 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-peach/20 via-lavender/20 to-mint/20 dark:from-peach/10 dark:via-lavender/10 dark:to-mint/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-8xl font-extrabold text-navy/5 dark:text-white/5"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  TP
                </span>
              </div>
              <div
                className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-peach via-lavender to-mint opacity-30 blur-sm"
                style={{ animation: "gradient-shift 6s ease-in-out infinite" }}
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 left-6 flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md px-4 py-2 shadow-lg dark:bg-dark-card/80 dark:shadow-none dark:border dark:border-white/10"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full bg-mint"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              <span className="text-xs font-medium text-navy dark:text-white">
                Available for work
              </span>
            </motion.div>
          </div>

          <motion.div
            className="mt-10 flex flex-wrap gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.div
              className="flex items-center gap-2 rounded-full border border-navy/5 bg-white/60 backdrop-blur-sm px-4 py-2 dark:border-white/10 dark:bg-dark-card/60"
              variants={scaleIn}
            >
              <MapPin className="h-4 w-4 text-peach" />
              <span className="text-sm text-navy dark:text-white">{personalInfo.location}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 rounded-full border border-navy/5 bg-white/60 backdrop-blur-sm px-4 py-2 dark:border-white/10 dark:bg-dark-card/60"
              variants={scaleIn}
            >
              <Briefcase className="h-4 w-4 text-lavender" />
              <span className="text-sm text-navy dark:text-white">{personalInfo.role}</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right - Bio & Glassmorphism Timeline */}
        <div>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <p
              className="mb-8 text-lg leading-relaxed text-gray dark:text-gray-light"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Glassmorphism Timeline */}
          <div ref={timelineRef} className="relative mt-8 pl-8">
            {/* Vertical line — draws as you scroll */}
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-navy/5 dark:bg-white/5">
              <motion.div
                className="w-full bg-gradient-to-b from-peach via-lavender to-mint rounded-full"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  {/* Dot marker */}
                  <motion.div
                    className={`absolute -left-[22px] top-4 h-3 w-3 rounded-full border-2 ${
                      activeExp === i
                        ? "border-peach bg-peach shadow-lg shadow-peach/30"
                        : "border-navy/20 bg-white dark:border-white/20 dark:bg-dark-bg"
                    } transition-all duration-300`}
                    animate={activeExp === i ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                    transition={{ duration: 1.5, repeat: activeExp === i ? Infinity : 0 }}
                  />

                  {/* Glassmorphism card */}
                  <button
                    onClick={() => setActiveExp(i)}
                    className={`group w-full cursor-pointer rounded-2xl border p-4 text-left transition-all duration-300 backdrop-blur-sm ${
                      activeExp === i
                        ? "border-peach/30 bg-white/60 shadow-lg shadow-peach/5 dark:border-peach/20 dark:bg-white/5"
                        : "border-navy/5 bg-white/40 hover:border-navy/10 hover:bg-white/60 hover:shadow-sm dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-white/10 dark:hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <Calendar
                            className={`h-3.5 w-3.5 ${
                              activeExp === i ? "text-peach" : "text-gray dark:text-gray-light"
                            }`}
                          />
                          <p
                            className={`text-xs tracking-wider ${
                              activeExp === i ? "text-peach" : "text-gray dark:text-gray-light"
                            }`}
                            style={{ fontFamily: "var(--font-jetbrains)" }}
                          >
                            {exp.year}
                          </p>
                        </div>
                        <h3 className="text-sm font-semibold text-navy dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-xs text-lavender">{exp.company}</p>
                        <AnimatePresence>
                          {activeExp === i && (
                            <motion.p
                              className="mt-2 text-sm leading-relaxed text-gray dark:text-gray-light"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {exp.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                      <motion.div
                        animate={{ rotate: activeExp === i ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight
                          className={`h-4 w-4 flex-shrink-0 ${
                            activeExp === i ? "text-peach" : "text-gray/30 dark:text-white/20"
                          }`}
                        />
                      </motion.div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
