'use strict';

/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  env: { es2022: true, mocha: true, node: true },
  extends: ['@a-ogilvie'],
  rules: {
    'id-length': 'off',
    'no-console': 'off',
    'no-magic-numbers': 'off',
    'sort-keys': 'off',
  },
};

module.exports = eslintConfig;
