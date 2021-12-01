/* eslint-disable no-magic-numbers */
'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { returnInput } = require('./index');

xdescribe('Day nn', () => {
  const testInput = null;

  describe('Part 1', () => {
    it('should return input', () => {
      expect(returnInput(testInput)).to.deep.equal(testInput);

      console.log(returnInput(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return input', () => {
      expect(returnInput(testInput)).to.deep.equal(testInput);

      console.log(returnInput(puzzleInput));
    });
  });
});
