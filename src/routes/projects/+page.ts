import { allProjectDetails, type ProjectDetail } from '$contentlayer/generated';
import type { Content } from '$lib';
import { i18n } from '$lib/i18n';
import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	try {
		const lang = i18n.getLanguageFromUrl(url);
		const Projects = await Promise.all(
			allProjectDetails
				.filter((doc) => doc.language === lang)
				.map(async (doc) => {
					// Loading file & parsing MDX (by mdsvex)
					const content = await import(`$content/projects/${doc.fileName}.md`);
					return {
						content: content.default as unknown as Component,
						metadata: doc
					} satisfies Content<ProjectDetail>;
				})
		);
		if (!Projects) {
			throw 'Some content not found (in this language or at all)';
		}
		console.log(Projects);

		return {
			Projects
		};
	} catch (e) {
		console.error(e);
		throw error(404, `Error when trying to load the page: ${e}`);
	}
};
