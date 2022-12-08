'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2022 - Day 08: Treetop Tree House', () => {
  const testInput = [
    [3, 0, 3, 7, 3],
    [2, 5, 5, 1, 2],
    [6, 5, 3, 3, 2],
    [3, 3, 5, 4, 9],
    [3, 5, 3, 9, 0],
  ];

  describe('Part 1,', () => {
    it('should return the number of trees visible from outside the grid', () => {
      expect(partOne(testInput)).to.equal(21);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2,', () => {
    it('should return the maximum scenic score for all trees within the grid', () => {
      expect(partTwo(testInput)).to.equal(8);

      console.log(partTwo(puzzleInput));
    });
  });
});
