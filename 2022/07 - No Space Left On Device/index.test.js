'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2022 - Day 07: No Space Left On Device', () => {
  const testInput = [
    '$ cd /',
    '$ ls',
    'dir a',
    '14848514 b.txt',
    '8504156 c.dat',
    'dir d',
    '$ cd a',
    '$ ls',
    'dir e',
    '29116 f',
    '2557 g',
    '62596 h.lst',
    '$ cd e',
    '$ ls',
    '584 i',
    '$ cd ..',
    '$ cd ..',
    '$ cd d',
    '$ ls',
    '4060174 j',
    '8033020 d.log',
    '5626152 d.ext',
    '7214296 k',
  ];

  describe('Part 1', () => {
    it('should return the total size of all directories with a size of at most 100_000', () => {
      expect(partOne(testInput)).to.equal(95437);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the size of the smallest directory that can be deleted to leave at least 30_000_000 free space', () => {
      expect(partTwo(testInput)).to.equal(24933642);

      console.log(partTwo(puzzleInput));
    });
  });
});
