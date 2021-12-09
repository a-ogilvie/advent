/* eslint-disable no-magic-numbers */
'use strict';

const _ = require('lodash');

/**
 * @param {Array<Array<number>>} input
 * @returns {number}
 */
function partOne(input) {
  let totalRisk = 0;

  findBasins(input, (row, column) => (totalRisk += 1 + input[row][column]));

  return totalRisk;
}

/**
 * @param {Array<Array<number>>} input
 * @returns {number}
 */
function partTwo(input) {
  /** @type {Array<number>} */
  const basinSizes = [];

  findBasins(input, (row, column) => basinSizes.push(mapBasin(input, row, column)));

  return basinSizes
    .sort((basinA, basinB) => basinB - basinA)
    .slice(0, 3)
    .reduce(_.multiply); // eslint-disable-line no-restricted-properties
}

/**
 * @param {Array<Array<number>>} input
 * @param {(row: number, column: number) => void} iteratee
 * @returns {void}
 */
function findBasins(input, iteratee) {
  for (let row = 0; row < input.length; row += 1)
    for (let column = 0; column < input[row].length; column += 1)
      if (isBasin(input, row, column)) iteratee(row, column);
}

/**
 * @param {Array<Array<number>>} input
 * @param {number} row
 * @param {number} column
 * @returns {boolean}
 */
function isBasin(input, row, column) {
  const location = input[row][column];

  const isUpLarger =
    typeof input[row - 1]?.[column] !== 'number' || input[row - 1][column] > location;
  const isDownLarger =
    typeof input[row + 1]?.[column] !== 'number' || input[row + 1][column] > location;
  const isLeftLarger =
    typeof input[row]?.[column - 1] !== 'number' || input[row][column - 1] > location;
  const isRightLarger =
    typeof input[row]?.[column + 1] !== 'number' || input[row][column + 1] > location;

  return isUpLarger && isDownLarger && isLeftLarger && isRightLarger;
}

/**
 * @param {Array<Array<number>>} input
 * @param {number} row
 * @param {number} column
 * @returns {number}
 */
function mapBasin(input, row, column) {
  const height = input[row]?.[column];

  if (typeof height !== 'number') return 0;

  input[row][column] = null;
  return height === 9
    ? 0
    : 1 +
        mapBasin(input, row + 1, column) +
        mapBasin(input, row - 1, column) +
        mapBasin(input, row, column + 1) +
        mapBasin(input, row, column - 1);
}

module.exports = { partOne, partTwo };
