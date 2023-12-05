import type { TocDesktopItemProps } from "./TocDesktopItem.types";
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

const TocDesktopItem = ({
  headingElements,
  activeId,
  setActiveId,
}: TocDesktopItemProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "light" ? "light.toc.bg" : "dark.toc.bg"}
      padding="10px"
      overflowY="scroll"
      height="100vh"
    >
      <Heading
        as="h3"
        size="md"
        fontWeight="bold"
        textAlign="center"
        color="white"
        fontSize="20px"
        padding={3}
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
              fontSize="18px"
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
              paddingLeft={8}
              fontSize="16px"
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
