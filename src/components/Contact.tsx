"use client";

import { socialLinks } from "@/lib/data";
import { Github, Globe, Mail, Send, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  sectionTitle,
  scaleIn,
  defaultViewport,
} from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  globe: <Globe className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setFormState({ name: "", email: "", message: "" });
      alert("Message sent! (Demo)");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-32"
    >
      {/* Background blobs */}
      <div
        className="pointer-events-none absolute right-0 -bottom-40 h-[500px] w-[500px] rounded-full bg-mint/10 blur-[120px] dark:bg-mint/5"
        style={{ animation: "blob-float 14s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -left-20 top-20 h-[400px] w-[400px] rounded-full bg-peach/10 blur-[100px] dark:bg-peach/5"
        style={{ animation: "blob-float-reverse 18s ease-in-out infinite 2s" }}
      />
      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(26,26,46,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,46,0.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)]" />

      {/* Section Title */}
      <motion.div
        className="mb-16"
        variants={sectionTitle}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <p
          className="mb-2 text-xs tracking-[0.3em] uppercase text-peach"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          {t("contact.label")}
        </p>
        <h2
          className="text-4xl font-bold text-navy md:text-5xl dark:text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {t("contact.title")}
        </h2>
      </motion.div>

      <div className="grid gap-16 md:grid-cols-2">
        {/* Left - Info */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <p className="mb-8 text-lg leading-relaxed text-gray dark:text-gray-light">
            {t("contact.description")}
          </p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex h-14 w-14 items-center justify-center rounded-2xl border border-navy/10 bg-white text-navy dark:border-white/10 dark:bg-dark-card dark:text-white"
                aria-label={link.name}
                variants={scaleIn}
                whileHover={{
                  y: -4,
                  scale: 1.1,
                  borderColor: "rgba(255, 176, 156, 0.5)",
                  boxShadow: "0 10px 30px -5px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                {iconMap[link.icon]}
              </motion.a>
            ))}
          </motion.div>

          {/* Email CTA */}
          <motion.a
            href="mailto:hello@thinhme.tech"
            className="mt-8 inline-flex cursor-pointer items-center gap-2 text-lg font-semibold text-navy transition-colors hover:text-peach dark:text-white dark:hover:text-peach"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ x: 5 }}
          >
            hello@thinhme.tech
            <ArrowUpRight className="h-5 w-5" />
          </motion.a>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div
            className="relative"
            whileFocus={{ scale: 1.01 }}
          >
            <input
              type="text"
              placeholder={t("contact.name")}
              value={formState.name}
              onChange={(e) =>
                setFormState({ ...formState, name: e.target.value })
              }
              onFocus={() => setFocusedInput("name")}
              onBlur={() => setFocusedInput(null)}
              required
              className="w-full rounded-xl border border-navy/10 bg-white px-5 py-4 text-sm text-navy outline-none transition-all duration-300 placeholder:text-gray-light focus:border-peach focus:shadow-lg focus:shadow-peach/10 dark:border-white/10 dark:bg-dark-card dark:text-white dark:placeholder:text-gray dark:focus:border-peach"
            />
            {focusedInput === "name" && (
              <motion.div
                className="absolute -inset-px rounded-xl bg-gradient-to-r from-peach/50 via-lavender/50 to-mint/50 -z-10 blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.div>
          <motion.div className="relative">
            <input
              type="email"
              placeholder={t("contact.email")}
              value={formState.email}
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
              required
              className="w-full rounded-xl border border-navy/10 bg-white px-5 py-4 text-sm text-navy outline-none transition-all duration-300 placeholder:text-gray-light focus:border-lavender focus:shadow-lg focus:shadow-lavender/10 dark:border-white/10 dark:bg-dark-card dark:text-white dark:placeholder:text-gray dark:focus:border-lavender"
            />
            {focusedInput === "email" && (
              <motion.div
                className="absolute -inset-px rounded-xl bg-gradient-to-r from-lavender/50 via-peach/50 to-mint/50 -z-10 blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.div>
          <motion.div className="relative">
            <textarea
              placeholder={t("contact.message")}
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              onFocus={() => setFocusedInput("message")}
              onBlur={() => setFocusedInput(null)}
              required
              rows={5}
              className="w-full resize-none rounded-xl border border-navy/10 bg-white px-5 py-4 text-sm text-navy outline-none transition-all duration-300 placeholder:text-gray-light focus:border-mint focus:shadow-lg focus:shadow-mint/10 dark:border-white/10 dark:bg-dark-card dark:text-white dark:placeholder:text-gray dark:focus:border-mint"
            />
            {focusedInput === "message" && (
              <motion.div
                className="absolute -inset-px rounded-xl bg-gradient-to-r from-mint/50 via-peach/50 to-lavender/50 -z-10 blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.div>
          <motion.button
            type="submit"
            disabled={sending}
            className="group cursor-pointer relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-navy px-8 py-4 text-sm font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-navy"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px -5px rgba(255, 176, 156, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-peach via-lavender to-mint opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-2">
              {sending ? (
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {t("contact.sending")}
                </motion.span>
              ) : (
                <>
                  {t("contact.send")}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </>
              )}
            </span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
