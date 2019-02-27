import readlineSync from 'readline-sync';
import { greet, say, getUsername } from './utils';

const successAttemptsRequired = 3;

/**
 * Creates new game
 * @param {String} description - game description
 * @param {Function} getQuestion
 * @param {Function} checkResult
 */
const engine = (description, getQuestion, checkResult) => () => {
  greet();

  say(`${description}\n`);

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

    say('Correct!');

    launch(attempt + 1);
  };

  launch(0);
};

export default engine;
