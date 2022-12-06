'use strict';

/**
 * @param {string} input
 * @returns {number}
 */
function partOne(input) {
  return findIndexOfNonRepeatingChars(input, 4);
}

/**
 * @param {string} input
 * @returns {number}
 */
function partTwo(input) {
  return findIndexOfNonRepeatingChars(input, 14);
}

/**
 * @param {string} message
 * @param {number} size
 * @returns {number}
 */
function findIndexOfNonRepeatingChars(message, size) {
  for (let i = 1; i <= message.length; i += 1) {
    const uniqueChars = new Set(message.slice(i - size, i));
    if (uniqueChars.size === size) return i;
  }

  return -1;
}

module.exports = { partOne, partTwo };
