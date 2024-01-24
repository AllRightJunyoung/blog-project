import { Grid, Flex, Box } from "@chakra-ui/react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { HorizontalHeading } from "@/components/shared";

const ProjectLayout = () => {
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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Grid>
    </Flex>
  );
};

export default ProjectLayout;
