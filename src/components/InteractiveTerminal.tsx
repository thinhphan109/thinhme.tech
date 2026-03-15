"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";
import { personalInfo, skills } from "@/lib/data";

const COMMANDS: Record<string, string | (() => string)> = {
  help: `Available commands:
  about      — Who am I?
  skills     — My tech stack
  projects   — My projects
  contact    — How to reach me
  socials    — Social links
  education  — My education
  echo       — Echo your text
  clear      — Clear terminal
  date       — Current date/time
  whoami     — Current user
  neofetch   — System info`,

  about: () => `
╔══════════════════════════════════════╗
║  ${personalInfo.name} ${personalInfo.lastName}
║  ${personalInfo.role}
║  📍 ${personalInfo.location}
╚══════════════════════════════════════╝

${personalInfo.bio}`,

  skills: () => {
    const grouped: Record<string, string[]> = {};
    skills.forEach((s) => {
      if (!grouped[s.category]) grouped[s.category] = [];
      grouped[s.category].push(`${s.name} (${"█".repeat(Math.round(s.level / 10))}${"░".repeat(10 - Math.round(s.level / 10))} ${s.level}%)`);
    });
    return Object.entries(grouped)
      .map(([cat, items]) => `\n⚡ ${cat}\n${items.map((i) => `  → ${i}`).join("\n")}`)
      .join("\n");
  },

  projects: `
📁 PM2 Monitor Dashboard
   Next.js • tRPC • TypeScript
   Dashboard giám sát Node.js ecosystem

📁 Nova Video Studio
   Electron • Python • TypeScript
   Desktop app all-in-one video tools

📁 TurtleTop Minecraft Plugin
   Java • Spigot API
   Custom Minecraft server plugin

📁 thinhme.tech (this site!)
   Next.js • Framer Motion • TailwindCSS
   Personal portfolio website`,

  contact: `
📧 Email: hello@thinhme.tech
🌐 Web:   thinhme.tech
🐙 GitHub: github.com/thinhphan109

Feel free to reach out! 🚀`,

  socials: `
🐙 GitHub   → github.com/thinhphan109
🌐 Website  → thinhme.tech`,

  education: `
🎓 Sinh viên Điện tử Viễn thông
   Đại học (2024 — Now)
   
📚 Focus: Electronics, Telecommunications,
   IoT, Automation`,

  whoami: "visitor@thinhme.tech",

  date: () => new Date().toLocaleString("vi-VN", { dateStyle: "full", timeStyle: "medium" }),

  neofetch: () => `
  ████████╗██████╗ 
  ╚══██╔══╝██╔══██╗
       ██║     ██████╔╝    thinh@thinhme.tech
       ██║     ██╔═══╝     ─────────────────
       ██║     ██║         OS: Next.js 16
       ╚═╝     ╚═╝         Shell: TypeScript 5
                          DE: Framer Motion
    thinhme.tech          WM: TailwindCSS v4
                          Theme: Navy Dark
                          Terminal: Interactive v1.0
                          Uptime: since 2020
                          Packages: ${skills.length} skills loaded`,
};

interface Line {
  type: "input" | "output" | "error";
  content: string;
}

function TerminalContent({ onClose }: { onClose: () => void }) {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", content: `Welcome to thinhme.tech terminal v1.0` },
    { type: "output", content: `Type "help" to see available commands.\n` },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const processCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: Line[] = [...lines, { type: "input", content: `visitor@thinhme.tech:~$ ${cmd}` }];

    if (trimmed === "clear") {
      setLines([]);
      return;
    }

    if (trimmed.startsWith("echo ")) {
      newLines.push({ type: "output", content: cmd.slice(5) });
    } else if (trimmed === "") {
      // empty, do nothing
    } else if (COMMANDS[trimmed]) {
      const result = COMMANDS[trimmed];
      const output = typeof result === "function" ? result() : result;
      newLines.push({ type: "output", content: output });
    } else {
      newLines.push({
        type: "error",
        content: `Command not found: ${trimmed}. Type "help" for available commands.`,
      });
    }

    setLines(newLines);
    setHistory([cmd, ...history]);
    setHistoryIdx(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIdx < history.length - 1) {
        const newIdx = historyIdx + 1;
        setHistoryIdx(newIdx);
        setInput(history[newIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInput(history[newIdx]);
      } else {
        setHistoryIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm bg-navy/40 dark:bg-black/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-navy/10 bg-[#0D1117] shadow-2xl shadow-black/50 dark:border-white/10"
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-white/5 bg-[#161B22] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button onClick={onClose} className="h-3 w-3 rounded-full bg-[#FF5F57] cursor-pointer hover:brightness-110 transition" />
              <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <div className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="text-xs text-white/40 font-mono">visitor@thinhme.tech: ~</span>
          </div>
          <button onClick={onClose} className="cursor-pointer text-white/30 hover:text-white/60 transition">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          className="h-[400px] overflow-y-auto p-4 font-mono text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-jetbrains), 'Fira Code', 'Courier New', monospace" }}
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap">
              {line.type === "input" ? (
                <span className="text-[#58A6FF]">{line.content}</span>
              ) : line.type === "error" ? (
                <span className="text-[#F85149]">{line.content}</span>
              ) : (
                <span className="text-[#8B949E]">{line.content}</span>
              )}
            </div>
          ))}

          {/* Current input */}
          <div className="flex items-center gap-0 text-[#58A6FF]">
            <span>visitor@thinhme.tech:~$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-[#C9D1D9] outline-none caret-[#58A6FF]"
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger button — fixed bottom-left */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#0D1117] text-[#58A6FF] shadow-lg shadow-black/20 border border-white/10 transition-shadow hover:shadow-xl hover:shadow-[#58A6FF]/20"
        whileHover={{ scale: 1.15, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open terminal"
        title="Open Terminal"
      >
        <TerminalIcon className="h-5 w-5" />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && <TerminalContent onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
