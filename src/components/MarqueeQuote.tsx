"use client";

import { motion } from "framer-motion";

const quotes = [
  "If it can be automated, it should be automated",
  "Build fast, break things, fix faster",
  "Code is poetry, bugs are plot twists",
  "Automate the boring stuff",
  "There's no place like 127.0.0.1",
  "It works on my machine — ship it",
];

export default function MarqueeQuote() {
  return (
    <motion.div
      className="relative overflow-hidden py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-cream to-transparent dark:from-dark-bg" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-cream to-transparent dark:from-dark-bg" />

      {/* Marquee track */}
      <div
        className="flex w-max gap-0"
        style={{
          animation: "marquee 40s linear infinite",
        }}
      >
        {[...quotes, ...quotes, ...quotes, ...quotes].map((quote, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap px-8"
          >
            <span
              className="text-2xl font-bold italic text-navy/8 md:text-4xl dark:text-white/8"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              &ldquo;{quote}&rdquo;
            </span>
            <span className="mx-8 text-2xl text-peach/30">✦</span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
