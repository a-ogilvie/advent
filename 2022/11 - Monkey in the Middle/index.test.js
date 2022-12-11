'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2022 - Day 11: Monkey in the Middle', () => {
  /**
   * @type {Array<{
   *   items: Array<number>;
   *   operation: (old: number) => number;
   *   test: (item: number) => number;
   * }>}
   */
  const testInput = [
    {
      items: [79, 98],
      operation: (old) => old * 19,
      test: (item) => (item % 23 === 0 ? 2 : 3),
    },

    {
      items: [54, 65, 75, 74],
      operation: (old) => old + 6,
      test: (item) => (item % 19 === 0 ? 2 : 0),
    },

    {
      items: [79, 60, 97],
      operation: (old) => old * old,
      test: (item) => (item % 13 === 0 ? 1 : 3),
    },
    {
      items: [74],
      operation: (old) => old + 3,
      test: (item) => (item % 17 === 0 ? 0 : 1),
    },
  ];

  describe('Part 1', () => {
    it('should return the level of monkey business after 20 rounds', () => {
      expect(partOne(testInput)).to.equal(10605);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the level of monkey business after 10000 rounds', () => {
      expect(partTwo(testInput, 23 * 19 * 13 * 17)).to.equal(2713310158);

      console.log(partTwo(puzzleInput, 19 * 3 * 13 * 7 * 5 * 11 * 17 * 2));
    });
  });
});
