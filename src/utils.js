/**
 * Generates random number
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
const getRandomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  const result = Math.round(rand);

  return result;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getRandomInteger,
};
