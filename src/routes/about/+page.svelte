<script lang="ts">
	import CvItem from '$lib/components/cv-item.svelte';
	import { H1 } from '$lib/components/typography/individual';
	import * as m from '$paraglide/messages';
	import type { PageData } from './$types';

	export let data: PageData;
	const cv = [
		{
			title: m.inclusive_slow_angelfish_skip(),
			content: data.work
		},
		{
			title: m.vexed_frail_lemur_devour(),
			content: data.projects
		},
		{
			title: m.front_aloof_shark_borrow(),
			content: data.education
		}
	];
</script>

<H1 class="my-2 w-full">
	<span
		class="block w-full bg-gradient-to-tr from-teal-300 to-purple-400 box-decoration-clone bg-clip-text leading-snug text-transparent dark:from-teal-600 dark:to-purple-900"
	>
		{m.soft_safe_penguin_mend()}
	</span>
</H1>

{#each cv as item}
	<CvItem cv_content={item.content} title={item.title} />
{/each}
