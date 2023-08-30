import { Heading, Box, ListItem, Link, List } from "@chakra-ui/react";
import uuid from "react-uuid";
import type { TableOfItemProps } from "./TableOfItem.types";

const TableOfItem = ({
  headingElements,
  activeId,
  setActiveId,
}: TableOfItemProps) => {
  return (
    <Box bg="white" overflowY="scroll" position="sticky" height="100vh" top={1}>
      <Box bg="#141E25" padding="10px">
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
                color="#FF8945"
                fontWeight="bold"
                mt={5}
                padding={2}
                fontSize="18px"
                borderLeft={`${el.id === activeId ? `5px solid teal` : "none"}`}
              >
                <Link href={`#${el.id}`} onClick={() => setActiveId(el.id)}>
                  {el.innerHTML}
                </Link>
              </ListItem>
            ) : (
              <ListItem
                key={uuid()}
                color="#9FD5D5"
                fontWeight="bold"
                paddingLeft={8}
                fontSize="16px"
                borderLeft={`${el.id === activeId ? `5px solid teal` : "none"}`}
              >
                <Link href={`#${el.id}`} onClick={() => setActiveId(el.id)}>
                  {el.innerHTML}
                </Link>
              </ListItem>
            ),
          )}
        </List>
      </Box>
    </Box>
  );
};

export default TableOfItem;
