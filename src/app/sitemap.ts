import type { MetadataRoute } from "next";
import { siteRoutes } from "@/lib/site";
import { getVisiblePublicationMeta, getVisibleResearchMeta } from "@/lib/content";

/**
 * Sitemap across static routes plus published (non-draft) content entries.
 * Draft template previews are routable but intentionally unlisted.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [research, publications] = await Promise.all([
    getVisibleResearchMeta(),
    getVisiblePublicationMeta(),
  ]);
  const routes: MetadataRoute.Sitemap = siteRoutes.map((route) => ({
    url: route.href,
  }));
  for (const entry of research) {
    routes.push({ url: `/research/${entry.slug}` });
  }
  for (const entry of publications) {
    routes.push({ url: `/publications/${entry.slug}` });
  }
  return routes;
}
