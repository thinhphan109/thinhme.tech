"use client";

import { useEffect, type ReactNode } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    function preventPageCopy(event: ClipboardEvent) {
      const target = event.target;
      if (target instanceof HTMLElement &&
          (target.matches("input, textarea") || target.isContentEditable)) {
        return;
      }
      event.preventDefault();
    }

    document.addEventListener("copy", preventPageCopy);
    return () => document.removeEventListener("copy", preventPageCopy);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
