"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ROLES = [
  "Fullstack Developer",
  "React & Next.js Expert",
  "Node.js Engineer",
  "UI/UX Enthusiast",
] as const;

const TYPING_SPEED_MS = 50;
const DELETING_SPEED_MS = 30;
const PAUSE_AFTER_TYPING_MS = 2000;
const PAUSE_AFTER_DELETING_MS = 300;

function useTypingAnimation(words: readonly string[]): string {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isTypingComplete = displayText.length === currentWord.length;
    const isDeletingComplete = displayText.length === 0 && isDeleting;

    let delay: number;
    if (!isDeleting) {
      delay = isTypingComplete ? PAUSE_AFTER_TYPING_MS : TYPING_SPEED_MS;
    } else {
      delay = isDeletingComplete ? PAUSE_AFTER_DELETING_MS : DELETING_SPEED_MS;
    }

    const timeoutId = setTimeout(() => {
      if (!isDeleting) {
        if (!isTypingComplete) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (!isDeletingComplete) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [displayText, wordIndex, isDeleting, words]);

  return displayText;
}

export function Hero() {
  const t = useTranslations("hero");
  const typedRole = useTypingAnimation(ROLES);

  return (
    <section
      className="relative grid min-h-[100svh] overflow-hidden md:grid-cols-2"
      style={{ background: "linear-gradient(to right, var(--background) 40%, #000 60%)" }}
    >
      <div className="relative flex items-center px-6 py-24 md:py-20 md:px-12 lg:px-20">
        <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-accent/5 blur-[150px]" />

        <div className="pointer-events-none absolute bottom-12 left-10 hidden h-24 w-px bg-linear-to-b from-transparent via-accent/20 to-transparent md:block" />

        <div className="relative z-10">
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
            {typedRole}
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
              className="ml-0.5 inline-block font-light text-accent"
            >
              |
            </motion.span>
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
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              {t("cta")}
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="glass-card inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-white/15 hover:bg-card-hover"
            >
              {t("viewProjects")}
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="relative hidden items-center justify-center md:flex">
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-3/4 w-[320px] sm:w-[380px] lg:w-[420px]"
        >
          <Image
            src="/photo.PNG"
            alt="Alex Developer"
            fill
            className="object-cover object-top"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              boxShadow:
                "inset 80px 0 80px -30px black, inset -50px 0 60px -20px black, inset 0 50px 70px -20px black, inset 0 -60px 80px -20px black",
            }}
          />
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
