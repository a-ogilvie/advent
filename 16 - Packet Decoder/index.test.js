'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('Day 16: Packet Decoder', () => {
  describe('Part 1', () => {
    it('should return the sum of the versions of all packets encoded by the given hex string ', () => {
      expect(partOne('8A004A801A8002F478')).to.equal(16);
      expect(partOne('620080001611562C8802118E34')).to.equal(12);
      expect(partOne('C0015000016115A2E0802F182340')).to.equal(23);
      expect(partOne('A0016C880162017C3686B18A3D4780')).to.equal(31);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the value encoded by the given hex string', () => {
      expect(partTwo('C200B40A82')).to.equal(3);
      expect(partTwo('04005AC33890')).to.equal(54);
      expect(partTwo('880086C3E88112')).to.equal(7);
      expect(partTwo('CE00C43D881120')).to.equal(9);
      expect(partTwo('D8005AC2A8F0')).to.equal(1);
      expect(partTwo('F600BC2D8F')).to.equal(0);
      expect(partTwo('9C005AC2F8F0')).to.equal(0);
      expect(partTwo('9C0141080250320F1802104A08')).to.equal(1);

      console.log(partTwo(puzzleInput));
    });
  });
});
