import readlineSync from 'readline-sync';
import { greet, say, getUsername } from './utils';

const successAttemptsRequired = 3;

/**
 * Creates new game
 * @param {String} description - game description
 * @param {Function} getData - retrieves question and correct result
 */
const engine = (description, getData) => {
  greet();

  say(`${description}\n`);

  const userName = getUsername();

  const launch = (attempt) => {
    if (attempt === successAttemptsRequired) {
      say(`Congratulations, ${userName}!`);

      return;
    }

    const { question, result } = getData();

    say(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

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
