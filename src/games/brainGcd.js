import engine from '../engine';
import { getRandomInteger, getGcd } from '../utils';

/**
 * Brain gcd game
 */
const brainGcd = () => {
  const gameConditions = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => {
    const num1 = getRandomInteger(1, 100);
    const num2 = getRandomInteger(1, 100);

    return `${num1} ${num2}`;
  };
  const checkResult = (string) => {
    const [num1, num2] = string.split(' ');

    const result = getGcd(num1, num2);

    return String(result);
  };

  const game = engine(gameConditions, getQuestion, checkResult);

  game();
};

export default brainGcd;
