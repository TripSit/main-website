'use strict';

module.exports = {
	root: true,
	extends: 'airbnb',
	parser: 'babel-eslint',
	env: { browser: true },
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'react/jsx-indent': 0,
		'arrow-parens': [2, 'as-needed'],
		'react/jsx-indent-props': 0,
		'react/jsx-props-no-spreading': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/forbig-prop-types': 0,
	},
	overrides: [
		{
			files: [
				'.eslintrc.js',
				'gatsby-*.js',
				'jest*.js',
				'**/__mocks__/**',
				'./loadershim.js',
			],
			parserOptions: { sourceType: 'script' },
			env: {
				browser: false,
				node: true,
			},
			rules: {
				strict: [2, 'global'],
				'import/no-extraneous-dependencies': [2, { devDependencies: true }],
			},
		},
		{
			files: [
				'**/__tests__/*.js',
				'**/__tests__/*.jsx',
				'**/__mocks__/*.js',
				'**/__mocks__/*.jsx',
				'jest.setup.js',
			],
			plugins: ['jest'],
			env: { jest: true },
		},
	],
};
