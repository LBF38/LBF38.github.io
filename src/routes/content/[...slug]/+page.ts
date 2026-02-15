import { slugFromPath } from '$lib/utils.js';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import type { MdsvexResolver } from '../../../app.js';
import type { Component } from 'svelte';

// export const entries: EntryGenerator = () => {
// 	return navConfig.sidebarNav[0].items.map((item) => {
// 		return { slug: item.title.toLowerCase().replaceAll(' ', '-') };
// 	});
// };

export const load: PageLoad = async ({ params }) => {
	// const doc = await getDoc(event.params.slug);
	const content = import.meta.glob('/src/content/**/*.md');

	let match: { path?: string; resolver?: MdsvexResolver } = {};
	for (const [path, resolver] of Object.entries(content)) {
		if (slugFromPath(path) === params.slug) {
			match = { path, resolver: resolver as unknown as MdsvexResolver };
			break;
		}
	}

	const post = await match?.resolver?.();
	console.log(post);

	// if (!post || !post.metadata.published) {
	if (!post) {
		throw error(404); // Couldn't resolve the post
	}

	return {
		// paths: (await parent()).paths,
		component: post.default as Component,
		frontmatter: post.metadata
	};
};
