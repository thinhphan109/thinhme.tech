"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import {
  darkPreference,
  defaultMode,
  defaultTheme,
  isColorMode,
  isTheme,
  modeKey,
  themeKey,
  typewriterKey,
  type ColorMode,
  type Theme,
} from "@/lib/appearance";

const appearanceEvent = "portfolio:appearancechange";

function applyMode(mode: ColorMode, prefersDark: boolean) {
  const root = document.documentElement;
  root.dataset.colorMode = mode;
  root.classList.toggle("dark", mode === "dark" || (mode === "system" && prefersDark));
}

function savePreference(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Applying the theme should still work when the browser blocks storage.
  }
  window.dispatchEvent(new Event(appearanceEvent));
}

function setMode(mode: ColorMode) {
  applyMode(mode, window.matchMedia(darkPreference).matches);
  savePreference(modeKey, mode);
}

function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  savePreference(themeKey, theme);
}

function setTypewriter(enabled: boolean) {
  const value = enabled ? "on" : "off";
  document.documentElement.dataset.typewriter = value;
  savePreference(typewriterKey, value);
}

function getServerSnapshot() {
  return `${defaultMode}/${defaultTheme}/on`;
}

function getSnapshot() {
  const { colorMode = defaultMode, theme = defaultTheme, typewriter } =
    document.documentElement.dataset;
  let preference = typewriter;
  if (preference === undefined) {
    try {
      preference = localStorage.getItem(typewriterKey) ?? "on";
    } catch {
      preference = "on";
    }
  }
  return `${colorMode}/${theme}/${preference}`;
}

function subscribe(onChange: () => void) {
  const preference = window.matchMedia(darkPreference);
  const root = document.documentElement;
  const syncSystem = () => {
    if (root.dataset.colorMode === "system") applyMode("system", preference.matches);
  };
  const syncStorage = (event: StorageEvent) => {
    if (event.storageArea !== localStorage) return;
    const value = event.newValue ?? "";
    if (event.key === modeKey || event.key === null) {
      applyMode(isColorMode(value) ? value : defaultMode, preference.matches);
    }
    if (event.key === themeKey || event.key === null) {
      root.dataset.theme = isTheme(value) ? value : defaultTheme;
    }
    if (event.key === typewriterKey || event.key === null) {
      root.dataset.typewriter = value === "off" ? "off" : "on";
    }
    onChange();
  };

  preference.addEventListener("change", syncSystem);
  window.addEventListener("storage", syncStorage);
  window.addEventListener(appearanceEvent, onChange);
  syncSystem();
  return () => {
    preference.removeEventListener("change", syncSystem);
    window.removeEventListener("storage", syncStorage);
    window.removeEventListener(appearanceEvent, onChange);
  };
}

interface ThemeContextType {
  mode: ColorMode;
  theme: Theme;
  typewriter: boolean;
  setMode: (mode: ColorMode) => void;
  setTheme: (theme: Theme) => void;
  setTypewriter: (enabled: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, theme, typewriter] = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot).split("/");

  return (
    <ThemeContext.Provider value={{
      mode: isColorMode(mode) ? mode : defaultMode,
      theme: isTheme(theme) ? theme : defaultTheme,
      typewriter: typewriter !== "off",
      setMode,
      setTheme,
      setTypewriter,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
