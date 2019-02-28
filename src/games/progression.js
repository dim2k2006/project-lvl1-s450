import engine from '../engine';
import { getRandomInteger } from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

/**
 * Generates arithmetic progression
 * @param {Number} firstElement
 * @param {Number} step
 * @param {Number} length
 * @returns {Array}
 */
const getProgression = (firstElement, step, length) => {
  const iter = (accumulator) => {
    if (accumulator.length === length) return accumulator;

    const lastNum = accumulator[accumulator.length - 1];

    return iter([...accumulator, lastNum + step]);
  };

  return iter([firstElement]);
};

/**
 * Retrieves data needed for game
 * @returns {Object}
 */
const getData = () => {
  const firstElement = getRandomInteger(1, 100);
  const step = getRandomInteger(1, 6);
  const progression = getProgression(firstElement, step, progressionLength);
  const randomIndex = getRandomInteger(0, progressionLength - 1);
  const question = progression.map((item, index) => {
    if (randomIndex === index) return '..';

    return item;
  }).join(' ');
  const answer = String(firstElement + step * randomIndex);

  return {
    question,
    answer,
  };
};

/**
 * Brain progression game
 */
const progression = () => engine(description, getData);

export default progression;
