<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../theme.postcss';
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

<AppShell>
	<svelte:fragment slot="header">
		<Navigation />
	</svelte:fragment>
	{#key data.url}
		<div
			class="container mx-auto h-full p-6"
			in:fade={{ delay: 400 }}
			out:blur={{ duration: 300 }}
		>
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
	<svelte:fragment slot="pageFooter">
		{#key data.url}
			{#if data.url !== '/'}
				<!-- <a title="Web Analytics" href="https://clicky.com/101423247">
					<img
						alt="Clicky"
						src="//static.getclicky.com/media/links/badge.gif"
						style="border: 0;"
					/>
				</a> -->
				<span class="m-2 flex items-center justify-center gap-1">
					Built with <Icon icon="octicon:heart-16" style="color: deeppink" /> by
					<a href="https://github.com/LBF38" target="_blank" class="anchor">LBF38</a>
					using
					<a href="https://skeleton.dev" target="_blank" class="anchor">Skeleton</a>
				</span>
			{/if}
		{/key}
	</svelte:fragment>
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
