import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import type { KIT_ROUTES } from '$lib/ROUTES';
import { sveltekit } from '@sveltejs/kit/vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import { defineConfig } from 'vite';
import { URL, fileURLToPath } from 'node:url';

export default defineConfig({
	plugins: [
		paraglide({ project: './project.inlang', outdir: './src/lib/paraglide' }),
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
				instagram: {
					href: 'https://www.instagram.com/mathis.u38/'
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
