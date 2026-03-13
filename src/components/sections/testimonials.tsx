"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Дмитрий К.",
    role: "CEO, TechStartup",
    text: "Алекс взял нашу идею и превратил в рабочий MVP за 3 недели. Качество кода и внимание к деталям впечатлили всю команду.",
    rating: 5,
  },
  {
    name: "Анна М.",
    role: "Product Manager, FinanceApp",
    text: "Профессиональный подход, быстрые итерации и всегда на связи. Наш дашборд аналитики работает безупречно.",
    rating: 5,
  },
  {
    name: "Максим Р.",
    role: "Founder, E-Commerce",
    text: "Перезапустили интернет-магазин с нуля — новый стек, скорость загрузки улучшилась в 4 раза. Рекомендую!",
    rating: 5,
  },
] as const;

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-accent"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }, (_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={CARD_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass-card relative overflow-hidden rounded-xl p-6"
    >
      <span className="pointer-events-none absolute right-4 top-3 select-none text-6xl font-bold leading-none text-accent/10">
        &ldquo;
      </span>

      <StarRating count={testimonial.rating} />

      <p className="mt-4 text-sm text-muted">{testimonial.text}</p>

      <div className="mt-5 border-t border-border pt-4">
        <p className="text-sm font-medium text-foreground">
          {testimonial.name}
        </p>
        <p className="text-xs text-muted/60">{testimonial.role}</p>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Отзывы"
            subtitle="Что говорят клиенты о работе со мной"
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
