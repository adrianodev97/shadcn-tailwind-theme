export interface IImage {
	src: string;
	alt: string;
	width: number;
	height: number;
}

export const imagePlaceholder = (width = 600, height = 400): string => {
	return `https://picsum.photos/${width}/${height}`;
};
