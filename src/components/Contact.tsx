"use client";

import { socialLinks } from "@/lib/data";
import { Github, Globe, Mail, Send, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  globe: <Globe className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      ref={sectionRef}
      className="relative mx-auto max-w-6xl px-6 py-32"
    >
      {/* Background blob */}
      <div
        className="pointer-events-none absolute right-0 -bottom-40 h-[500px] w-[500px] rounded-full bg-mint/10 blur-[120px] dark:bg-mint/5"
        style={{ animation: "blob-float 14s ease-in-out infinite" }}
      />

      {/* Section Title */}
      <div className="reveal mb-16">
        <p
          className="mb-2 text-xs tracking-[0.3em] uppercase text-peach"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          04 — Contact
        </p>
        <h2
          className="text-4xl font-bold text-navy md:text-5xl dark:text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Let&apos;s Connect
        </h2>
      </div>

      <div className="grid gap-16 md:grid-cols-2">
        {/* Left - Info */}
        <div className="reveal">
          <p className="mb-8 text-lg leading-relaxed text-gray dark:text-gray-light">
            Có ý tưởng hay hoặc muốn hợp tác? Tôi luôn sẵn sàng lắng nghe
            những dự án thú vị. Hãy kết nối với tôi!
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic group cursor-pointer flex h-14 w-14 items-center justify-center rounded-2xl border border-navy/10 bg-white text-navy transition-all duration-300 hover:-translate-y-1 hover:border-peach/50 hover:bg-peach/5 hover:text-peach hover:shadow-lg dark:border-white/10 dark:bg-dark-card dark:text-white dark:hover:border-peach/50 dark:hover:text-peach"
                aria-label={link.name}
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>

          {/* Email CTA */}
          <a
            href="mailto:hello@thinhme.tech"
            className="mt-8 inline-flex cursor-pointer items-center gap-2 text-lg font-semibold text-navy transition-colors hover:text-peach dark:text-white dark:hover:text-peach"
          >
            hello@thinhme.tech
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Right - Form */}
        <form onSubmit={handleSubmit} className="reveal space-y-5">
          <div className="relative">
            <input
              type="text"
              placeholder="Tên của bạn"
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
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-peach/50 via-lavender/50 to-mint/50 -z-10 blur-sm" />
            )}
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email của bạn"
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
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-lavender/50 via-peach/50 to-mint/50 -z-10 blur-sm" />
            )}
          </div>
          <div className="relative">
            <textarea
              placeholder="Tin nhắn"
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
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-mint/50 via-peach/50 to-lavender/50 -z-10 blur-sm" />
            )}
          </div>
          <button
            type="submit"
            disabled={sending}
            className="group cursor-pointer relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-navy px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-peach/25 disabled:opacity-50 dark:bg-white dark:text-navy"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-peach via-lavender to-mint opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-2">
              {sending ? (
                "Đang gửi..."
              ) : (
                <>
                  Gửi tin nhắn
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </>
              )}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
