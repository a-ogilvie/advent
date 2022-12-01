'use strict';

const _ = require('lodash');

const START = 'start';
const END = 'end';

/**
 * @param {Array<[string, string]>} input
 * @returns {number}
 */
function partOne(input) {
  const caves = mapCaves(input);

  return countPathsOne(caves, START, caves.get(START));
}

/**
 * @param {Array<[string, string]>} input
 * @returns {number}
 */
function partTwo(input) {
  const caves = mapCaves(input);

  return countPathsTwo(caves, START, caves.get(START));
}

/**
 * @param {Array<[string, string]>} input
 * @returns {Map<string, Array<string>>}
 */
function mapCaves(input) {
  /** @type {Map<string, Array<string>>} */
  const caves = new Map();

  for (const [caveA, caveB] of input) {
    if (!caves.has(caveA)) caves.set(caveA, []);
    caves.get(caveA).push(caveB);

    if (!caves.has(caveB)) caves.set(caveB, []);
    caves.get(caveB).push(caveA);
  }

  return caves;
}

/**
 * @param {Map<string, Array<string>>} allCaves
 * @param {string} currentCave
 * @param {Array<string>} nextCaves
 * @param {Array<string>} [path]
 * @returns {number}
 */
function countPathsOne(allCaves, currentCave, nextCaves, path = []) {
  if (currentCave === END) return 1;

  if (currentCave === currentCave.toLowerCase() && path.includes(currentCave)) return 0;

  return _.sumBy(nextCaves, (nextCave) =>
    countPathsOne(allCaves, nextCave, allCaves.get(nextCave), [...path, currentCave])
  );
}

/**
 * @param {Map<string, Array<string>>} allCaves
 * @param {string} currentCave
 * @param {Array<string>} nextCaves
 * @param {Array<string>} [path]
 * @param {boolean} [hasVisitedOneSmallCaveTwice]
 * @returns {number}
 */
function countPathsTwo(
  allCaves,
  currentCave,
  nextCaves,
  path = [],
  hasVisitedOneSmallCaveTwice = false
) {
  if (currentCave === END) return 1;

  if (currentCave === START && path.length) return 0;

  if (
    currentCave === currentCave.toLowerCase() &&
    path.filter((visitedCave) => visitedCave === currentCave).length
  ) {
    if (hasVisitedOneSmallCaveTwice) return 0;

    hasVisitedOneSmallCaveTwice = true; // eslint-disable-line no-param-reassign
  }

  return _.sumBy(nextCaves, (nextCave) =>
    countPathsTwo(
      allCaves,
      nextCave,
      allCaves.get(nextCave),
      [...path, currentCave],
      hasVisitedOneSmallCaveTwice
    )
  );
}

module.exports = { partOne, partTwo };
