'use strict';

module.exports = {
	transform: {
		'^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
	},
	moduleNameMapper: {
		'.+\\.s?css$': 'identity-obj-proxy',
		'.+\\.(jpe?g|png|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)': '<rootDir>/__mocks__/file-mock.js',
		testPathIgnorePatterns: [
			'node_modules',
			'\\.cache',
			'<rootDir>.*/public',
		],
		transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
		globals: { __PATH_PREFIX__: '' },
		testURL: 'http://localhost',
		setupFiles: ['<rootDir>/loadershim.js'],
	},
};
