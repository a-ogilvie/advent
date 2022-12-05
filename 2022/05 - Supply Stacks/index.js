'use strict';

const _ = require('lodash');

/**
 * @param {{
 *   stacks: Array<Array<string>>
 *   instructions: Array<[number, number, number]>
 * }} input
 * @returns {string}
 */
function partOne(input) {
  const { stacks, instructions } = _.cloneDeep(input);

  for (const [quantity, from, to] of instructions) {
    const crates = stacks[from - 1].splice(-quantity, quantity);
    stacks[to - 1].push(...crates.reverse());
  }

  return stacks.map((stack) => stack.pop()).join('');
}

/**
 * @param {{
 *   stacks: Array<Array<string>>
 *   instructions: Array<[number, number, number]>
 * }} input
 * @returns {string}
 */
function partTwo(input) {
  const { stacks, instructions } = _.cloneDeep(input);

  for (const [quantity, from, to] of instructions) {
    const crates = stacks[from - 1].splice(-quantity, quantity);
    stacks[to - 1].push(...crates);
  }

  return stacks.map((stack) => stack.pop()).join('');
}

module.exports = { partOne, partTwo };
