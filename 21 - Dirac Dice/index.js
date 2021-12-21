'use strict';

class Die {
  constructor() {
    this.position = 0;
    this.rollCount = 0;
  }

  roll() {
    const dieRoll = this.position + 1;

    this.position = (this.position + 1) % 100;
    this.rollCount += 1;

    return dieRoll;
  }
}

class Player {
  constructor(position) {
    this.position = position;
    this.score = 0;
  }

  /**
   * @param {number} spaces
   * @returns {void}
   */
  advance(spaces) {
    this.position = (this.position + spaces) % 10;
    this.score += this.position + 1;
  }
}

/**
 * @param {[number, number]} input
 * @returns {number}
 */
function partOne([player1StartingPosition, player2StartingPosition]) {
  const player1 = new Player(player1StartingPosition - 1);
  const player2 = new Player(player2StartingPosition - 1);

  const die = new Die();

  while (player1.score < 1000 && player2.score < 1000) {
    const isPlayer1Turn = die.rollCount % 6 === 0;
    const spaces = die.roll() + die.roll() + die.roll();
    if (isPlayer1Turn) player1.advance(spaces);
    else player2.advance(spaces);
  }

  return Math.min(player1.score, player2.score) * die.rollCount;
}

/**
 * @param {[number, number]} input
 * @returns {number}
 */
function partTwo([player1StartingPosition, player2StartingPosition]) {
  /** @type {Map<string, [number, number]>} */
  const memo = new Map();

  const diceRolls = { 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

  for (let diceRoll1 = 1; diceRoll1 <= 3; diceRoll1 += 1)
    for (let diceRoll2 = 1; diceRoll2 <= 3; diceRoll2 += 1)
      for (let diceRoll3 = 1; diceRoll3 <= 3; diceRoll3 += 1)
        diceRolls[diceRoll1 + diceRoll2 + diceRoll3] += 1;

  /**
   * @param {{ position: number, score: number }} currentPlayer
   * @param {{ position: number, score: number }} nextPlayer
   * @returns {[number, number]}
   */
  const playDiracDice = (currentPlayer, nextPlayer) => {
    if (currentPlayer.score >= 21) return [1, 0];
    if (nextPlayer.score >= 21) return [0, 1];

    const memoKey = `${currentPlayer.position},${currentPlayer.score},${nextPlayer.position},${nextPlayer.score};`;

    if (memo.has(memoKey)) return memo.get(memoKey);

    let player1WinTotal = 0;
    let player2WinTotal = 0;

    for (const [diceRoll, degeneracy] of Object.entries(diceRolls)) {
      const newPosition = (currentPlayer.position + Number(diceRoll)) % 10;

      const [player2WinSubTotal, player1WinSubTotal] = playDiracDice(nextPlayer, {
        position: newPosition,
        score: currentPlayer.score + (newPosition + 1),
      });

      player1WinTotal += player1WinSubTotal * degeneracy;
      player2WinTotal += player2WinSubTotal * degeneracy;
    }

    memo.set(memoKey, [player1WinTotal, player2WinTotal]);

    return [player1WinTotal, player2WinTotal];
  };

  const outcomes = playDiracDice(
    { position: player1StartingPosition - 1, score: 0 },
    { position: player2StartingPosition - 1, score: 0 }
  );

  return Math.max(...outcomes);
}

module.exports = { partOne, partTwo };
