/* eslint-disable id-length */
'use strict';

const _ = require('lodash');

/**
 * @param {Array<[[number, number], [number, number]]>} input
 * @returns {number}
 */
function part1(input) {
  return _.sumBy(Object.values(getHorizontalAndVerticalLines(input)), (visitedCount) =>
    visitedCount > 1 ? 1 : 0
  );
}

/**
 * @param {Array<[[number, number], [number, number]]>} input
 * @returns {number}
 */
function part2(input) {
  const lines = getHorizontalAndVerticalLines(input);

  for (let [[x1, y1], [x2, y2]] of input) {
    if (x1 === x2 || y1 === y2) continue;

    if (x1 > x2) {
      [x1, y1, x2, y2] = [x2, y2, x1, y1];
    }

    const isPositive = x1 < x2 && y1 < y2;
    if (isPositive) {
      while (x1 <= x2 && y1 <= y2) {
        const point = `${x1},${y1}`;
        lines[point] = lines[point] + 1 || 1;
        x1 += 1;
        y1 += 1;
      }
    } else {
      while (x1 <= x2 && y1 >= y2) {
        const point = `${x1},${y1}`;
        lines[point] = lines[point] + 1 || 1;
        x1 += 1;
        y1 -= 1;
      }
    }
  }

  return _.sumBy(Object.values(lines), (visitedCount) => (visitedCount > 1 ? 1 : 0));
}

/**
 * @param {Array<[[number, number], [number, number]]>} input
 * @returns {{ [coordinates: string]: number }}}
 */
function getHorizontalAndVerticalLines(input) {
  /** @type {{ [coordinates: string]: number }} */
  const lines = {};

  for (const [start, end] of input) {
    if (start[0] !== end[0] && start[1] === end[1]) {
      let x1 = Math.min(start[0], end[0]);
      const x2 = Math.max(start[0], end[0]);
      const [, y] = start;

      while (x1 <= x2) {
        const point = `${x1},${y}`;
        lines[point] = lines[point] + 1 || 1;
        x1 += 1;
      }
    }
    if (start[0] === end[0] && start[1] !== end[1]) {
      let y1 = Math.min(start[1], end[1]);
      const y2 = Math.max(start[1], end[1]);
      const [x] = start;

      while (y1 <= y2) {
        const point = `${x},${y1}`;
        lines[point] = lines[point] + 1 || 1;
        y1 += 1;
      }
    }
  }

  return lines;
}

module.exports = { part1, part2 };
