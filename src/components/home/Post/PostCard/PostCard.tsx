import { GridItem, Flex, Text, Divider, Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { faker } from "@faker-js/faker";
import type { Props } from "./PostCard.types";

const PostCard = ({ name, date, time, title }: Props) => {
  const image = faker.image.url();

  return (
    <GridItem h="auto" bg="card.background" borderRadius={10}>
      <Flex direction="column">
        <Flex direction="column" align="center">
          <Box width={300} height={200} position="relative" margin={3}>
            <Image
              alt="fake-image"
              src={image}
              fill={true}
              border="2px solid rgb(225, 113, 139)"
              borderRadius="20px"
            />
          </Box>
          <Text color="white" fontSize="18px" marginBottom={5}>
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
            padding="10px 50px"
          >
            {date}
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
            color="rgb(100, 116, 139)"
            fontSize="14px"
            padding="0px 16px"
          >
            {time}
          </Flex>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default PostCard;
