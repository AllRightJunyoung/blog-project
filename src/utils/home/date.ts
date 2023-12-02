export const getDiffDate = (postDate: string) => {
  const newPostDate = new Date(postDate);
  const today = new Date();

  let diffDate = newPostDate.getTime() - today.getTime();
  diffDate = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24)));

  const diffDateString = diffDate.toString() + "일전";

  return diffDateString;
};
