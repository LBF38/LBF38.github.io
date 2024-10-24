<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { PUBLIC_URL_ORIGIN } from '$env/static/public';
	import type { NavigationRoute } from '$lib';
	import { route } from '$lib/ROUTES';
	import * as Sheet from '$lib/components/ui/sheet';
	import * as m from '$paraglide/messages';
	import { Menu } from 'lucide-svelte';
	import SvelteSeo from 'svelte-seo';
	import LightSwitch from './LightSwitch.svelte';
	import Logo from './Logo.svelte';
	import LanguageSelector from './language_selector';
	import { Button } from './ui/button';

	export let routes: NavigationRoute[] = [
		{
			pathname: route('/projects'),
			name: m.safe_level_eel_dine(),
			description: m.caring_fuzzy_fish_rush(),
			keywords: m.muddy_few_reindeer_treat()
		},
		{
			pathname: route('/tech'),
			name: m.jumpy_few_marten_win(),
			description: m.patient_caring_barbel_renew(),
			keywords: 'svelte, sveltekit, tailwindcss, typescript, vite, graphql, postgresql, ...'
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

	let open = false;

	$: currentRoute = routes.find((route) => route.pathname === $page.route.id) ?? {
		pathname: '/',
		description: m.direct_weird_stork_adore(),
		keywords: m.honest_strong_manatee_express(),
		name: m.alert_novel_midge_treat()
	};
	$: if (currentRoute && browser) {
		document.title = `${currentRoute.name} | LBF38.dev`;
	}
</script>

<SvelteSeo
	title="{currentRoute.name} | LBF38.dev"
	description={currentRoute.description}
	canonical={$page.url.href}
	keywords={currentRoute.keywords}
	openGraph={{
		title: `${currentRoute.name} | LBF38.dev`,
		description: currentRoute.description,
		site_name: m.alert_novel_midge_treat(),
		url: $page.url.origin,
		type: 'website',
		images: [
			{
				url: `${PUBLIC_URL_ORIGIN}/social_image.png`,
				width: 1600,
				height: 900,
				alt: `${currentRoute.name} | LBF38.dev`
			}
		]
	}}
/>

<nav
	class="sticky top-0 z-50 flex flex-shrink-0 flex-row content-center items-center justify-center space-x-10 bg-opacity-70 p-4 backdrop-blur-md"
>
	<a href={route('/')} class="mr-auto">
		<Logo />
	</a>

	<ul class="mx-auto hidden grow flex-row justify-evenly p-2 md:visible md:flex">
		{#each routes as route}
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
		<Sheet.Root bind:open>
			<Sheet.Trigger class="md:hidden">
				<Menu />
			</Sheet.Trigger>
			<Sheet.Content class="flex flex-col gap-4">
				<Sheet.Header>
					<Sheet.Title>
						<a href={route('/')}>
							<Logo />
						</a>
					</Sheet.Title>
				</Sheet.Header>
				{#each routes as route}
					<Button
						href={route.pathname}
						variant={$page.route.id === route.pathname ? 'secondary' : 'link'}
						data-sveltekit-preload-data="hover"
						class="justify-start"
						on:click={() => (open = false)}
					>
						{route.name}
					</Button>
				{/each}
			</Sheet.Content>
		</Sheet.Root>

		<LanguageSelector pageURL={$page.url} />
		<LightSwitch />
	</div>
</nav>
