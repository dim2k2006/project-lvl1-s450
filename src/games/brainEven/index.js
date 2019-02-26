import readlineSync from 'readline-sync';
import greet from '../../utils/greet';
import say from '../../utils/say';
import getUsername from '../../utils/getUsername';
import getRandomInteger from '../../utils/getRandomInteger';

/**
 * Brain even game
 */
const brainEven = () => {
  greet();
  say('Answer "yes" if number even otherwise answer "no".');

  const userName = getUsername();
  const successAttemptsRequired = 3;

  const launch = (attempt = 0) => {
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

  return launch();
};

export default brainEven;
