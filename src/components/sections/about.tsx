"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const STATS = [
  { value: 5, suffix: "+", key: "experience" as const },
  { value: 30, suffix: "+", key: "projects" as const },
  { value: 15, suffix: "+", key: "technologies" as const },
];

const SPRING_CONFIG = { duration: 2000, bounce: 0 };

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, SPRING_CONFIG);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function About() {
  const t = useTranslations("about");
  const paragraphs = t.raw("paragraphs") as string[];
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={sectionRef} className="relative px-6 py-24 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[140px]"
        style={{ y: parallaxY }}
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 text-muted"
          >
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-3 sm:gap-6"
          >
            {STATS.map((stat) => (
              <div
                key={stat.key}
                className="glass-card rounded-xl p-4 text-center sm:p-6"
              >
                <p className="text-3xl font-bold text-accent">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted">
                  {t(`stats.${stat.key}`)}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// re-export ref for parent usage
About.displayName = "About";
