"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.5s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500);
    // Remove loader after fade animation
    const removeTimer = setTimeout(() => setLoading(false), 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-cream transition-all duration-700 dark:bg-dark-bg ${
        fadeOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Animated initials */}
      <div className="relative">
        <span
          className="text-7xl font-extrabold text-navy dark:text-white md:text-9xl"
          style={{
            fontFamily: "var(--font-syne)",
            animation: "loader-reveal 1s ease forwards",
          }}
        >
          TP
        </span>
        {/* Underline growing */}
        <div
          className="absolute -bottom-2 left-0 h-1 rounded-full bg-gradient-to-r from-peach via-lavender to-mint"
          style={{ animation: "loader-line 1.2s ease forwards 0.3s", width: 0 }}
        />
      </div>

      {/* Tagline */}
      <p
        className="mt-6 text-sm tracking-[0.3em] uppercase text-gray dark:text-gray-light"
        style={{
          fontFamily: "var(--font-jetbrains)",
          animation: "fade-in-up 0.6s ease forwards 0.8s",
          opacity: 0,
        }}
      >
        thinhme.tech
      </p>

      <style jsx>{`
        @keyframes loader-reveal {
          0% { opacity: 0; transform: scale(0.5) rotate(-10deg); letter-spacing: -0.1em; }
          50% { opacity: 1; transform: scale(1.1) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); letter-spacing: 0.05em; }
        }
        @keyframes loader-line {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
