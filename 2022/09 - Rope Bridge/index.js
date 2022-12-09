'use strict';

const _ = require('lodash');

/**
 * @param {Array<['U'|'D'|'L'|'R', number]>} input
 * @returns {number}
 */
function partOne(input) {
  const rope = new Rope(2);
  const positionsVisited = new Set([rope.tail.toString()]);

  for (const [direction, distance] of input) {
    for (let step = 1; step <= distance; step += 1) {
      rope.move(direction);

      positionsVisited.add(rope.tail.toString());
    }
  }

  return positionsVisited.size;
}

/**
 * @param {Array<['U'|'D'|'L'|'R', number]>} input
 * @returns {number}
 */
function partTwo(input) {
  const rope = new Rope(10);
  const positionsVisited = new Set([rope.tail.toString()]);

  for (const [direction, distance] of input) {
    for (let step = 1; step <= distance; step += 1) {
      rope.move(direction);

      positionsVisited.add(rope.tail.toString());
    }
  }

  return positionsVisited.size;
}

class Rope {
  #knots;

  constructor(length) {
    this.#knots = Array.from({ length }, () => new Knot());
  }

  /**
   * @param {'U'|'D'|'L'|'R'} direction
   * @returns {void}
   */
  move(direction) {
    const head = _.first(this.#knots);

    switch (direction) {
      case 'U':
        head.y += 1;
        break;
      case 'D':
        head.y -= 1;
        break;
      case 'L':
        head.x -= 1;
        break;
      case 'R':
        head.x += 1;
        break;
    }

    for (let i = 0; i < this.#knots.length - 1; i += 1) {
      const leadingKnot = this.#knots[i];
      const followingKnot = this.#knots[i + 1];

      if (!leadingKnot.isAdjacent(followingKnot)) {
        if (leadingKnot.x > followingKnot.x) followingKnot.x += 1;
        if (leadingKnot.x < followingKnot.x) followingKnot.x -= 1;

        if (leadingKnot.y > followingKnot.y) followingKnot.y += 1;
        if (leadingKnot.y < followingKnot.y) followingKnot.y -= 1;
      }
    }
  }

  get tail() {
    return _.last(this.#knots);
  }
}

class Knot {
  x = 0;
  y = 0;

  /**
   * @param {Knot} otherKnot
   * @returns {boolean}
   */
  isAdjacent(otherKnot) {
    return Math.abs(this.x - otherKnot.x) <= 1 && Math.abs(this.y - otherKnot.y) <= 1;
  }

  toString() {
    return `${this.x},${this.y}`;
  }
}

module.exports = { partOne, partTwo };
