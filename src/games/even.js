import engine from '../engine';
import { getRandomInteger } from '../utils';

/**
 * Checks if number is even
 * @param {Number} number
 * @returns {String}
 */
const isEven = (number) => {
  const result = (number % 2 === 0) ? 'yes' : 'no';

  return result;
};

/**
 * Brain even game
 */
const even = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const getData = () => {
    const question = getRandomInteger(1, 100);
    const result = isEven(question);

    return { question, result };
  };

  engine(description, getData);
};

export default even;
