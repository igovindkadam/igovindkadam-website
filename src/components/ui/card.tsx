import Link from "next/link";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  meta?: string;
  badge?: ReactNode;
  href?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Reusable content card. Renders as a link wrapper when `href` is provided,
 * otherwise as a plain article container.
 */
export function Card({
  title,
  description,
  meta,
  badge,
  href,
  children,
  className = "",
}: CardProps) {
  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-midnight dark:text-white">
          {title}
        </h3>
        {badge}
      </div>
      {meta ? (
        <p className="mt-1 text-xs tracking-wide text-slate-500 uppercase dark:text-slate-400">
          {meta}
        </p>
      ) : null}
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
      {children}
    </>
  );

  const classes = `block rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-midnight-soft ${className}`;

  if (href !== undefined) {
    return (
      <Link
        href={href}
        className={`${classes} transition-colors hover:border-scientific dark:hover:border-scientific`}
      >
        {body}
      </Link>
    );
  }

  return <article className={classes}>{body}</article>;
}
