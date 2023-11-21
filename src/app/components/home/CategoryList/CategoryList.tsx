"use client";
import uuid from "react-uuid";
import CategoryTag from "../CategoryTag";
import { HStack } from "@chakra-ui/react";
import type { CategoryListProps } from "./CategoryList.types";

const CategoryList = ({ data }: CategoryListProps) => {
  let categories = data.map((postData) => {
    return postData.category;
  });
  categories = Array.from(new Set(categories));

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
