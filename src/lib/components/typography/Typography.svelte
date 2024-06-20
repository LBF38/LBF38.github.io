<script lang="ts">
	import { cn } from '$lib/utils';
	import { typographyVariants } from './index';
	export let variant: keyof typeof typographyVariants.variants.variant = 'h1';
	export let affects: keyof typeof typographyVariants.variants.affects = 'default';

	let className: string | null | undefined = undefined;
	export { className as class };
</script>

<svelte:element this={variant} class={cn(typographyVariants({ variant, affects, className }))}>
	<slot />
</svelte:element>
