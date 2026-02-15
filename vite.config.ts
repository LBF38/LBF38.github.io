import { paraglideVitePlugin } from '@inlang/paraglide-js';
import type { KIT_ROUTES } from '$lib/ROUTES';
import { sveltekit } from '@sveltejs/kit/vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import { defineConfig } from 'vite';
import { URL, fileURLToPath } from 'node:url';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale']
		}),
		sveltekit(),
		kitRoutes<KIT_ROUTES>({
			LINKS: {
				gh_profile: {
					href: 'https://github.com/[username]',
					params: {
						username: {
							default: "'LBF38'",
							type: 'string'
						}
					}
				},
				linkedin: {
					href: 'https://www.linkedin.com/in/mathis-urien'
				},
				gitlab: {
					href: 'https://www.gitlab.com/LBF38/'
				},
				shadcn_svelte: {
					href: 'https://shadcn-svelte.com'
				},
				staticforms: {
					href: 'https://staticforms.xyz/'
				}
			}
		})
	],
	assetsInclude: ['**/*.md'],
	server: {
		fs: {
			strict: false
		}
	},
	resolve: {
		alias: [
			{
				find: '$contentlayer/generated',
				replacement: fileURLToPath(new URL('./.contentlayer/generated', import.meta.url))
			}
		]
	}
	// test: {
	// 	include: ['src/**/*.{test,spec}.{js,ts}']
	// }
});
