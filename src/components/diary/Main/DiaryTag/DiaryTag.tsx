"use client";

import uuid from "react-uuid";
import { Tag, TagLabel } from "@chakra-ui/react";

interface Props {
  year: number;
  month: number;
}

const DiaryTag = ({ year, month }: Props) => {
  return (
    <Tag
      size="lg"
      key={uuid()}
      variant="solid"
      background="teal"
      cursor="pointer"
    >
      <TagLabel color="white" fontSize="md">
        {year}-{month}
      </TagLabel>
    </Tag>
  );
};
export default DiaryTag;
