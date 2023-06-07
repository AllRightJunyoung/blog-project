"use client";

import { HStack } from "@chakra-ui/react";
import { PostTag } from "../../common";
import type { CategoryListProps } from "./CategoryList.types";
import uuid from "react-uuid";

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <HStack spacing={3}>
      <PostTag name="All" active={true} key={uuid()} />
      {categories.map((category) => (
        <PostTag name={category} active={false} key={uuid()} />
      ))}
    </HStack>
  );
};

export default CategoryList;
