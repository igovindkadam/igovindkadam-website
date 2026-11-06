import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** When provided, renders an anchor instead of a button. */
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-research text-white hover:bg-research-deep dark:bg-scientific dark:text-midnight dark:hover:bg-scientific-soft",
  secondary:
    "border border-slate-300 text-midnight hover:border-scientific dark:border-slate-600 dark:text-slate-100 dark:hover:border-scientific",
  ghost: "text-research hover:bg-slate-100 dark:text-scientific-soft dark:hover:bg-midnight-soft",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

/** Reusable button that renders as a link when `href` is provided. */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href !== undefined) {
    const internal = href.startsWith("/");
    if (internal) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
