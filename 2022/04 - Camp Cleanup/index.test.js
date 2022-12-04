'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2022 - Day 04: Camp Cleanup', () => {
  /** @type {Array<[[number, number], [number, number]]>} */
  const testInput = [
    [
      [2, 4],
      [6, 8],
    ],
    [
      [2, 3],
      [4, 5],
    ],
    [
      [5, 7],
      [7, 9],
    ],
    [
      [2, 8],
      [3, 7],
    ],
    [
      [6, 6],
      [4, 6],
    ],
    [
      [2, 6],
      [4, 8],
    ],
  ];

  describe('Part 1', () => {
    it('should return the number of pairs in which one range fully contains the other', () => {
      expect(partOne(testInput)).to.equal(2);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the number of pairs that have ranges that overlap at all', () => {
      expect(partTwo(testInput)).to.equal(4);

      console.log(partTwo(puzzleInput));
    });
  });
});
