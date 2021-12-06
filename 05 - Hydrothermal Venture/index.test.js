/* eslint-disable no-magic-numbers */
'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { part1, part2 } = require('./index');

describe('Day 05: Hydrothermal Venture', () => {
  /** @type {Array<[[number, number], [number, number]]>} */
  const testInput = [
    [
      [0, 9],
      [5, 9],
    ],
    [
      [8, 0],
      [0, 8],
    ],
    [
      [9, 4],
      [3, 4],
    ],
    [
      [2, 2],
      [2, 1],
    ],
    [
      [7, 0],
      [7, 4],
    ],
    [
      [6, 4],
      [2, 0],
    ],
    [
      [0, 9],
      [2, 9],
    ],
    [
      [3, 4],
      [1, 4],
    ],
    [
      [0, 0],
      [8, 8],
    ],
    [
      [5, 5],
      [8, 2],
    ],
  ];

  describe('Part 1', () => {
    it('should find the number of positions where all described horizontal and vertical lines intersect', () => {
      expect(part1(testInput)).to.equal(5);

      console.log(part1(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('sshould find the number of positions where all described horizontal, vertical, and diagonal lines intersect', () => {
      expect(part2(testInput)).to.equal(12);

      console.log(part2(puzzleInput));
    });
  });
});
