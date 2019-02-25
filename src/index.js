import readlineSync from 'readline-sync';

/**
 * Gets and prints user name
 */
const getUsername = () => {
    const userName = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${userName}!`);
};

export default getUsername;
