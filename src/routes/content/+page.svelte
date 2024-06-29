<script lang="ts">
	import { Ul } from '$lib/components/markdown/meltui';
	import Li from '$lib/components/markdown/meltui/li.svelte';
	import { route } from '$lib/ROUTES';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Ul>
	{#each data.paths as path}
		<Li>
			<a href={route('/content/[...slug]', { slug: path })}>
				{path}
			</a>
		</Li>
	{/each}
</Ul>
