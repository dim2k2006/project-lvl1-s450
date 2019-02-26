import readlineSync from 'readline-sync';
import utils from '../utils';

const { greet, say, getUsername } = utils;

const successAttemptsRequired = 3;

/**
 * Creates new game
 * @param {String} gameConditions
 * @param {Function} getQuestion
 * @param {Function} checkResult
 */
const engine = (gameConditions, getQuestion, checkResult) => () => {
  greet();

  say(gameConditions);

  const userName = getUsername();

  const launch = (attempt) => {
    if (attempt === successAttemptsRequired) {
      say(`Congratulations, ${userName}!`);

      return;
    }

    const question = getQuestion();

    say(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const result = checkResult(question);

    if (answer !== result) {
      say(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);

      return;
    }

    launch(attempt + 1);
  };

  launch(0);
};

export default engine;