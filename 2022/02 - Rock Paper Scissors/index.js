'use strict';

const _ = require('lodash');

/**
 * @param {Array<['A'|'B'|'C', 'X'|'Y'|'Z']>} input
 * @returns {number}
 */
function partOne(input) {
  const POINTS_BY_SHAPE = { X: 1, Y: 2, Z: 3 };
  const WIN_SHAPE = { X: 'C', Y: 'A', Z: 'B' };
  const DRAW_SHAPE = { X: 'A', Y: 'B', Z: 'C' };

  return _.sumBy(input, ([opponent, player]) => {
    let bonusPoints = 0;

    if (WIN_SHAPE[player] === opponent) {
      bonusPoints = 6;
    }

    if (DRAW_SHAPE[player] === opponent) {
      bonusPoints = 3;
    }

    return POINTS_BY_SHAPE[player] + bonusPoints;
  });
}

/**
 * @param {Array<['A'|'B'|'C', 'X'|'Y'|'Z']>} input
 * @returns {number}
 */
function partTwo(input) {
  const POINTS_BY_SHAPE = { R: 1, P: 2, S: 3 };
  const WIN_SHAPE = { A: 'P', B: 'S', C: 'R' };
  const DRAW_SHAPE = { A: 'R', B: 'P', C: 'S' };
  const LOSE_SHAPE = { A: 'S', B: 'R', C: 'P' };

  return _.sumBy(input, ([opponent, condition]) => {
    switch (condition) {
      case 'X':
        return POINTS_BY_SHAPE[LOSE_SHAPE[opponent]];
      case 'Y':
        return POINTS_BY_SHAPE[DRAW_SHAPE[opponent]] + 3;
      case 'Z':
        return POINTS_BY_SHAPE[WIN_SHAPE[opponent]] + 6;
    }
  });
}

module.exports = { partOne, partTwo };
