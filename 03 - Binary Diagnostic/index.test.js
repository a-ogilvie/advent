/* eslint-disable no-magic-numbers */
'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { part1, part2 } = require('./index');

describe('Day 03: Binary Diagnostic', () => {
  const testInput = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ];

  describe('Part 1', () => {
    it('should return product of most common and least common digits', () => {
      expect(part1(testInput)).to.equal(198);

      console.log(part1(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return product of most common and least common digits, filtering each time', () => {
      expect(part2(testInput)).to.equal(230);

      console.log(part2(puzzleInput));
    });
  });
});
