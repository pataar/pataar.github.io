export interface ContactItem {
	label: string;
	url: string;
	faIconName: string; // For FontAwesome icon reference
}

export const contacts: ContactItem[] = [
	{
		label: "Twitter",
		url: "https://twitter.com/1pieter",
		faIconName: "faTwitter",
	},
	{
		label: "Mastodon",
		url: "https://mastodon.social/@pataar",
		faIconName: "faMastodon",
	},
	{
		label: "GitHub",
		url: "https://github.com/pataar",
		faIconName: "faGithub",
	},
	{
		label: "GitLab",
		url: "https://gitlab.com/pataar",
		faIconName: "faGitlab",
	},
	{
		label: "NPM",
		url: "https://npmjs.com/pataar",
		faIconName: "faNpm",
	},
	{
		label: "Bluesky",
		url: "https://bsky.app/profile/pataar.nl",
		faIconName: "faBluesky",
	},
	{
		label: "StackOverflow",
		url: "https://stackoverflow.com/users/3173382/pataar",
		faIconName: "faStackOverflow",
	},
	{
		label: "Dev",
		url: "https://dev.to/pataar",
		faIconName: "faDev",
	},
	{
		label: "Email",
		url: "mailto:pataar@pm.me",
		faIconName: "faEnvelope",
	},
];
