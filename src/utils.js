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

/**
 * Finds greatest common divisor
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Number}
 */
const getGcd = (num1, num2) => {
  let x = Math.abs(num1);
  let y = Math.abs(num2);

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
};

export {
  getRandomInteger,
  getUsername,
  greet,
  say,
  isEven,
  getRandomExpression,
  getGcd,
};
