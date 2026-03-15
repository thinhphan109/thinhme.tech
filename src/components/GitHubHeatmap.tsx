"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubData {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

const LEVEL_COLORS = [
  { flat: "bg-navy/5 dark:bg-white/5", bar: "#e2e8f0", barDark: "rgba(255,255,255,0.08)" },
  { flat: "bg-mint/30 dark:bg-mint/20", bar: "#7DD3C0", barDark: "#3a7d6b" },
  { flat: "bg-mint/50 dark:bg-mint/40", bar: "#4dc9a6", barDark: "#4bab8e" },
  { flat: "bg-mint/70 dark:bg-mint/60", bar: "#2db88e", barDark: "#5cc9a0" },
  { flat: "bg-mint dark:bg-mint/80", bar: "#1aab7f", barDark: "#7DD3C0" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function GitHubHeatmap() {
  const [data, setData] = useState<ContributionDay[]>([]);
  const [total, setTotal] = useState(0);
  const [view, setView] = useState<"flat" | "3d">("flat");
  const [loading, setLoading] = useState(true);
  const [busiestDay, setBusiestDay] = useState({ count: 0, date: "" });
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://github-contributions-api.jogruber.de/v4/thinhphan109?y=last"
        );
        const json: GitHubData = await res.json();

        const contributions = json.contributions || [];
        setData(contributions);
        setTotal(json.total?.lastYear || contributions.reduce((a, d) => a + d.count, 0));

        // Busiest day
        let busiest = { count: 0, date: "" };
        contributions.forEach((d) => {
          if (d.count > busiest.count) busiest = { count: d.count, date: d.date };
        });
        setBusiestDay(busiest);

        // Streaks
        let current = 0;
        let longest = 0;
        let streak = 0;
        for (let i = contributions.length - 1; i >= 0; i--) {
          if (contributions[i].count > 0) {
            streak++;
            if (i === contributions.length - 1 || current === streak - 1) current = streak;
          } else {
            streak = 0;
          }
          longest = Math.max(longest, streak);
        }
        // Recalculate longest properly
        let tempStreak = 0;
        let maxStreak = 0;
        contributions.forEach((d) => {
          if (d.count > 0) {
            tempStreak++;
            maxStreak = Math.max(maxStreak, tempStreak);
          } else {
            tempStreak = 0;
          }
        });
        setLongestStreak(maxStreak);
        // Current streak from end
        let cs = 0;
        for (let i = contributions.length - 1; i >= 0; i--) {
          if (contributions[i].count > 0) cs++;
          else break;
        }
        setCurrentStreak(cs);
      } catch {
        // Keep empty on error
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Organize into weeks (7 rows x ~52 cols)
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  const maxCount = Math.max(...data.map((d) => d.count), 1);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl px-6 py-16">
      {/* Header */}
      <motion.div
        className="mb-6 flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-mint/10 dark:bg-mint/20">
            <svg className="h-4 w-4 text-mint" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-navy dark:text-white" style={{ fontFamily: "var(--font-syne)" }}>
              GitHub Activity
            </p>
            <p className="text-xs text-gray dark:text-gray-light">
              {loading ? "Loading..." : `${total.toLocaleString()} contributions in the last year`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* View toggle */}
          <div className="flex rounded-lg border border-navy/10 dark:border-white/10 overflow-hidden">
            <button
              onClick={() => setView("flat")}
              className={`cursor-pointer px-3 py-1.5 text-[10px] font-semibold transition-colors ${
                view === "flat"
                  ? "bg-navy text-white dark:bg-white dark:text-navy"
                  : "text-gray hover:bg-navy/5 dark:text-gray-light dark:hover:bg-white/5"
              }`}
            >
              2D
            </button>
            <button
              onClick={() => setView("3d")}
              className={`cursor-pointer px-3 py-1.5 text-[10px] font-semibold transition-colors ${
                view === "3d"
                  ? "bg-navy text-white dark:bg-white dark:text-navy"
                  : "text-gray hover:bg-navy/5 dark:text-gray-light dark:hover:bg-white/5"
              }`}
            >
              3D
            </button>
          </div>
          <a
            href="https://github.com/thinhphan109"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xs font-medium text-lavender hover:text-peach transition-colors"
          >
            @thinhphan109 →
          </a>
        </div>
      </motion.div>

      {/* Stats Cards */}
      {!loading && (
        <motion.div
          className="mb-6 grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-xl border border-navy/5 bg-white p-3 text-center dark:border-white/5 dark:bg-dark-card">
            <p className="text-2xl font-extrabold text-navy dark:text-white" style={{ fontFamily: "var(--font-syne)" }}>
              {busiestDay.count}
            </p>
            <p className="text-[10px] text-gray dark:text-gray-light">Busiest Day</p>
            <p className="text-[9px] text-lavender">{formatDate(busiestDay.date)}</p>
          </div>
          <div className="rounded-xl border border-navy/5 bg-white p-3 text-center dark:border-white/5 dark:bg-dark-card">
            <p className="text-2xl font-extrabold text-navy dark:text-white" style={{ fontFamily: "var(--font-syne)" }}>
              {longestStreak}
            </p>
            <p className="text-[10px] text-gray dark:text-gray-light">Longest Streak</p>
            <p className="text-[9px] text-mint">days</p>
          </div>
          <div className="rounded-xl border border-navy/5 bg-white p-3 text-center dark:border-white/5 dark:bg-dark-card">
            <p className="text-2xl font-extrabold text-navy dark:text-white" style={{ fontFamily: "var(--font-syne)" }}>
              {currentStreak}
            </p>
            <p className="text-[10px] text-gray dark:text-gray-light">Current Streak</p>
            <p className="text-[9px] text-peach">days</p>
          </div>
        </motion.div>
      )}

      {/* Heatmap */}
      <motion.div
        className="overflow-x-auto rounded-2xl border border-navy/5 bg-white p-4 dark:border-white/5 dark:bg-dark-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {loading ? (
          <div className="flex h-32 items-center justify-center">
            <motion.div
              className="h-6 w-6 rounded-full border-2 border-mint border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ) : view === "flat" ? (
          <>
            {/* Month labels */}
            <div className="mb-2 flex gap-0 pl-8">
              {MONTHS.map((m) => (
                <span
                  key={m}
                  className="text-[10px] text-gray dark:text-gray-light"
                  style={{ width: `${100 / 12}%`, fontFamily: "var(--font-jetbrains)" }}
                >
                  {m}
                </span>
              ))}
            </div>

            {/* 2D flat grid */}
            <div className="flex gap-[3px]">
              <div className="flex flex-col gap-[3px] pr-2">
                {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                  <span key={i} className="flex h-[12px] items-center text-[9px] text-gray dark:text-gray-light" style={{ fontFamily: "var(--font-jetbrains)" }}>
                    {d}
                  </span>
                ))}
              </div>
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day, di) => (
                    <div
                      key={`${wi}-${di}`}
                      className={`h-[12px] w-[12px] rounded-[2px] ${LEVEL_COLORS[day.level]?.flat || LEVEL_COLORS[0].flat} transition-colors hover:ring-1 hover:ring-lavender`}
                      title={`${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </>
        ) : (
          /* 3D Bar Chart — aggregated by week, with perspective tilt */
          <div 
            className="py-6"
            style={{ perspective: "800px" }}
          >
            {/* Month labels */}
            <div className="mb-2 flex gap-0 pl-2" style={{ transform: "rotateX(8deg) rotateY(-5deg)", transformOrigin: "center bottom" }}>
              {MONTHS.map((m) => (
                <span
                  key={m}
                  className="text-[10px] text-gray dark:text-gray-light"
                  style={{ width: `${100 / 12}%`, fontFamily: "var(--font-jetbrains)" }}
                >
                  {m}
                </span>
              ))}
            </div>

            {/* Bars container */}
            <div
              className="flex items-end gap-[2px] px-2"
              style={{
                height: 200,
                transform: "rotateX(8deg) rotateY(-5deg)",
                transformOrigin: "center bottom",
              }}
            >
              {weeks.map((week, wi) => {
                const weekTotal = week.reduce((a, d) => a + d.count, 0);
                const weekMax = Math.max(...weeks.map(w => w.reduce((a, d) => a + d.count, 0)), 1);
                const barHeight = Math.max(2, (weekTotal / weekMax) * 180);
                const avgLevel = Math.round(week.reduce((a, d) => a + d.level, 0) / week.length);
                const color = LEVEL_COLORS[Math.min(avgLevel, 4)];
                const weekStart = week[0]?.date || "";
                
                return (
                  <motion.div
                    key={wi}
                    className="flex-1 rounded-t-sm cursor-pointer relative group"
                    style={{
                      backgroundColor: color.bar,
                      minWidth: 4,
                      boxShadow: weekTotal > 0 ? `0 0 ${Math.min(weekTotal, 12)}px ${color.bar}25` : "none",
                    }}
                    initial={{ height: 0, opacity: 0 }}
                    animate={isInView ? { height: barHeight, opacity: 1 } : {}}
                    transition={{
                      delay: wi * 0.015,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    title={`Week of ${weekStart}: ${weekTotal} contributions`}
                  >
                    {/* Hover tooltip */}
                    <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy px-2 py-1 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white dark:text-navy">
                      {weekTotal} commits
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mt-3 flex items-center justify-end gap-2">
          <span className="text-[10px] text-gray dark:text-gray-light">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div key={level} className={`h-[12px] w-[12px] rounded-[2px] ${LEVEL_COLORS[level].flat}`} />
          ))}
          <span className="text-[10px] text-gray dark:text-gray-light">More</span>
        </div>
      </motion.div>
    </div>
  );
}
