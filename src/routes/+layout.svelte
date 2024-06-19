<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import { blur, fade } from 'svelte/transition';
	// Most of your app wide CSS should be put in this file
	import Icon from '@iconify/svelte';
	import '../app.pcss';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	let visible = true;
</script>

<Navigation />
{#key data.url}
	<div class="container mx-auto h-full p-6" in:fade={{ delay: 400 }} out:blur={{ duration: 300 }}>
		{#if visible && data.url !== '/'}
			<aside class="alert variant-ghost">
				<!-- Icon -->
				<div><Icon icon="emojione-v1:construction" style="font-size: xx-large;" /></div>
				<!-- Message -->
				<div class="alert-message">
					<h3 class="h3">Under construction</h3>
					<p>
						This site is still under construction. Expect some pages to not work
						correctly.
					</p>
				</div>
				<!-- Actions -->
				<div class="alert-actions">
					<button
						type="button"
						class="btn variant-ghost-warning"
						on:click={() => (visible = !visible)}
					>
						Dismiss
					</button>
				</div>
			</aside>
		{/if}
		<slot />
	</div>
{/key}

<slot />

<footer>
	{#key data.url}
		{#if data.url !== '/'}
			<span class="m-2 flex items-center justify-center gap-1">
				Built with <Icon icon="octicon:heart-16" style="color: deeppink" /> by
				<a href="https://github.com/LBF38" target="_blank" class="anchor">LBF38</a>
				using
				<a href="https://skeleton.dev" target="_blank" class="anchor">Skeleton</a>
			</span>
		{/if}
	{/key}
</footer>
