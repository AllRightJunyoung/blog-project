import Head from "next/head";
import {
  UserProfile,
  HeaderText,
  PostTags,
  SnsIcons,
} from "@/components/common";
import {
  Pagination,
  PostCards,
  SearchBar,
  FooterMessage,
} from "@/components/home";
import { Box, Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>준영 블로그</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <UserProfile />
      <Box>
        <HeaderText title="Posts" fontSize="3xl" />
        <SearchBar />
        <PostTags />
        <PostCards />
      </Box>
      <Flex direction="column" alignItems="center">
        <Pagination />
        <SnsIcons />
        <FooterMessage />
      </Flex>
    </>
  );
};

export default HomePage;
