'use strict';

const _ = require('lodash');

/** @typedef {'#'|'.'} Pixel */
/** @typedef {Array<Array<Pixel>>} Image */

/**
 * @param {{ image: Image, imageEnhancementAlgorithm: Array<Pixel> }} input
 * @returns {number}
 */
function partOne({ image, imageEnhancementAlgorithm }) {
  const enhancedImage = enhanceImage(image, imageEnhancementAlgorithm, 2);
  return _.sum(enhancedImage.map((row) => _.sumBy(row, (pixel) => Number(pixel === '#'))));
}

/**
 * @param {{ image: Image, imageEnhancementAlgorithm: Array<Pixel> }} input
 * @returns {number}
 */
function partTwo({ image, imageEnhancementAlgorithm }) {
  const enhancedImage = enhanceImage(image, imageEnhancementAlgorithm, 50);
  return _.sum(enhancedImage.map((row) => _.sumBy(row, (pixel) => Number(pixel === '#'))));
}

/**
 * @param {Image} image
 * @param {Array<Pixel>} imageEnhancementAlgorithm
 * @param {number} iterations
 * @returns {Image}
 */
function enhanceImage(image, imageEnhancementAlgorithm, iterations) {
  let enhancedImage = image;

  for (let iteration = 1, isLit = false; iteration <= iterations; iteration += 1) {
    const surroundingPixel = isLit ? '#' : '.';
    const enlargedImage = [
      Array(enhancedImage[0].length + 2).fill(surroundingPixel),
      ...enhancedImage.map((row) => [surroundingPixel, ...row, surroundingPixel]),
      Array(enhancedImage[0].length + 2).fill(surroundingPixel),
    ];

    enhancedImage = enlargedImage.map((row, y) =>
      row.map((_pixel, x) => {
        /** @type {Array<Pixel>} */
        const pixels = [];

        for (let dy = -1; dy <= 1; dy += 1)
          for (let dx = -1; dx <= 1; dx += 1) pixels.push(enlargedImage[y + dy]?.[x + dx]);

        const imageEnhancementAlgorithmIndex = Number.parseInt(
          pixels
            .map((pixel) => {
              if (pixel === '#') return 1;
              if (pixel === '.') return 0;

              return Number(isLit);
            })
            .join(''),
          2
        );

        return imageEnhancementAlgorithm[imageEnhancementAlgorithmIndex];
      })
    );

    if (!isLit && imageEnhancementAlgorithm[Number.parseInt('000000000', 2)] === '#') {
      isLit = true;
    } else if (isLit && imageEnhancementAlgorithm[Number.parseInt('111111111', 2)] === '.') {
      isLit = false;
    }
  }

  return enhancedImage;
}

module.exports = { partOne, partTwo };
