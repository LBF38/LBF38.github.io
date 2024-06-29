<script lang="ts">
	import { cn, createCopyCodeButton } from '$lib/utils';
	import { Check, Copy } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	let className: string | undefined | null = undefined;
	export { className as class };

	const { copied, copyCode, setCodeString } = createCopyCodeButton();
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -- This is needed to be acessible -->
<pre
	use:setCodeString
	class={cn(
		'force-dark mb-4 mt-6 max-h-[650px] overflow-x-auto !rounded-xl border !border-neutral-700/50 !bg-neutral-800 py-4 dark:!bg-neutral-800/50',
		className
	)}
	tabindex="0"
	{...$$restProps}>
    <slot />
</pre>

<button class="absolute right-4 top-4 z-10" aria-label="copy" on:click={copyCode} data-code-copy>
	{#if $copied}
		<div in:fly={{ y: -4 }}>
			<Check class="text-magnum-500 size-4" />
		</div>
	{:else}
		<div in:fly={{ y: 4 }}>
			<Copy class="hover:text-magnum-500 size-4" />
		</div>
	{/if}
</button>

<style>
	/* Override theme colors for WCAG concerns */
	pre :global([style*='color: #6A737D']) {
		color: #727e8b !important;
	}

	pre {
		font-weight: initial;
	}

	pre :global(span) {
		display: inline;
	}
</style>
