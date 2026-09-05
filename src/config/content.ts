import { getCollection, render, type CollectionEntry } from "astro:content";

type OrderedCollection = "home" | "projects";

interface Rendered<C extends OrderedCollection> {
	Content: Awaited<ReturnType<typeof render>>["Content"];
	data: CollectionEntry<C>["data"];
	id: string;
}

/** Markdown collection entries sorted by `order` frontmatter, each with its rendered Content component. */
export const renderedCollection = async <C extends OrderedCollection>(collection: C): Promise<Rendered<C>[]> => {
	const entries = await getCollection(collection);
	return Promise.all(
		entries
			.toSorted((a, b) => a.data.order - b.data.order)
			.map(async entry => ({ Content: (await render(entry)).Content, data: entry.data, id: entry.id })),
	);
};
