export interface TypedLetter {
	letter: string;
	fromSeconds: number;
	revealSeconds: number;
}

export interface TypedWord {
	letters: TypedLetter[];
}

export interface TypedText {
	text: string;
	words: TypedWord[];
	endSeconds: number;
}

interface Clock {
	endSeconds: number;
	/** Advances the clock by `delaySeconds` and returns the from/reveal pair for that step. */
	tick(delaySeconds: number): { fromSeconds: number; revealSeconds: number };
	/** Reveals instantly without advancing the clock, for characters that appear alongside the previous one (e.g. auto-indent). */
	hold(): { fromSeconds: number; revealSeconds: number };
}

// Shared bookkeeping for build-time typing animations: each step reveals at the cursor's current
// position, then the cursor advances by that step's delay. Used by typeWords below and by MeCode's
// own per-character rhythm, which needs a different delay function per keystroke.
export function makeClock(startAt: number): Clock {
	let elapsedSeconds = startAt;
	let cursorLandsSeconds = elapsedSeconds;
	return {
		get endSeconds() {
			return elapsedSeconds;
		},
		tick(delaySeconds) {
			const fromSeconds = cursorLandsSeconds;
			elapsedSeconds += delaySeconds;
			cursorLandsSeconds = elapsedSeconds;
			return { fromSeconds, revealSeconds: elapsedSeconds };
		},
		hold() {
			return { fromSeconds: cursorLandsSeconds, revealSeconds: cursorLandsSeconds };
		},
	};
}

// Delays are randomized at build time so the rhythm feels human-typed without shipping any JS.
export function typeWords(text: string, startAt: number): TypedText {
	const clock = makeClock(startAt);
	const words = text.split(" ").map(word => ({
		letters: word.split("").map(letter => {
			const { fromSeconds, revealSeconds } = clock.tick(0.05 + Math.random() * 0.14);
			return { fromSeconds, letter, revealSeconds };
		}),
	}));
	return { text, words, endSeconds: clock.endSeconds };
}
