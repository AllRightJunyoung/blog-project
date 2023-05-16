import Head from "next/head";

import UserProfile from "@/components/common/UserProfile";

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
    </>
  );
};

export default HomePage;
