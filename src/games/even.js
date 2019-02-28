import engine from '../engine';
import { getRandomInteger } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

/**
 * Checks if number is even
 * @param {Number} number
 * @returns {Boolean}
 */
const isEven = number => number % 2 === 0;

/**
 * Retrieves data needed for game
 * @returns {Object}
 */
const getData = () => {
  const question = getRandomInteger(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};

/**
 * Brain even game
 */
const even = () => engine(description, getData);

export default even;
