"use client";

import { personalInfo, experiences } from "@/lib/data";
import { MapPin, Briefcase, Calendar, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeExp, setActiveExp] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-6 py-32"
    >
      {/* Section Title */}
      <div className="reveal mb-16">
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
      </div>

      {/* Content Grid */}
      <div className="grid gap-16 md:grid-cols-2">
        {/* Left - Avatar & Info */}
        <div className="reveal">
          <div className="relative mb-8">
            {/* Avatar placeholder with animated gradient */}
            <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-peach/20 via-lavender/20 to-mint/20 dark:from-peach/10 dark:via-lavender/10 dark:to-mint/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-8xl font-extrabold text-navy/5 dark:text-white/5"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  TP
                </span>
              </div>
              {/* Animated gradient border */}
              <div
                className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-peach via-lavender to-mint opacity-30 blur-sm"
                style={{ animation: "gradient-shift 6s ease-in-out infinite" }}
              />
            </div>

            {/* Status badge */}
            <div className="absolute -bottom-4 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg dark:bg-dark-card dark:shadow-none dark:border dark:border-white/10">
              <span
                className="h-2.5 w-2.5 rounded-full bg-mint"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              <span className="text-xs font-medium text-navy dark:text-white">
                Available for work
              </span>
            </div>
          </div>

          {/* Quick Info */}
          <div className="mt-10 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full border border-navy/5 bg-cream-dark px-4 py-2 dark:border-white/10 dark:bg-dark-card">
              <MapPin className="h-4 w-4 text-peach" />
              <span className="text-sm text-navy dark:text-white">
                {personalInfo.location}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-navy/5 bg-cream-dark px-4 py-2 dark:border-white/10 dark:bg-dark-card">
              <Briefcase className="h-4 w-4 text-lavender" />
              <span className="text-sm text-navy dark:text-white">
                {personalInfo.role}
              </span>
            </div>
          </div>
        </div>

        {/* Right - Bio & Timeline */}
        <div>
          <div className="reveal">
            <p
              className="mb-8 text-lg leading-relaxed text-gray dark:text-gray-light"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {personalInfo.bio}
            </p>
          </div>

          {/* Interactive Timeline */}
          <div className="reveal mt-8 space-y-3">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActiveExp(i)}
                className={`group w-full cursor-pointer rounded-2xl border p-4 text-left transition-all duration-300 ${
                  activeExp === i
                    ? "border-peach/30 bg-peach/5 shadow-md dark:border-peach/20 dark:bg-peach/5"
                    : "border-navy/5 bg-white hover:border-navy/10 hover:shadow-sm dark:border-white/5 dark:bg-dark-card dark:hover:border-white/10"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <Calendar className={`h-3.5 w-3.5 ${activeExp === i ? "text-peach" : "text-gray dark:text-gray-light"}`} />
                      <p
                        className={`text-xs tracking-wider ${activeExp === i ? "text-peach" : "text-gray dark:text-gray-light"}`}
                        style={{ fontFamily: "var(--font-jetbrains)" }}
                      >
                        {exp.year}
                      </p>
                    </div>
                    <h3 className="text-sm font-semibold text-navy dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-lavender">{exp.company}</p>
                    {activeExp === i && (
                      <p className="mt-2 text-sm leading-relaxed text-gray dark:text-gray-light animate-fade-in">
                        {exp.description}
                      </p>
                    )}
                  </div>
                  <ChevronRight
                    className={`h-4 w-4 flex-shrink-0 transition-transform duration-300 ${
                      activeExp === i ? "rotate-90 text-peach" : "text-gray/30 dark:text-white/20"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
