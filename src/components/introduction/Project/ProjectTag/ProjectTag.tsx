"use client";

import { Tag, TagLabel, Tooltip } from "@chakra-ui/react";
import uuid from "react-uuid";
interface Props {
  name: string;
}

const ProjectTag = ({ name }: Props) => {
  return (
    <Tooltip label={name}>
      <Tag
        size="md"
        key={uuid()}
        variant="solid"
        background="teal"
        borderRadius={10}
      >
        <TagLabel color="color" fontSize="sm">
          {name}
        </TagLabel>
      </Tag>
    </Tooltip>
  );
};

export default ProjectTag;
