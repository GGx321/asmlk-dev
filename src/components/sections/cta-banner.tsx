"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface CtaBannerProps {
  textKey: "afterAbout" | "afterProjects";
}

export function CtaBanner({ textKey }: CtaBannerProps) {
  const t = useTranslations("cta");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="px-6 py-16"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <p className="text-xl font-semibold text-foreground sm:text-2xl">
          {t(textKey)}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          {t("button")}
        </a>
      </div>
    </motion.div>
  );
}
