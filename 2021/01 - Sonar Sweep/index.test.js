'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2021 - Day 01: Sonar Sweep', () => {
  const testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

  describe('Part 1', () => {
    it('should count the number of values with increasing depth', () => {
      expect(partOne(testInput)).to.equal(7);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should use a three-measurement window to count the number of values with increasing depth', () => {
      expect(partTwo(testInput)).to.equal(5);

      console.log(partTwo(puzzleInput));
    });
  });
});
