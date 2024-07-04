<script lang="ts">
	import CvItem from '$lib/components/cv-item.svelte';
	import { H1 } from '$lib/components/typography/individual';
	import * as Avatar from '$lib/components/ui/avatar';
	import WarningAlert from '$lib/components/WarningAlert.svelte';
	import { route } from '$lib/ROUTES';
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

{#if !data.intro}
	<WarningAlert />
{:else}
	<div class="grid grid-cols-4">
		<div class="col-span-3">
			<svelte:component this={data.intro.content} />
			<ul>
				<li>
					<strong>Location:</strong>
					{data.intro.metadata.location}
				</li>
				<li>
					<strong>Languages:</strong>
					{data.intro.metadata.talked_languages}
				</li>
				<li>
					<strong>Hobbies:</strong>
					{data.intro.metadata.hobbies}
				</li>
			</ul>
		</div>
		<Avatar.Root class="mx-auto size-44">
			<Avatar.Image src={route('gh_profile') + '.png'} alt="@LBF38" />
			<Avatar.Fallback>LBF38</Avatar.Fallback>
		</Avatar.Root>
	</div>
{/if}

{#each cv as item}
	<CvItem cv_content={item.content} title={item.title} />
{/each}
