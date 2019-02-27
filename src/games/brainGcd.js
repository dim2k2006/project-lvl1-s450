import engine from '../engine';
import { getRandomInteger, getGcd } from '../utils';

/**
 * Brain gcd game
 */
const brainGcd = () => {
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

export default brainGcd;
