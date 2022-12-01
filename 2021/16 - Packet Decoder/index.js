'use strict';

const _ = require('lodash');

/* eslint-disable sort-keys */
const TYPE_ID = {
  SUM: 0,
  PRODUCT: 1,
  MINIMUM: 2,
  MAXIMUM: 3,
  LITERAL: 4,
  GREATER_THAN: 5,
  LESS_THAN: 6,
  EQUAL_TO: 7,
};
/* eslint-enable sort-keys */

const HEX_TO_BINARY = {
  0: '0000',
  1: '0001',
  2: '0010',
  3: '0011',
  4: '0100',
  5: '0101',
  6: '0110',
  7: '0111',
  8: '1000',
  9: '1001',
  A: '1010',
  B: '1011',
  C: '1100',
  D: '1101',
  E: '1110',
  F: '1111',
};

/**
 * @typedef Packet
 * @property {Array<Packet>} [subPackets]
 * @property {number} typeId
 * @property {number} [value]
 * @property {number} version
 */

/**
 * @param {string} input
 * @returns {number}
 */
function partOne(input) {
  const binaryInput = toBinary(input);
  const { packet } = parsePacket(binaryInput);

  /**
   * @param {Packet} packet
   * @returns {number}
   */
  const sumPacketVersions = (packet) =>
    packet.version + _.sumBy(packet.subPackets?.map((subPacket) => sumPacketVersions(subPacket)));

  return sumPacketVersions(packet);
}

/**
 * @param {string} input
 * @returns {number}
 */
function partTwo(input) {
  const binaryInput = toBinary(input);
  const { packet } = parsePacket(binaryInput);

  /**
   * @param {Packet} packet
   * @returns {number}
   */
  const evaluatePacket = (packet) => {
    const subPacketValues = packet.subPackets?.map((subPacket) => evaluatePacket(subPacket));

    switch (packet.typeId) {
      case TYPE_ID.SUM:
        return _.sum(subPacketValues);
      case TYPE_ID.PRODUCT:
        return subPacketValues.reduce(_.multiply); // eslint-disable-line no-restricted-properties
      case TYPE_ID.MINIMUM:
        return Math.min(...subPacketValues);
      case TYPE_ID.MAXIMUM:
        return Math.max(...subPacketValues);
      case TYPE_ID.LITERAL:
        return packet.value;
      case TYPE_ID.GREATER_THAN:
        return Number(subPacketValues[0] > subPacketValues[1]);
      case TYPE_ID.LESS_THAN:
        return Number(subPacketValues[0] < subPacketValues[1]);
      case TYPE_ID.EQUAL_TO:
        return Number(subPacketValues[0] === subPacketValues[1]);
    }
  };

  return evaluatePacket(packet);
}

/**
 * @param {string} input
 * @returns {string}
 */
function toBinary(input) {
  const binary = input
    .split('')
    .map((bit) => HEX_TO_BINARY[bit])
    .join('');

  while (binary.length % 4 !== 0) binary.padStart(binary.length + 1, '0');

  return binary;
}

/**
 * @param {string} binaryInput
 * @returns {{ packet: Packet, rest: string }}
 */
function parsePacket(binaryInput) {
  let pointer = 0;

  const getNextBits = (length) => {
    const nextBits = binaryInput.slice(pointer, pointer + length);
    pointer += length;
    return nextBits;
  };

  const version = Number.parseInt(getNextBits(3), 2);

  const typeId = Number.parseInt(getNextBits(3), 2);

  if (typeId === TYPE_ID.LITERAL) {
    let value = '';

    let isLastGroup = false;
    while (!isLastGroup) {
      isLastGroup = getNextBits(1) === '0';
      value += getNextBits(4);
    }

    return {
      packet: { typeId, value: Number.parseInt(value, 2), version },
      rest: binaryInput.slice(pointer),
    };
  }

  const lengthTypeId = Number.parseInt(getNextBits(1), 2);
  /** @type {Array<Packet>} */
  const subPackets = [];

  if (lengthTypeId === 0) {
    const totalLength = Number.parseInt(getNextBits(15), 2);

    let subPacketData = getNextBits(totalLength);

    while (subPacketData.length) {
      const subPacket = parsePacket(subPacketData);

      subPackets.push(subPacket.packet);

      subPacketData = subPacket.rest;
    }

    return { packet: { subPackets, typeId, version }, rest: binaryInput.slice(pointer) };
  }

  if (lengthTypeId === 1) {
    const numSubPackets = Number.parseInt(getNextBits(11), 2);

    let restOfInput = binaryInput.slice(pointer);

    for (let n = 1; n <= numSubPackets; n += 1) {
      const { packet, rest } = parsePacket(restOfInput);

      subPackets.push(packet);

      restOfInput = rest;
    }

    return { packet: { subPackets, typeId, version }, rest: restOfInput };
  }
}

module.exports = { partOne, partTwo };
