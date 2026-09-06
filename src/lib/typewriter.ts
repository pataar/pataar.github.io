export interface TypedLetter {
	letter: string;
	fromSeconds: number;
	revealSeconds: number;
}

export interface TypedWord {
	letters: TypedLetter[];
}

export interface TypedText {
	words: TypedWord[];
	endSeconds: number;
}

// Delays are randomized at build time so the rhythm feels human-typed without shipping any JS.
export function typeWords(text: string, startAt: number): TypedText {
	let elapsedSeconds = startAt;
	let cursorLandsSeconds = elapsedSeconds;
	const words = text.split(" ").map(word => ({
		letters: word.split("").map(letter => {
			const fromSeconds = cursorLandsSeconds;
			elapsedSeconds += 0.05 + Math.random() * 0.14;
			cursorLandsSeconds = elapsedSeconds;
			return { fromSeconds, letter, revealSeconds: elapsedSeconds };
		}),
	}));
	return { words, endSeconds: elapsedSeconds };
}
