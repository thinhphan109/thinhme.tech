"use client";

import { useEffect, useState, useCallback } from "react";

// ===== KONAMI CODE: ↑↑↓↓←→←→BA =====
const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

function createConfetti() {
  const colors = ["#FFB09C", "#C4B5FD", "#6EE7B7", "#FFD4C8", "#DDD6FE", "#A7F3D0"];
  const container = document.createElement("div");
  container.style.cssText = "position:fixed;inset:0;z-index:99999;pointer-events:none;overflow:hidden;";
  document.body.appendChild(container);

  for (let i = 0; i < 150; i++) {
    const piece = document.createElement("div");
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 10 + 5;
    const x = Math.random() * 100;
    const delay = Math.random() * 0.5;
    const duration = Math.random() * 2 + 2;
    const rotation = Math.random() * 720 - 360;

    piece.style.cssText = `
      position:absolute;
      top:-20px;
      left:${x}%;
      width:${size}px;
      height:${size * 0.6}px;
      background:${color};
      border-radius:2px;
      animation: confetti-fall ${duration}s ease-in ${delay}s forwards;
      transform: rotate(${rotation}deg);
    `;
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 4000);
}

// ===== MATRIX RAIN =====
function createMatrixRain() {
  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:fixed;inset:0;z-index:99998;pointer-events:none;opacity:0.85;";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d")!;
  const chars = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEF";
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = new Array(columns).fill(1);

  let frameCount = 0;
  const maxFrames = 300; // ~5 seconds at 60fps

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0F0";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillStyle = Math.random() > 0.95 ? "#FFF" : "#0F0";
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    frameCount++;
    if (frameCount < maxFrames) {
      requestAnimationFrame(draw);
    } else {
      // Fade out
      canvas.style.transition = "opacity 1s ease";
      canvas.style.opacity = "0";
      setTimeout(() => canvas.remove(), 1000);
    }
  }

  draw();
}

// ===== HACKER MODE =====
function createHackerMode() {
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:99999;
    background:rgba(0,0,0,0.95);
    display:flex;flex-direction:column;
    align-items:center;justify-content:center;
    font-family:'JetBrains Mono',monospace;
    color:#0F0;padding:2rem;
    animation: hacker-flicker 0.1s ease infinite;
  `;

  const lines = [
    "$ sudo access --force --bypass-all",
    "[WARN] Bypassing firewall...",
    "[OK] Connection established to thinhme.tech",
    "$ cat /etc/shadow",
    "[CRITICAL] Decrypting passwords...",
    "████████████████████ 100%",
    "",
    "JUST KIDDING 😄",
    "",
    "This portfolio was built with ❤️ by Thinh Phan",
    "Want to see the real code? Check GitHub!",
    "",
    "[Press any key to exit]",
  ];

  const terminal = document.createElement("pre");
  terminal.style.cssText = "font-size:14px;line-height:1.8;max-width:600px;text-align:left;white-space:pre-wrap;";
  overlay.appendChild(terminal);
  document.body.appendChild(overlay);

  let lineIdx = 0;
  let charIdx = 0;
  let currentText = "";

  function typeNext() {
    if (lineIdx >= lines.length) {
      // Wait for key press to dismiss
      const dismiss = () => {
        overlay.style.transition = "opacity 0.5s ease";
        overlay.style.opacity = "0";
        setTimeout(() => overlay.remove(), 500);
        document.removeEventListener("keydown", dismiss);
        document.removeEventListener("click", dismiss);
      };
      document.addEventListener("keydown", dismiss);
      document.addEventListener("click", dismiss);
      return;
    }

    const line = lines[lineIdx];
    if (charIdx < line.length) {
      currentText += line[charIdx];
      terminal.textContent = currentText + "█";
      charIdx++;
      setTimeout(typeNext, line.startsWith("[") ? 15 : 30);
    } else {
      currentText += "\n";
      terminal.textContent = currentText + "█";
      lineIdx++;
      charIdx = 0;
      setTimeout(typeNext, line === "" ? 100 : 400);
    }
  }

  typeNext();
}

export function triggerMatrixRain() {
  createMatrixRain();
}

export function triggerHackerMode() {
  createHackerMode();
}

export default function EasterEggs() {
  const [konamiIdx, setKonamiIdx] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === KONAMI[konamiIdx]) {
        const next = konamiIdx + 1;
        if (next === KONAMI.length) {
          // KONAMI CODE ACTIVATED!
          createConfetti();
          setKonamiIdx(0);
        } else {
          setKonamiIdx(next);
        }
      } else {
        setKonamiIdx(0);
      }
    },
    [konamiIdx]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* Confetti keyframes */}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes hacker-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.98; }
          25% { opacity: 0.96; }
        }
      `}</style>
    </>
  );
}
