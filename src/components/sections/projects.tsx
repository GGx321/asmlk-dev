"use client";

import { useRef, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { PROJECTS } from "@/lib/constants";

const PROJECT_KEYS = [
  "ecommerce",
  "taskManager",
  "analytics",
  "apiGateway",
] as const;

const TILT_MAX_DEG = 8;
const TILT_PERSPECTIVE = 800;
const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 0.5 };

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, SPRING_CONFIG);
  const springRotateY = useSpring(rotateY, SPRING_CONFIG);

  const spotlightBg = useMotionTemplate`radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(255,255,255,0.05) 0%, transparent 60%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>): void {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const xNorm = (e.clientX - rect.left) / rect.width;
    const yNorm = (e.clientY - rect.top) / rect.height;

    rotateX.set((yNorm - 0.5) * -TILT_MAX_DEG * 2);
    rotateY.set((xNorm - 0.5) * TILT_MAX_DEG * 2);
    spotlightX.set(xNorm * 100);
    spotlightY.set(yNorm * 100);
  }

  function handleMouseLeave(): void {
    rotateX.set(0);
    rotateY.set(0);
    spotlightX.set(50);
    spotlightY.set(50);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{
        transformPerspective: TILT_PERSPECTIVE,
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlightBg }}
      />
    </motion.div>
  );
}

export function Projects() {
  const t = useTranslations("projects");

  return (
    <section id="projects" className="bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => {
            const key = PROJECT_KEYS[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group"
              >
                <TiltCard>
                  <Card className="flex h-full flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {t(`items.${key}.title`)}
                      </h3>
                      <p className="mt-2 text-sm text-muted">
                        {t(`items.${key}.description`)}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      {project.href && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted transition-colors hover:text-accent"
                        >
                          {t("demo")} &rarr;
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted transition-colors hover:text-accent"
                        >
                          {t("github")} &rarr;
                        </a>
                      )}
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
