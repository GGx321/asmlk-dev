import { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={`rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40 ${
            error ? "border-accent/60" : "border-white/10"
          } ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-accent">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
