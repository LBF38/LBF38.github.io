<script lang="ts">
	import type { CV } from '$contentlayer/generated';
	import type { Content } from '$lib';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import { languageTag } from '$paraglide/runtime';
	import { DateFormatter } from '@internationalized/date';
	import { onMount } from 'svelte';
	import { P } from './markdown/meltui';
	import { H2 } from './typography/individual';

	export let cv_content: Content<CV>[];
	export let title: string;
	let dateFormatter: DateFormatter | null = null;
	const formatterOptions: Intl.DateTimeFormatOptions = {
		localeMatcher: 'best fit',
		month: 'short',
		year: 'numeric'
	};

	onMount(() => {
		dateFormatter = new DateFormatter(languageTag(), formatterOptions);
	});

	function format(date: Date): string {
		if (!dateFormatter) {
			return date.toLocaleDateString(languageTag(), formatterOptions);
		}
		return dateFormatter.format(date);
	}
</script>

<section class="my-20 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
	<H2 class="md:col-span-2 md:col-start-2 lg:col-span-3 lg:col-start-2">{title}</H2>
	{#each cv_content as item}
		<article class="col-span-full my-4 inline-grid gap-8 md:grid-cols-3 lg:grid-cols-4">
			<P class="col-span-1 inline-flex flex-col md:text-end">
				<span class="font-light">
					{format(new Date(item.metadata.from))} - {format(new Date(item.metadata.to))}
				</span>
				<span class="font-bold">{item.metadata.what}</span>
				<span class="font-light italic">{item.metadata.where}</span>
				<div class="ml-auto mt-4 h-fit w-24">
					<AspectRatio ratio={1} class="bg-muted">
						<img
							src="/logo_orange.png"
							alt="some text"
							class="rounded-md object-cover"
						/>
					</AspectRatio>
				</div>
			</P>
			<div class="md:col-span-2 lg:col-span-3">
				<svelte:component this={item.content} />
			</div>
		</article>
	{/each}
</section>
