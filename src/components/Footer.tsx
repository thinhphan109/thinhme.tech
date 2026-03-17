"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, defaultViewport } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <motion.footer
      className="border-t border-navy/5 px-6 py-10 dark:border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="cursor-pointer text-lg font-bold tracking-wider text-navy transition-colors hover:text-peach dark:text-white dark:hover:text-peach"
          style={{ fontFamily: "var(--font-syne)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          thinhme<span className="text-peach">.tech</span>
        </motion.a>

        {/* Center */}
        <p className="flex items-center gap-1.5 text-xs text-gray dark:text-gray-light text-center md:text-left">
          {t("footer.builtWith")}{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <Heart className="h-3 w-3 text-peach" fill="currentColor" />
          </motion.span>{" "}
          {t("footer.using")}
        </p>

        {/* Copyright */}
        <p
          className="text-xs text-gray dark:text-gray-light"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          © {new Date().getFullYear()} Thinh Phan
        </p>
      </div>
    </motion.footer>
  );
}
