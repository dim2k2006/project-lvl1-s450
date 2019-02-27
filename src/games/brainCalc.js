import { Parser } from 'expr-eval';
import engine from '../engine';
import { getRandomExpression } from '../utils';

/**
 * Brain calc game
 */
const brainCalc = () => {
  const description = 'What is the result of the expression?';
  const getData = () => {
    const question = getRandomExpression();
    const math = new Parser();
    const expression = math.parse(question);
    const result = String(expression.evaluate());

    return { question, result };
  };

  engine(description, getData);
};

export default brainCalc;
