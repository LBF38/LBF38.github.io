import { allCVs } from '$contentlayer/generated';
import type { ContentCV } from '$lib';
import { events } from '$lib/config';
import { i18n } from '$lib/i18n';
import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	try {
		const lang = i18n.getLanguageFromUrl(url);
		const CVs = await Promise.all(
			allCVs
				.filter((doc) => doc.language === lang)
				.map(async (doc) => {
					// Loading file & parsing MDX (by mdsvex)
					const content = await import(`$content/cv/${doc.event}/${doc.fileName}.md`);
					return {
						content: content.default as unknown as Component,
						metadata: doc
					} satisfies ContentCV;
				})
		);
		if (!CVs) {
			throw 'Work experiences not found';
		}

		return {
			education: CVs.filter((cv) => cv.metadata.event === events[0]),
			work: CVs.filter((cv) => cv.metadata.event === events[1]),
			projects: CVs.filter((cv) => cv.metadata.event === events[2])
		};
	} catch (e) {
		console.error(e);
		throw error(404, `Error when trying to load the page: ${e}`);
	}
};
