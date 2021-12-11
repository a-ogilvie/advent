/* eslint-disable no-magic-numbers */
'use strict';

const _ = require('lodash');

const TOTAL_OCTOPUSES = 100;

/**
 * @param {Array<Array<number>>} input
 * @returns {number}
 */
function partOne(input) {
  const octopuses = _.cloneDeep(input);

  let flashCount = 0;

  for (let step = 1; step <= 100; step += 1) {
    stepOctopuses(octopuses);
    flashCount += getFlashCountForNextStep(octopuses);
  }

  return flashCount;
}

/**
 * @param {Array<Array<number>>} input
 * @returns {number}
 */
function partTwo(input) {
  const octopuses = _.cloneDeep(input);

  for (let steps = 1; steps < Infinity; steps += 1) {
    stepOctopuses(octopuses);

    if (getFlashCountForNextStep(octopuses) === TOTAL_OCTOPUSES) return steps;
  }
}

/**
 * @param {Array<Array<number>>} octopuses
 * @returns {void}
 */
function stepOctopuses(octopuses) {
  for (let row = 0; row < octopuses.length; row += 1)
    for (let column = 0; column < octopuses[row].length; column += 1) octopuses[row][column] += 1;
}

/**
 * @param {Array<Array<number>>} octopuses
 * @returns {number}
 */
function getFlashCountForNextStep(octopuses) {
  let flashCount = 0;

  let shouldCalculate = true;
  let shouldRecalculate = false;
  while (shouldCalculate) {
    for (let row = 0; row < octopuses.length; row += 1) {
      for (let column = 0; column < octopuses[row].length; column += 1) {
        if (octopuses[row][column] > 9) {
          octopuses[row][column] = 0;
          flashCount += 1;

          for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1)
            for (let columnOffset = -1; columnOffset <= 1; columnOffset += 1)
              if (octopuses[row + rowOffset]?.[column + columnOffset])
                octopuses[row + rowOffset][column + columnOffset] += 1;

          shouldRecalculate = true;
        }
      }
    }

    if (shouldRecalculate) {
      shouldRecalculate = false;
    } else {
      shouldCalculate = false;
    }
  }

  return flashCount;
}

module.exports = { partOne, partTwo };
