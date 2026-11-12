"use client";

import { useEffect, useMemo, useState } from "react";

const holdTime = 2600;
const eraseTime = 42;
const emptyTime = 180;
const typeTime = 64;

type Frame = { role: string; text: string; duration: number };

function createFrames(roles: string[]): Frame[] {
  const letters = roles.map((role) => Array.from(role.normalize("NFC")));

  return roles.flatMap((role, index) => {
    const current = letters[index];
    const nextIndex = (index + 1) % roles.length;
    const next = letters[nextIndex];
    const frames = [{ role, text: role, duration: holdTime }];

    for (let length = current.length - 1; length >= 0; length--) {
      frames.push({
        role,
        text: current.slice(0, length).join(""),
        duration: length === 0 ? emptyTime : eraseTime,
      });
    }

    for (let length = 1; length < next.length; length++) {
      frames.push({
        role: roles[nextIndex],
        text: next.slice(0, length).join(""),
        duration: typeTime,
      });
    }

    return frames;
  });
}

export default function HeroTypewriter({ phrases }: { phrases: string }) {
  const roles = useMemo(() => phrases.split(","), [phrases]);
  const frames = useMemo(() => createFrames(roles), [roles]);
  const [index, setIndex] = useState(0);
  const frame = frames[index];

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;

    function schedule() {
      window.clearTimeout(timer);
      if (!reducedMotion.matches) {
        timer = window.setTimeout(() => {
          setIndex((previous) => (previous + 1) % frames.length);
        }, frame.duration);
      }
    }

    schedule();
    reducedMotion.addEventListener("change", schedule);
    return () => {
      window.clearTimeout(timer);
      reducedMotion.removeEventListener("change", schedule);
    };
  }, [frame.duration, frames.length, index]);

  return (
    <>
      <span className="sr-only">{roles[0]}</span>
      <span className="inline-grid min-h-8 max-w-full items-center" aria-hidden="true">
        {roles.map((role) => (
          <span key={role} className="invisible col-start-1 row-start-1 px-1">
            {role}
          </span>
        ))}
        <span className="relative col-start-1 row-start-1 justify-self-center px-1 motion-reduce:hidden">
          <span className="invisible">{frame.role}</span>
          <span className="absolute inset-x-0 top-0 ps-1 text-left">
            <span className="hero-typed-text whitespace-pre-wrap">{frame.text}</span>
            {frame.text && (
              <span className="ms-0.5 inline-block h-[0.85em] w-0.5 bg-peach align-[-0.05em]" />
            )}
          </span>
        </span>
        <span className="col-start-1 row-start-1 hidden px-1 motion-reduce:block">{roles[0]}</span>
      </span>
    </>
  );
}
