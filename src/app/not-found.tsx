"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Terminal } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream dark:bg-dark-bg">
      {/* Background blobs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-peach/20 blur-[80px] dark:bg-peach/10"
        style={{ animation: "blob-float 12s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-lavender/20 blur-[80px] dark:bg-lavender/10"
        style={{ animation: "blob-float-reverse 15s ease-in-out infinite" }}
      />

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,26,46,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,46,0.03)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Glitch 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
        >
          <h1
            className="text-[10rem] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-br from-peach via-lavender to-mint md:text-[14rem]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            404
          </h1>
        </motion.div>

        {/* Terminal-style message */}
        <motion.div
          className="mt-4 rounded-xl border border-navy/10 bg-[#0D1117] px-6 py-4 text-left font-mono text-sm dark:border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <div className="flex items-center gap-2 mb-2 text-white/40 text-xs">
            <Terminal className="h-3 w-3" />
            <span>visitor@thinhme.tech: ~</span>
          </div>
          <p className="text-[#58A6FF]">
            $ find / -name &quot;this-page&quot;
          </p>
          <p className="text-[#F85149] mt-1">
            Error: No such file or directory
          </p>
          <p className="text-[#8B949E] mt-1">
            {t("404.description")}
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-peach to-lavender px-6 py-3 text-sm font-semibold text-navy shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            <Home className="h-4 w-4" />
            {t("404.home")}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-full border border-navy/10 bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-navy/5 dark:border-white/10 dark:bg-dark-card dark:text-white dark:hover:bg-white/10 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("404.back")}
          </button>
        </motion.div>

        {/* Fun fact */}
        <motion.p
          className="mt-12 text-xs text-gray dark:text-gray-light max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {t("404.funfact")}
        </motion.p>
      </div>
    </div>
  );
}
