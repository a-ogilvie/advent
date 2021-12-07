/* eslint-disable no-magic-numbers */
'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne } = require('./index');

describe('Day 01: Sonar Sweep', () => {
  const testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

  describe('Part 1', () => {
    it('should count the number of values with increasing depth', () => {
      expect(partOne(testInput)).to.equal(7);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should use a three-measurement window to count the number of values with increasing depth', () => {
      expect(partOne(testInput, 3)).to.equal(5);

      console.log(partOne(puzzleInput, 3));
    });
  });
});
