'use strict';

/**
 * @param {Array<['addx', number] | ['noop']>} input
 * @returns {number}
 */
function partOne(input) {
  let totalSignalStrength = 0;

  run(input, (X, cycle) => {
    if ((cycle - 20) % 40 === 0) totalSignalStrength += X * cycle;
  });

  return totalSignalStrength;
}

/**
 * @param {Array<['addx', number] | ['noop']>} input
 * @returns {string}
 */
function partTwo(input) {
  let display = '';

  run(input, (X, cycle) => {
    if (Math.abs(X - ((cycle - 1) % 40)) <= 1) {
      display += '■';
    } else {
      display += '·';
    }

    if (cycle % 40 === 0) {
      display += '\n';
    }
  });

  return display;
}

/**
 *
 * @param {Array<['addx', number] | ['noop']>} instructions
 * @param {(X: number, cycle: number) => void} processCycle
 */
function run(instructions, processCycle) {
  let cycle = 0;
  let X = 1;

  for (const [instruction, value] of instructions) {
    if (instruction === 'addx') {
      cycle += 1;
      processCycle(X, cycle);
      cycle += 1;
      processCycle(X, cycle);
      X += value;
    }

    if (instruction === 'noop') {
      cycle += 1;
      processCycle(X, cycle);
    }
  }
}

module.exports = { partOne, partTwo };
