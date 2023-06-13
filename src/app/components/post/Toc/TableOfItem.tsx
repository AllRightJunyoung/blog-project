import { Heading, Box, ListItem, Link, List } from "@chakra-ui/react";

import uuid from "react-uuid";
import { Dispatch, SetStateAction } from "react";

type Props = {
  headingElements: Element[];
  activeId: string;
  setActiveId: Dispatch<SetStateAction<string>>;
};

const TableOfItem = ({ headingElements, activeId, setActiveId }: Props) => {
  return (
    <Box bg="#141E25">
      <Heading
        as="h3"
        size="md"
        fontWeight="bold"
        textAlign="center"
        color="white"
        fontSize="16px"
        padding={3}
      >
        ON THIS PAGE
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
              fontSize="14px"
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
              fontSize="12px"
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
  );
};

export default TableOfItem;
