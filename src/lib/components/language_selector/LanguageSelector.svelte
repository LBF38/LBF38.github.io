<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { i18n } from '$lib/i18n';
	import {
		availableLanguageTags,
		languageTag,
		type AvailableLanguageTag
	} from '$paraglide/runtime';
	import { Globe } from 'lucide-svelte';

	const languageNames: Record<AvailableLanguageTag, string> = {
		en: 'EN',
		fr: 'FR'
	};

	export let pageURL: URL;
</script>

<Select.Root>
	<Select.Trigger class="w-fit">
		<Globe class="mr-2 h-[1.2rem] w-[1.2rem]" />
		<span class="mr-2">{languageNames[languageTag()]}</span>
	</Select.Trigger>
	<Select.Content>
		{#each availableLanguageTags.filter((lang) => lang !== languageTag()) as language}
			<a href={i18n.route(pageURL.pathname)} hreflang={language}>
				<Select.Item value={language}>
					{languageNames[language]}
				</Select.Item>
			</a>
		{/each}
	</Select.Content>
</Select.Root>
