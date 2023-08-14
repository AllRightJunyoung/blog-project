"use client";

import { useEffect, useState } from "react";
import TableOfItem from "./TableOfItem";
import TableOfItemMobile from "./TableOfItemMobile";
import { getIntersectionObserver } from "../utils/observer";

type Props = {
  isSmallerThan960: boolean;
};

const TableOfContents = ({ isSmallerThan960 }: Props) => {
  const [headingElements, setHeadingElements] = useState<Element[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;
    const headingElements = Array.from(article.querySelectorAll("h1,h2"));
    setHeadingElements(headingElements);
    setActiveId(headingElements[0].id);
    const observer = getIntersectionObserver(setActiveId);
    headingElements.map((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <section>
      {!isSmallerThan960 ? (
        <TableOfItem
          headingElements={headingElements}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ) : (
        <TableOfItemMobile
          headingElements={headingElements}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      )}
    </section>
  );
};
export default TableOfContents;
