import { Link } from "gatsby";

import Logo from "./me.png";

const Sidebar = ({ siteMetadata }) => (
	<aside className="sidebar">
		<header>
			<div className="about">
				<div className="cover-author-image">
					<Link to="/">
						<img src={Logo} alt={siteMetadata.author} />
					</Link>
				</div>
				<div className="author-name">{siteMetadata.author}</div>
				<p>
					<em>{siteMetadata.description}</em>
				</p>
			</div>
		</header>

		<section className="menu">
			<ul>
				<li>
					<Link activeClassName="active" to="/">
						Home
					</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
				</li>
				<li>
					<Link to="/things-i-like-to-work-with">Things I like to work with</Link>
				</li>
				<li>
					<Link to="/portfolio">Portfolio</Link>
				</li>
			</ul>
		</section>
		<footer>
			<section className="contact">
				<h3 className="contact-title">Contact me</h3>
				<ul>
					{siteMetadata.social.twitter && (
						<li>
							<a href={`https://twitter.com/${siteMetadata.social.twitter}`} target="_blank" rel="noreferrer">
								<i className="fab fa-twitter" aria-hidden="true" />
							</a>
						</li>
					)}
					{siteMetadata.social.github && (
						<li>
							<a href={`https://github.com/${siteMetadata.social.github}`} target="_blank" rel="noreferrer">
								<i className="fab fa-github" aria-hidden="true" />
							</a>
						</li>
					)}
					{siteMetadata.social.gitlab && (
						<li>
							<a href={`https://gitlab.com/${siteMetadata.social.gitlab}`} target="_blank" rel="noreferrer">
								<i className="fab fa-gitlab" aria-hidden="true" />
							</a>
						</li>
					)}
					{siteMetadata.social.npm && (
						<li>
							<a href={`https://npmjs.com/${siteMetadata.social.npm}`} target="_blank" rel="noreferrer">
								<i className="fab fa-npm" aria-hidden="true" />
							</a>
						</li>
					)}
					<br />
					{siteMetadata.social.stackoverflow && (
						<li>
							<a
								href={`https://stackoverflow.com/users/${siteMetadata.social.stackoverflow}`}
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-stack-overflow" aria-hidden="true" />
							</a>
						</li>
					)}
					{siteMetadata.social.devto && (
						<li>
							<a href={`https://dev.to/${siteMetadata.social.devto}`} target="_blank" rel="noreferrer">
								<i className="fab fa-dev" aria-hidden="true" />
							</a>
						</li>
					)}
					{siteMetadata.social.email && (
						<li>
							<a href={`mailto:${siteMetadata.social.email}`} target="_blank" rel="noreferrer">
								<i className="far fa-envelope" aria-hidden="true" />
							</a>
						</li>
					)}
				</ul>
			</section>
			<div className="copyright">
				<p>
					{new Date().getFullYear()} &copy; {siteMetadata.author}
				</p>
				<small>
					<a className="no-decoration" href="https://github.com/pataar/pataar.github.io">
						source of this website
					</a>
				</small>
			</div>
		</footer>
	</aside>
);

export default Sidebar;
