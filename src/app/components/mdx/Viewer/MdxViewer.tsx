import { MDXProvider } from "@mdx-js/react";
import type { MDXProps } from "./MdxViewer.types";
import { MDXComponents } from "mdx/types";
import ResponsiveImage from "../Image/Image";
import { LI, OL, UL } from "../LIST/LIST";
import { H1, H2, H3, H4, H5, H6 } from "../Heading/Heading";

const components = {
  img: ResponsiveImage,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  li: LI,
  ol: OL,
  ul: UL,
};

const MdxViewer = ({ children }: MDXProps) => {
  return (
    <>
      <MDXProvider>
        <div className="markdown-body">{children}</div>
      </MDXProvider>
    </>
  );
};
