<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import { i18n } from '$lib/i18n';
	import * as m from '$paraglide/messages';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { blur, fade } from 'svelte/transition';
	// Most of your app wide CSS should be put in this file
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { route } from '$lib/ROUTES';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { onDestroy, onMount } from 'svelte';
	import { Toaster } from 'svelte-sonner';
	import '../app.pcss';
	import type { LayoutData } from './$types';

	let visible = true;
	export let data: LayoutData;

	function adjustScrollbarVisibility() {
		const needsScrolling = document.body.scrollHeight > window.innerHeight;
		document.body.classList.toggle('hide-scrollbar', !needsScrolling);
	}

	onMount(() => {
		if (!browser) return;
		adjustScrollbarVisibility();
		window.addEventListener('resize', adjustScrollbarVisibility);

		const unsubscribe = page.subscribe(() => {
			adjustScrollbarVisibility();
		});

		onDestroy(() => {
			unsubscribe();
		});
	});

	onDestroy(() => {
		if (!browser) return;
		window.removeEventListener('resize', adjustScrollbarVisibility);
	});
</script>

<ParaglideJS {i18n}>
	<Toaster richColors />
	<ModeWatcher />
	<Navigation />
	{#if $page.route.id !== route('/')}
		{#key data.pathname}
			<main
				class="container mx-auto my-auto p-6"
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
		{/key}
	{:else}
		<slot />
	{/if}
	{#if $page.route.id !== route('/')}
		<footer class="mx-auto">
			<span class="m-2 flex items-center justify-center gap-1">
				{m.tangy_key_swallow_lock()}<Icon icon="octicon:heart-16" style="color: deeppink" />
				{m.fancy_fun_hedgehog_grow()}
				<Button
					href={route('gh_profile', { username: 'LBF38' })}
					target="_blank"
					variant="link"
					class="p-0"
				>
					LBF38
				</Button>
				{m.large_green_orangutan_pinch()}
				<Button href={route('shadcn_svelte')} target="_blank" variant="link" class="p-0">
					shadcn/svelte
				</Button>
			</span>
		</footer>
	{/if}
	<!-- <a title="Google Analytics Alternative" href="https://clicky.com/101423247">
	<img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" />
</a> -->
</ParaglideJS>
