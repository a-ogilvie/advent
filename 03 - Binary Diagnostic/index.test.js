/* eslint-disable no-magic-numbers */
'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

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
      expect(partOne(testInput)).to.equal(198);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return product of most common and least common digits, filtering each time', () => {
      expect(partTwo(testInput)).to.equal(230);

      console.log(partTwo(puzzleInput));
    });
  });
});
