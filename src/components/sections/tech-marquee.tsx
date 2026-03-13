"use client";

import { SKILLS } from "@/lib/constants";

const ANIMATION_DURATION = "30s";

function MarqueeTrack(): React.ReactElement {
  return (
    <>
      {SKILLS.map((skill) => (
        <span key={skill.name} className="flex items-center gap-6 shrink-0">
          <span className="text-sm font-mono text-muted/40 uppercase tracking-widest">
            {skill.name}
          </span>
          <span className="bg-accent/30 h-1 w-1 rounded-full" />
        </span>
      ))}
    </>
  );
}

export function TechMarquee(): React.ReactElement {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/6 bg-white/1">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-background to-transparent" />

      <div
        className="flex items-center gap-6 py-4 w-max"
        style={{ animation: `marquee ${ANIMATION_DURATION} linear infinite` }}
      >
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </div>
  );
}
