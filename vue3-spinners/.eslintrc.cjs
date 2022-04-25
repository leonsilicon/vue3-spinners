const path = require('path');
const { defineConfig } = require('eslint-define-config');

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
				packageDir: [__dirname, path.resolve(__dirname, '..')],
			},
		],
	},
});
