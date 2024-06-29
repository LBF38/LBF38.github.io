import { slugFromPath } from '$lib/utils';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	const content = import.meta.glob('/src/content/**/*.md');
	console.log(content);
	const paths = Object.keys(content)
		.map(slugFromPath)
		.filter((path) => path !== null)
		.map((path) => path?.split('/'));
	console.log(paths);
	return {
		paths
	};
};
