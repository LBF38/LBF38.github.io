<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';

	export let href: string;
	export let rel: string | undefined = undefined;

	$: internal = href.startsWith('/') || href.startsWith('#');

	$: rel = !internal ? 'noopener noreferrer' : undefined;
	$: target = !internal ? '_blank' : undefined;
</script>

<a
	class="inline-flex items-center gap-1 underline underline-offset-2 transition-colors hover:text-blue-500/80 dark:hover:text-purple-400/80"
	{href}
	{target}
	{rel}
>
	<slot />
	{#if !internal}
		<ExternalLink class="inline size-4" />
	{/if}
</a>
