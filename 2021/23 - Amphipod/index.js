'use strict';

const _ = require('lodash');

/** @typedef {'A'|'B'|'C'|'D'} Amphipod */

/** @typedef {[Amphipod, Amphipod] | [Amphipod, Amphipod, Amphipod, Amphipod]} Room */
/** @typedef {[Room, Room, Room, Room]} Rooms */

const HALLWAY_INDEXES = [0, 1, 3, 5, 7, 9, 10];

const HALLWAY_ROOM_ENTRANCE_INDEX_BY_ROOM_INDEX = { 0: 2, 1: 4, 2: 6, 3: 8 };
/** @type {{ [Key in Amphipod]: number }} */
const ROOM_INDEX_BY_AMPHIPOD = { A: 0, B: 1, C: 2, D: 3 };
const AMPHIPOD_BY_ROOM_INDEX = _.invert(ROOM_INDEX_BY_AMPHIPOD);

const ENERGY = { A: 1, B: 10, C: 100, D: 1000 };

/**
 * @param {Rooms} input
 * @returns {number}
 */
function partOne(input) {
  return memoizedGetLeastEnergy(Array(11).fill(null), input);
}

/**
 * @param {Rooms} input
 * @returns {number}
 */
function partTwo(input) {
  return memoizedGetLeastEnergy(Array(11).fill(null), input);
}

const memoizedGetLeastEnergy = _.memoize(
  getLeastEnergy,
  (hallway, rooms) => `${hallway.join(',')}:${rooms.flat().join(',')}`
);

/**
 * @param {Array<Amphipod>} hallway
 * @param {Rooms} rooms
 * @returns {number}
 */
function getLeastEnergy(hallway, rooms) {
  if (
    _.isEqual(
      rooms,
      rooms.map((room, roomIndex) => room.map(() => AMPHIPOD_BY_ROOM_INDEX[roomIndex]))
    )
  )
    return 0;

  let leastEnergy = Infinity;

  // move hallway -> room
  for (let hallwayIndex = 0; hallwayIndex < hallway.length; hallwayIndex += 1) {
    const amphipod = hallway[hallwayIndex];

    if (!amphipod) continue;

    const roomIndex = ROOM_INDEX_BY_AMPHIPOD[amphipod];
    const room = rooms[roomIndex];

    const canEnterRoom = room.every((roommate) => !roommate || roommate === amphipod);
    if (!canEnterRoom) continue;

    const isMovingRight = HALLWAY_ROOM_ENTRANCE_INDEX_BY_ROOM_INDEX[roomIndex] > hallwayIndex;
    const hallwayPath = isMovingRight
      ? hallway.slice(hallwayIndex + 1, HALLWAY_ROOM_ENTRANCE_INDEX_BY_ROOM_INDEX[roomIndex] + 1)
      : hallway.slice(HALLWAY_ROOM_ENTRANCE_INDEX_BY_ROOM_INDEX[roomIndex], hallwayIndex);
    const isBlocked = hallwayPath.some((space) => space !== null);
    if (isBlocked) continue;

    const emptySpacesInRoom = room.filter((space) => !space).length;

    const pathLength = hallwayPath.length + emptySpacesInRoom;

    const newHallway = [
      ...hallway.slice(0, hallwayIndex),
      null,
      ...hallway.slice(hallwayIndex + 1),
    ];

    const newRooms = _.cloneDeep(rooms);
    newRooms[roomIndex][emptySpacesInRoom - 1] = amphipod;

    const energy = pathLength * ENERGY[amphipod] + memoizedGetLeastEnergy(newHallway, newRooms);

    if (energy < leastEnergy) {
      leastEnergy = energy;
    }
  }

  // move room -> hallway
  for (let roomIndex = 0; roomIndex < rooms.length; roomIndex += 1) {
    const room = rooms[roomIndex];

    const shouldMove = room.some(
      (amphipod) => amphipod && ROOM_INDEX_BY_AMPHIPOD[amphipod] !== roomIndex
    );

    if (!shouldMove) continue;

    const emptySpacesInRoom = room.filter((space) => !space).length;

    const amphipod = room[emptySpacesInRoom];

    for (const hallwayIndex of HALLWAY_INDEXES) {
      const pathLength =
        emptySpacesInRoom +
        1 +
        Math.abs(hallwayIndex - HALLWAY_ROOM_ENTRANCE_INDEX_BY_ROOM_INDEX[roomIndex]);

      const hallwayPath = hallway.slice(
        Math.min(hallwayIndex, HALLWAY_ROOM_ENTRANCE_INDEX_BY_ROOM_INDEX[roomIndex]),
        Math.max(hallwayIndex, HALLWAY_ROOM_ENTRANCE_INDEX_BY_ROOM_INDEX[roomIndex]) + 1
      );
      const isBlocked = hallwayPath.some((space) => space !== null);

      if (isBlocked) continue;

      const newHallway = [
        ...hallway.slice(0, hallwayIndex),
        amphipod,
        ...hallway.slice(hallwayIndex + 1),
      ];

      const newRooms = _.cloneDeep(rooms);
      newRooms[roomIndex][emptySpacesInRoom] = null;

      const energy = pathLength * ENERGY[amphipod] + memoizedGetLeastEnergy(newHallway, newRooms);

      if (energy < leastEnergy) {
        leastEnergy = energy;
      }
    }
  }

  return leastEnergy;
}

module.exports = { partOne, partTwo };
