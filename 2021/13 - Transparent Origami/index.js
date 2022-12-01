/* eslint-disable no-shadow */
'use strict';

const _ = require('lodash');

/**
 * @param {{ dotCoordinates: Array<[number, number]>, foldInstructions: Array<[number | null, number | null]>}} input
 * @returns {number}
 */
function partOne({ dotCoordinates, foldInstructions: [firstFold] }) {
  const coordinates = foldGrid(dotCoordinates, ...firstFold);

  return _.uniqBy(coordinates, (coordinate) => coordinate.join(',')).length;
}

/**
 * @param {{ dotCoordinates: Array<[number, number]>, foldInstructions: Array<[number | null, number | null]>}} input
 * @returns {string}
 */
function partTwo({ dotCoordinates, foldInstructions }) {
  const coordinates = foldInstructions.reduce(
    (foldedCoordinates, [x, y]) => foldGrid(foldedCoordinates, x, y),
    dotCoordinates
  );

  const grid = Array.from({ length: Math.max(...coordinates.map(([, y]) => y)) + 1 }, () =>
    Array.from({ length: Math.max(...coordinates.map(([x]) => x)) + 1 }, () => false)
  );

  for (const [x, y] of coordinates) {
    grid[y][x] = true;
  }

  return grid.map((row) => row.map((val) => (val ? '■' : '·')).join('')).join('\n');
}

/**
 * @param {Array<[number, number]>} coordinates
 * @param {number | null} foldX
 * @param {number | null} foldY
 * @returns {Array<[number, number]>}
 */
function foldGrid(coordinates, foldX, foldY) {
  return coordinates.map(([x, y]) =>
    foldY === null
      ? [x > foldX ? foldX - (x - foldX) : x, y]
      : [x, y > foldY ? foldY - (y - foldY) : y]
  );
}

module.exports = { partOne, partTwo };
