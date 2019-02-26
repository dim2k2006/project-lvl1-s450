import readlineSync from 'readline-sync';
import utils from '../utils';

const {
  greet,
  say,
  getUsername,
  getRandomInteger,
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
    if (attempt === successAttemptsRequired) return say(`Congratulations, ${userName}!`);

    const question = getRandomInteger(1, 100);

    say(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    const result = (question % 2 === 0)
      ? 'yes'
      : 'no';

    if (answer !== result) return say(`'${answer}' is wrong answer ;(. Correct answer was '${(answer === 'yes') ? 'no' : 'yes'}'.\nLet's try again, ${userName}!`);

    return launch(attempt + 1);
  };

  return launch(0);
};

export default brainEven;
