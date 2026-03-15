"use client";

import { useEffect } from "react";

export default function ConsoleEasterEgg() {
  useEffect(() => {
    const styles = [
      "color: #FFB09C; font-size: 14px; font-weight: bold;",
      "color: #C4B5FD; font-size: 12px;",
      "color: #7DD3C0; font-size: 11px;",
      "color: #8B949E; font-size: 11px;",
    ];

    console.clear();
    console.log(
      `%c
  ████████╗██████╗ 
  ╚══██╔══╝██╔══██╗
     ██║   ██████╔╝
     ██║   ██╔═══╝ 
     ██║   ██║     
     ╚═╝   ╚═╝     
`,
      styles[0]
    );
    console.log(
      "%c🚀 thinhme.tech — Thinh Phan's Portfolio",
      styles[1]
    );
    console.log(
      "%c⚡ Built with Next.js, TypeScript, Framer Motion & TailwindCSS",
      styles[2]
    );
    console.log(
      "%c👀 Curious about the code? Check out: github.com/thinhphan109/thinhme.tech",
      styles[3]
    );
    console.log(
      "%c💼 Looking to hire? Reach out at hello@thinhme.tech",
      styles[3]
    );
    console.log(
      "%c\n💡 Tip: Try the interactive terminal! Click the >_ button in the bottom-left corner.\n",
      styles[2]
    );
  }, []);

  return null;
}
