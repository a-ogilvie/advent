'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('Day 09: Smoke Basin', () => {
  const testInput = [
    [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
    [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
    [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
    [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
    [9, 8, 9, 9, 9, 6, 5, 6, 7, 8],
  ];

  describe('Part 1', () => {
    it('should return the sum of the risk levels of all low points in the given heatmap', () => {
      expect(partOne(testInput)).to.equal(15);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the product of the sizes of the three largest basins in the given heatmap', () => {
      expect(partTwo(testInput)).to.equal(1134);

      console.log(partTwo(puzzleInput));
    });
  });
});
