import { mdsvex } from 'mdsvex';
// TODO: ^ maybe change to @huntabyte/mdsvex ?
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvexOptions } from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	preprocess: [mdsvex(mdsvexOptions), vitePreprocess()],

	vitePlugin: {
		inspector: true
	},

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			'$paraglide/*': './src/lib/paraglide/*',
			'$contentlayer/generated': '.contentlayer/generated',
			$content: './src/content'
		}
	},
	extensions: ['.svelte', ...mdsvexOptions.extensions, '.md']
};

export default config;
