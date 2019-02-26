import engine from '../engine';
import utils from '../utils';

const { getRandomInteger, isEven } = utils;

/**
 * Brain even game
 */
const brainEven = () => {
  const gameConditions = 'Answer "yes" if number even otherwise answer "no".';
  const getQuestion = () => getRandomInteger(1, 100);
  const checkResult = question => isEven(question);

  const game = engine(gameConditions, getQuestion, checkResult);

  game();
};

export default brainEven;
