"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, GitBranch, Coffee, Zap } from "lucide-react";

const stats = [
  { icon: <Coffee className="h-6 w-6" />, value: 5, suffix: "+", label: "Năm vọc phá", color: "text-peach" },
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
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-4xl px-6 py-16">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="reveal group flex flex-col items-center gap-3 rounded-2xl border border-navy/5 bg-white p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-white/5 dark:bg-dark-card"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className={`${stat.color} transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12`}>
              {stat.icon}
            </div>
            <p
              className="text-3xl font-extrabold text-navy dark:text-white md:text-4xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} animated={animated} />
            </p>
            <p className="text-xs font-medium text-gray dark:text-gray-light">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
