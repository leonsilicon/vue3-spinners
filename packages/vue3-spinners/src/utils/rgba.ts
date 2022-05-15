import toHex from 'colornames';

export const calculateRgba = (input: string, opacity: number) => {
	let color = '';

	if (input.startsWith(`#`)) {
		color = input.slice(1);
	}

	const colorNameHex = toHex(color);
	if (colorNameHex !== undefined) {
		color = colorNameHex;
	}

	if (color.length === 3) {
		let res = '';
		for (const c of color) {
			res += c;
			res += c;
		}

		color = res;
	}

	const rgbParts = color.match(/.{2}/g);
	if (rgbParts === null) {
		throw new Error(`Could not identify RGB value of color ${color}`);
	}

	const rgbValues = rgbParts.map((hex) => Number.parseInt(hex, 16)).join(`, `);

	return `rgba(${rgbValues}, ${opacity})`;
};

export const range = (size: number, startAt = 0) =>
	[...Array.from({ length: size }).keys()].map((i) => i + startAt);

export const characterRange = (startChar: string, endChar: string) =>
	String.fromCodePoint(
		...range(
			endChar.codePointAt(0)! - startChar.codePointAt(0)!,
			startChar.codePointAt(0)
		)
	);
