export const getRandomNumber = () => {
  let num: number;
  do {
    num = Math.floor(Math.random() * 10) + 1;
  } while (num === 1 || num === 4);
  return num;
};
