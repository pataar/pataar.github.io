import { Link, graphql } from "gatsby";

import DefaultLayout from "../components/DefaultLayout";
import SearchEngineOptimalisation from "../components/SearchEngineOptimalisation";

export default function BlogIndex(props) {
	const { data } = props;
	const siteTitle = data.site.siteMetadata.title;
	const posts = data.allMarkdownRemark.edges;
	const { currentPage, numPages } = props.pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = `blog/${currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()}`;
	const nextPage = (currentPage + 1).toString();

	const url = node => `/blog/post${node.fields.slug}`;

	return (
		<DefaultLayout>
			<SearchEngineOptimalisation title={siteTitle} keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
			<div className="content-box clearfix">
				{posts.map(({ node }) => (
					<article className="post" key={node.fields.slug}>
						{node.frontmatter.img &&
							node.frontmatter.img.childImageSharp &&
							node.frontmatter.img.childImageSharp.gatsbyImageData && (
								<Link
									to={url(node)}
									className="post-thumbnail"
									style={{
										backgroundImage: `url(${node.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src})`,
									}}
								/>
							)}
						<div className="post-content">
							<h2 className="post-title">
								<Link to={url(node)}>{node.frontmatter.title}</Link>
							</h2>
							<p>{node.excerpt}</p>
							<span className="post-date">{node.frontmatter.date}&nbsp;&nbsp;—&nbsp;</span>
							<span className="post-words">{node.timeToRead} minute read</span>
						</div>
					</article>
				))}
				<div className="container">
					<nav className="pagination" role="navigation">
						<ul>
							{!isFirst && (
								<p>
									<Link to={prevPage} rel="prev" className="newer-posts">
										← Previous Page
									</Link>
								</p>
							)}
							<p>
								<span className="page-number">
									Page {currentPage} of {numPages}
								</span>
							</p>
							{!isLast && (
								<p>
									<Link to={nextPage} rel="next" className="older-posts">
										Next Page →
									</Link>
								</p>
							)}
						</ul>
					</nav>
				</div>
			</div>
		</DefaultLayout>
	);
}

export const pageQuery = graphql`
	query blogPageQuery($skip: Int!, $limit: Int!) {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
			filter: { frontmatter: { date: { ne: null } } }
		) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					timeToRead
					frontmatter {
						date(formatString: "YYYY, MMM DD")
						title
						img {
							childImageSharp {
								gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: [AUTO, AVIF, WEBP])
							}
						}
					}
				}
			}
		}
	}
`;