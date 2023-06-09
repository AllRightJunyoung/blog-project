import { Tag, TagLabel } from "@chakra-ui/react";
import type { CategoryTagProps } from "./CategoryTag.types";
import { useRecoilState } from "recoil";
import { CategoryTagState } from "@/app/recoil/atoms";

const CategoryTag = ({ name }: CategoryTagProps) => {
  const [categoryTag, setCategoryTag] = useRecoilState(CategoryTagState);

  const handleTag = () => {
    setCategoryTag(name);
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
