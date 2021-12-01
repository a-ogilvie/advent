'use strict';

/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  env: { es2021: true, mocha: true, node: true },
  extends: ['@a-ogilvie'],
  rules: {
    'no-console': 'off',
  },
};

module.exports = eslintConfig;
