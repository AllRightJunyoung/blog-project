"use client";

import { Box } from "@chakra-ui/react";
import { PostCardSection, SearchBar } from "@/app/components/home";

import { Heading, PostTags } from "@/app/components/common";
import { MainProps } from "./Main.types";

const Main = ({ data }: MainProps) => {
  // const postTagList=data.map((postData)=>{
  //   postData.tags
  // })

  return (
    <Box margin={10}>
      <Heading title="Posts" fontSize="3xl" />
      <SearchBar />
      {/* <PostTags /> */}
      <PostCardSection data={data} />
    </Box>
  );
};
export default Main;
