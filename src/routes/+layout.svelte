<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, Toast } from '@skeletonlabs/skeleton';
	import { blur, fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';
	export let data;
	let visible = true;
</script>

<Toast position="tr" />

<AppShell slotPageContent="overflow-x-hidden">
	<svelte:fragment slot="header">
		<Navigation />
	</svelte:fragment>
	{#key data.url}
		<div
			class="container mx-auto h-full max-h-full min-h-fit p-6"
			in:fade={{ delay: 250 }}
			out:blur={{ duration: 200 }}
		>
			{#if visible && data.url !== '/'}
				<aside class="alert variant-ghost">
					<!-- Icon -->
					<div><Icon icon="emojione-v1:construction" /></div>
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
						<button type="button" class="btn" on:click={() => (visible = !visible)}
							>Dismiss</button
						>
					</div>
				</aside>
			{/if}
			<slot />
		</div>
	{/key}
</AppShell>

<!-- <style>
	::-webkit-scrollbar-thumb {
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
		z-index: 10;
	}

	::-webkit-scrollbar-thumb:hover,
	::-webkit-scrollbar-thumb:active {
		opacity: 1;
	}
</style> -->
