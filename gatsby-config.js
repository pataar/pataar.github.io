module.exports = {
	siteMetadata: {
		title: `Pieter Willekens`,
		description: `Dad, developer, drummer.`,
		author: `Pieter Willekens`,
		siteUrl: `https://pieterwillekens.nl`,
		social: {
			twitter: `1pieter`,
			gitlab: `pataar`,
			github: `pataar`,
			stackoverflow: `3173382/pataar`,
			npm: `pataar`,
			email: `pataar@pm.me`,
			devto: `pataar`,
		},
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/pages`,
				name: `pages`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 970,
							withWebp: true,
							withAvif: true,
						},
					},
					{
						resolve: `gatsby-remark-copy-linked-files`,
						options: {
							destinationDir: `files`,
							ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
						},
					},
					`gatsby-remark-prismjs`,
				],
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `pieter-willekens`,
				short_name: `pieter-willekens`,
				start_url: `/`,
				background_color: `#373347`,
				theme_color: `#373347`,
				display: `minimal-ui`,
				icon: `./static/icon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
	],
};
