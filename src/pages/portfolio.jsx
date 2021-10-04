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
					<h1>Portfolio</h1>
					<p>Soon ™️</p>
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
