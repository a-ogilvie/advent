'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2021 - Day 02: Dive!', () => {
  const testInput = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];

  describe('Part 1', () => {
    it('should calculate the product of position and depth', () => {
      expect(partOne(testInput)).to.equal(150);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should calculate the product of position and depth', () => {
      expect(partTwo(testInput)).to.equal(900);

      console.log(partTwo(puzzleInput));
    });
  });
});
