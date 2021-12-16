'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input'); // eslint-disable-line no-unused-vars

const { partOne, partTwo } = require('./index');

describe.skip('Day nn', () => {
  const testInput = null;

  describe('Part 1', () => {
    it('should return input', () => {
      expect(partOne(testInput)).to.equal(testInput);

      // console.log(partOne(puzzleInput));
    });
  });

  describe.skip('Part 2', () => {
    it('should return input', () => {
      expect(partTwo(testInput)).to.equal(testInput);

      // console.log(partTwo(puzzleInput));
    });
  });
});
