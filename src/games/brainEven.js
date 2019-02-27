import engine from '../engine';
import { getRandomInteger, isEven } from '../utils';

/**
 * Brain even game
 */
const brainEven = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const getData = () => {
    const question = getRandomInteger(1, 100);
    const result = isEven(question);

    return { question, result };
  };

  engine(description, getData);
};

export default brainEven;
