import { Highlight, themes } from "prism-react-renderer";
import defaultProps from "prism-react-renderer";
import type { CodeBlockProps } from "./CodeBlock.types";

const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const language = className.replace(/language-/, "");

  return (
    <Highlight
      theme={themes.github}
      {...defaultProps}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
