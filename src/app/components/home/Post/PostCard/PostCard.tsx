import { GridItem, Flex, Text, Box } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";

import { Image } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import type { Props } from "./PostCard.types";

const PostCard = ({ name, date, time, title }: Props) => {
  const image = faker.image.url();

  return (
    <GridItem bg="card.background" borderRadius={10}>
      <Flex direction="column">
        <Box>
          <Image
            objectFit="cover"
            alt="fake-image"
            src={image}
            border="2px solid rgb(225, 113, 139)"
            borderRadius="20px"
          />
          <Text color="white" fontSize="18px" margin={5}>
            {name}
          </Text>
        </Box>
        <Flex borderTop="1px solid #242E35">
          <Flex
            gap="5px"
            flex="1"
            paddingLeft={2}
            alignItems="center"
            textAlign="center"
            justify-content="center"
            borderRight="1px solid #242E35"
            color="rgb(199, 99, 88)"
            fontSize="16px"
            fontWeight={"bold"}
          >
            <ViewIcon />
            <Text>{title}</Text>
          </Flex>
          <Flex
            padding={{
              sm: "16px 10px",
              md: "16px 30px",
              lg: "16px 18px",
              xl: "16px 12px",
            }}
            alignItems="center"
            justify-content="center"
            borderRight="1px solid #242E35"
            color="rgb(100, 116, 139)"
            fontSize="14px"
            textAlign="center"
            gap="5px"
          >
            <CalendarIcon />
            <Text>{date}</Text>
          </Flex>
          <Flex
            padding={{
              sm: "16px 10px",
              md: "16px 30px",
              lg: "16px 18px",
              xl: "16px 12px",
            }}
            alignItems="center"
            justify-content="center"
            color="rgb(100, 116, 139)"
            fontSize="14px"
            gap="5px"
          >
            <TimeIcon />
            <Text>{time}</Text>
          </Flex>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default PostCard;
