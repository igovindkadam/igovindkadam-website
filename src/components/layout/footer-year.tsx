import { cacheLife } from "next/cache";

/**
 * Copyright year, prerendered and cached. Cache Components forbids `new Date()`
 * during a plain static render, so the value is explicitly cached instead.
 */
export async function FooterYear() {
  "use cache";
  cacheLife("days");

  return <>{new Date().getFullYear()}</>;
}
