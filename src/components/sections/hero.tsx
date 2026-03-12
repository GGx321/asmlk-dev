"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm text-accent"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {t("name")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-2xl font-semibold text-muted sm:text-3xl"
          >
            {t("role")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-xl text-muted"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              {t("cta")}
            </a>
            <a
              href="#projects"
              className="glass-card inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-white/15 hover:bg-card-hover"
            >
              {t("viewProjects")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-white/10 sm:h-80 sm:w-80">
              <Image
                src="/photo.webp"
                alt="Alex Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted/30 p-1.5"
      >
        <div className="h-2 w-1 rounded-full bg-muted/50" />
      </motion.div>
    </motion.div>
  );
}
