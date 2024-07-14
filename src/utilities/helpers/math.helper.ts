/**
 * get random int from [min, max]
 */
export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * get random float from [min, max)
 */
export const getRandomFloat = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
