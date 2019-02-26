import readlineSync from 'readline-sync';
import utils from '../utils';

const {
  greet,
  say,
  getUsername,
  getRandomInteger,
  isEven,
} = utils;
const successAttemptsRequired = 3;

/**
 * Brain even game
 */
const brainEven = () => {
  greet();
  say('Answer "yes" if number even otherwise answer "no".');

  const userName = getUsername();

  const launch = (attempt) => {
    if (attempt === successAttemptsRequired) {
      say(`Congratulations, ${userName}!`);

      return;
    }

    const question = getRandomInteger(1, 100);

    say(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const result = isEven(question);

    if (answer !== result) {
      say(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);

      return;
    }

    launch(attempt + 1);
  };

  launch(0);
};

export default brainEven;
