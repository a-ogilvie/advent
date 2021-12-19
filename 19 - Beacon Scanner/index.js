'use strict';

const _ = require('lodash');

/** @typedef {[number, number, number]} Beacon */
/** @typedef {Array<Beacon>} Sensor */
/** @typedef {{ transform: (beacon: Beacon)  => Beacon, vector: [number, number, number] }} DisplacementVector */

/** @type {Array<(beacon: Beacon) => Beacon>} */
const TRANSFORMERS = [
  ([x, y, z]) => [-x, -y, z],
  ([x, y, z]) => [-x, -z, -y],
  ([x, y, z]) => [-x, y, -z],
  ([x, y, z]) => [-x, z, y],
  ([x, y, z]) => [-y, -x, -z],
  ([x, y, z]) => [-y, -z, x],
  ([x, y, z]) => [-y, x, z],
  ([x, y, z]) => [-y, z, -x],
  ([x, y, z]) => [-z, -x, y],
  ([x, y, z]) => [-z, -y, -x],
  ([x, y, z]) => [-z, x, -y],
  ([x, y, z]) => [-z, y, x],
  ([x, y, z]) => [x, -y, -z],
  ([x, y, z]) => [x, -z, y],
  ([x, y, z]) => [x, y, z],
  ([x, y, z]) => [x, z, -y],
  ([x, y, z]) => [y, -x, z],
  ([x, y, z]) => [y, -z, -x],
  ([x, y, z]) => [y, x, -z],
  ([x, y, z]) => [y, z, x],
  ([x, y, z]) => [z, -x, -y],
  ([x, y, z]) => [z, -y, x],
  ([x, y, z]) => [z, x, y],
  ([x, y, z]) => [z, y, -x],
];

const memoizedGetDisplacementVectorChains = _.memoize(getDisplacementVectorChains);

/**
 * @param {Array<Sensor>} input
 * @returns {number}
 */
function partOne(input) {
  /** @type {Set<string>} */
  const beaconsSet = new Set();

  const displacementVectorChains = memoizedGetDisplacementVectorChains(input);

  for (let i = 0; i < input.length; i += 1) {
    const sensor = input[i];
    const displacementVectorChain = displacementVectorChains[i];

    for (const beacon of sensor) {
      const transformedBeacon = displacementVectorChain.reduce(
        (prev, { vector: [dx, dy, dz], transform }) => {
          const [x, y, z] = transform(prev);
          return [x - dx, y - dy, z - dz];
        },
        beacon
      );

      beaconsSet.add(transformedBeacon.join(','));
    }
  }

  return beaconsSet.size;
}

/**
 * @param {Array<Sensor>} input
 * @returns {number}
 */
function partTwo(input) {
  const displacementVectorChains = memoizedGetDisplacementVectorChains(input);

  /** @type {Array<[number, number, number]>} */
  const sensorPositions = displacementVectorChains.map((displacementVectorChain) =>
    displacementVectorChain.reduce(
      (prev, { vector: [dx, dy, dz], transform }) => {
        const [x, y, z] = transform(prev);
        return [x - dx, y - dy, z - dz];
      },
      [0, 0, 0]
    )
  );

  let maxDistance = 0;

  for (let a = 0; a < sensorPositions.length; a += 1)
    for (let b = a + 1; b < sensorPositions.length; b += 1) {
      const [ax, ay, az] = sensorPositions[a];
      const [bx, by, bz] = sensorPositions[b];

      const manhattanDistance = Math.abs(ax - bx) + Math.abs(ay - by) + Math.abs(az - bz);

      maxDistance = Math.max(maxDistance, manhattanDistance);
    }

  return maxDistance;
}

/**
 * @param {Array<Sensor>} sensors
 * @returns {Array<Array<DisplacementVector>>}
 */
function getDisplacementVectorChains(sensors) {
  /** @type {{ [displacementVector: string]: DisplacementVector }} */
  const displacementVectors = {};
  const overlaps = Array.from({ length: sensors.length }, () => []);

  for (let from = 0; from < sensors.length; from += 1)
    for (let to = 0; to < sensors.length; to += 1) {
      const displacementVector = getDisplacementVector(sensors[to], sensors[from]);
      displacementVectors[`${from}->${to}`] = displacementVector;
      if (displacementVector) overlaps[from].push({ ...displacementVector, to });
    }

  return overlaps.map((_val, i) => {
    /** @type {Array<DisplacementVector>} */
    let shortestChain;

    /**
     * @param {number} index
     * @param {Array<number>} chainHistory
     * @param {Array<DisplacementVector>} chain
     * @returns {void}
     */
    const findShortestChain = (index, chainHistory = [], chain = []) => {
      if (chainHistory.includes(index)) return;

      if (index === 0)
        if (!shortestChain || chain.length < shortestChain.length) {
          shortestChain = chain;
        }

      for (const overlap of overlaps[index])
        findShortestChain(overlap.to, [...chainHistory, index], [...chain, overlap]);
    };

    findShortestChain(i);

    return shortestChain;
  });
}

/**
 * @param {Sensor} sensorTo
 * @param {Sensor} sensorFrom
 * @returns {DisplacementVector}
 */
function getDisplacementVector(sensorTo, sensorFrom) {
  for (const transform of TRANSFORMERS) {
    const transformedSensorFrom = sensorFrom.map(transform);

    /** @type {{ [displacementVector: string]: number }} */
    const beaconCountByDisplacementVector = {};

    for (const [ax, ay, az] of sensorTo)
      for (const [bx, by, bz] of transformedSensorFrom) {
        const displacementVector = [bx - ax, by - ay, bz - az].join(',');

        beaconCountByDisplacementVector[displacementVector] =
          beaconCountByDisplacementVector[displacementVector] || 0;

        beaconCountByDisplacementVector[displacementVector] += 1;
      }

    for (const [vectorString, beaconCount] of Object.entries(beaconCountByDisplacementVector))
      if (beaconCount >= 12) {
        const [dx, dy, dz] = vectorString.split(',').map(Number);
        return { transform, vector: [dx, dy, dz] };
      }
  }

  return null;
}

module.exports = { partOne, partTwo };
