"use client";

import { useEffect, useState } from "react";
import TableOfItem from "./TableOfItem";
import TableOfItemMobile from "./TableOfItemMobile";
import { getIntersectionObserver } from "../utils/observer";

type Props = {
  headingElements: Element[];
  isSmallerThan960: boolean;
};

const TableOfContents = ({ headingElements, isSmallerThan960 }: Props) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
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
