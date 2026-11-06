interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Heading id, used by parent sections for aria-labelledby. */
  id?: string;
}

/** Consistent section heading with optional eyebrow and lede. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-research uppercase dark:text-scientific-soft">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-2 font-display text-3xl font-bold text-balance text-midnight sm:text-4xl dark:text-white"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
