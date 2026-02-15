<script lang="ts">
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import { locales, localizeHref } from '$paraglide/runtime';
	import { debounce } from 'lodash-es';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from 'svelte-sonner';
	import { blur, fade } from 'svelte/transition';
	import '../app.pcss';

	let { data, children } = $props();

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

	$effect(() => {
		page;
		debouncedAdjustScrollbarVisibility();
	});
</script>

<!-- For localization of pages -->

<nav class="hidden" aria-label="Languages" aria-hidden="true">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })} data-sveltekit-reload>
			{locale}
		</a>
	{/each}
</nav>

<Toaster richColors />
<ModeWatcher defaultMode="dark" />
<Navigation />
{#if page.route.id !== resolve('/')}
	{#key data.pathname}
		<main
			class="container mx-auto my-auto flex-grow"
			in:fade={{ delay: 300, duration: 300 }}
			out:blur={{ duration: 300 }}
		>
			<!-- <WarningAlert /> -->
			{@render children()}
		</main>
		<Footer />
	{/key}
{:else}
	{@render children()}
{/if}
