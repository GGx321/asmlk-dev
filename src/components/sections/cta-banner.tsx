"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface CtaBannerProps {
  textKey: "afterAbout" | "afterProjects";
}

const STAGGER_DELAY = 0.12;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: STAGGER_DELAY, delayChildren: 0.1 },
  },
};

const EASE_OUT_QUART: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const textVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT_QUART },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT_QUART },
  },
};

function AccentDivider() {
  return (
    <div className="flex w-full items-center justify-center" aria-hidden>
      <div
        className="h-px w-full max-w-4xl"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--accent) 30%, var(--accent) 70%, transparent 100%)",
          opacity: 0.15,
        }}
      />
    </div>
  );
}

function DecorativeDots({ side }: { side: "left" | "right" }) {
  const baseClass =
    "absolute top-1/2 -translate-y-1/2 flex flex-col gap-2.5 opacity-30";
  const posClass = side === "left" ? "left-4 sm:left-8" : "right-4 sm:right-8";

  return (
    <div className={`${baseClass} ${posClass}`} aria-hidden>
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className="block h-1 w-1 rounded-full bg-accent"
          style={{ opacity: 1 - i * 0.25 }}
        />
      ))}
    </div>
  );
}

export function CtaBanner({ textKey }: CtaBannerProps) {
  const t = useTranslations("cta");

  return (
    <section className="relative">
      <AccentDivider />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative overflow-hidden border-y border-accent/10 bg-linear-to-r from-accent/5 via-transparent to-accent/5"
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 50%, var(--accent), transparent)",
            opacity: 0.06,
          }}
        />

        <DecorativeDots side="left" />
        <DecorativeDots side="right" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-16 text-center">
          <motion.p
            variants={textVariants}
            className="text-xl font-semibold text-foreground sm:text-2xl"
          >
            {t(textKey)}
          </motion.p>

          <motion.a
            href="#contact"
            variants={buttonVariants}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_var(--accent)] shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-accent/40"
          >
            {t("button")}
          </motion.a>
        </div>
      </motion.div>

      <AccentDivider />
    </section>
  );
}
