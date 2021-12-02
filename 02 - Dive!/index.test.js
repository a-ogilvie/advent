/* eslint-disable no-magic-numbers */
'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { part1, part2 } = require('./index');

describe('Day 02: Dive!', () => {
  const testInput = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];

  describe('Part 1', () => {
    it('should calculate the product of position and depth', () => {
      expect(part1(testInput)).to.equal(150);

      console.log(part1(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should calculate the product of position and depth', () => {
      expect(part2(testInput)).to.equal(900);

      console.log(part2(puzzleInput));
    });
  });
});
