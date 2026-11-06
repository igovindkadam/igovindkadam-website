import type { DivisionStatus } from "@/data/kryomlabs";
import { statusMeta } from "@/data/kryomlabs";

const statusClasses: Record<DivisionStatus, string> = {
  active:
    "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-200",
  developing:
    "border-scientific bg-orange-50 text-amber-800 dark:border-scientific dark:bg-orange-950 dark:text-scientific-soft",
  planned:
    "border-slate-300 bg-slate-100 text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300",
  tbd: "border-dashed border-slate-400 bg-transparent text-slate-500 dark:border-slate-500 dark:text-slate-400",
};

/** Status pill distinguishing KryomLabs divisions. */
export function StatusBadge({ status }: { status: DivisionStatus }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${statusClasses[status]}`}
    >
      {statusMeta[status].label}
    </span>
  );
}
