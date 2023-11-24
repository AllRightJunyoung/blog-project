"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CalendarIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import { GridItem, Flex, Text, Box } from "@chakra-ui/react";
import type { PostCardProps } from "./PostCard.types";

const PostCard = ({
  title,
  date,
  diffDate,
  category,
  thumbnail,
  slug,
  style,
}: PostCardProps) => {
  const router = useRouter();

  return (
    <motion.div
      style={style}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <GridItem
        bg="card.background"
        borderRadius={10}
        cursor="pointer"
        onClick={() => router.push(`/posts/${slug}`)}
      >
        <Flex direction="column">
          <Box>
            <Box display="flex" flexDirection="column">
              <Image
                alt={title}
                src={thumbnail}
                sizes="100vw"
                width={300}
                height={200}
                priority={true}
                style={{
                  width: "100%",
                  height: "auto",
                  border: "2px solid gray",
                  borderRadius: "20px",
                }}
              />
            </Box>
            <Text color="white" fontSize="18px" margin={5}>
              {title}
            </Text>
          </Box>
          <Flex
            borderTop="1px solid #242E35"
            height={{
              base: "40px",
            }}
          >
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
              <Text>{category}</Text>
            </Flex>
            <Flex
              padding={{
                base: "16px 12px",
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
                base: "16px 12px",
              }}
              alignItems="center"
              justify-content="center"
              color="rgb(100, 116, 139)"
              fontSize="14px"
              gap="5px"
            >
              <TimeIcon />
              <Text>{diffDate}</Text>
            </Flex>
          </Flex>
        </Flex>
      </GridItem>
    </motion.div>
  );
};

export default PostCard;
