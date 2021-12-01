'use strict';

const NODE_MODULES = 'node_modules/**/*';

module.exports = {
  ignore: [NODE_MODULES],
  package: './package.json',
  spec: ['**/*.test.js'],
  'watch-ignore': [NODE_MODULES],
};
