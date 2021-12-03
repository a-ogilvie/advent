'use strict';

const _ = require('lodash');

/**
 * @param {Array<string>} input
 * @returns {number}
 */
function part1(input) {
  const mostCommonDigits = Array.from(input[0], (_value, i) => input.map((value) => value[i])).map(
    (bits) => {
      let zeroCount = 0;
      let oneCount = 0;
      for (const bit of bits) bit === '0' ? (zeroCount += 1) : (oneCount += 1);

      return zeroCount > oneCount ? '0' : '1';
    }
  );

  const gammaRate = mostCommonDigits.join('');
  const epsilonRate = mostCommonDigits.map((digit) => (digit === '0' ? '1' : '0')).join('');

  return Number.parseInt(gammaRate, 2) * Number.parseInt(epsilonRate, 2);
}

/**
 * @param {Array<string>} input
 * @returns {number}
 */
function part2(input) {
  const oxygenRating = filterByCount(input, (zeroCount = 0, oneCount = 0) =>
    zeroCount > oneCount ? '0' : '1'
  );
  const co2Rating = filterByCount(input, (zeroCount = 0, oneCount = 0) =>
    zeroCount > oneCount ? '1' : '0'
  );

  return Number.parseInt(oxygenRating, 2) * Number.parseInt(co2Rating, 2);
}

/**
 * @param {Array<string>} input
 * @param {(zeroCount: number, oneCount: number) => '0'|'1'} getValueToKeep
 * @returns {string}
 */
function filterByCount(input, getValueToKeep) {
  let values = input.slice();

  for (let i = 0; values.length > 1; i += 1) {
    const count = _.countBy(values, (value) => value[i]);
    const valueToKeep = getValueToKeep(count[0], count[1]);
    values = values.filter((value) => value[i] === valueToKeep);
  }

  return values[0];
}

module.exports = { part1, part2 };
