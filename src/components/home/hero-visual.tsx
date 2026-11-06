/**
 * Abstract geometric network visual for the hero panel.
 * Original decorative SVG artwork echoing scientific structure —
 * nodes, links, and orbit rings. Not derived from the logo file.
 */
export function HeroVisual() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 480 560"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="#e99b47" stopOpacity="0.16" />
          <stop offset="55%" stopColor="#e99b47" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#e99b47" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="480" height="560" fill="url(#hero-glow)" />

      <g className="animate-orbit" opacity="0.5">
        <ellipse
          cx="240"
          cy="250"
          rx="190"
          ry="190"
          fill="none"
          stroke="#94a3b8"
          strokeOpacity="0.28"
          strokeWidth="1"
        />
        <ellipse
          cx="240"
          cy="250"
          rx="150"
          ry="150"
          fill="none"
          stroke="#94a3b8"
          strokeOpacity="0.2"
          strokeWidth="1"
          strokeDasharray="3 9"
        />
      </g>

      <g stroke="#cbd5e1" strokeOpacity="0.32" strokeWidth="1">
        <line x1="240" y1="130" x2="150" y2="220" />
        <line x1="240" y1="130" x2="330" y2="220" />
        <line x1="150" y1="220" x2="150" y2="330" />
        <line x1="330" y1="220" x2="330" y2="330" />
        <line x1="150" y1="220" x2="240" y2="250" />
        <line x1="330" y1="220" x2="240" y2="250" />
        <line x1="150" y1="330" x2="240" y2="380" />
        <line x1="330" y1="330" x2="240" y2="380" />
        <line x1="240" y1="130" x2="240" y2="250" />
        <line x1="240" y1="250" x2="240" y2="380" />
        <line x1="150" y1="330" x2="330" y2="330" />
      </g>

      <g fill="#e2e8f0">
        <circle cx="240" cy="130" r="5" />
        <circle cx="150" cy="220" r="4" />
        <circle cx="330" cy="220" r="4" />
        <circle cx="240" cy="250" r="6" fill="#e99b47" />
        <circle cx="150" cy="330" r="4" />
        <circle cx="330" cy="330" r="4" />
        <circle cx="240" cy="380" r="5" />
      </g>

      <g fill="#64748b" opacity="0.7">
        <circle cx="90" cy="120" r="2" />
        <circle cx="395" cy="150" r="2" />
        <circle cx="70" cy="330" r="2" />
        <circle cx="410" cy="330" r="2" />
        <circle cx="130" cy="460" r="2" />
        <circle cx="350" cy="460" r="2" />
      </g>
    </svg>
  );
}
