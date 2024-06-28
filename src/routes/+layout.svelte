<script lang="ts">
	import { browser } from '$app/environment';
	import { navigating, page, updated } from '$app/stores';
	import { route } from '$lib/ROUTES';
	import Footer from '$lib/components/Footer.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import { i18n } from '$lib/i18n';
	import * as m from '$paraglide/messages';
	import Icon from '@iconify/svelte';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { ModeWatcher } from 'mode-watcher';
	import { afterUpdate, onDestroy, onMount, tick } from 'svelte';
	import { Toaster } from 'svelte-sonner';
	import type { Unsubscriber } from 'svelte/store';
	import { blur, fade } from 'svelte/transition';
	import '../app.pcss';
	import type { LayoutData } from './$types';
	import { debounce } from 'lodash-es';

	let visible = true;
	export let data: LayoutData;

	function adjustScrollbarVisibility() {
		if (!browser) return;
		const needsScrolling = document.body.clientHeight > window.innerHeight;
		console.log(
			'adjustScrollbarVisibility: scrolling ?',
			needsScrolling,
			'body.scrollHeight',
			document.body.scrollHeight,
			'body.clientHeight',
			document.body.clientHeight,
			'window.innerHeight',
			window.innerHeight,
			'current page: ',
			$page.route.id
		);
		document.body.classList.toggle('hide-scrollbar', !needsScrolling);
	}
	const debouncedAdjustScrollbarVisibility = debounce(adjustScrollbarVisibility, 100);

	// function setup() {
	// 	adjustScrollbarVisibility();
	// 	window.addEventListener('resize', debouncedAdjustScrollbarVisibility);

	// 	unsubscribe = page.subscribe(async ({ route }) => {
	// 		afterUpdate(adjustScrollbarVisibility);
	// 		// await tick();
	// 		// console.log('page changed - subscribe', route.id);
	// 		// if (document.readyState === 'complete') {
	// 		// 	// If the document is already loaded, set up immediately.
	// 		// 	console.log('doc ready');
	// 		// 	adjustScrollbarVisibility();
	// 		// } else {
	// 		// 	// Otherwise, wait for the load event before setting up.
	// 		// 	console.log('doc not ready');
	// 		// 	window.addEventListener('load', adjustScrollbarVisibility, { once: true });
	// 		// }
	// 	});
	// }

	// onMount(() => {
	// 	if (!browser) return;
	// 	setup();
	// });

	// onDestroy(() => {
	// 	if (!browser) return;
	// 	window.removeEventListener('resize', debouncedAdjustScrollbarVisibility);
	// 	if (unsubscribe) unsubscribe();
	// });

	// $: data.pathname, debouncedAdjustScrollbarVisibility();
	// page.subscribe(async () => {
	// 	await tick();
	// 	debouncedAdjustScrollbarVisibility();
	// });
	$: $page,
		afterUpdate(() => {
			debouncedAdjustScrollbarVisibility();
		});
</script>

<!-- <svelte:window
	on:fullscreenchange={debouncedAdjustScrollbarVisibility}
	on:resize={debouncedAdjustScrollbarVisibility}
	on:load={debouncedAdjustScrollbarVisibility}
	on:change={debouncedAdjustScrollbarVisibility}
/>
<svelte:body
	on:resize={debouncedAdjustScrollbarVisibility}
	on:change={debouncedAdjustScrollbarVisibility}
	on:load={debouncedAdjustScrollbarVisibility}
	on:fullscreenchange={debouncedAdjustScrollbarVisibility}
/> -->
<ParaglideJS {i18n}>
	<Toaster richColors />
	<ModeWatcher />
	<Navigation />
	{#if $page.route.id !== route('/')}
		{#key data.pathname}
			<main
				class="container mx-auto my-auto flex-grow p-6"
				in:fade={{ delay: 500, duration: 500 }}
				out:blur={{ duration: 500 }}
			>
				{#if visible}
					<Alert.Root class="relative mx-auto mb-2 w-fit">
						<Icon icon="emojione-v1:construction" class="text-xl" />
						<Alert.Title level="h1">{m.big_clear_opossum_pray()}</Alert.Title>
						<Alert.Description>
							<p>{@html m.ornate_zippy_shrike_treat()}</p>
						</Alert.Description>
						<Button
							variant="ghost"
							size="sm"
							class="absolute right-0 top-0 m-2"
							on:click={() => (visible = !visible)}
						>
							<Icon icon="charm:cross" class="text-2xl" />
						</Button>
					</Alert.Root>
				{/if}
				<slot />
			</main>
			<Footer />
		{/key}
	{:else}
		<slot />
	{/if}
</ParaglideJS>
