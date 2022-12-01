'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

/** @typedef {'A'|'B'|'C'|'D'} Amphipod */

describe('2021 - Day 23: Amphipod', () => {
  /** @type {[[Amphipod, Amphipod], [Amphipod, Amphipod], [Amphipod, Amphipod], [Amphipod, Amphipod]]} */
  const testInput = [
    ['B', 'A'],
    ['C', 'D'],
    ['B', 'C'],
    ['D', 'A'],
  ];

  describe('Part 1', () => {
    it('should return the least energy required to organise the given amphipods', () => {
      expect(partOne(testInput)).to.equal(12521);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    const extraRows = [
      ['D', 'D'],
      ['C', 'B'],
      ['B', 'A'],
      ['A', 'C'],
    ];

    const extendInput = (input) => input.map((row, i) => [row[0], ...extraRows[i], row[1]]);

    it('should return the least energy required to organise the given amphipods', () => {
      expect(partTwo(extendInput(testInput))).to.equal(44169);

      console.log(partTwo(extendInput(puzzleInput)));
    }).timeout(5000);
  });
});
