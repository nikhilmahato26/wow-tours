import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "dark" | "light" | "outline" | "outlineLight" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold uppercase tracking-wide transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60 active:translate-y-px";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:bg-gold-2 shadow-[0_10px_30px_-12px_rgba(212,175,55,0.7)]",
  dark: "bg-ink text-white hover:bg-ink-2",
  light: "bg-white text-ink hover:bg-mist",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
  outlineLight:
    "border border-white/30 text-white hover:border-white hover:bg-white hover:text-ink",
  ghost: "text-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[11px] rounded-lg",
  md: "h-11 px-6 text-xs rounded-xl",
  lg: "h-14 px-8 text-sm rounded-xl",
};

export function buttonClasses(opts?: { variant?: Variant; size?: Size; className?: string }) {
  return cn(base, variants[opts?.variant ?? "gold"], sizes[opts?.size ?? "md"], opts?.className);
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={buttonClasses({ variant, size, className })} {...props} />
  ),
);
Button.displayName = "Button";
