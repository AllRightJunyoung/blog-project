import { Box } from "@chakra-ui/react";
import { SearchBar, PostCards } from "@/components/home";
import { Heading, PostTags } from "@/components/common";

const Main = () => {
  return (
    <Box margin={10}>
      <Heading title="Posts" fontSize="3xl" />
      <SearchBar />
      <PostTags />
      <PostCards />
    </Box>
  );
};
export default Main;
