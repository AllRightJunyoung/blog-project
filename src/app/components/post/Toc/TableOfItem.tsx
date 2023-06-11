import {
  Heading,
  Box,
  UnorderedList,
  ListItem,
  Link,
  List,
} from "@chakra-ui/react";

import uuid from "react-uuid";

type Props = {
  headingElements: Element[];
  activeId?: string;
};

const TableOfItem = ({ headingElements, activeId }: Props) => {
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
            >
              <Link href={`#${el.id}`}> {el.innerHTML}</Link>
            </ListItem>
          ) : (
            <ListItem
              key={uuid()}
              color="#9FD5D5"
              fontWeight="bold"
              paddingLeft={8}
              fontSize="12px"
            >
              <Link href={`#${el.id}`}>{el.innerHTML}</Link>
            </ListItem>
          ),
        )}
      </List>
    </Box>
  );
};

export default TableOfItem;
