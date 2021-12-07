'use strict';

/**
 * @param {Array<number>} values
 * @param {number} [windowSize]
 * @returns {number}
 */
function partOne(values, windowSize = 1) {
  let increasingCount = 0;

  for (let i = windowSize; i < values.length; i += 1)
    if (values[i] > values[i - windowSize]) increasingCount += 1;

  return increasingCount;
}

module.exports = { partOne };
