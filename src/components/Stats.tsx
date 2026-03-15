"use client";

import { useEffect, useState } from "react";
import { Code2, GitBranch, Coffee, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const stats = [
  { icon: <Coffee className="h-6 w-6" />, value: 5, suffix: "+", label: "Years Experience", color: "text-peach" },
  { icon: <GitBranch className="h-6 w-6" />, value: 9, suffix: "", label: "Public Repos", color: "text-lavender" },
  { icon: <Code2 className="h-6 w-6" />, value: 1000, suffix: "+", label: "Contributions", color: "text-mint" },
  { icon: <Zap className="h-6 w-6" />, value: 6, suffix: "+", label: "Tech Stacks", color: "text-peach" },
];

function AnimatedNumber({ target, suffix, animated }: { target: number; suffix: string; animated: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animated) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [animated, target]);

  return (
    <span className="tabular-nums">{animated ? count : 0}{suffix}</span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={sectionRef}
      className="relative mx-auto max-w-4xl px-6 py-16 overflow-hidden"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Gradient accent glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-peach/5 via-lavender/5 to-mint/5 dark:from-peach/3 dark:via-lavender/3 dark:to-mint/3" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-lavender/10 blur-[100px] dark:bg-lavender/5"
        style={{ animation: "blob-float 15s ease-in-out infinite" }}
      />
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-navy/5 bg-white p-6 text-center dark:border-white/5 dark:bg-dark-card"
            variants={fadeInUp}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.12)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className={stat.color}
              whileHover={{ scale: 1.25, rotate: 12 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {stat.icon}
            </motion.div>
            <p
              className="text-3xl font-extrabold text-navy dark:text-white md:text-4xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} animated={isInView} />
            </p>
            <p className="text-xs font-medium text-gray dark:text-gray-light">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
