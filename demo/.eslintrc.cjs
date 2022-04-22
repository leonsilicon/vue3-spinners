const { defineConfig } = require('eslint-define-config');
const path = require('path');

module.exports = defineConfig({
	extends: '../.eslintrc.cjs',
	parserOptions: {
		project: path.resolve(__dirname, './tsconfig.eslint.json'),
		extraFileExtensions: ['vue'],
	},
	rules: {
		'import/no-extraneous-dependencies': [
			'error',
			{
				packageDir: [path.resolve(__dirname, '..')],
			},
		],
	},
});
