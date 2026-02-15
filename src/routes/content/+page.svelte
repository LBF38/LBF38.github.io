<script lang="ts">
	import { resolve } from '$app/paths';
	import { Ul } from '$lib/components/markdown/meltui';
	import Li from '$lib/components/markdown/meltui/li.svelte';
	import { localizeHref } from '$paraglide/runtime';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Ul>
	{#each data.paths as path}
		<Li>
			<a href={localizeHref(resolve('/content/[...slug]', { slug: path.join('/') }))}>
				{path.join('/')}
			</a>
		</Li>
	{/each}
</Ul>
