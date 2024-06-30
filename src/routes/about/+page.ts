import { allCVs } from '$contentlayer/generated';
import { events } from '$lib/config';
import { i18n } from '$lib/i18n';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Component } from 'svelte';

export const load: PageLoad = async ({ url }) => {
	try {
		const lang = i18n.getLanguageFromUrl(url);
		const workExperiences = allCVs.filter(
			(doc) => doc.language === lang && doc.event === events[1]
		);
		if (!workExperiences) {
			throw 'Work experiences not found';
		}

		// Loading file & parsing MDX (by mdsvex)
		const workExperienceContentPromises = workExperiences.map(async (doc) => {
			const content = await import(`$content/cv/work_experiences/${doc.fileName}.md`);
			return content.default as unknown as Component;
		});
		// https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#imports-must-end-with-a-file-extension
		// const content = await import(`./click-me.md`); // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#imports-must-end-with-a-file-extension
		const workExperienceContent = await Promise.all(workExperienceContentPromises);

		return {
			work: { metadata: workExperiences, content: workExperienceContent }
		};
	} catch (e) {
		console.error(e);
		throw error(404, `Error when trying to load the page: ${e}`);
	}
};
