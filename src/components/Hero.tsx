"use client";

import { personalInfo, marqueeWords } from "@/lib/data";
import { ArrowDown, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import ParticleField from "./ParticleField";

const roles = ["Automation Enthusiast", "Tech Tinkerer", "Electronics Student", "Builder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(current.slice(0, displayed.length + 1));
          if (displayed.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayed(current.slice(0, displayed.length - 1));
          if (displayed.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative flex h-screen min-h-[600px] flex-col items-center justify-center overflow-hidden px-6 pt-12 pb-16"
    >
      {/* Animated Floating Blobs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-peach/30 blur-[120px] dark:bg-peach/15"
        style={{ animation: "blob-float 12s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute top-20 -right-32 h-[500px] w-[500px] rounded-full bg-lavender/30 blur-[100px] dark:bg-lavender/15"
        style={{ animation: "blob-float-reverse 15s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full bg-mint/20 blur-[100px] dark:bg-mint/10"
        style={{ animation: "blob-float 18s ease-in-out infinite 2s" }}
      />
      {/* Extra blob for more color */}
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 h-[300px] w-[300px] rounded-full bg-lavender/15 blur-[80px] dark:bg-peach/10"
        style={{ animation: "blob-float-reverse 20s ease-in-out infinite 4s" }}
      />

      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,26,46,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,46,0.03)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      {/* Particle Field */}
      <ParticleField />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Small tag */}
        <p
          className="mb-2 text-xs tracking-[0.3em] uppercase text-gray dark:text-gray-light"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {personalInfo.tagline}
        </p>

        {/* Giant Name - Reduced size slightly for fitting */}
        <h1
          className="relative leading-[0.85]"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <span className="block text-[clamp(3.5rem,10vw,11rem)] font-extrabold tracking-tight text-navy dark:text-white">
            {personalInfo.name}
          </span>
          <span
            className="block text-[clamp(3.5rem,10vw,11rem)] font-extrabold tracking-tight dark:[--stroke-color:#ffffff] [--stroke-color:#1A1A2E]"
            style={{
              WebkitTextStroke: "2px var(--stroke-color)",
              color: "transparent",
            }}
          >
            {personalInfo.lastName}
          </span>
        </h1>

        {/* Typewriter Role */}
        <div className="mt-6 h-8 flex items-center">
          <p
            className="text-lg font-medium text-gray md:text-xl dark:text-gray-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {displayed}
            <span className="ml-0.5 inline-block h-5 w-0.5 bg-peach" style={{ animation: "pulse-dot 1s ease-in-out infinite" }} />
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 mb-4 flex gap-4">
          <a
            href="#projects"
            className="group cursor-pointer relative overflow-hidden rounded-full bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-peach/25 dark:bg-white dark:text-navy"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-peach to-lavender opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 group-hover:text-navy">View My Work</span>
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-full border-2 border-navy/20 px-8 py-3.5 text-sm font-semibold text-navy transition-all duration-300 hover:border-lavender hover:bg-lavender/10 hover:-translate-y-0.5 dark:border-white/20 dark:text-white dark:hover:border-lavender"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden border-y border-navy/5 py-4 dark:border-white/5">
        <div
          className="flex w-max gap-12"
          style={{
            animation: "marquee 20s linear infinite",
            WebkitAnimation: "marquee 20s linear infinite",
            willChange: "transform",
          }}
        >
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map(
            (word, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-sm font-bold tracking-[0.2em] text-navy/10 dark:text-white/15"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {word} ✦
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
