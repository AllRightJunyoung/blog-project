import { MDXProvider } from "@mdx-js/react";
import type { MDXProps } from "./MdxViewer.types";
import { MDXComponents } from "mdx/types";

const MdxViewer = ({ children }: MDXProps) => {
  return (
    <>
      <MDXProvider>{children}</MDXProvider>
    </>
  );
};
