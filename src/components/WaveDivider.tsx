"use client";

interface WaveDividerProps {
  flip?: boolean;
  color?: string;
  className?: string;
}

export default function WaveDivider({ flip = false, color, className = "" }: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="relative block w-full h-[60px] md:h-[80px]"
      >
        <path
          d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,20 1440,40 L1440,100 L0,100 Z"
          className={color || "fill-cream dark:fill-dark-bg"}
        />
      </svg>
    </div>
  );
}
