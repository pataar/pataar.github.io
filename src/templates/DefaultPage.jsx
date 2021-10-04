import DefaultLayout from "../components/DefaultLayout";
import SearchEngineOptimalisation from "../components/SearchEngineOptimalisation";
import { graphql } from "gatsby";

export default function DefaultPage({ data }) {
	const { markdownRemark } = data; // data.markdownRemark holds your post data
	const { html } = markdownRemark;
	return (
		<DefaultLayout>
			<SearchEngineOptimalisation title="Home" />
			<div className="clearfix post-content-box">
				<article className="article-page">
					<div className="page-content">
						<div className="wrap-content">
							<div dangerouslySetInnerHTML={{ __html: html }} />
						</div>
					</div>
				</article>
			</div>
		</DefaultLayout>
	);
}

export const pageQuery = graphql`
	query pageBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
