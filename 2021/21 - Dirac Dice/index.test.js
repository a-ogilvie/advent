'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2021 - Day 21: Dirac Dice', () => {
  /** @type {[number, number]} */
  const testInput = [4, 8];

  describe('Part 1', () => {
    it('should return the score of the losing player multiplied by the number of dice rolls', () => {
      expect(partOne(testInput)).to.equal(739785);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the total number of wins for the overall winning player for all dice roll outcomes', () => {
      expect(partTwo(testInput)).to.equal(444356092776315);

      console.log(partTwo(puzzleInput));
    });
  });
});
