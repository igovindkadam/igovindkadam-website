import type { MDXComponents } from "mdx/types";

/**
 * Shared MDX element mapping for long-form research content.
 * Keeps MDX pages on the site's type scale and theme automatically.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display text-4xl font-bold text-balance text-midnight sm:text-5xl dark:text-white">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 font-display text-2xl font-bold text-midnight sm:text-3xl dark:text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-display text-xl font-semibold text-midnight dark:text-white">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">{children}</p>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="font-medium text-research underline decoration-scientific decoration-2 underline-offset-2 hover:text-research-deep dark:text-scientific-soft dark:hover:text-scientific"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600 dark:text-slate-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-600 dark:text-slate-300">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-scientific pl-4 text-slate-600 italic dark:text-slate-300">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-midnight dark:bg-slate-800 dark:text-slate-100">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mt-4 overflow-x-auto rounded-lg bg-midnight p-4 text-sm text-slate-100 dark:bg-black">
        {children}
      </pre>
    ),
    hr: () => <hr className="my-8 border-slate-200 dark:border-slate-700" />,
    ...components,
  };
}
