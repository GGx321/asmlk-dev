"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const STATS = [
  { value: "5+", label: "Лет опыта" },
  { value: "30+", label: "Проектов" },
  { value: "15+", label: "Технологий" },
] as const;

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Обо мне"
            subtitle="Немного о моём опыте и подходе к разработке"
          />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-muted"
          >
            <p>
              Я фуллстак разработчик с опытом создания сложных веб-приложений —
              от MVP стартапов до высоконагруженных enterprise-систем.
            </p>
            <p>
              Специализируюсь на TypeScript-экосистеме: React и Next.js на
              фронтенде, Node.js и NestJS на бэкенде. Люблю чистую архитектуру,
              типобезопасность и автоматизацию.
            </p>
            <p>
              Верю, что хороший код — это код, который легко читать, тестировать
              и масштабировать. Каждый проект — это не просто набор фич, а
              продуманное решение бизнес-задачи.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-6"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border/60 bg-card p-6 text-center"
              >
                <p className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-3xl font-bold text-transparent">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
