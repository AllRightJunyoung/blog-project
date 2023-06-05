"use client";

import { MDXComponents } from "mdx/types";
import { ResponsiveImage, CodeBlock } from "@/app/components/mdx";
import { MDXRemote } from "next-mdx-remote";
import type { MdxContentProps } from "./MdxContent.types";

const components = {
  img: ResponsiveImage,
  code: CodeBlock,
};

export const MdxContent = ({ content }: MdxContentProps) => {
  return (
    <div className="markdown-body">
      <MDXRemote components={components as MDXComponents} {...content} />
    </div>
  );
};
export default MdxContent;
