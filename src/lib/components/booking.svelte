<!--Cal floating - popup embed code begins -->
<script type="text/javascript" lang="ts">
	// @ts-nocheck
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import * as m from '$paraglide/messages';
	import { mode } from 'mode-watcher';

	onMount(() => {
		if (!browser) return;
		(function (C, A, L) {
			let p = function (a, ar) {
				a.q.push(ar);
			};
			let d = C.document;
			C.Cal =
				C.Cal ||
				function () {
					let cal = C.Cal;
					let ar = arguments;
					if (!cal.loaded) {
						cal.ns = {};
						cal.q = cal.q || [];
						d.head.appendChild(d.createElement('script')).src = A;
						cal.loaded = true;
					}
					if (ar[0] === L) {
						const api = function () {
							p(api, arguments);
						};
						const namespace = ar[1];
						api.q = api.q || [];
						if (typeof namespace === 'string') {
							cal.ns[namespace] = cal.ns[namespace] || api;
							p(cal.ns[namespace], ar);
							p(cal, ['initNamespace', namespace]);
						} else p(cal, ar);
						return;
					}
					p(cal, ar);
				};
		})(window, 'https://app.cal.com/embed/embed.js', 'init');
		Cal('init', { origin: 'https://cal.com' });

		Cal('floatingButton', {
			calLink: 'mathis.urien/15min',
			hideButtonIcon: false,
			buttonPosition: 'bottom-right',
			buttonText: m.lucky_sunny_rook_roam()
		});
		Cal('ui', {
			styles: { branding: { brandColor: '#000000' } },
			hideEventTypeDetails: false,
			layout: 'month_view'
		});
	});

	onDestroy(() => {
		if (!browser) return;
		const floatingButton = document.querySelector('cal-floating-button');
		console.log('floatingButton', floatingButton);
		if (floatingButton) floatingButton.remove();
	});
</script>

<!--Cal floating - popup embed code ends -->
