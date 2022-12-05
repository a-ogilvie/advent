'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2022 - Day 05: Supply Stacks', () => {
  /**
   * @type {{
   *   stacks: Array<Array<string>>
   *   instructions: Array<[number, number, number]>
   * }}
   */
  const testInput = {
    stacks: [['Z', 'N'], ['M', 'C', 'D'], ['P']],

    instructions: [
      [1, 2, 1],
      [3, 1, 3],
      [2, 2, 1],
      [1, 1, 2],
    ],
  };

  describe('Part 1', () => {
    it('should return a list of the top crate from each stack', () => {
      expect(partOne(testInput)).to.equal('CMZ');

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return a list of the top crate from each stack', () => {
      expect(partTwo(testInput)).to.equal('MCD');

      console.log(partTwo(puzzleInput));
    });
  });
});
