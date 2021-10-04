// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files

import { Link, graphql } from "gatsby";
import { slugify } from "../util/index";
import DefaultLayout from "../components/DefaultLayout";
const TagsPage = ({ data }) => {
	const allTags = data.allMarkdownRemark.group;

	return (
		<DefaultLayout>
			<div className="content-box clearfix">
				<div className="blog-tags">
					<h1>Tags</h1>
					<ul className="tags">
						{allTags.map(tag => (
							<li key={tag.fieldValue}>
								<Link to={`/tags/${slugify(tag.fieldValue)}/`} className="tag">
									{tag.fieldValue} ({tag.totalCount})
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</DefaultLayout>
	);
};

export default TagsPage;

export const pageQuery = graphql`
	query {
		allMarkdownRemark(limit: 2000) {
			group(field: frontmatter___tags) {
				fieldValue
				totalCount
			}
		}
	}
`;
