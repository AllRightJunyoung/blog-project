"use client";

import { ProjectDataType } from "@/types/introduction";

import uuid from "react-uuid";
import { LinkIcon, InfoOutlineIcon, ViewIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import NextLink from "next/link";

import {
  Box,
  Flex,
  GridItem,
  Text,
  useColorMode,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import ProjectTag from "../ProjectTag";

const ProjectCard = ({
  name,
  description,
  skills,
  image,
  github,
  portfolio,
}: ProjectDataType) => {
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
            alt={description}
            src={image}
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
            marginTop={2}
            gap={2}
            fontSize="lg"
            padding={2}
            alignItems="center"
            color="white"
          >
            <InfoOutlineIcon />
            <Text>{name}</Text>
          </Flex>
        </Box>

        <Flex gap={1} padding={2} marginBottom={0}>
          {skills.map((name) => {
            return <ProjectTag key={uuid()} name={name} />;
          })}
        </Flex>
        <Flex
          fontSize="md"
          padding={2}
          height={10}
          justifyContent="space-around"
          alignItems="center"
          color="white"
        >
          <Flex gap={3} alignItems="center">
            <ViewIcon color="red.400" />
            <Tooltip label={description} fontSize="sm" bg="teal.400">
              <Text>Motivation</Text>
            </Tooltip>
          </Flex>

          <Link as={NextLink} href={portfolio}>
            <Flex gap={1} alignItems="center">
              <LinkIcon />
              <Text>상세 보기</Text>
            </Flex>
          </Link>

          <Link as={NextLink} href={github} target="_blank">
            <Flex gap={1} alignItems="center">
              <Image
                src={
                  colorMode === "light"
                    ? "/icons/github.svg"
                    : "/icons/githubdark.svg"
                }
                width={30}
                height={30}
                alt="github-icon"
              />
              <Text>Github</Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </GridItem>
  );
};
export default ProjectCard;
