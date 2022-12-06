'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2022 - Day 06: Tuning Trouble', () => {
  describe('Part 1', () => {
    it('should return the number of characters that need to be processed before the first string of unique characters of length 4 is reached', () => {
      expect(partOne('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).to.equal(7);
      expect(partOne('bvwbjplbgvbhsrlpgdmjqwftvncz')).to.equal(5);
      expect(partOne('nppdvjthqldpwncqszvftbrmjlhg')).to.equal(6);
      expect(partOne('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).to.equal(10);
      expect(partOne('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).to.equal(11);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the number of characters that need to be processed before the first string of unique characters of length 14 is reached', () => {
      expect(partTwo('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).to.equal(19);
      expect(partTwo('bvwbjplbgvbhsrlpgdmjqwftvncz')).to.equal(23);
      expect(partTwo('nppdvjthqldpwncqszvftbrmjlhg')).to.equal(23);
      expect(partTwo('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).to.equal(29);
      expect(partTwo('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).to.equal(26);

      console.log(partTwo(puzzleInput));
    });
  });
});
