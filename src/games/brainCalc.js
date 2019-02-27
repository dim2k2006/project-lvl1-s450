import { Parser } from 'expr-eval';
import engine from '../engine';
import { getRandomExpression } from '../utils';

const math = new Parser();

/**
 * Brain calc game
 */
const brainCalc = () => {
  const description = 'What is the result of the expression?';
  const getQuestion = () => getRandomExpression();
  const checkResult = (question) => {
    const expression = math.parse(question);
    const result = expression.evaluate();

    return String(result);
  };

  const game = engine(description, getQuestion, checkResult);

  game();
};

export default brainCalc;
