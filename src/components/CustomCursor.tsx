"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 28 });

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, dotX, dotY, isVisible]
  );

  useEffect(() => {
    // Check if touch device
    if ("ontouchstart" in window) return;

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Delegate hover events for interactive elements
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [handleMouseMove]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Outer ring — follows with spring delay */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          width: 32,
          height: 32,
          willChange: "transform",
        }}
      >
        <motion.div
          className="h-full w-full rounded-full border-2 border-peach/60"
          animate={{
            scale: isHovering ? 1.8 : isClicking ? 0.8 : 1,
            borderColor: isHovering
              ? "rgba(196, 181, 253, 0.8)"
              : "rgba(255, 176, 156, 0.6)",
            backgroundColor: isHovering
              ? "rgba(196, 181, 253, 0.08)"
              : "transparent",
          }}
          transition={{ duration: 0.2 }}
          style={{
            opacity: isVisible ? 1 : 0,
            mixBlendMode: "difference",
          }}
        />
      </motion.div>

      {/* Inner dot — follows immediately */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          willChange: "transform",
        }}
      >
        <motion.div
          className="h-2 w-2 rounded-full bg-peach"
          animate={{
            scale: isClicking ? 0.5 : 1,
          }}
          transition={{ duration: 0.15 }}
          style={{ opacity: isVisible ? 1 : 0 }}
        />
      </motion.div>
    </>
  );
}
