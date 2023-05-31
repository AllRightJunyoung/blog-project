import { ListItem, UnorderedList, OrderedList } from "@chakra-ui/react";

export const LI = (children: React.ReactNode) => {
  return <ListItem>{children}</ListItem>;
};
export const OL = (children: React.ReactNode) => {
  return <OrderedList>{children}</OrderedList>;
};

export const UL = (children: React.ReactNode) => {
  return <UnorderedList>{children}</UnorderedList>;
};
