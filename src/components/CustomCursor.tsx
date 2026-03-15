"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      trail.style.transform = `translate(${trailX - 20}px, ${trailY - 20}px)`;
      requestAnimationFrame(animate);
    };

    const handleEnterInteractive = () => {
      cursor.classList.add("cursor-hover");
      trail.classList.add("trail-hover");
    };

    const handleLeaveInteractive = () => {
      cursor.classList.remove("cursor-hover");
      trail.classList.remove("trail-hover");
    };

    window.addEventListener("mousemove", handleMove);
    animate();

    // Add hover detection on interactive elements
    const interactives = document.querySelectorAll("a, button, input, textarea, .project-card, .magnetic");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleEnterInteractive);
      el.addEventListener("mouseleave", handleLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnterInteractive);
        el.removeEventListener("mouseleave", handleLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Small dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-3 w-3 rounded-full bg-peach mix-blend-difference transition-[width,height] duration-200 md:block"
        style={{ willChange: "transform" }}
      />
      {/* Trailing ring */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden h-10 w-10 rounded-full border-2 border-peach/40 mix-blend-difference transition-[width,height,border-color] duration-300 md:block"
        style={{ willChange: "transform" }}
      />

      <style jsx global>{`
        @media (min-width: 768px) {
          * { cursor: none !important; }
        }
        .cursor-hover {
          width: 0px !important;
          height: 0px !important;
        }
        .trail-hover {
          width: 60px !important;
          height: 60px !important;
          border-color: rgba(196, 181, 253, 0.6) !important;
          margin-left: -10px;
          margin-top: -10px;
        }
      `}</style>
    </>
  );
}
