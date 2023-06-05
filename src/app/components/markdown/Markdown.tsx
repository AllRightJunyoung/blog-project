import ReactMarkdown from "react-markdown";
import type { MarkdownProps } from "./Markdown.types";

const MarkDown = ({ children }: MarkdownProps) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
};

export default MarkDown;
