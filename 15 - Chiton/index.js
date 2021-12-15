/* eslint-disable id-length,no-magic-numbers */
'use strict';

const _ = require('lodash');

/**
 * @param {Array<Array<number>>} input
 * @returns {number}
 */
function partOne(input) {
  return getLowestRiskPath(input);
}

/**
 * @param {Array<Array<number>>} input
 * @returns {number}
 */
function partTwo(input) {
  const startingInputLength = input.length;
  const startingRowLength = _.first(input).length;

  for (const row of input) {
    if (input.length >= startingInputLength * 5) break;

    for (const risk of row) {
      if (row.length >= startingRowLength * 5) break;
      row.push(incrementRisk(risk));
    }

    input.push(row.map(incrementRisk));
  }

  return getLowestRiskPath(input);
}

/**
 * @param {number} risk
 * @returns {number}
 */
function incrementRisk(risk) {
  return risk === 9 ? 1 : risk + 1;
}

/**
 * @param {Array<Array<number>>} input
 * @returns {number}
 */
function getLowestRiskPath(input) {
  /** @type {Array<Array<number>>} */
  const minimumRisks = Array.from({ length: input.length }, () =>
    Array(input[0].length).fill(Infinity)
  );
  minimumRisks[0][0] = 0;

  let shouldRecalculate = true;

  while (shouldRecalculate) {
    shouldRecalculate = false;
    for (let y = 0; y < input.length; y += 1)
      for (let x = 0; x < input[y].length; x += 1) {
        const thisRisk = input[y][x];

        /** @type {Array<number>} */
        const surroundingRisks = [];
        if (x - 1 >= 0) surroundingRisks.push(minimumRisks[y][x - 1]);
        if (y - 1 >= 0) surroundingRisks.push(minimumRisks[y - 1][x]);
        if (x + 1 < input[y].length) surroundingRisks.push(minimumRisks[y][x + 1]);
        if (y + 1 < input.length) surroundingRisks.push(minimumRisks[y + 1][x]);

        const minimumRisk = Math.min(...surroundingRisks) + thisRisk;
        if (minimumRisk < minimumRisks[y][x]) {
          minimumRisks[y][x] = minimumRisk;
          shouldRecalculate = true;
        }
      }
  }

  return _.last(_.last(minimumRisks));
}

module.exports = { partOne, partTwo };
