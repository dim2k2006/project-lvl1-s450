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

  console.log(`Hello, ${userName}!`);

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

export default {
  getRandomInteger,
  getUsername,
  greet,
  say,
};
