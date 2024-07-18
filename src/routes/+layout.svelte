<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import type { NavigationRoute } from '$lib';
	import { route } from '$lib/ROUTES';
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import { i18n } from '$lib/i18n';
	import * as m from '$paraglide/messages';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { debounce } from 'lodash-es';
	import { ModeWatcher } from 'mode-watcher';
	import { afterUpdate } from 'svelte';
	import { Toaster } from 'svelte-sonner';
	import { blur, fade } from 'svelte/transition';
	import '../app.pcss';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	function adjustScrollbarVisibility() {
		if (!browser) return;
		const needsScrolling = document.body.clientHeight > window.innerHeight;
		// console.log(
		// 	'adjustScrollbarVisibility: scrolling ?',
		// 	needsScrolling,
		// 	'body.scrollHeight',
		// 	document.body.scrollHeight,
		// 	'body.clientHeight',
		// 	document.body.clientHeight,
		// 	'window.innerHeight',
		// 	window.innerHeight,
		// 	'current page: ',
		// 	$page.route.id
		// );
		document.body.classList.toggle('hide-scrollbar', !needsScrolling);
	}
	const debouncedAdjustScrollbarVisibility = debounce(adjustScrollbarVisibility, 100);

	const routes: NavigationRoute[] = [
		{
			pathname: route('/projects'),
			name: m.safe_level_eel_dine(),
			description: m.caring_fuzzy_fish_rush(),
			keywords: m.muddy_few_reindeer_treat()
		},
		{
			pathname: route('/tech'),
			name: m.jumpy_few_marten_win(),
			description: m.patient_caring_barbel_renew(),
			keywords: 'svelte, sveltekit, tailwindcss, typescript, vite, graphql, postgresql, ...'
		},
		{
			pathname: route('/about'),
			name: m.game_bad_robin_aid(),
			description: m.mushy_few_vulture_treasure(),
			keywords: m.silly_lazy_leopard_type()
		},
		{
			pathname: route('/contact'),
			name: m.factual_tangy_bat_strive(),
			description: m.bald_best_puma_cook(),
			keywords: m.factual_upper_dragonfly_renew()
		}
	];

	$: $page,
		afterUpdate(() => {
			debouncedAdjustScrollbarVisibility();
		});
</script>

<ParaglideJS {i18n}>
	<Toaster richColors />
	<ModeWatcher defaultMode="dark" />
	<Navigation {routes} />
	{#if $page.route.id !== route('/')}
		{#key data.pathname}
			<main
				class="container mx-auto my-auto flex-grow"
				in:fade={{ delay: 300, duration: 300 }}
				out:blur={{ duration: 300 }}
			>
				<!-- <WarningAlert /> -->
				<slot />
			</main>
			<Footer />
		{/key}
	{:else}
		<slot />
	{/if}
</ParaglideJS>
