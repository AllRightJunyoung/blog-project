import { Grid, Flex, Box } from "@chakra-ui/react";
import uuid from "react-uuid";

import ProjectCard from "../ProjectCard/ProjectCard";
import { HorizontalHeading } from "@/components/shared";
import type { ProjectDataType } from "@/types/shared";

interface Props {
  data: ProjectDataType[];
}

const ProjectLayout = ({ data }: Props) => {
  return (
    <Flex direction="column" margin={10}>
      <Box marginTop={0} marginBottom={10}>
        <HorizontalHeading title="Proejcts" fontSize="3xl" />
      </Box>
      <Grid
        templateColumns={{
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap={10}
      >
        {data.map((info) => {
          return (
            <ProjectCard
              key={uuid()}
              name={info.name}
              description={info.description}
              github={info.github}
              skills={info.skills}
              image={info.image}
              portfolio={info.portfolio}
            />
          );
        })}
      </Grid>
    </Flex>
  );
};

export default ProjectLayout;
