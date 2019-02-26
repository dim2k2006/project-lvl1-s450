import readlineSync from 'readline-sync';
import greet from '../utils/greet/index';
import say from '../utils/say/index';
import getUsername from '../utils/getUsername/index';
import getRandomInteger from '../utils/getRandomInteger/index';

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

    const randomNumber = getRandomInteger(1, 100);

    say(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    const result = (randomNumber % 2 === 0)
      ? 'yes'
      : 'no';

    if (answer !== result) return say(`'${answer}' is wrong answer ;(. Correct answer was '${(answer === 'yes') ? 'no' : 'yes'}'.\nLet's try again, ${userName}!`);

    return launch(attempt + 1);
  };

  return launch(0);
};

export default brainEven;
