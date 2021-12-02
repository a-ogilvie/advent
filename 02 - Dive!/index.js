'use strict';

/**
 * @param {Array<string>} input
 * @returns {any}
 */
function part1(input) {
  let position = 0;
  let depth = 0;

  for (const [direction, quantity] of parseDirections(input)) {
    switch (direction) {
      case 'forward':
        position += quantity;
        break;

      case 'down':
        depth += quantity;
        break;

      case 'up':
        depth -= quantity;
        break;
    }
  }

  return position * depth;
}

/**
 * @param {Array<string>} input
 * @returns {any}
 */
function part2(input) {
  let position = 0;
  let depth = 0;
  let aim = 0;

  for (const [direction, quantity] of parseDirections(input)) {
    switch (direction) {
      case 'forward':
        position += quantity;
        depth += aim * quantity;
        break;

      case 'down':
        aim += quantity;
        break;

      case 'up':
        aim -= quantity;
        break;
    }
  }

  return position * depth;
}

/**
 * @param {Array<string>} input
 * @returns {Array<['down'|'forward'|'up', number]>}
 */
function parseDirections(input) {
  // @ts-expect-error
  return input.map((value) => {
    const [direction, quantity] = value.split(' ');

    return [direction, Number(quantity)];
  });
}

module.exports = { part1, part2 };
