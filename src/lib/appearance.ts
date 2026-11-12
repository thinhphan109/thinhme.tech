export const themes = {
  peach: "Liquid Motion",
  ocean: "Ocean",
  violet: "Violet",
  emerald: "Emerald",
  rose: "Rose",
} as const;

export type Theme = keyof typeof themes;
export const themeIds = Object.keys(themes) as Theme[];
export const colorModes = ["light", "dark", "system"] as const;
export type ColorMode = (typeof colorModes)[number];

export const defaultTheme: Theme = "peach";
export const defaultMode: ColorMode = "light";
// Keep the storage keys used by earlier versions of the portfolio.
export const themeKey = "accent-theme";
export const modeKey = "theme";
export const typewriterKey = "hero-typewriter";
export const darkPreference = "(prefers-color-scheme: dark)";

export function isTheme(value: string): value is Theme {
  return Object.hasOwn(themes, value);
}

export function isColorMode(value: string): value is ColorMode {
  return (colorModes as readonly string[]).includes(value);
}

export const appearanceScript = `(() => {
  let theme = ${JSON.stringify(defaultTheme)};
  let mode = ${JSON.stringify(defaultMode)};
  let typewriter = 'on';
  try {
    const savedTheme = localStorage.getItem(${JSON.stringify(themeKey)});
    const savedMode = localStorage.getItem(${JSON.stringify(modeKey)});
    if (${JSON.stringify(themeIds)}.includes(savedTheme)) theme = savedTheme;
    if (${JSON.stringify(colorModes)}.includes(savedMode)) mode = savedMode;
    if (localStorage.getItem(${JSON.stringify(typewriterKey)}) === 'off') typewriter = 'off';
  } catch {}
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.colorMode = mode;
  root.dataset.typewriter = typewriter;
  root.classList.toggle('dark', mode === 'dark' ||
    (mode === 'system' && matchMedia(${JSON.stringify(darkPreference)}).matches));
})();`;
