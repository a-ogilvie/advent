'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('Day 06: Lanternfish', () => {
  const testInput = [3, 4, 3, 1, 2];

  describe('Part 1', () => {
    it('should return the number of lanternfish that would exist after 80 days', () => {
      expect(partOne(testInput)).to.equal(5934);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the number of lanternfish that would exist after 256 days', () => {
      expect(partTwo(testInput)).to.equal(26984457539);

      console.log(partTwo(puzzleInput));
    });
  });
});
