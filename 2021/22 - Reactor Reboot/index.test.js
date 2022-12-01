'use strict';

const { expect } = require('chai');

const puzzleInput = require('./input');

const { partOne, partTwo } = require('./index');

describe('2021 - Day 22: Reactor Reboot', () => {
  describe('Part 1', () => {
    it('should return the number of cubes turned on in the central -50 x 50 cube', () => {
      expect(
        partOne([
          [true, [10, 12], [10, 12], [10, 12]],
          [true, [11, 13], [11, 13], [11, 13]],
          [false, [9, 11], [9, 11], [9, 11]],
          [true, [10, 10], [10, 10], [10, 10]],
        ])
      ).to.equal(39);

      expect(
        partOne([
          [true, [-20, 26], [-36, 17], [-47, 7]],
          [true, [-20, 33], [-21, 23], [-26, 28]],
          [true, [-22, 28], [-29, 23], [-38, 16]],
          [true, [-46, 7], [-6, 46], [-50, -1]],
          [true, [-49, 1], [-3, 46], [-24, 28]],
          [true, [2, 47], [-22, 22], [-23, 27]],
          [true, [-27, 23], [-28, 26], [-21, 29]],
          [true, [-39, 5], [-6, 47], [-3, 44]],
          [true, [-30, 21], [-8, 43], [-13, 34]],
          [true, [-22, 26], [-27, 20], [-29, 19]],
          [false, [-48, -32], [26, 41], [-47, -37]],
          [true, [-12, 35], [6, 50], [-50, -2]],
          [false, [-48, -32], [-32, -16], [-15, -5]],
          [true, [-18, 26], [-33, 15], [-7, 46]],
          [false, [-40, -22], [-38, -28], [23, 41]],
          [true, [-16, 35], [-41, 10], [-47, 6]],
          [false, [-32, -23], [11, 30], [-14, 3]],
          [true, [-49, -5], [-3, 45], [-29, 18]],
          [false, [18, 30], [-20, -8], [-3, 13]],
          [true, [-41, 9], [-7, 43], [-33, 15]],
          [true, [-54112, -39298], [-85059, -49293], [-27449, 7877]],
          [true, [967, 23432], [45373, 81175], [27513, 53682]],
        ])
      ).to.equal(590784);

      console.log(partOne(puzzleInput));
    });
  });

  describe('Part 2', () => {
    it('should return the number of cubes turned on', () => {
      expect(
        partTwo([
          [true, [10, 12], [10, 12], [10, 12]],
          [true, [11, 13], [11, 13], [11, 13]],
          [false, [9, 11], [9, 11], [9, 11]],
          [true, [10, 10], [10, 10], [10, 10]],
        ])
      ).to.equal(39);

      expect(
        partTwo([
          [true, [-5, 47], [-31, 22], [-19, 33]],
          [true, [-44, 5], [-27, 21], [-14, 35]],
          [true, [-49, -1], [-11, 42], [-10, 38]],
          [true, [-20, 34], [-40, 6], [-44, 1]],
          [false, [26, 39], [40, 50], [-2, 11]],
          [true, [-41, 5], [-41, 6], [-36, 8]],
          [false, [-43, -33], [-45, -28], [7, 25]],
          [true, [-33, 15], [-32, 19], [-34, 11]],
          [false, [35, 47], [-46, -34], [-11, 5]],
          [true, [-14, 36], [-6, 44], [-16, 29]],
          [true, [-57795, -6158], [29564, 72030], [20435, 90618]],
          [true, [36731, 105352], [-21140, 28532], [16094, 90401]],
          [true, [30999, 107136], [-53464, 15513], [8553, 71215]],
          [true, [13528, 83982], [-99403, -27377], [-24141, 23996]],
          [true, [-72682, -12347], [18159, 111354], [7391, 80950]],
          [true, [-1060, 80757], [-65301, -20884], [-103788, -16709]],
          [true, [-83015, -9461], [-72160, -8347], [-81239, -26856]],
          [true, [-52752, 22273], [-49450, 9096], [54442, 119054]],
          [true, [-29982, 40483], [-108474, -28371], [-24328, 38471]],
          [true, [-4958, 62750], [40422, 118853], [-7672, 65583]],
          [true, [55694, 108686], [-43367, 46958], [-26781, 48729]],
          [true, [-98497, -18186], [-63569, 3412], [1232, 88485]],
          [true, [-726, 56291], [-62629, 13224], [18033, 85226]],
          [true, [-110886, -34664], [-81338, -8658], [8914, 63723]],
          [true, [-55829, 24974], [-16897, 54165], [-121762, -28058]],
          [true, [-65152, -11147], [22489, 91432], [-58782, 1780]],
          [true, [-120100, -32970], [-46592, 27473], [-11695, 61039]],
          [true, [-18631, 37533], [-124565, -50804], [-35667, 28308]],
          [true, [-57817, 18248], [49321, 117703], [5745, 55881]],
          [true, [14781, 98692], [-1341, 70827], [15753, 70151]],
          [true, [-34419, 55919], [-19626, 40991], [39015, 114138]],
          [true, [-60785, 11593], [-56135, 2999], [-95368, -26915]],
          [true, [-32178, 58085], [17647, 101866], [-91405, -8878]],
          [true, [-53655, 12091], [50097, 105568], [-75335, -4862]],
          [true, [-111166, -40997], [-71714, 2688], [5609, 50954]],
          [true, [-16602, 70118], [-98693, -44401], [5197, 76897]],
          [true, [16383, 101554], [4615, 83635], [-44907, 18747]],
          [false, [-95822, -15171], [-19987, 48940], [10804, 104439]],
          [true, [-89813, -14614], [16069, 88491], [-3297, 45228]],
          [true, [41075, 99376], [-20427, 49978], [-52012, 13762]],
          [true, [-21330, 50085], [-17944, 62733], [-112280, -30197]],
          [true, [-16478, 35915], [36008, 118594], [-7885, 47086]],
          [false, [-98156, -27851], [-49952, 43171], [-99005, -8456]],
          [false, [2032, 69770], [-71013, 4824], [7471, 94418]],
          [true, [43670, 120875], [-42068, 12382], [-24787, 38892]],
          [false, [37514, 111226], [-45862, 25743], [-16714, 54663]],
          [false, [25699, 97951], [-30668, 59918], [-15349, 69697]],
          [false, [-44271, 17935], [-9516, 60759], [49131, 112598]],
          [true, [-61695, -5813], [40978, 94975], [8655, 80240]],
          [false, [-101086, -9439], [-7088, 67543], [33935, 83858]],
          [false, [18020, 114017], [-48931, 32606], [21474, 89843]],
          [false, [-77139, 10506], [-89994, -18797], [-80, 59318]],
          [false, [8476, 79288], [-75520, 11602], [-96624, -24783]],
          [true, [-47488, -1262], [24338, 100707], [16292, 72967]],
          [false, [-84341, 13987], [2429, 92914], [-90671, -1318]],
          [false, [-37810, 49457], [-71013, -7894], [-105357, -13188]],
          [false, [-27365, 46395], [31009, 98017], [15428, 76570]],
          [false, [-70369, -16548], [22648, 78696], [-1892, 86821]],
          [true, [-53470, 21291], [-120233, -33476], [-44150, 38147]],
          [false, [-93533, -4276], [-16170, 68771], [-104985, -24507]],
        ])
      ).to.equal(2758514936282235);

      console.log(partTwo(puzzleInput));
    });
  });
});