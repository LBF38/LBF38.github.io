import type { KIT_ROUTES } from '$lib/ROUTES';
import { sveltekit } from '@sveltejs/kit/vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		kitRoutes<KIT_ROUTES>({
			LINKS: {
				gh_profile: {
					href: 'https://github.com/[username]'
				},
				shadcn_svelte: {
					href: 'https://shadcn-svelte.com'
				},
				staticforms: {
					href: 'https://staticforms.xyz/'
				}
			}
		})
	]
	// test: {
	// 	include: ['src/**/*.{test,spec}.{js,ts}']
	// }
});
