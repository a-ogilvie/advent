'use strict';

/** @typedef {['inp'|'add'|'mul'|'div'|'mod'|'eql', 'w'|'x'|'y'|'z'|number, 'w'|'x'|'y'|'z'|number]} Instruction */

/**
 * @param {Array<Instruction>} input
 * @returns {string}
 */
function partOne(input) {
  const result = Array(14).fill(0);

  const steps = getSteps(input);

  for (let i = 0, stack = []; i < steps.length; i += 1) {
    const [a, b, c] = steps[i];
    if (a === 1) {
      stack.push([i, c]);
    } else {
      if (!stack.length) continue;
      const next = stack.pop();
      const [j, x] = next;
      const diff = x + b;

      if (diff < 0) {
        result[i] = 9 + diff;
        result[j] = 9;
      } else {
        result[i] = 9;
        result[j] = 9 - diff;
      }
    }
  }

  const modelNumber = result.join('');

  if (!isValidModelNumber(modelNumber, input))
    throw new Error(`Invalid model number: ${modelNumber}`);

  return result.join('');
}

/**
 * @param {Array<Instruction>} input
 * @returns {string}
 */
function partTwo(input) {
  const result = Array(14).fill(0);

  const steps = getSteps(input);

  for (let i = 0, stack = []; i < steps.length; i += 1) {
    const [a, b, c] = steps[i];
    if (a === 1) {
      stack.push([i, c]);
    } else {
      if (!stack.length) continue;
      const next = stack.pop();
      const [j, x] = next;
      const diff = x + b;
      if (diff < 0) {
        result[i] = 1;
        result[j] = 1 - diff;
      } else {
        result[i] = 1 + diff;
        result[j] = 1;
      }
    }
  }

  const modelNumber = result.join('');

  if (!isValidModelNumber(modelNumber, input))
    throw new Error(`Invalid model number: ${modelNumber}`);

  return result.join('');
}

/**
 * @param {Array<Instruction>} instructions
 * @returns {Array<[number, number, number]>}
 */
function getSteps(instructions) {
  /** @type {Array<[number, number, number]>} */
  const steps = [];

  let step = [];
  let i = 1;
  for (const [instruction, , var2] of instructions) {
    if (instruction === 'inp') {
      i = 1;
    }

    if (i === 5 && typeof var2 === 'number') step.push(var2);

    if (i === 6 && typeof var2 === 'number') step.push(var2);

    if (i === 16 && typeof var2 === 'number') step.push(var2);

    if (step.length === 3) {
      // @ts-expect-error
      steps.push(step);
      step = [];
    }

    i += 1;
  }

  return steps;
}

/**
 * @param {string} modelNumber
 * @param {Array<Instruction>} instructions
 * @returns {boolean}
 */
function isValidModelNumber(modelNumber, instructions) {
  const digits = modelNumber.split('').map(Number);

  /** @type {Array<Instruction>} */
  const instructionsWithInputs = instructions.map(([instruction, var1, var2]) =>
    instruction === 'inp' ? [instruction, var1, digits.shift()] : [instruction, var1, var2]
  );

  const result = alu(instructionsWithInputs);

  return result.z === 0;
}

/**
 * @param {Array<Instruction>} instructions
 * @returns {{ w: number; x: number; y: number; z :number }}
 */
function alu(instructions) {
  const variables = { w: 0, x: 0, y: 0, z: 0 };

  for (const thing of instructions) {
    const [instruction, var1, var2] = thing;

    if (instruction === 'inp') {
      variables[var1] = var2;
    }
    if (instruction === 'add') variables[var1] += typeof var2 === 'number' ? var2 : variables[var2];

    if (instruction === 'mul') variables[var1] *= typeof var2 === 'number' ? var2 : variables[var2];

    if (instruction === 'div')
      variables[var1] =
        typeof var2 === 'number'
          ? Math.trunc(variables[var1] / var2)
          : Math.trunc(variables[var1] / variables[var2]);

    if (instruction === 'mod') variables[var1] %= typeof var2 === 'number' ? var2 : variables[var2];

    if (instruction === 'eql') {
      if (typeof var2 === 'number') variables[var1] = variables[var1] === var2 ? 1 : 0;
      else variables[var1] = variables[var1] === variables[var2] ? 1 : 0;
    }
  }

  return variables;
}

module.exports = { partOne, partTwo, alu };
