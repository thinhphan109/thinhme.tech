"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Research() {
  const { t } = useLanguage();

  return (
    <section id="research" aria-labelledby="research-title" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20 md:py-24">
      <h2 id="research-title" className="mb-8 font-heading text-4xl font-bold text-navy md:mb-10 md:text-5xl dark:text-white">
        {t("research.title")}
      </h2>

      <article className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
        <figure className="min-w-0">
          <Image
            src="/projects/robotvision.webp"
            alt={t("research.robotvision.image")}
            width={1280}
            height={960}
            sizes="(min-width: 1152px) 532px, (min-width: 1024px) 46vw, 100vw"
            className="h-auto w-full rounded-2xl"
          />
          <figcaption className="mt-2 text-sm text-gray dark:text-gray-light">
            {t("research.robotvision.image")}
          </figcaption>
        </figure>

        <div className="min-w-0 lg:py-2">
          <h3 className="font-heading text-3xl font-bold text-navy dark:text-white">RobotVision</h3>
          <p className="mt-1 text-sm font-semibold text-gray dark:text-gray-light">{t("research.robotvision.context")}</p>
          <p className="mt-3 max-w-prose leading-relaxed text-navy dark:text-white">{t("research.robotvision.summary")}</p>

          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-navy/10 py-4 dark:border-white/15">
            <div>
              <dt className="text-sm text-gray dark:text-gray-light">{t("research.robotvision.datasetLabel")}</dt>
              <dd className="mt-1 text-xl font-semibold text-navy tabular-nums dark:text-white">{t("research.robotvision.dataset")}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray dark:text-gray-light">{t("research.robotvision.calibrationLabel")}</dt>
              <dd className="mt-1 text-xl font-semibold text-navy tabular-nums dark:text-white">{t("research.robotvision.calibration")}</dd>
            </div>
          </dl>

          <p className="mt-4 max-w-prose text-sm leading-relaxed text-gray dark:text-gray-light">
            {t("research.robotvision.scope")}
          </p>
        </div>
      </article>

      <article className="mt-10 grid gap-3 border-t border-navy/10 pt-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6 dark:border-white/15">
        <div>
          <h3 className="font-heading text-xl font-bold text-navy dark:text-white">MetechCamA1</h3>
          <p className="mt-1 max-w-prose text-sm leading-relaxed text-gray dark:text-gray-light">{t("research.camera.summary")}</p>
        </div>
        <a
          href="https://github.com/thinhphan109/MetechCamA1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 w-fit items-center gap-2 self-start rounded-full border border-navy/20 px-4 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-navy"
        >
          {t("research.camera.source")}
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </article>
    </section>
  );
}
