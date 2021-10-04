import { Link, graphql } from "gatsby";
import { slugify } from "../util/index";
import { GatsbyImage } from "gatsby-plugin-image";

import DefaultLayout from "../components/DefaultLayout";
import SearchEngineOptimalisation from "../components/SearchEngineOptimalisation";

export default function BlogPostTemplate(props) {
	const post = props.data.markdownRemark;

	return (
		<DefaultLayout>
			<SearchEngineOptimalisation title={post.frontmatter.title} description={post.excerpt} />
			<div className="clearfix post-content-box">
				<article className="article-page">
					<div className="page-content">
						{post.frontmatter.img && (
							<div className="page-cover-image">
								<figure>
									<GatsbyImage
										image={post.frontmatter.img.childImageSharp.gatsbyImageData}
										className="page-image"
										key={post.frontmatter.img.childImageSharp.gatsbyImageData.src}
										alt=""
									/>
								</figure>
							</div>
						)}
						<div className="wrap-content">
							<header className="header-page">
								<h1 className="page-title">{post.frontmatter.title}</h1>
								<div className="page-date">
									<span>{post.frontmatter.date}</span>
								</div>
							</header>
							<div dangerouslySetInnerHTML={{ __html: post.html }} />
							<div className="page-footer">
								<div className="page-tag">
									{post.frontmatter.tags &&
										post.frontmatter.tags.map(tag => (
											<span key={tag}>
												<Link className="tag" to={`/tags/${slugify(tag)}/`}>
													# {tag}
												</Link>
											</span>
										))}
								</div>
							</div>
						</div>
					</div>
				</article>
			</div>
		</DefaultLayout>
	);
}

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "YYYY, MMM DD")
				tags
				img {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: [AUTO, AVIF, WEBP])
					}
				}
			}
		}
	}
`;
