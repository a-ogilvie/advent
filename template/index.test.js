/* eslint-disable no-magic-numbers */
'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { part1, part2 } = require('./index');

describe.skip('Day nn', () => {
  const testInput = null;

  describe('Part 1', () => {
    it('should return input', () => {
      expect(part1(testInput)).to.equal(testInput);

      console.log(part1(puzzleInput));
    });
  });

  describe.skip('Part 2', () => {
    it('should return input', () => {
      expect(part2(testInput)).to.equal(testInput);

      console.log(part2(puzzleInput));
    });
  });
});
