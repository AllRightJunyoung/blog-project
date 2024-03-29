"use client";

import { Dispatch, SetStateAction } from "react";
import uuid from "react-uuid";
import {
  Heading,
  Box,
  ListItem,
  Link,
  List,
  useColorMode,
} from "@chakra-ui/react";
import ToolBox from "../ToolBox";

interface Props {
  headingElements: Element[];
  activeId: string;
  setActiveId: Dispatch<SetStateAction<string>>;
}

const TocDesktopItem = ({ headingElements, activeId, setActiveId }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "light.toc.bg" : "dark.toc.bg"}
      padding={3}
      overflowY="scroll"
      height="100vh"
    >
      <Heading
        as="h3"
        size="md"
        fontWeight="bold"
        textAlign="center"
        color="white"
        fontSize={{ base: "lg" }}
      >
        목차
      </Heading>
      <List>
        {headingElements.map((el, index) =>
          el.nodeName === "H1" ? (
            <ListItem
              key={uuid()}
              color={
                colorMode === "light" ? "light.toc.h1Color" : "dark.toc.h1Color"
              }
              fontWeight="bold"
              mt={5}
              padding={2}
              fontSize={{
                base: "md",
              }}
              borderLeft={`${el.id === activeId ? `5px solid` : "none"}`}
              borderColor={
                colorMode === "light"
                  ? "light.toc.quoteColor"
                  : "dark.toc.quoteColor"
              }
            >
              <Link href={`#${el.id}`} onClick={() => setActiveId(el.id)}>
                {el.innerHTML}
              </Link>
            </ListItem>
          ) : (
            <ListItem
              key={uuid()}
              color={
                colorMode === "light" ? "light.toc.h2Color" : "dark.toc.h2Color"
              }
              fontWeight="bold"
              paddingLeft={5}
              fontSize={{
                base: "md",
              }}
              borderLeft={`${el.id === activeId ? `5px solid` : "none"}`}
              borderColor={
                colorMode === "light"
                  ? "light.toc.quoteColor"
                  : "dark.toc.quoteColor"
              }
            >
              <Link href={`#${el.id}`} onClick={() => setActiveId(el.id)}>
                {el.innerHTML}
              </Link>
            </ListItem>
          ),
        )}
      </List>
      <ToolBox />
    </Box>
  );
};

export default TocDesktopItem;
