export interface ContactItem {
	icon: string;
	label: string;
	/** Extra rel values appended to the Link default (noreferrer). */
	rel?: string;
	url: string;
}

export const contacts: ContactItem[] = [
	{
		icon: "simple-icons:x",
		label: "X",
		url: "https://x.com/1pieter",
	},
	{
		icon: "simple-icons:mastodon",
		label: "Mastodon",
		rel: "me",
		url: "https://mastodon.social/@pataar",
	},
	{
		icon: "simple-icons:github",
		label: "GitHub",
		url: "https://github.com/pataar",
	},
	{
		icon: "simple-icons:gitlab",
		label: "GitLab",
		url: "https://gitlab.com/pataar",
	},
	{
		icon: "simple-icons:npm",
		label: "npm",
		url: "https://www.npmjs.com/~pataar",
	},
	{
		icon: "simple-icons:bluesky",
		label: "Bluesky",
		url: "https://bsky.app/profile/pataar.nl",
	},
	{
		icon: "simple-icons:stackoverflow",
		label: "Stack Overflow",
		url: "https://stackoverflow.com/users/3173382/pataar",
	},
	{
		icon: "simple-icons:devdotto",
		label: "DEV",
		url: "https://dev.to/pataar",
	},
	{
		icon: "simple-icons:bambulab",
		label: "MakerWorld",
		url: "https://makerworld.com/en/@pataar",
	},
	{
		icon: "lucide:mail",
		label: "Email",
		url: "mailto:pataar@pm.me",
	},
];
