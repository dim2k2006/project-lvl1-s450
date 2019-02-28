import flow from 'lodash/fp/flow';
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
 * Hides random element in progression
 * @param {Array} progression
 * @returns {Object}
 */
const hideRandomElement = (progression) => {
  const index = getRandomInteger(1, progressionLength - 1);
  const hiddenElement = String(progression[index]);
  const newProgression = [
    ...progression.slice(0, index),
    '..',
    ...progression.slice(index + 1),
  ];

  return {
    sequence: newProgression,
    hiddenElement,
  };
};

/**
 * Generates numeric sequence
 */
const getSequence = flow(
  getProgression,
  hideRandomElement,
);

/**
 * Retrieves data needed for game
 * @returns {Object}
 */
const getData = () => {
  const { sequence, hiddenElement } = getSequence(getRandomInteger(1, 100), getRandomInteger(1, 6));

  const question = sequence.join(' ');

  return {
    question,
    answer: hiddenElement,
  };
};

/**
 * Brain progression game
 */
const progression = () => engine(description, getData);

export default progression;
