"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <GradientOrb className="-left-40 -top-40" />
      <GradientOrb className="-bottom-40 -right-40 delay-1000" />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm text-accent"
        >
          Привет, меня зовут
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {SITE_CONFIG.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-2xl font-semibold text-muted sm:text-3xl"
        >
          {SITE_CONFIG.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-6 max-w-xl text-muted"
        >
          {SITE_CONFIG.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-secondary px-8 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Связаться со мной
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-card"
          >
            Смотреть проекты
          </a>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute h-[500px] w-[500px] animate-pulse rounded-full bg-accent/5 blur-[120px] ${className}`}
    />
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
