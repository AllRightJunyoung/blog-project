"use client";

import { useEffect, useState } from "react";
import TableOfItem from "./TableOfItem";
import TableOfItemMobile from "./TableOfItemMobile";
import { getIntersectionObserver } from "../../../utils/posts/observer";
import { Flex } from "@chakra-ui/react";
import ToolBox from "./ToolBox";

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
    <aside style={{ marginLeft: "10px" }}>
      {!isSmallerThan960 ? (
        <Flex direction="column" margin={10} position="sticky" top={1}>
          <TableOfItem
            headingElements={headingElements}
            activeId={activeId}
            setActiveId={setActiveId}
          />
          <ToolBox />
        </Flex>
      ) : (
        <TableOfItemMobile
          headingElements={headingElements}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      )}
    </aside>
  );
};
export default TableOfContents;
