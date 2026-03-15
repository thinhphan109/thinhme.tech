"use client";

import { useEffect, useState, useRef } from "react";
import { Code2, GitBranch, Coffee, Zap, Eye } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

function AnimatedNumber({ target, suffix, animated }: { target: number; suffix: string; animated: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animated || target === 0) return;
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
    <span className="tabular-nums">{animated ? count.toLocaleString() : "0"}{suffix}</span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [visitorCount, setVisitorCount] = useState(0);
  const [visitorLoading, setVisitorLoading] = useState(true);

  // Cloudflare Visitor Counter — chỉ đếm 1 lần/session
  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const alreadyCounted = sessionStorage.getItem("visitor_counted");

        const response = await fetch("https://thinhphan.io.vn/api/visitor/simple", {
          method: alreadyCounted ? "GET" : "POST",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const data = await response.json();
          setVisitorCount(data.count || 0);
          sessionStorage.setItem("visitor_counted", "true");
          sessionStorage.setItem("visitor_count_cache", String(data.count));
        } else {
          throw new Error("API failed");
        }
      } catch {
        // Fallback: dùng cache hoặc 0
        const cached = sessionStorage.getItem("visitor_count_cache");
        setVisitorCount(cached ? parseInt(cached) : 0);
      } finally {
        setVisitorLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  const stats = [
    { icon: <Coffee className="h-6 w-6" />, value: 5, suffix: "+", label: "Years Experience", color: "text-peach" },
    { icon: <GitBranch className="h-6 w-6" />, value: 9, suffix: "", label: "Public Repos", color: "text-lavender" },
    { icon: <Code2 className="h-6 w-6" />, value: 1000, suffix: "+", label: "Contributions", color: "text-mint" },
    { icon: <Eye className="h-6 w-6" />, value: visitorCount, suffix: "", label: "Visitors", color: "text-peach", loading: visitorLoading },
  ];

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
            <div
              className="text-3xl font-extrabold text-navy dark:text-white md:text-4xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {'loading' in stat && stat.loading ? (
                <motion.span
                  className="inline-block h-8 w-16 rounded-lg bg-navy/5 dark:bg-white/5"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              ) : (
                <AnimatedNumber target={stat.value} suffix={stat.suffix} animated={isInView} />
              )}
            </div>
            <p className="text-xs font-medium text-gray dark:text-gray-light">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
