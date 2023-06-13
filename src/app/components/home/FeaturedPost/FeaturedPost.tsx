"use client";

import { Flex, Heading, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

const FeaturedPost = () => {
  return (
    <>
      <Flex direction="column" gap={5}>
        <Heading as="h2" size="xl" color="white">
          Featured Post.
        </Heading>
        <Box borderRadius="7px" border={"5px solid black"}>
          <Image objectFit="cover" src={faker.image.url()} />
        </Box>
      </Flex>
    </>
  );
};

export default FeaturedPost;
