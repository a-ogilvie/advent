'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('Day 14: Extended Polymerisation', () => {
  /** @type {{ pairInsertionRules: Map<string, string>, polymerTemplate: string }} */
  const testInput = {
    pairInsertionRules: new Map([
      ['CH', 'B'],
      ['HH', 'N'],
      ['CB', 'H'],
      ['NH', 'C'],
      ['HB', 'C'],
      ['HC', 'B'],
      ['HN', 'C'],
      ['NN', 'C'],
      ['BH', 'H'],
      ['NC', 'B'],
      ['NB', 'B'],
      ['BN', 'B'],
      ['BB', 'N'],
      ['BC', 'B'],
      ['CC', 'N'],
      ['CN', 'C'],
    ]),
    polymerTemplate: 'NNCB',
  };

  describe('Part 1', () => {
    it('should return the difference between the most common and least common chars after 10 steps of polymerisation', () => {
      expect(partOne(testInput)).to.equal(1588);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the difference between the most common and least common chars after 40 steps of polymerisation', () => {
      expect(partTwo(testInput)).to.equal(2188189693529);

      console.log(partTwo(puzzleInput));
    });
  });
});
