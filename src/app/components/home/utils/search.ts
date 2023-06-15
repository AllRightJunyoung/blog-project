export const getSearchPost = (input: string, posts: any[]) => {
  const searchPosts = [];

  posts.forEach((post) => {
    const searchInput = input;
    const postTitle = String(post.title);
    const isValid = postTitle.search(new RegExp(searchInput, "i"));

    if (isValid !== -1) {
      searchPosts.push(post);
    }
  });
  return searchPosts;
};
