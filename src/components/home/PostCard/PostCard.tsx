"use client";

import type { MotionStyle } from "framer-motion";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CalendarIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import {
  GridItem,
  Flex,
  Heading,
  Box,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { PostCardType } from "../../../types/home/index";

interface Props extends PostCardType {
  style?: MotionStyle;
  blurURL: string;
  diffDate: string;
}

const PostCard = ({
  title,
  date,
  diffDate,
  category,
  thumbnail,
  slug,
  style,
  blurURL,
}: Props) => {
  const router = useRouter();
  const { colorMode } = useColorMode();

  const handleClick = () => {
    router.push(`/posts/${slug}`);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      router.push(`/posts/${slug}`);
    }
  };

  return (
    <motion.div
      style={style}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <GridItem
        bg={
          colorMode === "light"
            ? "light.card.background"
            : "dark.card.background"
        }
        borderRadius={10}
        cursor="pointer"
      >
        <Flex direction="column" fontWeight="bold">
          <Box>
            <Box display="flex" flexDirection="column">
              <Image
                alt="게시글 썸네일"
                src={thumbnail}
                sizes="100vw"
                width={300}
                height={200}
                priority={true}
                placeholder="blur"
                blurDataURL={blurURL}
                style={{
                  width: "100%",
                  height: "auto",
                  border: "2px solid gray",
                  borderRadius: "20px",
                }}
              />
            </Box>
            <Heading color="white" fontSize="18px" margin={5}>
              {title}
            </Heading>
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
              color={
                colorMode === "light"
                  ? "light.card.fontColor"
                  : "dark.card.fontColor"
              }
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
              color={
                colorMode === "light"
                  ? "light.card.fontColor"
                  : "dark.card.fontColor"
              }
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
