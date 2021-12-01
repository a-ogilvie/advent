/* eslint-disable no-magic-numbers */
'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { part1, part2 } = require('./index');

xdescribe('Day nn', () => {
  const testInput = null;

  describe('Part 1', () => {
    it('should return input', () => {
      expect(part1(testInput)).to.deep.equal(testInput);

      console.log(part1(puzzleInput));
    });
  });

  xdescribe('Part 2', () => {
    it('should return input', () => {
      expect(part2(testInput)).to.deep.equal(testInput);

      console.log(part2(puzzleInput));
    });
  });
});
