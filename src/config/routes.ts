export interface Route {
	file: string;
	label: string;
	path: string;
}

export const routes: Route[] = [
	{ file: "index.md", label: "Home", path: "/" },
	{ file: "projects.md", label: "Projects", path: "/projects/" },
	{ file: "likes.toml", label: "Things I like to work with", path: "/likes/" },
];

// Dev serves /likes while GitHub Pages serves /likes/, so compare normalized paths only.
export const normalizePath = (path: string): string => (path.endsWith("/") ? path : `${path}/`);

export const currentRoute = (pathname: string): Route | undefined =>
	routes.find(route => normalizePath(route.path) === normalizePath(pathname));
