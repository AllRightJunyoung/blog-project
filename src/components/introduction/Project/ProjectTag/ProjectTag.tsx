import { Tag, TagLabel } from "@chakra-ui/react";

interface Props {
  name: string;
}

const ProjectTag = ({ name }: Props) => {
  return (
    <Tag size="md" key="md" variant="solid" background="teal" borderRadius={10}>
      <TagLabel color="color" fontSize="sm">
        {name}
      </TagLabel>
    </Tag>
  );
};

export default ProjectTag;
