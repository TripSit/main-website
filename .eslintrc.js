'use strict';

module.exports = {
	root: true,
	extends: 'airbnb-typescript',
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
		'react/forbid-prop-types': 0,
		'react/require-default-props': 0,
		'react/no-danger': 0,
		'@typescript-eslint/indent': [2, 'tab'],
	},
	overrides: [
		{
			files: [
				'./src/**/*.ts',
				'./src/**/*.tsx',
			],
			parser: '@typescript-eslint/parser',
			parserOptions: { project: './tsconfig.json' },
		},
		{
			files: [
				'.eslintrc.js',
				'gatsby-*.js',
				'jest.config.js',
				'jest-preprocess.js',
				'**/__mocks__/**',
				'./loadershim.js',
			],
			parserOptions: { project: './tsconfig.json', sourceType: 'script'	},
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
				'**/__tests__/*.ts',
				'**/__tests__/*.tsx',
				'**/__mocks__/*.ts',
				'**/__mocks__/*.tsx',
				'jest.setup.js',
			],
			plugins: ['jest'],
			env: { jest: true },
		},
	],
};
