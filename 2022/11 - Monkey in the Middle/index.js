'use strict';

const _ = require('lodash');

/**
 * @param {Array<{
 *   items: Array<number>;
 *   operation: (old: number) => number;
 *   test: (item: number) => number;
 * }>} input
 * @returns {number}
 */
function partOne(input) {
  const monkeys = _.cloneDeep(input).map((monkey) => ({
    ...monkey,
    inspectionCount: 0,
    getItem() {
      this.inspectionCount += 1;
      return this.operation(this.items.shift());
    },
  }));

  for (let round = 1; round <= 20; round += 1)
    for (const monkey of monkeys)
      while (monkey.items.length) {
        const item = Math.floor(monkey.getItem() / 3);
        monkeys[monkey.test(item)].items.push(item);
      }

  const [mostActiveMonkey, secondMostActiveMonkey] = monkeys.sort(
    (a, b) => b.inspectionCount - a.inspectionCount
  );

  return mostActiveMonkey.inspectionCount * secondMostActiveMonkey.inspectionCount;
}

/**
 * @param {Array<{
 *   items: Array<number>;
 *   operation: (old: number) => number;
 *   test: (item: number) => number;
 * }>} input
 * @param {number} lowestCommonMultiple;
 * @returns {any}
 */
function partTwo(input, lowestCommonMultiple) {
  const monkeys = _.cloneDeep(input).map((monkey) => ({
    ...monkey,
    inspectionCount: 0,
    getItem() {
      this.inspectionCount += 1;
      return this.operation(this.items.shift());
    },
  }));

  for (let round = 1; round <= 10000; round += 1)
    for (const monkey of monkeys)
      while (monkey.items.length) {
        const item = monkey.getItem() % lowestCommonMultiple;
        monkeys[monkey.test(item)].items.push(item);
      }

  const [mostActiveMonkey, secondMostActiveMonkey] = monkeys.sort(
    (a, b) => b.inspectionCount - a.inspectionCount
  );

  return mostActiveMonkey.inspectionCount * secondMostActiveMonkey.inspectionCount;
}

module.exports = { partOne, partTwo };
