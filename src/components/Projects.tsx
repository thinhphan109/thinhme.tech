"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { defaultViewport, fadeInUp, sectionTitle } from "@/lib/animations";
import { projects, type Project } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  const { locale, t } = useLanguage();
  const copy = project.copy[locale];

  return (
    <article
      id={project.id}
      className={`flex scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-navy/10 bg-surface dark:border-white/10 dark:bg-dark-card ${project.featured ? "md:col-span-3 md:grid md:grid-cols-[1.35fr_1fr]" : ""}`}
    >
      <figure className="relative aspect-[16/10] overflow-hidden border-b border-navy/10 bg-cream-dark dark:border-white/10 dark:bg-dark-surface">
        <Image
          src={project.image}
          alt={copy.imageAlt}
          fill
          sizes={project.featured ? "(min-width: 1152px) 632px, (min-width: 768px) 56vw, 100vw" : "(min-width: 1152px) 352px, (min-width: 768px) 31vw, 100vw"}
          className="object-cover object-top"
        />
        {project.sampleImage && (
          <figcaption className="absolute right-3 bottom-3 rounded-full bg-[#131a25] px-2.5 py-1 text-[11px] font-medium text-white">
            {t("projects.sampleImage")}
          </figcaption>
        )}
      </figure>

      <div className={`flex flex-1 flex-col p-5 ${project.featured ? "md:justify-center md:p-8" : ""}`}>
        <h3 className={`font-heading font-bold text-navy dark:text-white ${project.featured ? "text-2xl md:text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="mt-2 mb-4 text-sm leading-relaxed text-gray dark:text-gray-light">
          {copy.summary}
        </p>
        <ul className="mb-5 flex flex-wrap gap-1.5" aria-label={t("projects.technologies")}>
          {project.tech.map((tech) => (
            <li key={tech} className="rounded-full bg-cream-dark px-2.5 py-1 text-xs font-medium text-navy dark:bg-dark-surface dark:text-white">
              {tech}
            </li>
          ))}
        </ul>

        <div className={project.featured ? "" : "mt-auto"}>
          <details className="group border-t border-navy/10 dark:border-white/10">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-navy focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-white [&::-webkit-details-marker]:hidden">
              {t("projects.implementation")}
              <ChevronDown aria-hidden="true" className="size-4 shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <p className="pb-2 text-sm leading-relaxed text-gray dark:text-gray-light">{copy.implementation}</p>
          </details>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex min-h-10 items-center gap-1.5 rounded-full bg-navy px-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy dark:bg-white dark:text-navy dark:hover:bg-cream dark:focus-visible:outline-white"
            >
              {t("projects.viewDemo")}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-16 overflow-hidden px-6 py-24 md:py-32">
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-peach/10 blur-[120px] dark:bg-peach/5"
        style={{ animation: "blob-float-reverse 16s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-mint/10 blur-[100px] dark:bg-mint/5"
        style={{ animation: "blob-float 20s ease-in-out infinite 4s" }}
      />

      <motion.h2
        className="relative mb-8 font-heading text-4xl font-bold text-navy dark:text-white md:mb-10 md:text-5xl"
        variants={sectionTitle}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        {t("projects.title")}
      </motion.h2>

      <div className="relative grid gap-5 md:grid-cols-3 md:gap-6">
        {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>

      <motion.div
        className="mt-10 flex justify-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <a
          href="https://github.com/thinhphan109"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-navy/20 px-5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-navy dark:focus-visible:outline-white"
        >
          <Github aria-hidden="true" className="size-4" />
          {t("projects.viewAll")}
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </motion.div>
    </section>
  );
}
