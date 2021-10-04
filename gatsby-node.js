const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { slugify } = require("./src/util/index");

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	const blogPost = path.resolve(`./src/templates/BlogPostTemplate.jsx`);
	const tagTemplate = path.resolve(`./src/templates/Tags.jsx`);

	return graphql(
		`
			{
				allMarkdownRemark(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 1000
					filter: { frontmatter: { date: { ne: null } } }
				) {
					edges {
						node {
							fields {
								slug
							}
							frontmatter {
								title
								tags
								img {
									childImageSharp {
										gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
									}
								}
							}
						}
					}
				}
			}
		`
	).then(result => {
		if (result.errors) {
			throw result.errors;
		}
		// Create blog posts pages.
		const posts = result.data.allMarkdownRemark.edges;

		createPage({
			path: "/",
			component: path.resolve("./src/templates/DefaultPage.jsx"),
			context: {
				slug: "page-home",
			},
		});

		posts.forEach((post, index) => {
			const previous = index === posts.length - 1 ? null : posts[index + 1].node;
			const next = index === 0 ? null : posts[index - 1].node;

			createPage({
				path: `/blog/post${post.node.fields.slug}`,
				component: blogPost,
				context: {
					slug: post.node.fields.slug,
					previous,
					next,
				},
			});
		});

		// Create blog post list pages
		const postsPerPage = 10;
		const numPages = Math.ceil(posts.length / postsPerPage);

		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
				component: path.resolve("./src/templates/BlogIndex.jsx"),
				context: {
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages,
					currentPage: i + 1,
				},
			});
		});

		// create Tags pages
		// pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
		let tags = [];
		// Iterate through each post, putting all found tags into `tags`
		posts.forEach(edge => {
			if (edge?.node?.frontmatter?.tags) {
				tags = tags.concat(edge.node.frontmatter.tags);
			}
		});
		// Eliminate duplicate tags
		tags = Array.from(new Set(tags));
		// Make tag pages
		tags.forEach(tag => {
			createPage({
				path: `/tags/${slugify(tag)}/`,
				component: tagTemplate,
				context: {
					tag,
				},
			});
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}
};

exports.onCreateBabelConfig = ({ actions }) => {
	actions.setBabelPlugin({
		name: "@babel/plugin-transform-react-jsx",
		options: {
			runtime: "automatic",
		},
	});
};
