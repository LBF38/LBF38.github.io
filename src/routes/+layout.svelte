<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import { blur, fade } from 'svelte/transition';
	// Most of your app wide CSS should be put in this file
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import { Cross } from 'lucide-svelte';

	let visible = true;
</script>

<ModeWatcher />
<header>
	<Navigation />
</header>
{#key $page.url.pathname}
	<main
		class="container mx-auto h-full p-6"
		in:fade={{ delay: 400 }}
		out:blur={{ duration: 300 }}
	>
		{#if visible && $page.url.pathname !== '/'}
			<Alert.Root class="relative mx-auto w-fit">
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

<slot />

<footer>
	{#key $page.url.pathname}
		{#if $page.url.pathname !== '/'}
			<span class="m-2 flex items-center justify-center gap-1">
				Built with <Icon icon="octicon:heart-16" style="color: deeppink" /> by
				<a href="https://github.com/LBF38" target="_blank" class="anchor">LBF38</a>
				using
				<a href="https://skeleton.dev" target="_blank" class="anchor">Skeleton</a>
			</span>
		{/if}
	{/key}
</footer>
