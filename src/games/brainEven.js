import engine from '../engine';
import { getRandomInteger, isEven } from '../utils';

/**
 * Brain even game
 */
const brainEven = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const getQuestion = () => getRandomInteger(1, 100);
  const checkResult = question => isEven(question);

  engine(description, getQuestion, checkResult);
};

export default brainEven;
