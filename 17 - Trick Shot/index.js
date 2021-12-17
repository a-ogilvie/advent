/* eslint-disable no-param-reassign */
'use strict';

/**
 * @param {[[number, number], [number, number]]} input
 * @returns {number}
 */
function partOne([, [minY]]) {
  const maxYVelocity = -minY - 1;
  const highestYPosition = (maxYVelocity * (maxYVelocity + 1)) / 2;
  return highestYPosition;
}

/**
 * @param {[[number, number], [number, number]]} input
 * @returns {number}
 */
function partTwo(input) {
  let withinTargetAreaCount = 0;

  launchProbes(input, (maxY) => {
    if (maxY !== null) withinTargetAreaCount += 1;
  });

  return withinTargetAreaCount;
}

/**
 * @param {[[number, number], [number, number]]} targetArea
 * @param {(maxY: number) => void} analyseProbeLaunch
 * @returns {void}
 */
function launchProbes(targetArea, analyseProbeLaunch) {
  const [[, xMax], [yMin]] = targetArea;

  for (let x = 0; x <= xMax; x += 1)
    for (let y = yMin; y <= -yMin; y += 1) {
      const maxY = launchProbe(x, y, targetArea);

      analyseProbeLaunch(maxY);
    }
}

/**
 * @param {number} xVelocity
 * @param {number} yVelocity
 * @param {[[number, number], [number, number]]} targetArea
 * @returns {number}
 */
function launchProbe(xVelocity, yVelocity, [[xMin, xMax], [yMin, yMax]]) {
  for (
    let x = xVelocity, y = yVelocity, maxY = 0;
    y >= yMin;
    xVelocity = xVelocity > 0 ? xVelocity - 1 : 0,
      yVelocity -= 1,
      x += xVelocity,
      y += yVelocity,
      maxY = Math.max(y, maxY)
  )
    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) return maxY;

  return null;
}

module.exports = { partOne, partTwo };
