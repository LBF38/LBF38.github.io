import { paraglideMiddleware } from '$lib/paraglide/server';
import { deLocalizeUrl } from '$paraglide/runtime';
import type { Handle, Reroute } from '@sveltejs/kit';

export const i18n: { handle: Handle; reroute: Reroute } = {
	handle: ({ event, resolve }) =>
		paraglideMiddleware(event.request, ({ request: localizedRequest, locale }) => {
			event.request = localizedRequest;
			return resolve(event, {
				transformPageChunk: ({ html }) => {
					return html.replace('%lang%', locale);
				}
			});
		}),
	reroute: (request) => {
		return deLocalizeUrl(request.url).pathname;
	}
};
