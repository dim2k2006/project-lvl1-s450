import engine from '../engine';
import { getRandomInteger } from '../utils';

/**
 * Checks if number is prime
 * @param {Number} number
 * @returns {String}
 */
const isPrime = (number) => {
  const result = (number % 2 === 0) ? 'yes' : 'no';

  return result;
};

/**
 * Brain prime game
 */
const prime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getData = () => {
    const question = getRandomInteger(1, 100);
    const result = isPrime(question);

    return { question, result };
  };

  engine(description, getData);
};

export default prime;
