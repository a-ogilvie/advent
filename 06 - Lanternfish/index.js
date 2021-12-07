/* eslint-disable no-magic-numbers */
'use strict';

const _ = require('lodash');

/**
 * @param {Array<number>} input
 * @returns {number}
 */
function partOne(input) {
  return calculateFishPopulation(input, 80);
}

/**
 * @param {any} input
 * @returns {any}
 */
function partTwo(input) {
  return calculateFishPopulation(input, 256);
}

/**
 * @param {Array<number>} input
 * @param {number} days
 * @returns {number}
 */
function calculateFishPopulation(input, days) {
  /** @type {Record<number, number>} */
  let fishCount = _.countBy(input);

  for (let day = 0; day < days; day++) {
    /** @type {Record<number, number>} */
    const updatedFishCount = {};
    for (const [yesterdayAge, count] of Object.entries(fishCount)) {
      const age = Number(yesterdayAge) - 1;
      if (age === -1) {
        updatedFishCount[6] = (updatedFishCount[6] || 0) + count;
        updatedFishCount[8] = count;
      } else {
        updatedFishCount[age] = (updatedFishCount[age] || 0) + count;
      }
    }

    fishCount = updatedFishCount;
  }

  return _.sum(Object.values(fishCount));
}

module.exports = { partOne, partTwo };
