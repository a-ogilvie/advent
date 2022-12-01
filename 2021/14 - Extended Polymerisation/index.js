'use strict';

/**
 * @param {{ pairInsertionRules:  Map<string, string>, polymerTemplate: string }} input
 * @returns {number}
 */
function partOne({ pairInsertionRules, polymerTemplate }) {
  return calculateMostCommonLeastCommonElementDifference(pairInsertionRules, polymerTemplate, 10);
}

/**
 * @param {{ pairInsertionRules:  Map<string, string>, polymerTemplate: string }} input
 * @returns {number}
 */
function partTwo({ pairInsertionRules, polymerTemplate }) {
  return calculateMostCommonLeastCommonElementDifference(pairInsertionRules, polymerTemplate, 40);
}

/**
 * @param {Map<string, string>} pairInsertionRules
 * @param {string} polymerTemplate
 * @param {number} steps
 * @returns {number}
 */
function calculateMostCommonLeastCommonElementDifference(
  pairInsertionRules,
  polymerTemplate,
  steps
) {
  const pairCountByPair = Object.fromEntries(
    [...pairInsertionRules.keys()].map((pair) => [pair, 0])
  );

  for (let i = 0; i < polymerTemplate.length - 1; i += 1) {
    const pair = polymerTemplate[i] + polymerTemplate[i + 1];
    pairCountByPair[pair] += 1;
  }

  for (let step = 1; step <= steps; step += 1) {
    const pairs = Object.entries(pairCountByPair);

    for (const [pair, count] of pairs) {
      const elementInsert = pairInsertionRules.get(pair);
      pairCountByPair[pair] -= count;

      const [elementA, elementB] = pair.split('');
      pairCountByPair[elementA + elementInsert] += count;
      pairCountByPair[elementInsert + elementB] += count;
    }
  }

  const elementCountByElement = Object.fromEntries(
    [...pairInsertionRules.values()].map((element) => [element, 0])
  );

  for (const [[elementA], count] of Object.entries(pairCountByPair))
    elementCountByElement[elementA] += count;

  const finalElement = polymerTemplate[polymerTemplate.length - 1];
  elementCountByElement[finalElement] += 1;

  const elementCounts = Object.values(elementCountByElement);

  return Math.max(...elementCounts) - Math.min(...elementCounts);
}

module.exports = { partOne, partTwo };
