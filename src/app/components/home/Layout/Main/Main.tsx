"use client";

import { Box } from "@chakra-ui/react";
import { SearchBar, PostCards } from "@/app/components/home";
import { Heading, PostTags } from "@/app/components/common";
import { MainProps } from "./Main.types";

const Main = ({ data }: MainProps) => {
  return (
    <Box margin={10}>
      <Heading title="Posts" fontSize="3xl" />
      <SearchBar />
      {/* <PostTags /> */}
      <PostCards data={data}/>
    </Box>
  );
};
export default Main;
