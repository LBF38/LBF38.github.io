<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import { blur, fade } from 'svelte/transition';
	// Most of your app wide CSS should be put in this file
	import { page } from '$app/stores';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
	import { Toaster } from 'svelte-sonner';
	import { route } from '$lib/ROUTES';
	import AccordionContent from '$lib/components/ui/accordion/accordion-content.svelte';

	let visible = true;
</script>

<Toaster richColors />
<ModeWatcher />
{#key $page.url.pathname}
	<Navigation />
	<main
		class="container mx-auto h-full p-6"
		in:fade={{ delay: 400 }}
		out:blur={{ duration: 300 }}
	>
		{#if visible && $page.url.pathname !== '/'}
			<Alert.Root class="relative mx-auto my-6 w-fit">
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
	<footer class="mt-auto">
		{#if $page.url.pathname !== '/'}
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
		{/if}
	</footer>
{/key}
<!-- <a title="Google Analytics Alternative" href="https://clicky.com/101423247">
	<img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" />
</a> -->
