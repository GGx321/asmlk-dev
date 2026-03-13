"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  ChatDotsIcon,
  RulerIcon,
  LightningIcon,
  RocketIcon,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

interface Step {
  key: "discovery" | "design" | "development" | "launch";
  Icon: Icon;
  number: string;
}

const STEPS: Step[] = [
  { key: "discovery", Icon: ChatDotsIcon, number: "01" },
  { key: "design", Icon: RulerIcon, number: "02" },
  { key: "development", Icon: LightningIcon, number: "03" },
  { key: "launch", Icon: RocketIcon, number: "04" },
];

const TIMELINE_DOT_SPRING = { stiffness: 260, damping: 20 };

function TimelineDot({ number, delay }: { number: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ type: "spring", ...TIMELINE_DOT_SPRING, delay }}
      className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-xs font-bold text-accent shadow-[0_0_12px_rgba(239,68,68,0.15)]"
    >
      {number}
    </motion.div>
  );
}

function StepCard({
  step,
  index,
  t,
}: {
  step: Step;
  index: number;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass-card relative cursor-default rounded-xl p-6"
    >
      <step.Icon size={28} weight="duotone" className="text-accent" />
      <h3 className="mt-3 font-semibold text-foreground">
        {t(`steps.${step.key}.title`)}
      </h3>
      <p className="mt-2 text-sm text-muted">
        {t(`steps.${step.key}.description`)}
      </p>
    </motion.div>
  );
}

export function Process() {
  const t = useTranslations("process");

  return (
    <section id="process" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </motion.div>

        {/* Desktop: horizontal timeline + 4-col grid */}
        <div className="hidden lg:block">
          <div className="relative mb-10">
            <div className="absolute top-1/2 left-[12.5%] right-[12.5%] -translate-y-1/2">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-px origin-left bg-linear-to-r from-accent/0 via-accent/60 to-accent/0"
              />
            </div>
            <div className="grid grid-cols-4">
              {STEPS.map((step, i) => (
                <div key={step.key} className="flex justify-center">
                  <TimelineDot number={step.number} delay={i * 0.15} />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <StepCard key={step.key} step={step} index={i} t={t} />
            ))}
          </div>
        </div>

        {/* Mobile / Tablet: vertical timeline + stacked cards */}
        <div className="lg:hidden">
          {STEPS.map((step, i) => (
            <div key={step.key} className="flex gap-5">
              <div className="flex flex-col items-center pt-6">
                <TimelineDot number={step.number} delay={i * 0.12} />
                {i < STEPS.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 + 0.2 }}
                    className="mt-1 w-px flex-1 origin-top bg-linear-to-b from-accent/40 to-accent/5"
                  />
                )}
              </div>
              <div className="flex-1 pb-6">
                <StepCard step={step} index={i} t={t} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
