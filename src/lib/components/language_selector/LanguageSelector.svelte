<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { getLocale, locales, localizeHref, type Locale } from '$paraglide/runtime';
	import { Globe } from 'lucide-svelte';

	const languageNames: Record<Locale, string> = {
		en: 'EN',
		fr: 'FR'
	};

	let { pageURL }: { pageURL: URL } = $props();
</script>

<Select.Root preventScroll={false}>
	<Select.Trigger class="w-fit">
		<Globe class="mr-2 h-[1.2rem] w-[1.2rem]" />
		<span class="mr-2">{languageNames[getLocale()]}</span>
	</Select.Trigger>
	<Select.Content>
		{#each locales.filter((lang) => lang !== getLocale()) as locale}
			<a href={localizeHref(pageURL.pathname, { locale })} hreflang={locale}>
				<Select.Item value={locale}>
					{languageNames[locale]}
				</Select.Item>
			</a>
		{/each}
	</Select.Content>
</Select.Root>
