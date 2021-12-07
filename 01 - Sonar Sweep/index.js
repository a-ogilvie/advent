'use strict';

/**
 * @param {Array<number>} input
 * @returns {number}
 */
function partOne(input) {
  return getIncreasingCount(input, 1);
}

/**
 * @param {Array<number>} input
 * @returns {number}
 */
function partTwo(input) {
  return getIncreasingCount(input, 3); // eslint-disable-line no-magic-numbers
}

/**
 * @param {Array<number>} input
 * @param {number} windowSize
 * @returns {number}
 */
function getIncreasingCount(input, windowSize) {
  let increasingCount = 0;

  for (let i = windowSize; i < input.length; i += 1)
    if (input[i] > input[i - windowSize]) increasingCount += 1;

  return increasingCount;
}

module.exports = { partOne, partTwo };
