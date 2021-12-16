'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('Day 13: Transparent Origami', () => {
  /** @type {{ dotCoordinates: Array<[number, number]>, foldInstructions: Array<[number | null, number | null]>}} */
  const testInput = {
    dotCoordinates: [
      [6, 10],
      [0, 14],
      [9, 10],
      [0, 3],
      [10, 4],
      [4, 11],
      [6, 0],
      [6, 12],
      [4, 1],
      [0, 13],
      [10, 12],
      [3, 4],
      [3, 0],
      [8, 4],
      [1, 10],
      [2, 14],
      [8, 10],
      [9, 0],
    ],
    foldInstructions: [
      [null, 7],
      [5, null],
    ],
  };

  describe('Part 1', () => {
    it('should return the number of visible dots after completing the first given fold instruction', () => {
      expect(partOne(testInput)).to.equal(17);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the encoded message after following the given fold instructions', () => {
      expect(partTwo(testInput)).to.equal(
        `■■■■■
■···■
■···■
■···■
■■■■■`
      );

      console.log(partTwo(puzzleInput));
    });
  });
});
