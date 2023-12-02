"use client";
import { MainProps } from "./Main.types";
import { Box, Flex } from "@chakra-ui/react";
import {
  CategoryList,
  Pagination,
  PostCardSection,
  SearchBar,
} from "@/components/home";
import { HorizontalHeading } from "@/components/shared";

const Main = ({ data }: MainProps) => {
  return (
    <Box margin={10} as="main">
      <HorizontalHeading title="Posts" fontSize="4xl" />
      <SearchBar />
      <Box marginTop={1} marginBottom={8}>
        <CategoryList data={data} />
      </Box>
      <PostCardSection data={data} />
      <Flex
        marginTop={10}
        marginBottom={5}
        direction="column"
        alignItems="center"
      >
        <Pagination />
      </Flex>
    </Box>
  );
};
export default Main;
