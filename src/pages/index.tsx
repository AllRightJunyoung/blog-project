import Head from "next/head";
import UserProfile from "@/components/common/UserProfile";
import HeaderText from "@/components/common/HeaderText";
import SearchBar from "@/components/home/SearchBar/SearchBar";
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
    </>
  );
};

export default HomePage;
