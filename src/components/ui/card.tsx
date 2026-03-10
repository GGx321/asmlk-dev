import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border/60 bg-card p-6 ${
        hover
          ? "transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
