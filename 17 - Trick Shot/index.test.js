'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('Day 17: Trick Shot', () => {
  /** @type {[[number, number], [number, number]]} */
  const testInput = [
    [20, 30],
    [-10, -5],
  ];

  describe('Part 1', () => {
    it('should return the highest y position reached by any probe that visits the given target area', () => {
      expect(partOne(testInput)).to.equal(45);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the number of distinct initial velocities that cause the probe to visit the given target area', () => {
      expect(partTwo(testInput)).to.equal(112);

      console.log(partTwo(puzzleInput));
    });
  });
});
