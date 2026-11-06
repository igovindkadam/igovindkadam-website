"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  warm: boolean;
}

interface ScienceBackgroundProps {
  /** 0–1 density scale for the particle field. */
  density?: number;
  className?: string;
}

/**
 * Animated scientific hero environment: static SVG geometry (grid, orbit
 * rings, nodes) plus a lightweight canvas particle drift. Particles pause
 * offscreen and never render under prefers-reduced-motion. Parallax applies
 * on fine-pointer devices only.
 */
export function ScienceBackground({
  density = 1,
  className = "",
}: ScienceBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) {
      return;
    }

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    if (reducedQuery.matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let particles: Particle[] = [];
    let frame = 0;
    let running = true;
    let parallax = 0;

    const seed = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(
        Math.min(46, Math.max(14, (rect.width * rect.height) / 26000)) * density,
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 0.8 + Math.random() * 1.6,
        warm: Math.random() < 0.22,
      }));
    };

    const tick = () => {
      if (!running) {
        return;
      }
      const rect = wrap.getBoundingClientRect();
      const dark = document.documentElement.classList.contains("dark");
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -8) p.x = rect.width + 8;
        if (p.x > rect.width + 8) p.x = -8;
        if (p.y < -8) p.y = rect.height + 8;
        if (p.y > rect.height + 8) p.y = -8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.warm
          ? "rgba(233, 155, 71, 0.55)"
          : dark
            ? "rgba(148, 163, 184, 0.4)"
            : "rgba(100, 116, 139, 0.35)";
        ctx.fill();
      }
      if (finePointer.matches && !reducedQuery.matches) {
        const target = Math.min(1, Math.max(0, -rect.top / (rect.height || 1)));
        parallax += (target - parallax) * 0.06;
        canvas.style.transform = `translate3d(0, ${(parallax * 36).toFixed(1)}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((entry) => entry.isIntersecting);
        if (visible && !running) {
          running = true;
          frame = requestAnimationFrame(tick);
        } else if (!visible && running) {
          running = false;
          cancelAnimationFrame(frame);
        }
      },
      { threshold: 0 },
    );

    seed();
    observer.observe(wrap);
    frame = requestAnimationFrame(tick);
    window.addEventListener("resize", seed);

    const onReducedChange = () => {
      if (reducedQuery.matches && running) {
        running = false;
        cancelAnimationFrame(frame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else if (!reducedQuery.matches && !running) {
        running = true;
        frame = requestAnimationFrame(tick);
      }
    };
    reducedQuery.addEventListener("change", onReducedChange);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", seed);
      reducedQuery.removeEventListener("change", onReducedChange);
    };
  }, [density]);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 600"
      >
        <defs>
          <pattern id="science-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              className="stroke-slate-300 dark:stroke-white"
              strokeOpacity="0.16"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="science-glow" cx="72%" cy="30%" r="55%">
            <stop offset="0%" stopColor="#e99b47" stopOpacity="0.14" />
            <stop offset="60%" stopColor="#e99b47" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#e99b47" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1200" height="600" fill="url(#science-grid)" />
        <rect width="1200" height="600" fill="url(#science-glow)" />
        <g
          fill="none"
          className="stroke-slate-400 dark:stroke-slate-500"
          strokeOpacity="0.35"
          strokeWidth="1"
        >
          <ellipse cx="880" cy="240" rx="260" ry="200" />
          <ellipse
            cx="880"
            cy="240"
            rx="200"
            ry="150"
            strokeDasharray="3 9"
            strokeOpacity="0.5"
          />
          <ellipse cx="880" cy="240" rx="140" ry="104" />
        </g>
        <g className="fill-slate-500 dark:fill-slate-400">
          <circle className="animate-pulse-node" cx="880" cy="40" r="3.5" />
          <circle
            className="animate-pulse-node"
            cx="1062"
            cy="330"
            r="2.5"
            style={{ animationDelay: "-0.9s" }}
          />
          <circle
            className="animate-pulse-node"
            cx="712"
            cy="356"
            r="2.5"
            style={{ animationDelay: "-1.8s" }}
          />
        </g>
        <g
          className="stroke-scientific"
          strokeOpacity="0.7"
          strokeWidth="1.5"
        >
          <line x1="880" y1="40" x2="880" y2="136" className="animate-dash-flow" />
          <line x1="712" y1="356" x2="800" y2="290" className="animate-dash-flow" />
          <line x1="1062" y1="330" x2="972" y2="272" className="animate-dash-flow" />
        </g>
        <circle cx="880" cy="240" r="5" className="fill-scientific" />
      </svg>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40 dark:to-midnight/60" />
    </div>
  );
}
