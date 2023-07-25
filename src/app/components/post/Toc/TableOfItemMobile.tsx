import { Heading, Box, ListItem, Link, List } from "@chakra-ui/react";
import uuid from "react-uuid";
import type { TableOfItemProps } from "./TableOfItem.types";

interface TableOfItemMobileProps extends TableOfItemProps {
  isActiveMobileUI: boolean;
}

const TableOfItemMobile = ({
  headingElements,
  activeId,
  setActiveId,
  isActiveMobileUI,
}: TableOfItemMobileProps) => {
  return isActiveMobileUI ? (
    <Box
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
      <Box bg="#141E25" border="1px solid white" borderRadius="md">
        <Heading
          as="h3"
          size="md"
          fontWeight="bold"
          textAlign="center"
          color="white"
          fontSize="20px"
          padding="1.5rem"
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
                padding={3}
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
                paddingLeft={10}
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
  ) : (
    <></>
  );
};

export default TableOfItemMobile;
