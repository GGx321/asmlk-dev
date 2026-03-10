import { type TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          rows={5}
          className={`resize-none rounded-lg border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40 ${
            error ? "border-red-500/60" : "border-border"
          } ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
