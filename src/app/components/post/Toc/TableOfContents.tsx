"use client";

import { useEffect, useState } from "react";
import TableOfItem from "./TableOfItem";
import { Box } from "@chakra-ui/react";
import { getIntersectionObserver } from "../utils/observer";

const TableOfContents = () => {
  const [headingElements, setHeadingElements] = useState<Element[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (article) {
      const headingElements = Array.from(article.querySelectorAll("h1,h2"));
      setHeadingElements(headingElements);
      setActiveId(headingElements[0].id);
      const observer = getIntersectionObserver(setActiveId);

      headingElements.map((element) => {
        observer.observe(element);
      });
    }
  }, []);

  return (
    <section>
      <Box
        bg="white"
        overflowY="scroll"
        position="sticky"
        height="100vh"
        top={1}
      >
        <TableOfItem
          headingElements={headingElements}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </Box>
    </section>
  );
};
export default TableOfContents;
