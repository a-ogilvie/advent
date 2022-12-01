'use strict';

const _ = require('lodash');

/** @typedef {[boolean, [number, number], [number, number], [number, number]]} Instruction */

/** @typedef {{ volume: number; xFrom: number; xTo: number; yFrom: number; yTo: number; zFrom: number; zTo: number }} Cuboid */

/**
 * @param {Array<Instruction>} input
 * @returns {number}
 */
function partOne(input) {
  const instructions = input
    .map(
      /**
       * @param {Instruction} instruction
       * @returns {Instruction}
       */
      ([isOn, [xFrom, xTo], [yFrom, yTo], [zFrom, zTo]]) => [
        isOn,
        [Math.max(xFrom, -50), Math.min(xTo, 50)],
        [Math.max(yFrom, -50), Math.min(yTo, 50)],
        [Math.max(zFrom, -50), Math.min(zTo, 50)],
      ]
    )
    .filter(
      ([, [xFrom, xTo], [yFrom, yTo], [zFrom, zTo]]) => xFrom <= xTo && yFrom <= yTo && zFrom <= zTo
    );

  return countEnabledCubes(instructions);
}

/**
 * @param {Array<Instruction>} input
 * @returns {number}
 */
function partTwo(input) {
  return countEnabledCubes(input);
}

/**
 * @param {Array<Instruction>} instructions
 * @returns {number}
 */
function countEnabledCubes(instructions) {
  /** @type {Array<Cuboid>} */
  const cuboids = [];

  for (const [isOn, x, y, z] of instructions) {
    const newCuboid = getCuboid(x, y, z);

    /** @type {Array<Cuboid>} */
    const newCuboids = [];
    for (const cuboid of cuboids) {
      const overlappingCuboid = getOverlappingCuboid(cuboid, newCuboid);

      if (overlappingCuboid)
        newCuboids.push(
          cuboid.volume > 0
            ? { ...overlappingCuboid, volume: -overlappingCuboid.volume }
            : overlappingCuboid
        );
    }

    if (isOn) newCuboids.push(newCuboid);

    cuboids.push(...newCuboids);
  }

  return _.sumBy(cuboids, 'volume');
}

/**
 * @param {Cuboid} cubeA
 * @param {Cuboid} cubeB
 * @returns {Cuboid}
 */
function getOverlappingCuboid(cubeA, cubeB) {
  const isOverlapping =
    cubeA.xTo >= cubeB.xFrom &&
    cubeA.xFrom <= cubeB.xTo &&
    cubeA.yTo >= cubeB.yFrom &&
    cubeA.yFrom <= cubeB.yTo &&
    cubeA.zTo >= cubeB.zFrom &&
    cubeA.zFrom <= cubeB.zTo;

  return isOverlapping
    ? getCuboid(
        [Math.max(cubeA.xFrom, cubeB.xFrom), Math.min(cubeA.xTo, cubeB.xTo)],
        [Math.max(cubeA.yFrom, cubeB.yFrom), Math.min(cubeA.yTo, cubeB.yTo)],
        [Math.max(cubeA.zFrom, cubeB.zFrom), Math.min(cubeA.zTo, cubeB.zTo)]
      )
    : null;
}

/**
 * @param {[number, number]} x
 * @param {[number, number]} y
 * @param {[number, number]} z
 * @returns {Cuboid}
 */
function getCuboid([xFrom, xTo], [yFrom, yTo], [zFrom, zTo]) {
  return {
    volume: (xTo - (xFrom - 1)) * (yTo - (yFrom - 1)) * (zTo - (zFrom - 1)),
    xFrom,
    xTo,
    yFrom,
    yTo,
    zFrom,
    zTo,
  };
}

module.exports = { partOne, partTwo };
