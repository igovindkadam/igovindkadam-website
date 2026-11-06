"use client";

import { useEffect, useRef } from "react";

/**
 * Slim reading-progress indicator for article pages. Tracks scroll across
 * the [data-reading-body] element with a rAF-throttled listener. Pure
 * position indicator — no animation, safe under reduced motion.
 */
export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const body = document.querySelector("[data-reading-body]");
    if (!bar || !body) {
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = body.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const done = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 1;
      bar.style.transform = `scaleX(${done.toFixed(3)})`;
    };
    const onScroll = () => {
      if (frame === 0) {
        frame = requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== 0) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-50 h-[3px] print:hidden"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-scientific"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
