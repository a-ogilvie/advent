'use strict';

/**
 * @type {Array<{
 *   items: Array<number>;
 *   operation: (old: number) => number,
 *   test: (item: number) => number;
 * }>}
 */
module.exports = [
  {
    items: [85, 77, 77],
    operation: (old) => old * 7,
    test: (item) => (item % 19 === 0 ? 6 : 7),
  },

  {
    items: [80, 99],
    operation: (old) => old * 11,
    test: (item) => (item % 3 === 0 ? 3 : 5),
  },

  {
    items: [74, 60, 74, 63, 86, 92, 80],
    operation: (old) => old + 8,
    test: (item) => (item % 13 === 0 ? 0 : 6),
  },

  {
    items: [71, 58, 93, 65, 80, 68, 54, 71],
    operation: (old) => old + 7,
    test: (item) => (item % 7 === 0 ? 2 : 4),
  },

  {
    items: [97, 56, 79, 65, 58],
    operation: (old) => old + 5,
    test: (item) => (item % 5 === 0 ? 2 : 0),
  },

  {
    items: [77],
    operation: (old) => old + 4,
    test: (item) => (item % 11 === 0 ? 4 : 3),
  },

  {
    items: [99, 90, 84, 50],
    operation: (old) => old * old,
    test: (item) => (item % 17 === 0 ? 7 : 1),
  },

  {
    items: [50, 66, 61, 92, 64, 78],
    operation: (old) => old + 3,
    test: (item) => (item % 2 === 0 ? 5 : 1),
  },
];
