import { LinkIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, GridItem, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import ProjectTag from "../ProjectTag";

const ProjectCard = () => {
  const { colorMode } = useColorMode();
  return (
    <GridItem
      bg={
        colorMode === "light" ? "light.card.background" : "dark.card.background"
      }
      borderRadius="10px"
    >
      <Flex direction="column" fontWeight="bold">
        <Box display="flex" flexDirection="column">
          <Image
            alt=""
            src="https://placehold.co/300x200"
            sizes="100vw"
            width={150}
            height={100}
            style={{
              width: "100%",
              height: "auto",
              border: "1px solid gray",
              borderRadius: "7px",
            }}
          />
        </Box>
        <Box>
          <Flex
            gap={1}
            fontSize="lg"
            padding={2}
            alignItems="center"
            color="white"
          >
            <InfoOutlineIcon />
            <Text>프로젝트 제목</Text>
          </Flex>
        </Box>

        <Flex gap={2} padding={2} marginBottom={0}>
          <ProjectTag name="Next.js" />
          <ProjectTag name="TypeScript" />
        </Flex>

        <Flex
          fontSize="md"
          padding={2}
          height={10}
          gap={5}
          alignItems="center"
          color="white"
        >
          <Flex gap={1} alignItems="center">
            <LinkIcon />
            <Text>상세 내용</Text>
          </Flex>

          <Flex gap={1} alignItems="center">
            <Image
              src={
                colorMode === "light"
                  ? "icons/profile/github"
                  : "icons/profile/githubdark"
              }
              width={30}
              height={30}
              alt="github-icon"
            />
            <Text>Github</Text>
          </Flex>
        </Flex>
      </Flex>
    </GridItem>
  );
};
export default ProjectCard;
