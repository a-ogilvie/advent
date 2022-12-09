'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2022 - Day 09: Rope Bridge', () => {
  /** @type {Array<['U'|'D'|'L'|'R', number]>} */
  const testInput = [
    ['R', 4],
    ['U', 4],
    ['L', 3],
    ['D', 1],
    ['R', 4],
    ['D', 1],
    ['L', 5],
    ['R', 2],
  ];

  describe('Part 1', () => {
    it('should return the number of positions visited by the tail of a rope of length 2 after following the given directions', () => {
      expect(partOne(testInput)).to.equal(13);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the number of positions visited by the tail of a rope of length 10 after following the given directions', () => {
      expect(partTwo(testInput)).to.equal(1);
      expect(
        partTwo([
          ['R', 5],
          ['U', 8],
          ['L', 8],
          ['D', 3],
          ['R', 17],
          ['D', 10],
          ['L', 25],
          ['U', 20],
        ])
      ).to.equal(36);

      console.log(partTwo(puzzleInput));
    });
  });
});
