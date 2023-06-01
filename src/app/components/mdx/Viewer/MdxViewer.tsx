import { MDXProvider } from "@mdx-js/react";
import type { MDXProps } from "./MdxViewer.types";
import { MDXComponents } from "mdx/types";
import { ResponsiveImage, CodeBlock } from "@/app/components/mdx";

const components = {
  img: ResponsiveImage,
  code: CodeBlock,
};

const MdxViewer = ({ children }: MDXProps) => {
  return (
    <>
      <MDXProvider components={components as MDXComponents}>
        <div className="markdown-body">{children}</div>
      </MDXProvider>
    </>
  );
};
