"use client";

import { Box } from "@chakra-ui/react";
import {
  CategoryList,
  PostCardSection,
  SearchBar,
} from "@/app/components/home";

import { Heading } from "@/app/components/common";
import { MainProps } from "./Main.types";
import { RecoilRoot } from "recoil";

const Main = ({ data }: MainProps) => {
  const categoryList = data.map((postData) => {
    return postData.category;
  });

  return (
    <RecoilRoot>
      <Box margin={10}>
        <Heading title="Posts" fontSize="3xl" />
        <SearchBar />
        <Box marginTop={1} marginBottom={8}>
          <CategoryList categories={categoryList} />
        </Box>
        <PostCardSection data={data} />
      </Box>
    </RecoilRoot>
  );
};
export default Main;
