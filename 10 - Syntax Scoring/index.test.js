/* eslint-disable no-magic-numbers */
'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('Day 10: Syntax Scoring', () => {
  const testInput = [
    '[({(<(())[]>[[{[]{<()<>>',
    '[(()[<>])]({[<{<<[]>>(',
    '{([(<{}[<>[]}>{[]{[(<()>',
    '(((({<>}<{<{<>}{[]{[]{}',
    '[[<[([]))<([[{}[[()]]]',
    '[{[{({}]{}}([{[{{{}}([]',
    '{<[[]]>}<{[{[{[]{()[[[]',
    '[<(<(<(<{}))><([]([]()',
    '<{([([[(<>()){}]>(<<{{',
    '<{([{{}}[<[[[<>{}]]]>[]]',
  ];

  describe('Part 1', () => {
    it('should return the total syntax error score for each line with an error', () => {
      expect(partOne(testInput)).to.equal(26397);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the median score of each autocompletion score for each incomplete line', () => {
      expect(partTwo(testInput)).to.equal(288957);

      console.log(partTwo(puzzleInput));
    });
  });
});
