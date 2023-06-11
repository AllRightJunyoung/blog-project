export const getIntersectionObserver = () => {
  const observer = new IntersectionObserver( // observer 생성
    (entries) => {
      console.log(entries);
    }, // callback
    options, // options
  );
  return observer;
};
