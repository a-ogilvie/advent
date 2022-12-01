'use strict';

const _ = require('lodash');

/**
 * @param {Array<number>} input
 * @returns {number}
 */
function partOne(input) {
  return _.first(getTopElvesByTotalCalories(input, 1));
}

/**
 * @param {Array<number>} input
 * @returns {number}
 */
function partTwo(input) {
  return _.sum(getTopElvesByTotalCalories(input, 3));
}

/**
 * @param {Array<number>} calories
 * @param {number} numToReturn
 * @returns {Array<number>} Sum of calories carried by each given elf
 */
function getTopElvesByTotalCalories(calories, numToReturn) {
  /** @type {Array<Array<number>>} */
  const elves = [];

  /** @type {Array<number>} */
  let elf = [];
  for (const value of calories) {
    if (value) {
      elf.push(value);
    } else {
      elves.push(elf);
      elf = [];
    }
  }
  elves.push(elf);

  return elves
    .map(_.sum)
    .sort((a, b) => b - a)
    .slice(0, numToReturn);
}

module.exports = { partOne, partTwo };
