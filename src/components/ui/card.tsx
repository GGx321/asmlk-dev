import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl glass-card p-6 ${
        hover
          ? "transition-all duration-300 hover:border-white/15 hover:-translate-y-0.5 hover:bg-card-hover"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
