"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChatDotsIcon, RulerIcon, LightningIcon, RocketIcon } from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

const STEPS: { key: "discovery" | "design" | "development" | "launch"; Icon: Icon; number: string }[] = [
  { key: "discovery", Icon: ChatDotsIcon, number: "01" },
  { key: "design", Icon: RulerIcon, number: "02" },
  { key: "development", Icon: LightningIcon, number: "03" },
  { key: "launch", Icon: RocketIcon, number: "04" },
];

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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card relative cursor-default rounded-xl p-6"
            >
              <span className="absolute right-4 top-4 font-mono text-xs text-muted/30">
                {step.number}
              </span>
              <step.Icon size={28} weight="duotone" className="text-accent" />
              <h3 className="mt-3 font-semibold text-foreground">
                {t(`steps.${step.key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-muted">
                {t(`steps.${step.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
