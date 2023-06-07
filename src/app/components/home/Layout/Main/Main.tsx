"use client";

import { Box } from "@chakra-ui/react";
import { PostCardSection, SearchBar } from "@/app/components/home";

import { Heading, PostTagSection } from "@/app/components/common";
import { MainProps } from "./Main.types";

const Main = ({ data }: MainProps) => {
  const categoryList = data.map((postData) => {
    return postData.category;
  });

  return (
    <Box margin={10}>
      <Heading title="Posts" fontSize="3xl" />
      <SearchBar />
      <Box marginTop={1} marginBottom={8}>
        <PostTagSection tags={categoryList} />
      </Box>
      <PostCardSection data={data} />
    </Box>
  );
};
export default Main;
