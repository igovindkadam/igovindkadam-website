import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/app-providers";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { brandAssets, siteIdentity } from "@/lib/site";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const readingFont = Source_Serif_4({
  variable: "--font-reading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteIdentity.owner} — ${siteIdentity.positioning}`,
    template: `%s · ${siteIdentity.name}`,
  },
  description: siteIdentity.description,
  applicationName: siteIdentity.name,
  authors: [{ name: siteIdentity.owner }],
  creator: siteIdentity.owner,
  icons: {
    icon: [
      {
        url: brandAssets.icon.src,
        sizes: `${brandAssets.icon.size}x${brandAssets.icon.size}`,
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: siteIdentity.name,
    title: `${siteIdentity.owner} — ${siteIdentity.positioning}`,
    description: siteIdentity.description,
    images: [
      {
        url: brandAssets.openGraph.src,
        width: brandAssets.openGraph.width,
        height: brandAssets.openGraph.height,
        alt: brandAssets.openGraph.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteIdentity.owner} — ${siteIdentity.positioning}`,
    description: siteIdentity.description,
    images: [brandAssets.openGraph.src],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#101827" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} ${readingFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-midnight dark:bg-midnight dark:text-slate-100">
        <AppProviders>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-scientific focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-midnight"
          >
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
