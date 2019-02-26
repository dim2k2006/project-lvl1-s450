import readlineSync from 'readline-sync';

/**
 * Generates random number
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
const getRandomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  const result = Math.round(rand);

  return result;
};

/**
 * Gets and prints user name
 */
const getUsername = () => {
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  return userName;
};

/**
 * Greets user
 */
const greet = () => console.log('Welcome to the Brain Games!');

/**
 * Says something to user
 * @param {String} text
 */
const say = (text = '') => console.log(text);

/**
 * Checks if number is even
 * @param {Number} number
 * @returns {String}
 */
const isEven = (number = 0) => {
  const result = (number % 2 === 0) ? 'yes' : 'no';

  return result;
};

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
 * Finds greatest common divisor
 * @param {Number} num1
 * @param {Number} num2
 * @returns {Number}
 */
const getGcd = (num1, num2) => {
  let x = Math.abs(num1);
  let y = Math.abs(num2);

  while (y) {
    const t = y;
    y = x % y;
    x = t;
  }

  return x;
};

export default {
  getRandomInteger,
  getUsername,
  greet,
  say,
  isEven,
  getRandomExpression,
  getGcd,
};
