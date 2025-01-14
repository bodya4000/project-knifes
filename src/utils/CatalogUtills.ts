export const debounceFunction = (
  callback: (_: number | undefined, __: number | undefined) => void, 
  delay: number = 500
) => {
  let timer: NodeJS.Timeout | null = null;

  return (...args: [number | undefined, number | undefined]) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      callback(...args); 
    }, delay);
  };
};
