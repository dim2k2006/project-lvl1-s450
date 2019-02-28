import engine from '../engine';
import { getRandomInteger } from '../utils';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

/**
 * Generates arithmetic progression
 * @param {Number} firstElement
 * @param {Number} step
 * @returns {Array}
 */
const getProgression = (firstElement, step) => {
  const iter = (accumulator) => {
    if (accumulator.length === progressionLength) return accumulator;

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
  const progression = getProgression(firstElement, step);
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
