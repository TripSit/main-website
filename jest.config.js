'use strict';

module.exports = {
	setupFiles: ['<rootDir>/tests/loadershim.js'],
	setupFilesAfterEnv: [
		'<rootDir>/tests/setup.js',
	],
	transform: {
		'^.+\\.(j|t)sx?$': '<rootDir>/tests/preprocess.js',
	},
	moduleNameMapper: {
		'.+\\.s?css$': 'identity-obj-proxy',
		'.+\\.(jpe?g|png|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)': '<rootDir>/__mocks__/file-mock.js',
	},
	testPathIgnorePatterns: [
		'node_modules',
		'\\.cache',
		'<rootDir>.*/public',
	],
	transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
	moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx'],
	globals: { __PATH_PREFIX__: '' },
	testURL: 'http://localhost',
};
