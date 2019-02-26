import { Parser } from 'expr-eval';
import engine from '../engine';
import utils from '../utils';

const { getRandomExpression } = utils;

const math = new Parser();

/**
 * Brain calc game
 */
const brainCalc = () => {
  const gameConditions = 'What is the result of the expression?';
  const getQuestion = () => getRandomExpression();
  const checkResult = (question) => {
    const expression = math.parse(question);
    const result = expression.evaluate();

    return result;
  };

  const game = engine(gameConditions, getQuestion, checkResult);

  game();
};

export default brainCalc;
