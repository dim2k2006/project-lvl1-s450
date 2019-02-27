import engine from '../engine';
import { getRandomInteger } from '../utils';

/**
 * Brain progression game
 */
const progression = () => {
  const description = 'What number is missing in the progression?';
  const getData = () => {
    const question = getRandomInteger(1, 100);
    const result = isEven(question);

    return { question, result };
  };

  engine(description, getData);
};

export default progression;
