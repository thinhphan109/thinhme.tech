"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const toggle = () => {
    setLocale(locale === "vi" ? "en" : "vi");
  };

  return (
    <motion.button
      onClick={toggle}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-navy/10 bg-white text-sm font-bold transition-colors hover:border-peach dark:border-white/10 dark:bg-dark-card dark:hover:border-peach"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle language"
      title={locale === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={locale}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="text-xs"
        >
          {locale === "vi" ? "🇻🇳" : "🇬🇧"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
