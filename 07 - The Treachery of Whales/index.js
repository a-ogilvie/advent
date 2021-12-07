'use strict';

/**
 * @param {Array<number>} input
 * @returns {number}
 */
function part1(input) {
  return calculateMinimumFuelRequired(input, (steps) => steps);
}

/**
 * @param {Array<number>} input
 * @returns {number}
 */
function part2(input) {
  return calculateMinimumFuelRequired(input, (steps) => (steps * (steps + 1)) / 2);
}

/**
 * @param {Array<number>} input
 * @param {(steps: number) => number} calculateFuel
 * @returns {number}
 */
function calculateMinimumFuelRequired(input, calculateFuel) {
  const start = Math.min(...input);
  const end = Math.max(...input);

  let lowestFuelSpent = Infinity;
  for (let targetPosition = start; targetPosition <= end; targetPosition += 1) {
    let fuelSpent = 0;
    for (const currentPosition of input) {
      fuelSpent += calculateFuel(Math.abs(targetPosition - currentPosition));
      if (fuelSpent > lowestFuelSpent) break;
    }

    if (fuelSpent < lowestFuelSpent) {
      lowestFuelSpent = fuelSpent;
    }
  }

  return lowestFuelSpent;
}

module.exports = { part1, part2 };
