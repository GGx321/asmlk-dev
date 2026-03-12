"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { SKILLS } from "@/lib/constants";
import type { SkillCategory } from "@/types";
import {
  CodeIcon,
  AtomIcon,
  TriangleIcon,
  PaintBrushIcon,
  TreeStructureIcon,
  HexagonIcon,
  DatabaseIcon,
  CirclesThreeIcon,
  PackageIcon,
  CloudIcon,
  ArrowsClockwiseIcon,
  GitBranchIcon,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

const SKILL_ICONS: Record<string, Icon> = {
  TypeScript: CodeIcon,
  React: AtomIcon,
  "Next.js": TriangleIcon,
  "Tailwind CSS": PaintBrushIcon,
  "Node.js": TreeStructureIcon,
  NestJS: HexagonIcon,
  PostgreSQL: DatabaseIcon,
  Redis: CirclesThreeIcon,
  Docker: PackageIcon,
  AWS: CloudIcon,
  "CI/CD": ArrowsClockwiseIcon,
  Git: GitBranchIcon,
};

const CATEGORIES: SkillCategory[] = ["frontend", "backend", "devops", "tools"];

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </motion.div>

        <div className="space-y-10">
          {CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="mb-4 font-mono text-sm font-medium text-accent">
                {t(`categories.${category}`)}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {SKILLS.filter((s) => s.category === category).map(
                  (skill, i) => {
                    const SkillIcon = SKILL_ICONS[skill.name];
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.15 } }}
                        className="glass-card flex cursor-default items-center gap-3 rounded-lg px-4 py-3 transition-colors hover:border-white/15 hover:bg-card-hover"
                      >
                        {SkillIcon
                          ? <SkillIcon size={18} weight="duotone" className="shrink-0 text-accent" />
                          : <span className="text-lg">{skill.icon}</span>
                        }
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  },
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
