import { Parser } from 'expr-eval';
import engine from '../engine';
import { getRandomInteger } from '../utils';

const description = 'What is the result of the expression?';

/**
 * Generates math expression sign
 * @param {Number} number
 * @returns {String}
 */
const getSign = (number) => {
  switch (number) {
    case 1:
      return '+';

    case 2:
      return '-';

    case 3:
      return '*';

    default:
      return '+';
  }
};

/**
 * Generates random math expression
 * @returns {String}
 */
const getRandomExpression = () => {
  const num1 = getRandomInteger(1, 100);
  const num2 = getRandomInteger(1, 100);
  const num3 = getRandomInteger(1, 3);
  const sign = getSign(num3);

  return `${num1} ${sign} ${num2}`;
};

/**
 * Retrieves data needed for game
 * @returns {Object}
 */
const getData = () => {
  const question = getRandomExpression();
  const math = new Parser();
  const expression = math.parse(question);
  const answer = String(expression.evaluate());

  return { question, answer };
};

/**
 * Brain calc game
 */
const calc = () => engine(description, getData);

export default calc;
