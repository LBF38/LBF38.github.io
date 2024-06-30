<script lang="ts">
	import { H1 } from '$lib/components/typography/individual';
	import * as m from '$paraglide/messages';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<H1 class="my-2 w-full">
	<span
		class="block w-full bg-gradient-to-tr from-teal-300 to-purple-400 box-decoration-clone bg-clip-text leading-snug text-transparent dark:from-teal-600 dark:to-purple-900"
	>
		{m.soft_safe_penguin_mend()}
	</span>
</H1>

{#each data.work.content as content}
	<svelte:component this={content} />
{/each}
