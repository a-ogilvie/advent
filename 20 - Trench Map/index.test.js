'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('Day 20: Trench Map', () => {
  /** @type {{ image: Array<Array<'#'|'.'>>, imageEnhancementAlgorithm: Array<'#'|'.'> }} */
  const testInput = {
    image: [
      ['#', '.', '.', '#', '.'],
      ['#', '.', '.', '.', '.'],
      ['#', '#', '.', '.', '#'],
      ['.', '.', '#', '.', '.'],
      ['.', '.', '#', '#', '#'],
    ],
    // @ts-expect-error
    imageEnhancementAlgorithm:
      '..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..###..######.###...####..#..#####..##..#.#####...##.#.#..#.##..#.#......#.###.######.###.####...#.##.##..#..#..#####.....#.#....###..#.##......#.....#..#..#..##..#...##.######.####.####.#.#...#.......#..#.#.#...####.##.#......#..#...##.#.##..#...##.#.##..###.#......#.#.......#.#.#.####.###.##...#.....####.#..#..#.##.#....##..#.####....##...##..#...#......#.#.......#.......##..####..#...#.#.#...##..#.#..###..#####........#..####......#..#'.split(
        ''
      ),
  };

  describe('Part 1', () => {
    it('should return the number of lit pixels after applying the given enhancement algorithm to the given image twice', () => {
      expect(partOne(testInput)).to.equal(35);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the number of lit pixels after applying the given enhancement algorithm to the given image fifty times', () => {
      expect(partTwo(testInput)).to.equal(3351);

      console.log(partTwo(puzzleInput));
    });
  });
});
