<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';
	import { localizeHref } from '$paraglide/runtime';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let component = $derived(data.component);

	const next = $derived(
		data.paths.findIndex((path) => path.includes(page.params.slug ? page.params.slug : '')) +
			(1 % data.paths.length)
	);
	const next_slug = $derived(data.paths[next]);
	$effect(() => console.log(next_slug));
</script>

<component></component>

<Button href={localizeHref(resolve('/content/[...slug]', { slug: next_slug.join('/') }))}>
	Next
</Button>
