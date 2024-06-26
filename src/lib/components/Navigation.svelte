<script lang="ts">
	import { page } from '$app/stores';
	import { route } from '$lib/ROUTES';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as m from '$paraglide/messages';
	import { Menu } from 'lucide-svelte';
	import SvelteSeo from 'svelte-seo';
	import LightSwitch from './LightSwitch.svelte';
	import Logo from './Logo.svelte';
	import LanguageSelector from './language_selector';
	import { Button } from './ui/button';

	let routes: { pathname: string; name: string; description: string; keywords: string }[] = [
		{
			pathname: route('/projects'),
			name: m.safe_level_eel_dine(),
			description: m.caring_fuzzy_fish_rush(),
			keywords: m.muddy_few_reindeer_treat()
		},
		{
			pathname: route('/about'),
			name: m.game_bad_robin_aid(),
			description: m.mushy_few_vulture_treasure(),
			keywords: m.silly_lazy_leopard_type()
		},
		{
			pathname: route('/contact'),
			name: m.factual_tangy_bat_strive(),
			description: m.bald_best_puma_cook(),
			keywords: m.factual_upper_dragonfly_renew()
		}
	];
</script>

<nav
	class="sticky top-0 z-50 flex flex-row content-center items-center justify-center space-x-10 bg-opacity-70 p-4 backdrop-blur-md"
>
	<a href={route('/')} class="mr-auto">
		<Logo />
	</a>

	<ul class="mx-auto hidden grow flex-row justify-evenly p-2 md:visible md:flex">
		{#each routes as route}
			{#if route.pathname === $page.route.id}
				<SvelteSeo
					title="{route.name} | {$page.url.hostname}"
					description={route.description}
					keywords={route.keywords}
					canonical={$page.url.origin}
					openGraph={{
						title: `${route.name} | ${$page.url.hostname}`,
						description: route.description,
						site_name: $page.url.hostname,
						url: $page.url.origin,
						type: 'website'
					}}
				/>
			{:else}
				<SvelteSeo
					title={m.alert_novel_midge_treat()}
					description={m.direct_weird_stork_adore()}
					canonical={$page.url.origin}
					keywords={m.honest_strong_manatee_express()}
					openGraph={{
						title: m.alert_novel_midge_treat(),
						description: m.direct_weird_stork_adore(),
						site_name: m.alert_novel_midge_treat(),
						url: $page.url.origin,
						type: 'website'
					}}
				/>
			{/if}
			<li>
				<Button
					href={route.pathname}
					variant={$page.route.id === route.pathname ? 'secondary' : 'link'}
					data-sveltekit-preload-data="hover"
				>
					{route.name}
				</Button>
			</li>
		{/each}
	</ul>

	<div class="ml-auto flex w-fit gap-4">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class="md:hidden"><Menu /></DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group>
					{#each routes as route}
						<DropdownMenu.Item href={route.pathname}>
							{route.name}
						</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>

		<LanguageSelector pageURL={$page.url} />
		<LightSwitch />
	</div>
</nav>
