import readlineSync from 'readline-sync';

const successAttemptsRequired = 3;

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
      say(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\n`);
      say(`Let's try again, ${userName}!`);

      return;
    }

    say('Correct!');

    launch(attempt + 1);
  };

  launch(0);
};

export default engine;
