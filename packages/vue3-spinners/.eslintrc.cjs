const defineESLintConfig = require('lionconfig/eslint');

module.exports = defineESLintConfig(__dirname, {
	rules: {
		'vue/no-setup-props-destructure': 'off',
	},
});
