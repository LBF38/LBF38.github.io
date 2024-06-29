<script lang="ts">
	import { route } from '$lib/ROUTES';

	import { page } from '$app/stores';

	import { SvelteComponent } from 'svelte';
	import type { PageData } from './$types';
	import Button from '$lib/components/ui/button/button.svelte';

	export let data: PageData;
	type Component = $$Generic<typeof SvelteComponent>;
	$: component = data.component as Component;
	console.log('path', data.paths, component);
	const next =
		data.paths.findIndex((path) => path.includes($page.params.slug)) + (1 % data.paths.length);
	const next_slug = data.paths[next];
	console.log(next_slug);
</script>

<svelte:component this={component} />

<Button href={route('/content/[...slug]', { slug: next_slug })}>Next</Button>
