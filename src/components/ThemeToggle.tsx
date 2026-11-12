"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, Monitor, Moon, Palette, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { colorModes, themeIds, themes } from "@/lib/appearance";

const modeIcons = { light: Sun, dark: Moon, system: Monitor };

export default function ThemeToggle() {
  const { t } = useLanguage();
  const { mode, theme, setMode, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const picker = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (event.target instanceof Node && !picker.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, [open]);

  return (
    <div
      ref={picker}
      onBlur={(event) => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.stopPropagation();
          setOpen(false);
          trigger.current?.focus();
        }
      }}
    >
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={t("appearance.title")}
        aria-expanded={open}
        aria-controls={panelId}
        title={t("appearance.title")}
        className="appearance-focus flex size-9 cursor-pointer items-center justify-center rounded-full border border-navy/10 bg-surface text-navy transition-colors hover:border-peach dark:border-white/15 dark:bg-dark-card dark:text-white dark:hover:border-peach"
      >
        <Palette className="size-4" aria-hidden="true" />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full right-0 mt-2 max-h-[calc(100dvh-5rem)] w-[min(17.5rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-navy/15 bg-surface p-3 text-navy dark:border-white/15 dark:bg-dark-surface dark:text-white"
      >
        <fieldset>
          <legend className="mb-2 px-1 text-sm font-semibold">{t("appearance.mode")}</legend>
          <div className="grid grid-cols-3 gap-1 rounded-xl bg-cream-dark p-1 dark:bg-dark-bg">
            {colorModes.map((value) => {
              const Icon = modeIcons[value];
              return (
                <label key={value} className="relative min-w-0">
                  <input
                    type="radio"
                    name={`${panelId}-mode`}
                    className="peer sr-only"
                    checked={mode === value}
                    onChange={() => setMode(value)}
                  />
                  <span className="appearance-focus flex min-h-10 cursor-pointer items-center justify-center gap-1 rounded-lg text-xs font-medium whitespace-nowrap peer-checked:bg-navy peer-checked:text-white dark:peer-checked:bg-white dark:peer-checked:text-navy">
                    <Icon className="size-3.5 shrink-0" aria-hidden="true" />
                    {t(`appearance.${value}`)}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="mt-3 border-t border-navy/10 pt-2 dark:border-white/10">
          <legend className="sr-only">{t("appearance.title")}</legend>
          {themeIds.map((value) => (
            <label key={value} className="relative block">
              <input
                type="radio"
                name={`${panelId}-theme`}
                className="peer sr-only"
                checked={theme === value}
                onChange={() => setTheme(value)}
              />
              <span className="appearance-focus flex min-h-10 cursor-pointer items-center gap-2.5 rounded-lg px-2 text-sm hover:bg-cream-dark peer-checked:bg-cream-dark peer-checked:font-semibold dark:hover:bg-dark-card dark:peer-checked:bg-dark-card">
                <span className="theme-preview" data-theme-preview={value} aria-hidden="true" />
                {themes[value]}
                {theme === value && <Check className="ml-auto size-4" aria-hidden="true" />}
              </span>
            </label>
          ))}
        </fieldset>
      </div>
    </div>
  );
}
