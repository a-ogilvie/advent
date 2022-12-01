'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2022 - Day 02: Rock Paper Scissors', () => {
  /** @type {Array<['A'|'B'|'C', 'X'|'Y'|'Z']>} */
  const testInput = [
    ['A', 'Y'],
    ['B', 'X'],
    ['C', 'Z'],
  ];

  describe('Part 1', () => {
    it('should return the total score when following the given strategy guide', () => {
      expect(partOne(testInput)).to.equal(15);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the total score when following the given ultra top secret strategy guide', () => {
      expect(partTwo(testInput)).to.equal(12);

      console.log(partTwo(puzzleInput));
    });
  });
});
