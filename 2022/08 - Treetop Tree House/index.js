'use strict';

const _ = require('lodash');

/**
 * @param {Array<Array<number>>} input
 * @returns {number}
 */
function partOne(input) {
  const isVisible = input.map((row) => row.map(() => false));

  for (let y = 0; y < input.length; y += 1) {
    const row = input[y];
    let currentHeight = -1;
    for (let x = 0; x < row.length; x += 1) {
      if (currentHeight < row[x]) {
        isVisible[y][x] = true;
        currentHeight = row[x];
      }
    }

    currentHeight = -1;
    for (let x = row.length - 1; x > 0; x -= 1) {
      if (currentHeight < row[x]) {
        isVisible[y][x] = true;
        currentHeight = row[x];
      }
    }
  }

  for (let x = 0; x < input[0].length; x += 1) {
    const column = input.map((row) => row[x]);

    let current = -1;
    for (let y = 0; y < column.length; y += 1) {
      if (current < column[y]) {
        isVisible[y][x] = true;
        current = column[y];
      }
    }

    current = -1;
    for (let y = column.length - 1; y > 0; y -= 1) {
      if (current < column[y]) {
        isVisible[y][x] = true;
        current = column[y];
      }
    }
  }

  return _.sum(isVisible.flat());
}

/**
 * @param {Array<Array<number>>} input
 * @returns {number}
 */
function partTwo(input) {
  const scenicScores = input.map((row, y) =>
    row.map((treeHeight, x) => {
      let scenicScore = 1;

      let currentScore = 0;
      for (let yPlus = y + 1; yPlus < input.length; yPlus += 1) {
        currentScore += 1;
        if (input[yPlus][x] >= treeHeight) break;
      }
      scenicScore *= currentScore;

      currentScore = 0;
      for (let yMinus = y - 1; yMinus >= 0; yMinus -= 1) {
        currentScore += 1;
        if (input[yMinus][x] >= treeHeight) break;
      }
      scenicScore *= currentScore;

      currentScore = 0;
      for (let xPlus = x + 1; xPlus < input[y].length; xPlus += 1) {
        currentScore += 1;
        if (input[y][xPlus] >= treeHeight) break;
      }
      scenicScore *= currentScore;

      currentScore = 0;
      for (let xMinus = x - 1; xMinus >= 0; xMinus -= 1) {
        currentScore += 1;
        if (input[y][xMinus] >= treeHeight) break;
      }
      scenicScore *= currentScore;

      return scenicScore;
    })
  );

  return Math.max(...scenicScores.flat());
}

module.exports = { partOne, partTwo };
