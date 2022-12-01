'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo, add, explode, split, calculateMagnitude } = require('./index');

/** @typedef {[number | SnailfishNumber, number | SnailfishNumber]} SnailfishNumber */

describe('2021 - Day 18: Snailfish', () => {
  /** @type {Array<SnailfishNumber>} */
  const testInput = [
    [
      [
        [0, [5, 8]],
        [
          [1, 7],
          [9, 6],
        ],
      ],
      [
        [4, [1, 2]],
        [[1, 4], 2],
      ],
    ],
    [
      [[5, [2, 8]], 4],
      [5, [[9, 9], 0]],
    ],
    [
      6,
      [
        [
          [6, 2],
          [5, 6],
        ],
        [
          [7, 6],
          [4, 7],
        ],
      ],
    ],
    [
      [
        [6, [0, 7]],
        [0, 9],
      ],
      [4, [9, [9, 0]]],
    ],
    [
      [
        [7, [6, 4]],
        [3, [1, 3]],
      ],
      [[[5, 5], 1], 9],
    ],
    [
      [
        6,
        [
          [7, 3],
          [3, 2],
        ],
      ],
      [
        [
          [3, 8],
          [5, 7],
        ],
        4,
      ],
    ],
    [
      [
        [
          [5, 4],
          [7, 7],
        ],
        8,
      ],
      [[8, 3], 8],
    ],
    [
      [9, 3],
      [
        [9, 9],
        [6, [4, 9]],
      ],
    ],
    [
      [2, [[7, 7], 7]],
      [
        [5, 8],
        [
          [9, 3],
          [0, 2],
        ],
      ],
    ],
    [
      [
        [[5, 2], 5],
        [8, [3, 7]],
      ],
      [
        [5, [7, 5]],
        [4, 4],
      ],
    ],
  ];

  describe('Part 1', () => {
    it('should return the magnitude of the sum of the given input', () => {
      expect(partOne(testInput)).to.equal(4140);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the maximum magnitude of the sum of any pair from the given input', () => {
      expect(partTwo(testInput)).to.equal(3993);

      console.log(partTwo(puzzleInput));
    });
  });

  describe('add', () => {
    it('should return the sum of the two given SnailfishNumbers', () => {
      expect(add([1, 2], [[3, 4], 5]), '1').to.deep.equal([
        [1, 2],
        [[3, 4], 5],
      ]);

      expect(
        add(
          [
            [[[4, 3], 4], 4],
            [7, [[8, 4], 9]],
          ],
          [1, 1]
        ),
        '2'
      ).to.deep.equal([
        [
          [[0, 7], 4],
          [
            [7, 8],
            [6, 0],
          ],
        ],
        [8, 1],
      ]);

      expect(
        add(
          [
            [
              [0, [4, 5]],
              [0, 0],
            ],
            [
              [
                [4, 5],
                [2, 6],
              ],
              [9, 5],
            ],
          ],
          [
            7,
            [
              [
                [3, 7],
                [4, 3],
              ],
              [
                [6, 3],
                [8, 8],
              ],
            ],
          ]
        ),
        '3'
      ).to.deep.equal([
        [
          [
            [4, 0],
            [5, 4],
          ],
          [
            [7, 7],
            [6, 0],
          ],
        ],
        [
          [8, [7, 7]],
          [
            [7, 9],
            [5, 0],
          ],
        ],
      ]);

      expect(
        add(
          [
            [
              [
                [4, 0],
                [5, 4],
              ],
              [
                [7, 7],
                [6, 0],
              ],
            ],
            [
              [8, [7, 7]],
              [
                [7, 9],
                [5, 0],
              ],
            ],
          ],
          [
            [
              2,
              [
                [0, 8],
                [3, 4],
              ],
            ],
            [
              [[6, 7], 1],
              [7, [1, 6]],
            ],
          ]
        ),
        '4'
      ).to.deep.equal([
        [
          [
            [6, 7],
            [6, 7],
          ],
          [
            [7, 7],
            [0, 7],
          ],
        ],
        [
          [
            [8, 7],
            [7, 7],
          ],
          [
            [8, 8],
            [8, 0],
          ],
        ],
      ]);

      expect(
        add(
          [
            [
              [
                [6, 7],
                [6, 7],
              ],
              [
                [7, 7],
                [0, 7],
              ],
            ],
            [
              [
                [8, 7],
                [7, 7],
              ],
              [
                [8, 8],
                [8, 0],
              ],
            ],
          ],
          [
            [
              [[2, 4], 7],
              [6, [0, 5]],
            ],
            [
              [
                [6, 8],
                [2, 8],
              ],
              [
                [2, 1],
                [4, 5],
              ],
            ],
          ]
        ),
        '5'
      ).to.deep.equal([
        [
          [
            [7, 0],
            [7, 7],
          ],
          [
            [7, 7],
            [7, 8],
          ],
        ],
        [
          [
            [7, 7],
            [8, 8],
          ],
          [
            [7, 7],
            [8, 7],
          ],
        ],
      ]);

      expect(
        add(
          [
            [
              [
                [7, 0],
                [7, 7],
              ],
              [
                [7, 7],
                [7, 8],
              ],
            ],
            [
              [
                [7, 7],
                [8, 8],
              ],
              [
                [7, 7],
                [8, 7],
              ],
            ],
          ],
          [
            7,
            [
              5,
              [
                [3, 8],
                [1, 4],
              ],
            ],
          ]
        ),
        '6'
      ).to.deep.equal([
        [
          [
            [7, 7],
            [7, 8],
          ],
          [
            [9, 5],
            [8, 7],
          ],
        ],
        [
          [
            [6, 8],
            [0, 8],
          ],
          [
            [9, 9],
            [9, 0],
          ],
        ],
      ]);

      expect(
        add(
          [
            [
              [
                [7, 7],
                [7, 8],
              ],
              [
                [9, 5],
                [8, 7],
              ],
            ],
            [
              [
                [6, 8],
                [0, 8],
              ],
              [
                [9, 9],
                [9, 0],
              ],
            ],
          ],
          [
            [2, [2, 2]],
            [8, [8, 1]],
          ]
        ),
        '7'
      ).to.deep.equal([
        [
          [
            [6, 6],
            [6, 6],
          ],
          [
            [6, 0],
            [6, 7],
          ],
        ],
        [
          [
            [7, 7],
            [8, 9],
          ],
          [8, [8, 1]],
        ],
      ]);

      expect(
        add(
          [
            [
              [
                [6, 6],
                [6, 6],
              ],
              [
                [6, 0],
                [6, 7],
              ],
            ],
            [
              [
                [7, 7],
                [8, 9],
              ],
              [8, [8, 1]],
            ],
          ],
          [2, 9]
        ),
        '8'
      ).to.deep.equal([
        [
          [
            [6, 6],
            [7, 7],
          ],
          [
            [0, 7],
            [7, 7],
          ],
        ],
        [
          [
            [5, 5],
            [5, 6],
          ],
          9,
        ],
      ]);

      expect(
        add(
          [
            [
              [
                [6, 6],
                [7, 7],
              ],
              [
                [0, 7],
                [7, 7],
              ],
            ],
            [
              [
                [5, 5],
                [5, 6],
              ],
              9,
            ],
          ],
          [
            1,
            [
              [[9, 3], 9],
              [
                [9, 0],
                [0, 7],
              ],
            ],
          ]
        ),
        '9'
      ).to.deep.equal([
        [
          [
            [7, 8],
            [6, 7],
          ],
          [
            [6, 8],
            [0, 8],
          ],
        ],
        [
          [
            [7, 7],
            [5, 0],
          ],
          [
            [5, 5],
            [5, 6],
          ],
        ],
      ]);

      expect(
        add(
          [
            [
              [
                [7, 8],
                [6, 7],
              ],
              [
                [6, 8],
                [0, 8],
              ],
            ],
            [
              [
                [7, 7],
                [5, 0],
              ],
              [
                [5, 5],
                [5, 6],
              ],
            ],
          ],
          [[[5, [7, 4]], 7], 1]
        ),
        '10'
      ).to.deep.equal([
        [
          [
            [7, 7],
            [7, 7],
          ],
          [
            [8, 7],
            [8, 7],
          ],
        ],
        [
          [
            [7, 0],
            [7, 7],
          ],
          9,
        ],
      ]);

      expect(
        add(
          [
            [
              [
                [7, 7],
                [7, 7],
              ],
              [
                [8, 7],
                [8, 7],
              ],
            ],
            [
              [
                [7, 0],
                [7, 7],
              ],
              9,
            ],
          ],
          [
            [[[4, 2], 2], 6],
            [8, 7],
          ]
        ),
        '11'
      ).to.deep.equal([
        [
          [
            [8, 7],
            [7, 7],
          ],
          [
            [8, 6],
            [7, 7],
          ],
        ],
        [
          [
            [0, 7],
            [6, 6],
          ],
          [8, 7],
        ],
      ]);
    });
  });

  describe('explode', () => {
    it('should explode the given snailfishNumber', () => {
      expect(explode(JSON.stringify([[[[[9, 8], 1], 2], 3], 4])), '1').to.equal(
        JSON.stringify([[[[0, 9], 2], 3], 4])
      );

      expect(explode(JSON.stringify([7, [6, [5, [4, [3, 2]]]]])), '2').to.equal(
        JSON.stringify([7, [6, [5, [7, 0]]]])
      );

      expect(explode(JSON.stringify([[6, [5, [4, [3, 2]]]], 1])), '3').to.equal(
        JSON.stringify([[6, [5, [7, 0]]], 3])
      );

      expect(
        explode(
          JSON.stringify([
            [3, [2, [1, [7, 3]]]],
            [6, [5, [4, [3, 2]]]],
          ])
        ),
        '4'
      ).to.equal(
        JSON.stringify([
          [3, [2, [8, 0]]],
          [9, [5, [4, [3, 2]]]],
        ])
      );

      expect(
        explode(
          JSON.stringify([
            [3, [2, [8, 0]]],
            [9, [5, [4, [3, 2]]]],
          ])
        ),
        '5'
      ).to.equal(
        JSON.stringify([
          [3, [2, [8, 0]]],
          [9, [5, [7, 0]]],
        ])
      );

      expect(
        explode(
          JSON.stringify([
            [1, 2],
            [
              [7, [5, 5]],
              [
                [0, [11, 9]],
                [0, [11, 8]],
              ],
            ],
          ])
        ),
        '6'
      ).to.equal(
        JSON.stringify([
          [1, 2],
          [
            [7, [5, 5]],
            [
              [11, 0],
              [9, [11, 8]],
            ],
          ],
        ])
      );

      expect(
        explode(
          JSON.stringify([
            [
              [
                [4, 0],
                [5, 4],
              ],
              [
                [7, 7],
                [0, [6, 7]],
              ],
            ],
            [
              10,
              [
                [11, 9],
                [11, 0],
              ],
            ],
          ])
        ),
        '7'
      ).to.equal(
        JSON.stringify([
          [
            [
              [4, 0],
              [5, 4],
            ],
            [
              [7, 7],
              [6, 0],
            ],
          ],
          [
            17,
            [
              [11, 9],
              [11, 0],
            ],
          ],
        ])
      );
    });
  });

  describe('split', () => {
    it('should split the given number', () => {
      expect(split(10)).to.deep.equal([5, 5]);
      expect(split(11)).to.deep.equal([5, 6]);
      expect(split(12)).to.deep.equal([6, 6]);
    });
  });

  describe('calculateMagnitude', () => {
    it('should return the magnitude of the given snailfishNumber', () => {
      expect(calculateMagnitude([9, 1])).to.equal(29);

      expect(calculateMagnitude([1, 9])).to.equal(21);

      expect(
        calculateMagnitude([
          [9, 1],
          [1, 9],
        ])
      ).to.equal(129);

      expect(
        calculateMagnitude([
          [1, 2],
          [[3, 4], 5],
        ])
      ).to.equal(143);

      expect(
        calculateMagnitude([
          [
            [[0, 7], 4],
            [
              [7, 8],
              [6, 0],
            ],
          ],
          [8, 1],
        ])
      ).to.equal(1384);

      expect(
        calculateMagnitude([
          [
            [
              [1, 1],
              [2, 2],
            ],
            [3, 3],
          ],
          [4, 4],
        ])
      ).to.equal(445);

      expect(
        calculateMagnitude([
          [
            [
              [3, 0],
              [5, 3],
            ],
            [4, 4],
          ],
          [5, 5],
        ])
      ).to.equal(791);

      expect(
        calculateMagnitude([
          [
            [
              [5, 0],
              [7, 4],
            ],
            [5, 5],
          ],
          [6, 6],
        ])
      ).to.equal(1137);

      expect(
        calculateMagnitude([
          [
            [
              [8, 7],
              [7, 7],
            ],
            [
              [8, 6],
              [7, 7],
            ],
          ],
          [
            [
              [0, 7],
              [6, 6],
            ],
            [8, 7],
          ],
        ])
      ).to.equal(3488);
    });
  });
});
