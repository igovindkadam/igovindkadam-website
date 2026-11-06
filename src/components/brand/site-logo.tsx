import Image from "next/image";
import { brandAssets } from "@/lib/site";

interface SiteLogoProps {
  /** Display height in pixels; width follows the logo's native aspect ratio. */
  height?: number;
  /** Extra space around the mark inside its dark container. */
  padding?: number;
  priority?: boolean;
  className?: string;
}

/**
 * Official igovindkadam brand mark, rendered from the owner-uploaded asset.
 * The black-background logo always sits on a black container so it stays
 * visible and undistorted in both light and dark themes.
 */
export function SiteLogo({
  height = 36,
  padding = 4,
  priority = false,
  className = "",
}: SiteLogoProps) {
  const aspectRatio = brandAssets.logo.width / brandAssets.logo.height;

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md bg-black ring-1 ring-slate-900/10 dark:ring-white/10 ${className}`}
      style={{ padding }}
    >
      <Image
        src={brandAssets.logo.src}
        alt={brandAssets.logo.alt}
        width={brandAssets.logo.width}
        height={brandAssets.logo.height}
        priority={priority}
        style={{ height, width: Math.round(height * aspectRatio) }}
      />
    </span>
  );
}
