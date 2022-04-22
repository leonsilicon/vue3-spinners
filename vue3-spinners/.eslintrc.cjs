const path = require('path');
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
	extends: '../.eslintrc.cjs',
	parserOptions: { project: path.resolve(__dirname, 'tsconfig.eslint.json') },
});
