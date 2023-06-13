"use client";

import { Box } from "@chakra-ui/react";
import {
  CategoryList,
  PostCardSection,
  SearchBar,
} from "@/app/components/home";

import { Heading } from "@/app/components/common";
import { MainProps } from "./Main.types";

const Main = ({ data }: MainProps) => {
  return (
    <Box margin={10}>
      <Heading title="Posts" fontSize="4xl" />
      <SearchBar />
      <Box marginTop={1} marginBottom={8}>
        <CategoryList data={data} />
      </Box>
      <PostCardSection data={data} />
    </Box>
  );
};
export default Main;
