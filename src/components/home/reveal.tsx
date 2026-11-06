"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function subscribeToReducedMotion(onChange: () => void): () => void {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot(): false {
  return false;
}

/**
 * Reduced-motion detection using the standard media query. (Framer Motion's
 * own hook queries the bare `(prefers-reduced-motion)` feature, which does
 * not reliably match — so Reveal does not depend on it.)
 */
function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot,
  );
}

/**
 * Restrained scroll reveal: a short, subtle rise, played once.
 * Renders plain, always-visible markup when the user prefers reduced motion.
 * Visibility is driven by an IntersectionObserver boolean so content can
 * never be stranded at zero opacity.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const reduceMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
