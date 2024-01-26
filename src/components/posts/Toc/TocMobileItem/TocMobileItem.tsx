"use client";

import { Dispatch, SetStateAction } from "react";
import {
  Heading,
  Box,
  ListItem,
  Link,
  List,
  useColorMode,
} from "@chakra-ui/react";
import uuid from "react-uuid";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import { TocModalState } from "@/recoil/posts";
import ToolBox from "../ToolBox";

interface Props {
  headingElements: Element[];
  activeId: string;
  setActiveId: Dispatch<SetStateAction<string>>;
}

const TocMobileItem = ({ headingElements, activeId, setActiveId }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const activeTocModal = useRecoilValue(TocModalState);

  const { colorMode } = useColorMode();

  return activeTocModal ? (
    <Box
      ref={ref}
      zIndex={20}
      position="fixed"
      top={0}
      right={0}
      bottom={0}
      left={0}
      margin="auto"
      maxHeight="75%"
      width="80%"
      paddingLeft={2}
      overflowY="scroll"
    >
      <Box
        bg={colorMode === "light" ? "light.toc.bg" : "dark.toc.bg"}
        border="1px solid white"
        borderRadius="md"
      >
        <Heading
          as="h3"
          size="md"
          fontWeight="bold"
          textAlign="center"
          color="white"
          fontSize="lg"
          padding="1.5rem"
        >
          목차
        </Heading>
        <List>
          {headingElements.map((el, index) =>
            el.nodeName === "H1" ? (
              <ListItem
                key={uuid()}
                color={
                  colorMode === "light"
                    ? "light.toc.h1Color"
                    : "dark.toc.h1Color"
                }
                fontWeight="bold"
                mt={5}
                padding={3}
                fontSize="md"
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
                  colorMode === "light"
                    ? "light.toc.h2Color"
                    : "dark.toc.h2Color"
                }
                fontWeight="bold"
                paddingLeft={10}
                fontSize="md"
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
    </Box>
  ) : (
    <></>
  );
};

export default TocMobileItem;
