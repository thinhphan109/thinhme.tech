"use client";

interface OrbitItem {
  name: string;
  color: string;
  icon: string;
}

const innerOrbit: OrbitItem[] = [
  { name: "Python", color: "#FFB09C", icon: "🐍" },
  { name: "TypeScript", color: "#C4B5FD", icon: "TS" },
  { name: "React", color: "#7DD3C0", icon: "⚛️" },
];

const middleOrbit: OrbitItem[] = [
  { name: "Docker", color: "#FFB09C", icon: "🐳" },
  { name: "Node.js", color: "#7DD3C0", icon: "⬢" },
  { name: "Next.js", color: "#C4B5FD", icon: "▲" },
  { name: "Java", color: "#FFB09C", icon: "☕" },
];

const outerOrbit: OrbitItem[] = [
  { name: "Arduino", color: "#7DD3C0", icon: "🔌" },
  { name: "Linux", color: "#C4B5FD", icon: "🐧" },
  { name: "Git", color: "#FFB09C", icon: "🔀" },
  { name: "Shell", color: "#7DD3C0", icon: "$_" },
  { name: "C++", color: "#C4B5FD", icon: "⊕" },
];

function OrbitRing({
  items,
  radius,
  duration,
  reverse = false,
}: {
  items: OrbitItem[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  const animName = reverse ? "orbit-spin-reverse" : "orbit-spin";

  return (
    <div
      className="absolute inset-0"
      style={{
        animation: `${animName} ${duration}s linear infinite`,
        willChange: "transform",
      }}
    >
      {/* Orbit path */}
      <div
        className="absolute rounded-full border border-navy/8 dark:border-white/5"
        style={{
          width: radius * 2,
          height: radius * 2,
          top: `calc(50% - ${radius}px)`,
          left: `calc(50% - ${radius}px)`,
        }}
      />

      {/* Orbit nodes — counter-rotate to stay upright */}
      {items.map((item, i) => {
        const angle = (360 / items.length) * i;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <div
            key={item.name}
            className="absolute flex flex-col items-center gap-1"
            style={{
              top: `calc(50% + ${y}px - 20px)`,
              left: `calc(50% + ${x}px - 20px)`,
              animation: `${reverse ? "orbit-spin" : "orbit-spin-reverse"} ${duration}s linear infinite`,
              willChange: "transform",
            }}
          >
            <div
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-navy/10 bg-white text-sm font-bold shadow-md transition-all hover:scale-125 hover:shadow-lg dark:border-white/10 dark:bg-dark-card"
              style={{ boxShadow: `0 0 15px ${item.color}20` }}
            >
              <span className="text-base">{item.icon}</span>
              {/* Tooltip */}
              <div className="pointer-events-none absolute -bottom-8 whitespace-nowrap rounded-md bg-navy px-2 py-0.5 text-[10px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white dark:text-navy">
                {item.name}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function TechOrbit() {
  return (
    <>
      {/* CSS animations — runs on compositor thread, zero JS overhead */}
      <style jsx>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 30px rgba(255,176,156,0.3); }
          33% { box-shadow: 0 0 30px rgba(196,181,253,0.3); }
          66% { box-shadow: 0 0 30px rgba(125,211,192,0.3); }
        }
      `}</style>
      <div className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center md:h-[500px] md:w-[500px]">
        {/* Center logo */}
        <div
          className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-peach via-lavender to-mint shadow-2xl"
          style={{ animation: "glow-pulse 4s ease-in-out infinite" }}
        >
          <span
            className="text-2xl font-extrabold text-navy"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            TP
          </span>
        </div>

        {/* Orbits */}
        <OrbitRing items={innerOrbit} radius={100} duration={20} />
        <OrbitRing items={middleOrbit} radius={160} duration={30} reverse />
        <OrbitRing items={outerOrbit} radius={220} duration={40} />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-radial from-lavender/5 to-transparent dark:from-lavender/3" />
      </div>
    </>
  );
}
