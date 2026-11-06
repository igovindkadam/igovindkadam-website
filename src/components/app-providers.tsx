"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

interface AppProvidersProps {
  children: ReactNode;
}

/**
 * Client-side providers: persistent light/dark theme (class strategy,
 * stored in localStorage by next-themes) and motion preferences that
 * respect the user's reduced-motion OS setting.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </NextThemesProvider>
  );
}
