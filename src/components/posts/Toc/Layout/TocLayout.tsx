"use client";
import type { TocLayoutProps } from "./TocLayout.types";
import { useEffect, useState } from "react";
import { getIntersectionObserver } from "@/utils/posts/observer";
import TableOfItem from "../TocDesktopItem/TocDesktopItem";
import TableOfItemMobile from "../TocMobileItem/TocMobileItem";
import { Flex } from "@chakra-ui/react";
import ToolBox from "../ToolBox/ToolBox";

const TocLayout = ({ isSmallerThan960 }: TocLayoutProps) => {
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
export default TocLayout;
