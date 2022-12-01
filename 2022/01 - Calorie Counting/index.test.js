'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2022 - Day 01: Calorie Counting', () => {
  const testInput = [
    1000,
    2000,
    3000,
    null,
    4000,
    null,
    5000,
    6000,
    null,
    7000,
    8000,
    9000,
    null,
    10000,
  ];

  describe('Part 1', () => {
    it('should return the total calories carried by the elf with the most calories', () => {
      expect(partOne(testInput)).to.equal(24000);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the total calories carried by the top three elves with the most calories', () => {
      expect(partTwo(testInput)).to.equal(45000);

      console.log(partTwo(puzzleInput));
    });
  });
});
