'use strict';

const _ = require('lodash');

/**
 * @param {Array<string>} input
 * @returns {number}
 */
function partOne(input) {
  return _.sumBy(input, (rucksack) => {
    const [compartmentA, compartmentB] = _.chunk(rucksack.split(''), rucksack.length / 2);

    const [item] = _.intersection(compartmentA, compartmentB);

    return getPriority(item);
  });
}

/**
 * @param {Array<string>} input
 * @returns {number}
 */
function partTwo(input) {
  return _.chain(input)
    .chunk(3)
    .sumBy((group) => {
      const [item] = _.intersection(...group.map((elf) => elf.split('')));

      return getPriority(item);
    })
    .value();
}

/**
 * @param {string} item
 * @returns {number}
 */
function getPriority(item) {
  const OFFSET = {
    LOWER_CASE: 'a'.charCodeAt(0) - 1,
    UPPER_CASE: 'A'.charCodeAt(0) - 27,
  };

  return item.charCodeAt(0) - (item === item.toUpperCase() ? OFFSET.UPPER_CASE : OFFSET.LOWER_CASE);
}

module.exports = { partOne, partTwo };
