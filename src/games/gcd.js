import engine from '../engine';
import { getRandomInteger } from '../utils';

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

/**
 * Brain gcd game
 */
const gcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getData = () => {
    const num1 = getRandomInteger(1, 100);
    const num2 = getRandomInteger(1, 100);
    const question = `${num1} ${num2}`;
    const result = String(getGcd(num1, num2));

    return { question, result };
  };

  engine(description, getData);
};

export default gcd;
