"use client";

import TPLogo from "./TPLogo";

interface OrbitItem {
  name: string;
  color: string;
  slug: string; // Simple Icons slug
}

const innerOrbit: OrbitItem[] = [
  { name: "Python", color: "#FFB09C", slug: "python" },
  { name: "TypeScript", color: "#C4B5FD", slug: "typescript" },
  { name: "React", color: "#7DD3C0", slug: "react" },
];

const middleOrbit: OrbitItem[] = [
  { name: "Docker", color: "#FFB09C", slug: "docker" },
  { name: "Node.js", color: "#7DD3C0", slug: "nodedotjs" },
  { name: "Next.js", color: "#C4B5FD", slug: "nextdotjs" },
  { name: "Java", color: "#FFB09C", slug: "openjdk" },
];

const outerOrbit: OrbitItem[] = [
  { name: "Arduino", color: "#7DD3C0", slug: "arduino" },
  { name: "Linux", color: "#C4B5FD", slug: "linux" },
  { name: "Git", color: "#FFB09C", slug: "git" },
  { name: "PostgreSQL", color: "#7DD3C0", slug: "postgresql" },
  { name: "C++", color: "#C4B5FD", slug: "cplusplus" },
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

      {/* Orbit nodes */}
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
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-navy/10 bg-white shadow-md transition-all hover:scale-125 hover:shadow-lg dark:border-white/10 dark:bg-dark-card sm:h-11 sm:w-11"
              style={{ boxShadow: `0 0 15px ${item.color}25` }}
            >
              {/* Official Brand Logo from Simple Icons CDN */}
              <img
                src={`https://cdn.simpleicons.org/${item.slug}/${item.color.replace("#", "")}`}
                alt={item.name}
                className="h-4 w-4 object-contain transition-all group-hover:brightness-110 sm:h-5 sm:w-5"
                loading="lazy"
              />
              
              {/* Tooltip — hidden on mobile to prevent overflow */}
              <div className="pointer-events-none absolute -bottom-8 hidden whitespace-nowrap rounded-md bg-navy px-2 py-0.5 text-[10px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white dark:text-navy sm:block">
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
    <div className="relative mx-auto flex items-center justify-center overflow-hidden" style={{ maxWidth: "100%" }}>
      {/* 
        The orbit system is designed at 500x500 base size.
        On mobile, we scale the entire system down using CSS transform 
        to fit within the viewport without breaking layout.
        The outer wrapper controls the visible height.
      */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: 500,
          height: 500,
          /* Scale down on small screens: 320px viewport → ~0.6 scale */
          transform: "scale(var(--orbit-scale, 1))",
          transformOrigin: "center center",
        }}
      >
        {/* Center logo */}
        <div className="relative group z-10">
          {/* Colorful Aura */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-peach/30 via-lavender/30 to-mint/30 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div
            className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-navy via-[#0D1117] to-navy/80 border border-white/10 shadow-2xl backdrop-blur-md"
            style={{ animation: "glow-pulse 4s ease-in-out infinite" }}
          >
            <TPLogo className="h-[75%] w-[75%] drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
          </div>
        </div>

        {/* Orbits */}
        <OrbitRing items={innerOrbit} radius={100} duration={20} />
        <OrbitRing items={middleOrbit} radius={160} duration={30} reverse />
        <OrbitRing items={outerOrbit} radius={220} duration={40} />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-radial from-lavender/5 to-transparent dark:from-lavender/3" />
      </div>
    </div>
  );
}
