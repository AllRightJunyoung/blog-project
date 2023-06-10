"use client";

import { useEffect, useState } from "react";

const TableOfContents = () => {
  const [headingElements, setHeadingElements] = useState<Element[]>();
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (article) {
      const headingElements = Array.from(article.querySelectorAll("h2,h3"));
      setHeadingElements(headingElements);
    }
  }, []);
};
export default TableOfContents;
