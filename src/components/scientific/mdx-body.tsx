"use client";

import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMDXComponents } from "@/mdx-components";

/** Client renderer for serialized MDX bodies with site element mapping. */
export function MdxBody({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote {...source} components={useMDXComponents({})} />;
}
