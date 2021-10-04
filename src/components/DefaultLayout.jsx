import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Sidebar from ".././components/Sidebar";
import "../styles/main.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DefaultLayout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						author
						description
						social {
							twitter
							gitlab
							stackoverflow
							devto
							npm
							github
							email
						}
					}
				}
			}
		`}
		render={data => (
			<div className="wrapper">
				<Sidebar siteMetadata={data.site.siteMetadata} />
				{children}
			</div>
		)}
	/>
);

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DefaultLayout;
