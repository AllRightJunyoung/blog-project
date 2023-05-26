import Head from "next/head";
import {
  UserProfile,
  HeaderText,
  PostTags,
  SnsIcons,
} from "@/components/common";
import { Pagination, PostCards, SearchBar } from "@/components/home";

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
      <HeaderText title="Posts" fontSize="3xl" />
      <SearchBar />
      <PostTags />
      <PostCards />
      <Pagination />
      <SnsIcons />
    </>
  );
};

export default HomePage;
