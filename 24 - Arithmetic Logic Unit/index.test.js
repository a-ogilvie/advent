'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo, alu } = require('./index');

describe('Day 24: Arithmetic Logic Unit', () => {
  describe('Part 1', () => {
    it('should return the largest valid model number as validated by the given instructions', () => {
      expect(partOne(puzzleInput)).to.equal('91398299697996');
      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the smallest valid model number as validated by the given instructions', () => {
      expect(partTwo(puzzleInput)).to.equal('41171183141291');
      console.log(partTwo(puzzleInput));
    });
  });

  describe('alu', () => {
    it('should negate the given number', () => {
      expect(
        alu([
          ['inp', 'x', 10],
          ['mul', 'x', -1],
        ])
      ).to.deep.equal({ w: 0, x: -10, y: 0, z: 0 });
    });

    it('should check whether or not the given second number is three times the given first number', () => {
      expect(
        alu([
          ['inp', 'z', 3],
          ['inp', 'x', 3 * 3],
          ['mul', 'z', 3],
          ['eql', 'z', 'x'],
        ])
      ).to.deep.equal({ w: 0, x: 9, y: 0, z: 1 });

      expect(
        alu([
          ['inp', 'z', 3],
          ['inp', 'x', 3 * 3 + 1],
          ['mul', 'z', 3],
          ['eql', 'z', 'x'],
        ])
      ).to.deep.equal({ w: 0, x: 10, y: 0, z: 0 });
    });

    it('should convert the given number to binary', () => {
      expect(
        alu([
          ['inp', 'w', 11],
          ['add', 'z', 'w'],
          ['mod', 'z', 2],
          ['div', 'w', 2],
          ['add', 'y', 'w'],
          ['mod', 'y', 2],
          ['div', 'w', 2],
          ['add', 'x', 'w'],
          ['mod', 'x', 2],
          ['div', 'w', 2],
          ['mod', 'w', 2],
        ])
      ).to.deep.equal({ w: 1, x: 0, y: 1, z: 1 });
    });
  });
});
