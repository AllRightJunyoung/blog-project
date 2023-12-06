export const throttle = (func: () => void, delay: number) => {
  let waiting = false;
  return () => {
    if (waiting) return;
    waiting = true;
    setTimeout(() => {
      func();
      waiting = false;
    }, delay);
  };
};
