'use strict';

/** @typedef {Array<'('|')'|'['|']'|'{'|'}'|'<'|'>'>} Stack */

const PAIRS = { '(': ')', '[': ']', '{': '}', '<': '>' };

/**
 * @param {Array<string>} input
 * @returns {number}
 */
function partOne(input) {
  const POINT_VALUES = { ')': 3, ']': 57, '}': 1197, '>': 25137 };

  let score = 0;
  for (const line of input) {
    /** @type {Stack} */
    const stack = [];
    for (const char of line)
      if (Object.keys(PAIRS).includes(char)) stack.push(PAIRS[char]);
      else if (stack.pop() !== char) score += POINT_VALUES[char];
  }
  return score;
}

/**
 * @param {Array<string>} input
 * @returns {number}
 */
function partTwo(input) {
  const POINT_VALUES = { ')': 1, ']': 2, '}': 3, '>': 4 };

  const scores = input
    .filter((line) => {
      /** @type {Stack} */
      const stack = [];
      for (const char of line)
        if (Object.keys(PAIRS).includes(char)) stack.push(PAIRS[char]);
        else if (stack.pop() !== char) return false;
      return true;
    })
    .map((line) => {
      /** @type {Stack} */
      const stack = [];
      for (const char of line)
        if (Object.keys(PAIRS).includes(char)) stack.push(PAIRS[char]);
        else stack.pop();

      let score = 0;
      for (const char of stack.reverse()) {
        score = score * 5 + POINT_VALUES[char];
      }
      return score;
    })
    .sort((pointsA, pointsB) => pointsA - pointsB);

  return scores[(scores.length - 1) / 2];
}

module.exports = { partOne, partTwo };
