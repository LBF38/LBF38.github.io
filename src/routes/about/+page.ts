import { allWorkExperiences } from '$contentlayer/generated';
import { i18n } from '$lib/i18n';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	try {
		const lang = i18n.getLanguageFromUrl(url);
		const workExperience = allWorkExperiences.find((doc) => doc.language === lang);
		if (!workExperience) {
			throw 'Content not found';
		}

		// Loading file & parsing MDX (by mdsvex)
		const content = await import(`$content/work_experiences/${workExperience.fileName}.md`);
		// https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#imports-must-end-with-a-file-extension
		// const content = await import(`./click-me.md`); // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#imports-must-end-with-a-file-extension

		return {
			post: workExperience,
			content: content.default
		};
	} catch (e) {
		console.error(e);
		throw error(404, `Error when trying to load the page: ${e}`);
	}
};
