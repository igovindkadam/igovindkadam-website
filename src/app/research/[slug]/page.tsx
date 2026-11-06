import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "katex/dist/katex.min.css";
import { ArticleLayout } from "@/components/research/article-layout";
import {
  getContentSlugs,
  getResearchEntry,
  getVisibleResearchMeta,
} from "@/lib/content";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getContentSlugs("research").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getResearchEntry(slug);
    return {
      title: meta.title,
      description: meta.abstract ?? meta.subtitle ?? `Research entry by ${meta.author}.`,
      keywords: meta.keywords,
      openGraph: {
        type: "article",
        title: meta.title,
        description: meta.abstract ?? meta.subtitle,
        publishedTime: meta.created,
        modifiedTime: meta.updated,
        authors: [meta.author],
      },
    };
  } catch {
    return { title: "Research entry" };
  }
}

/** Reusable research article template driven by src/content/research. */
export default async function ResearchArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  let entry;
  try {
    entry = await getResearchEntry(slug);
  } catch {
    notFound();
  }
  const visible = await getVisibleResearchMeta();
  const related = visible
    .filter(
      (item) =>
        item.slug !== slug &&
        item.domains.some((domain) => entry.meta.domains.includes(domain)),
    )
    .slice(0, 4);

  return <ArticleLayout entry={entry} related={related} />;
}
