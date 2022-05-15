const defineESLintConfig = require('lionconfig/eslint');

module.exports = defineESLintConfig(__dirname, {
	rules: {
		'vue/no-setup-props-destructure': 'off',
		'import/no-anonymous-default-export': 'off',
		'import/first': 'off',
	},
});
