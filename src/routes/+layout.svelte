<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import { blur, fade } from 'svelte/transition';
	// Most of your app wide CSS should be put in this file
	import { page } from '$app/stores';
	import { route } from '$lib/ROUTES';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from 'svelte-sonner';
	import '../app.pcss';
	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';

	let visible = true;
	export let data: LayoutData;

	function handleScroll() {
		const body = document.body;
		body.classList.add('scroll-active');

		// @ts-ignore
		clearTimeout(body.scrollTimeout);
		// @ts-ignore
		body.scrollTimeout = setTimeout(() => {
			body.classList.remove('scroll-active');
		}, 300);
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});
</script>

<Toaster richColors />
<ModeWatcher />
<Navigation />
{#if $page.url.pathname !== route('/')}
	{#key data.pathname}
		<main
			class="container mx-auto my-auto p-6"
			in:fade={{ delay: 500, duration: 500 }}
			out:blur={{ duration: 500 }}
		>
			{#if visible}
				<Alert.Root class="relative mx-auto mb-2 w-fit">
					<Icon icon="emojione-v1:construction" class="text-xl" />
					<Alert.Title level="h1">Under construction</Alert.Title>
					<Alert.Description>
						<p>
							This site is still under construction.
							<br />
							Expect some pages to not work correctly.
						</p>
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
{#if $page.url.pathname !== route('/')}
	<footer class="mx-auto">
		<span class="m-2 flex items-center justify-center gap-1">
			Built with <Icon icon="octicon:heart-16" style="color: deeppink" /> by
			<Button
				href={route('gh_profile', { username: 'LBF38' })}
				target="_blank"
				variant="link"
				class="p-0"
			>
				LBF38
			</Button>
			using
			<Button href={route('shadcn_svelte')} target="_blank" variant="link" class="p-0">
				shadcn/svelte
			</Button>
		</span>
	</footer>
{/if}
<!-- <a title="Google Analytics Alternative" href="https://clicky.com/101423247">
	<img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" />
</a> -->
