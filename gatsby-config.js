'use strict';

const path = require('path');

const name = 'TripSit';
const description = 'Harm reduction through education';
const url = 'https://tripsit.me/';

module.exports = {
	pathPrefix: '/',
	siteMetadata: {
		title: name,
		description,
		siteUrl: url,
		author: name,
	},
	plugins: [
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'articles',
				path: path.resolve('./content/articles'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: path.resolve('./content/data'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: path.resolve('./content/images'),
			},
		},
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				useResolveUrlLoader: {
					options: {
						debug: process.env.NODE_ENV !== 'production',
						sourceMap: true,
					},
				},
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name,
				short_name: name,
				description,
				homepage_url: url,
				start_url: '/',
				background_color: '#fff',
				theme_color: '#000',
				display: 'standalone',
				icons: [],
			},
		},
	],
};
