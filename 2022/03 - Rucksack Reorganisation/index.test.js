'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2022 - Day 03: Rucksack Reorganisation', () => {
  const testInput = [
    'vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg',
    'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
    'ttgJtRGJQctTZtZT',
    'CrZsJsPPZsGzwwsLwLmpwMDw',
  ];

  describe('Part 1', () => {
    it('should return the sum of the priorities of the items which appear in both compartments of each rucksack', () => {
      expect(partOne(testInput)).to.equal(157);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the sum of the priorities of the items which appear in every rucksack of each group', () => {
      expect(partTwo(testInput)).to.equal(70);

      console.log(partTwo(puzzleInput));
    });
  });
});
