"use client";
import type { CategoryTagProps } from "./CategoryTag.types";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CategoryTagState, currentPageState } from "@/app/recoil/home";
import { Tag, TagLabel } from "@chakra-ui/react";

const CategoryTag = ({ name }: CategoryTagProps) => {
  const [categoryTag, setCategoryTag] = useRecoilState(CategoryTagState);
  const setCurrentPage = useSetRecoilState(currentPageState);

  const handleTag = () => {
    setCategoryTag(name);
    setCurrentPage(1);
  };

  return (
    <Tag
      size="lg"
      key="lg"
      variant="solid"
      background={
        categoryTag === name
          ? "tag.active.background"
          : "tag.inactive.background"
      }
      borderRadius={10}
      cursor="pointer"
      onClick={handleTag}
    >
      <TagLabel
        color={
          categoryTag === name
            ? "tag.active.fontColor"
            : "tag.inactive.fontColor"
        }
        fontSize="md"
      >
        {name}
      </TagLabel>
    </Tag>
  );
};
export default CategoryTag;
