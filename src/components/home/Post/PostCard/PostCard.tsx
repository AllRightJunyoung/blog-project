import { GridItem, Flex, Text, Box } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon } from "@chakra-ui/icons";

import { Image } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import type { Props } from "./PostCard.types";

const PostCard = ({ name, date, time, title }: Props) => {
  const image = faker.image.url();

  return (
    <GridItem bg="card.background" borderRadius={10}>
      <Flex direction="column">
        <Flex direction="column" align="center">
          <Image
            boxSize="320"
            objectFit="cover"
            alt="fake-image"
            src={image}
            border="2px solid rgb(225, 113, 139)"
            borderRadius="20px"
          />
          <Text color="white" fontSize="18px" margin={5}>
            {name}
          </Text>
        </Flex>
        <Flex borderTop="1px solid #242E35">
          <Box
            borderRight="1px solid #242E35"
            color="rgb(199, 99, 88)"
            fontSize="14px"
            padding="16px 30px"
          >
            {title}
          </Box>
          <Flex
            justifyContent="center"
            alignItems="center"
            borderRight="1px solid #242E35"
            color="rgb(100, 116, 139)"
            fontSize="14px"
            padding="10px 40px"
            gap="3px"
          >
            <CalendarIcon />
            <Text>{date}</Text>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            color="rgb(100, 116, 139)"
            fontSize="14px"
            padding="0px 15px"
            gap="3px"
          >
            <TimeIcon />
            {time}
          </Flex>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default PostCard;
