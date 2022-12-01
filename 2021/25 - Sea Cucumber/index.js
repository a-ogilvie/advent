'use strict';

const _ = require('lodash');

const EAST_MOVING_SEA_CUCUMBER = '>';
const SOUTH_MOVING_SEA_CUCUMBER = 'v';
const EMPTY = '.';

/**
 * @param {Array<Array<'>'|'v'|'.'>>} input
 * @returns {number}
 */
function partOne(input) {
  let before = _.cloneDeep(input);
  const after = _.cloneDeep(input);

  let didEastMovingSeaCucumbersMove = false;
  let didSouthMovingSeaCucumbersMove = false;
  let step = 0;
  do {
    for (let y = 0; y < before.length; y += 1)
      for (let x = 0; x < before[y].length; x += 1) {
        if (
          before[y][x] === EAST_MOVING_SEA_CUCUMBER &&
          before[y][(x + 1) % before[y].length] === EMPTY
        ) {
          after[y][(x + 1) % before[y].length] = EAST_MOVING_SEA_CUCUMBER;
          after[y][x] = EMPTY;
        }
      }

    didEastMovingSeaCucumbersMove = !_.isEqual(before, after);

    before = _.cloneDeep(after);

    for (let y = 0; y < before.length; y += 1)
      for (let x = 0; x < before[y].length; x += 1) {
        if (
          before[y][x] === SOUTH_MOVING_SEA_CUCUMBER &&
          before[(y + 1) % before.length][x] === EMPTY
        ) {
          after[(y + 1) % before.length][x] = SOUTH_MOVING_SEA_CUCUMBER;
          after[y][x] = EMPTY;
        }
      }

    didSouthMovingSeaCucumbersMove = !_.isEqual(before, after);

    before = _.cloneDeep(after);

    step += 1;
  } while (didEastMovingSeaCucumbersMove || didSouthMovingSeaCucumbersMove);

  return step;
}

module.exports = { partOne };
