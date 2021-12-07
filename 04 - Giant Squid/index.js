/* eslint-disable no-magic-numbers */
'use strict';

const _ = require('lodash');

/** @typedef {Array<number | null>} Board */

/**
 * @param {{numbers: Array<number>, boards: Array<Board>}} input
 * @returns {number}
 */
function partOne({ numbers, boards }) {
  for (const number of numbers)
    for (const board of boards) {
      const indexOfNumber = board.indexOf(number);
      if (indexOfNumber === -1) continue;

      board[indexOfNumber] = null;

      if (isBingo(board)) return _.sum(board) * number;
    }
}

/**
 * @param {{numbers: Array<number>, boards: Array<Board>}} input
 * @returns {number}
 */
function partTwo({ numbers, boards }) {
  for (const number of numbers)
    for (let i = 0; i < boards.length; i += 1) {
      const board = boards[i];

      const indexOfNumber = board.indexOf(number);
      if (indexOfNumber === -1) continue;

      board[indexOfNumber] = null;

      if (isBingo(board)) {
        if (boards.length === 1) return _.sum(board) * number;

        const indexToRemove = boards.indexOf(board);
        boards.splice(indexToRemove, 1);
        i -= 1;
      }
    }
}

/**
 * @param {Board} board
 * @returns {boolean}
 */
function isBingo(board) {
  for (const i of [0, 1, 2, 3, 4]) {
    if (
      board[i] === null &&
      board[i + 5] === null &&
      board[i + 10] === null &&
      board[i + 15] === null &&
      board[i + 20] === null
    )
      return true;

    if (
      board[i * 5] === null &&
      board[i * 5 + 1] === null &&
      board[i * 5 + 2] === null &&
      board[i * 5 + 3] === null &&
      board[i * 5 + 4] === null
    )
      return true;
  }

  return false;
}

module.exports = { partOne, partTwo };
