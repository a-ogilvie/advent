/* eslint-disable no-magic-numbers */
'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('Day 06: Lanternfish', () => {
  const testInput = [3, 4, 3, 1, 2];

  describe('Part 1', () => {
    it('should return input', () => {
      expect(partOne(testInput)).to.equal(5934);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return input', () => {
      expect(partTwo(testInput)).to.equal(26984457539);

      console.log(partTwo(puzzleInput));
    });
  });
});
