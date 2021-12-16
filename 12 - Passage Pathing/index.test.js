'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('Day 12: Passage Pathing', () => {
  /** @type {Array<[string, string]>} */
  const testInput1 = [
    ['start', 'A'],
    ['start', 'b'],
    ['A', 'c'],
    ['A', 'b'],
    ['b', 'd'],
    ['A', 'end'],
    ['b', 'end'],
  ];

  /** @type {Array<[string, string]>} */
  const testInput2 = [
    ['dc', 'end'],
    ['HN', 'start'],
    ['start', 'kj'],
    ['dc', 'start'],
    ['dc', 'HN'],
    ['LN', 'dc'],
    ['HN', 'end'],
    ['kj', 'sa'],
    ['kj', 'HN'],
    ['kj', 'dc'],
  ];

  /** @type {Array<[string, string]>} */
  const testInput3 = [
    ['fs', 'end'],
    ['he', 'DX'],
    ['fs', 'he'],
    ['start', 'DX'],
    ['pj', 'DX'],
    ['end', 'zg'],
    ['zg', 'sl'],
    ['zg', 'pj'],
    ['pj', 'he'],
    ['RW', 'he'],
    ['fs', 'DX'],
    ['pj', 'RW'],
    ['zg', 'RW'],
    ['start', 'pj'],
    ['he', 'WI'],
    ['zg', 'he'],
    ['pj', 'fs'],
    ['start', 'RW'],
  ];

  describe('Part 1', () => {
    it('should return the number of paths from start to end, visiting each small cave at most once', () => {
      expect(partOne(testInput1)).to.equal(10);
      expect(partOne(testInput2)).to.equal(19);
      expect(partOne(testInput3)).to.equal(226);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the number of paths from start to end, visiting one small cave at most twice and other small caves at most once', () => {
      expect(partTwo(testInput1)).to.equal(36);
      expect(partTwo(testInput2)).to.equal(103);
      expect(partTwo(testInput3)).to.equal(3509);

      console.log(partTwo(puzzleInput));
    });
  });
});
