import { Text, Box, OrderedList, ListItem, Link } from "@chakra-ui/react";

import uuid from "react-uuid";

type Props = {
  headingElements: Element[];
  activeId?: string;
};

const TableOfItem = ({ headingElements, activeId }: Props) => {
  return (
    <Box>
      <Text>Toc</Text>
      <OrderedList>
        {headingElements.map((el, index) =>
          el.nodeName === "H2" ? (
            <ListItem key={uuid()} color="red.500">
              <Link href={`#${el.id}`}> {el.innerHTML}</Link>
            </ListItem>
          ) : (
            <ListItem key={uuid()}>
              <Link href={`#${el.id}`}>{el.innerHTML}</Link>
            </ListItem>
          ),
        )}
      </OrderedList>
    </Box>
  );
};

export default TableOfItem;
