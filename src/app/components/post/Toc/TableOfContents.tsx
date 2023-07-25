"use client";

import { useEffect, useRef, useState } from "react";
import TableOfItem from "./TableOfItem";
import TableOfItemMobile from "./TableOfItemMobile";
import { getIntersectionObserver } from "../utils/observer";
import { useRecoilValue } from "recoil";
import { TocResoultionState } from "../recoil";

const TableOfContents = () => {
  const [headingElements, setHeadingElements] = useState<Element[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const isSmallerThan960 = useRecoilValue(TocResoultionState);

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
