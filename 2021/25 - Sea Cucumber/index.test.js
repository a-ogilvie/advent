'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne } = require('./index');

describe('2021 - Day 25', () => {
  /** @type {Array<Array<'>'|'v'|'.'>>} */
  const testInput = [
    ['v', '.', '.', '.', '>', '>', '.', 'v', 'v', '>'],
    ['.', 'v', 'v', '>', '>', '.', 'v', 'v', '.', '.'],
    ['>', '>', '.', '>', 'v', '>', '.', '.', '.', 'v'],
    ['>', '>', 'v', '>', '>', '.', '>', '.', 'v', '.'],
    ['v', '>', 'v', '.', 'v', 'v', '.', 'v', '.', '.'],
    ['>', '.', '>', '>', '.', '.', 'v', '.', '.', '.'],
    ['.', 'v', 'v', '.', '.', '>', '.', '>', 'v', '.'],
    ['v', '.', 'v', '.', '.', '>', '>', 'v', '.', 'v'],
    ['.', '.', '.', '.', 'v', '.', '.', 'v', '.', '>'],
  ];

  it('should return the number of steps before the given sea cucumbers can no longer move', () => {
    expect(partOne(testInput)).to.equal(58);

    console.log(partOne(puzzleInput));
  });
});
