'use strict';

const _ = require('lodash');

/**
 * @param {Array<[[number, number], [number, number]]>} input
 * @returns {number}
 */
function partOne(input) {
  return _.sumBy(input, ([elf1, elf2]) =>
    doesRangeAContainRangeB(elf1, elf2) || doesRangeAContainRangeB(elf2, elf1) ? 1 : 0
  );
}

/**
 * @param {Array<[[number, number], [number, number]]>} input
 * @returns {number}
 */
function partTwo(input) {
  return _.sumBy(input, ([elf1, elf2]) => {
    const [[elf1Start, elf1End], [elf2Start, elf2End]] = [elf1, elf2];
    const doesRange1OverlapWithRange2 =
      (elf1End >= elf2Start && elf1End <= elf2End) ||
      (elf1Start >= elf2Start && elf1Start <= elf2End);

    return doesRange1OverlapWithRange2 ||
      doesRangeAContainRangeB(elf1, elf2) ||
      doesRangeAContainRangeB(elf2, elf1)
      ? 1
      : 0;
  });
}

/**
 * @param {[number, number]} rangeA
 * @param {[number, number]} rangeB
 * @returns {boolean}
 */
function doesRangeAContainRangeB([rangeAStart, rangeAEnd], [rangeBStart, rangeBEnd]) {
  return rangeAStart >= rangeBStart && rangeAEnd <= rangeBEnd;
}

module.exports = { partOne, partTwo };
