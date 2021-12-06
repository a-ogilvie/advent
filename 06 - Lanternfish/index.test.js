/* eslint-disable no-magic-numbers */
'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { part1, part2 } = require('./index');

describe('Day 06: Lanternfish', () => {
  const testInput = [3, 4, 3, 1, 2];

  describe('Part 1', () => {
    it('should return input', () => {
      expect(part1(testInput)).to.equal(5934);

      console.log(part1(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return input', () => {
      expect(part2(testInput)).to.equal(26984457539);

      console.log(part2(puzzleInput));
    });
  });
});
