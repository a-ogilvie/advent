/* eslint-disable no-magic-numbers */
'use strict';

const _ = require('lodash');

/**
 * @param {Array<[string, string]>} input
 * @returns {number}
 */
function partOne(input) {
  return input
    .flatMap(([, outputJoined]) => outputJoined.split(' '))
    .filter((pattern) => [2, 3, 4, 7].includes(pattern.length)).length;
}

/**
 * @param {Array<[string, string]>} input
 * @returns {any}
 */
function partTwo(input) {
  return _.sumBy(input, ([signalPatterns, output]) => {
    const allPatterns = [...signalPatterns.split(' '), ...output.split(' ')];

    /**
     * @param {(pattern: string) => boolean} predicate
     * @returns {string}
     */
    const getPattern = (predicate) => allPatterns.find(predicate).split('').sort().join('');

    const one = getPattern((pattern) => pattern.length === 2);
    const three = getPattern(
      (pattern) =>
        pattern.length === 5 && one.split('').every((oneDigit) => pattern.includes(oneDigit))
    );
    const four = getPattern((pattern) => pattern.length === 4);
    const two = getPattern(
      (pattern) =>
        pattern.length === 5 &&
        !one.split('').every((oneDigit) => pattern.includes(oneDigit)) &&
        _.intersection(four.split(''), pattern.split('')).length === 2
    );
    const five = getPattern(
      (pattern) =>
        pattern.length === 5 &&
        !one.split('').every((oneDigit) => pattern.includes(oneDigit)) &&
        _.intersection(four.split(''), pattern.split('')).length === 3
    );
    const seven = getPattern((pattern) => pattern.length === 3);
    const eight = getPattern((pattern) => pattern.length === 7);
    const nine = getPattern(
      (pattern) =>
        pattern.length === 6 && four.split('').every((fourDigit) => pattern.includes(fourDigit))
    );
    const zero = getPattern(
      (pattern) =>
        pattern.length === 6 &&
        !nine.split('').every((nineDigit) => pattern.includes(nineDigit)) &&
        one.split('').every((oneDigit) => pattern.includes(oneDigit))
    );
    const six = getPattern(
      (pattern) =>
        pattern.length === 6 &&
        !nine.split('').every((nineDigit) => pattern.includes(nineDigit)) &&
        !zero.split('').every((zeroDigit) => pattern.includes(zeroDigit))
    );

    const digitMap = new Map([
      [zero, '0'],
      [one, '1'],
      [two, '2'],
      [three, '3'],
      [four, '4'],
      [five, '5'],
      [six, '6'],
      [seven, '7'],
      [eight, '8'],
      [nine, '9'],
    ]);

    return Number(
      output
        .split(' ')
        .map((digit) => digitMap.get(digit.split('').sort().join('')))
        .join('')
    );
  });
}

module.exports = { partOne, partTwo };
