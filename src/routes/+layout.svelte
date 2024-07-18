<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { route } from '$lib/ROUTES';
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import WarningAlert from '$lib/components/WarningAlert.svelte';
	import { i18n } from '$lib/i18n';
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

	$: $page,
		afterUpdate(() => {
			debouncedAdjustScrollbarVisibility();
		});
</script>

<ParaglideJS {i18n}>
	<Toaster richColors />
	<ModeWatcher defaultMode="dark" />
	<Navigation />
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
