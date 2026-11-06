"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

/** Copy-to-clipboard button with clipboard-API fallback and live feedback. */
export function CitationCopy({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "absolute";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      document.body.removeChild(area);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={() => void copy()}
      aria-live="polite"
      className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-scientific hover:text-midnight dark:border-slate-600 dark:text-slate-300 dark:hover:border-scientific dark:hover:text-white"
    >
      {copied ? (
        <>
          <Check aria-hidden className="size-3.5 text-emerald-600 dark:text-emerald-400" />
          Copied
        </>
      ) : (
        <>
          <Copy aria-hidden className="size-3.5" />
          Copy {label}
        </>
      )}
    </button>
  );
}
