'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2021 - Day 15: Chiton', () => {
  const testInput = [
    [1, 1, 6, 3, 7, 5, 1, 7, 4, 2],
    [1, 3, 8, 1, 3, 7, 3, 6, 7, 2],
    [2, 1, 3, 6, 5, 1, 1, 3, 2, 8],
    [3, 6, 9, 4, 9, 3, 1, 5, 6, 9],
    [7, 4, 6, 3, 4, 1, 7, 1, 1, 1],
    [1, 3, 1, 9, 1, 2, 8, 1, 3, 7],
    [1, 3, 5, 9, 9, 1, 2, 4, 2, 1],
    [3, 1, 2, 5, 4, 2, 1, 6, 3, 9],
    [1, 2, 9, 3, 1, 3, 8, 5, 2, 1],
    [2, 3, 1, 1, 9, 4, 4, 5, 8, 1],
  ];

  describe('Part 1', () => {
    it('should return the path with the minimum total risk', () => {
      expect(partOne(testInput)).to.equal(40);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the path with the minimum total risk', () => {
      expect(partTwo(testInput)).to.equal(315);

      console.log(partTwo(puzzleInput));
    });
  });
});
