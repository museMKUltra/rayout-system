module.exports = {
	env: {
		es2021: true,
		node: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		curly: 'error',
		'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
	},
}
