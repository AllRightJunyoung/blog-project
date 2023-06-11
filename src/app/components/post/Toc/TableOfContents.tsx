"use client";

import { useEffect, useState } from "react";
import TableOfItem from "./TableOfItem";
import { Box } from "@chakra-ui/react";

const TableOfContents = () => {
  const [headingElements, setHeadingElements] = useState<Element[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (article) {
      const headingElements = Array.from(article.querySelectorAll("h1,h2"));
      setHeadingElements(headingElements);
    }
  }, []);

  return (
    <section>
      <Box
        width="20vw"
        bg="white"
        height="90vh"
        overflowY="scroll"
        position="sticky"
        top={14}
      >
        <TableOfItem headingElements={headingElements} />
      </Box>
    </section>
  );
};
export default TableOfContents;
