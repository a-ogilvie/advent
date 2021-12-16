'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('Day 07: The Treachery of Whales', () => {
  const testInput = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

  describe('Part 1', () => {
    it('should minimise the linear fuel consumption to align the given input', () => {
      expect(partOne(testInput)).to.equal(37);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should minimise the triangular fuel consumption to align the given input', () => {
      expect(partTwo(testInput)).to.equal(168);

      console.log(partTwo(puzzleInput));
    });
  });
});
