'use strict';

const _ = require('lodash');

/** @typedef {[number | SnailfishNumber, number | SnailfishNumber]} SnailfishNumber */

/**
 * @param {Array<SnailfishNumber>} input
 * @returns {number}
 */
function partOne(input) {
  const sum = input.reduce((previousValue, currentValue) => add(previousValue, currentValue));

  return calculateMagnitude(sum);
}

/**
 * @param {Array<SnailfishNumber>} input
 * @returns {number}
 */
function partTwo(input) {
  let maxMagnitude = 0;

  for (let i = 0; i < input.length; i += 1)
    for (let j = 0; j < input.length; j += 1) {
      if (i === j) continue;

      const magnitude = calculateMagnitude(add(input[i], input[j]));

      maxMagnitude = Math.max(magnitude, maxMagnitude);
    }

  return maxMagnitude;
}

/**
 * @param {SnailfishNumber} augend
 * @param {SnailfishNumber} addend
 * @returns {SnailfishNumber}
 */
function add(augend, addend) {
  let sum = JSON.stringify([augend, addend]);

  let shouldReduce = true;
  while (shouldReduce) {
    shouldReduce = false;

    let explodedSum = explode(sum);
    while (!_.isEqual(sum, explodedSum)) {
      sum = explodedSum;
      explodedSum = explode(sum);
    }

    const splittableNumber = sum.match(/\d{2,}/);
    if (splittableNumber) {
      const [value] = splittableNumber;

      const splitValues = split(Number(value));

      sum = splice(sum, splittableNumber.index, value, `[${splitValues.join(',')}]`);

      shouldReduce = true;
    }
  }

  return JSON.parse(sum);
}

/**
 * @param {string} snailfishNumber
 * @returns {string}
 */
function explode(snailfishNumber) {
  let snailfishString = snailfishNumber;

  let nestingLevel = 0;

  for (let i = 0; i < snailfishString.length; i += 1) {
    const char = snailfishString[i];

    if (char === ']') {
      nestingLevel -= 1;
      continue;
    }

    if (char !== '[') continue;

    nestingLevel += 1;

    const indexOfNextClosingBracket = snailfishString.slice(i).indexOf(']');
    const pair = snailfishString.slice(i, i + indexOfNextClosingBracket + 1);

    if (nestingLevel > 4 && /\[\d+,\d+\]/.test(pair)) {
      /** @type {[number, number]} */
      const [leftAddition, rightAddition] = JSON.parse(pair);

      snailfishString = `${snailfishString.slice(0, i)}0${snailfishString.slice(i + pair.length)}`;

      const right = snailfishString.slice(i + 1).match(/\d+/);
      if (right) {
        const [value] = right;
        snailfishString = splice(
          snailfishString,
          i + 1 + right.index,
          value,
          Number(value) + rightAddition
        );
      }

      const left = snailfishString.slice(0, i).match(/\d+(?!.*\d)/);
      if (left) {
        const [value] = left;
        snailfishString = splice(snailfishString, left.index, value, Number(value) + leftAddition);
      }

      break;
    }
  }

  return snailfishString;
}

/**
 * @param {number} x
 * @returns {SnailfishNumber}
 */
function split(x) {
  return [Math.floor(x / 2), Math.ceil(x / 2)];
}

/**
 * @param {SnailfishNumber | number} snailfishNumber
 * @returns {number}
 */
function calculateMagnitude(snailfishNumber) {
  if (typeof snailfishNumber === 'number') return snailfishNumber;

  const [left, right] = snailfishNumber;
  return 3 * calculateMagnitude(left) + 2 * calculateMagnitude(right);
}

/**
 *
 * @param {string} string
 * @param {number} index
 * @param {string} oldValue
 * @param {any} newValue
 * @returns {string}
 */
function splice(string, index, oldValue, newValue) {
  return `${string.slice(0, index)}${newValue}${string.slice(index + oldValue.length)}`;
}

module.exports = { partOne, partTwo, add, explode, split, calculateMagnitude };
