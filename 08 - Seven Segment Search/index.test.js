/* eslint-disable no-magic-numbers */
'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input'); // eslint-disable-line no-unused-vars

const { partOne, partTwo } = require('./index');

describe('Day 08: Seven Segment Search', () => {
  /** @type {Array<[string, string]>} */
  const testInput = [
    ['be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb', 'fdgacbe cefdb cefbgd gcbe'],
    ['edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec', 'fcgedb cgb dgebacf gc'],
    ['fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef', 'cg cg fdcagb cbg'],
    ['fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega', 'efabcd cedba gadfec cb'],
    ['aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga', 'gecf egdcabf bgf bfgea'],
    ['fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf', 'gebdcfa ecba ca fadegcb'],
    ['dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf', 'cefg dcbef fcge gbcadfe'],
    ['bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd', 'ed bcgafe cdgba cbgef'],
    ['egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg', 'gbdfcae bgc cg cgb'],
    ['gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc', 'fgae cfgab fg bagce'],
  ];

  describe('Part 1', () => {
    it('should return the number of times 1, 4, 7, or 8 appear in the given output values', () => {
      expect(partOne(testInput)).to.equal(26);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the sum of all the output values', () => {
      expect(partTwo(testInput)).to.equal(61229);

      console.log(partTwo(puzzleInput));
    });
  });
});
