import engine from '../engine';
import { getRandomInteger } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 * Checks if number is prime
 * @param {Number} number
 * @returns {String}
 */
const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }

  return number > 1 ? 'yes' : 'no';
};

/**
 * Retrieves data needed for game
 * @returns {Object}
 */
const getData = () => {
  const question = getRandomInteger(1, 100);
  const answer = isPrime(question);

  return { question, answer };
};

/**
 * Brain prime game
 */
const prime = () => engine(description, getData);

export default prime;
