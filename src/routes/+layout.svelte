<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppShell, Toast } from '@skeletonlabs/skeleton';
</script>

<Toast position="tr" />

<AppShell>
	<svelte:fragment slot="header">
		<Navigation />
	</svelte:fragment>
	<div class="container mx-auto h-full p-6">
		<slot />
	</div>
</AppShell>
