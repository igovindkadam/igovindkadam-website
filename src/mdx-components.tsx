import type { MDXComponents } from "mdx/types";

/**
 * Shared MDX element mapping for long-form research content.
 * Keeps MDX pages on the site type scale and theme automatically.
 * Heading ids (from rehype-slug) are forwarded for table-of-contents links.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, id }) => (
      <h1
        id={id}
        className="font-display text-4xl font-bold text-balance text-midnight sm:text-5xl dark:text-white"
      >
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2
        id={id}
        className="mt-10 scroll-mt-24 font-display text-2xl font-bold text-midnight sm:text-3xl dark:text-white"
      >
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3
        id={id}
        className="mt-8 scroll-mt-24 font-display text-xl font-semibold text-midnight dark:text-white"
      >
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
      <pre className="mt-4 overflow-x-auto rounded-lg bg-midnight p-4 text-sm text-slate-100 dark:bg-black [&>code]:rounded-none [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-slate-100">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <span className="mt-6 block overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full border-collapse text-left text-sm">{children}</table>
      </span>
    ),
    thead: ({ children }) => (
      <thead className="bg-slate-50 dark:bg-midnight-soft">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="border-b border-slate-200 px-4 py-2.5 font-semibold text-midnight dark:border-slate-700 dark:text-white">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-b border-slate-100 px-4 py-2.5 text-slate-600 last:border-0 dark:border-slate-800 dark:text-slate-300">
        {children}
      </td>
    ),
    img: ({ src, alt }) => (
      <figure className="mt-6 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt ?? ""} loading="lazy" className="w-full" />
        {alt ? (
          <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-500 dark:border-slate-700 dark:bg-midnight-soft dark:text-slate-400">
            {alt}
          </figcaption>
        ) : null}
      </figure>
    ),
    hr: () => <hr className="my-8 border-slate-200 dark:border-slate-700" />,
    ...components,
  };
}
