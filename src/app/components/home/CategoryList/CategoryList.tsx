"use client";

import { HStack } from "@chakra-ui/react";
import { CategoryTag } from "../../common";
import type { CategoryListProps } from "./CategoryList.types";
import uuid from "react-uuid";

const CategoryList = ({ data }: CategoryListProps) => {
  const categories = data.map((postData) => {
    return postData.category;
  });

  return (
    <HStack spacing={3}>
      <CategoryTag name="All" key={uuid()} />
      {categories.map((category) => (
        <CategoryTag name={category} key={uuid()} />
      ))}
    </HStack>
  );
};

export default CategoryList;
