<script lang="ts">
	import { page } from '$app/stores';
	import { route } from '$lib/ROUTES';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Menu } from 'lucide-svelte';
	import SvelteSeo from 'svelte-seo';
	import LightSwitch from './LightSwitch.svelte';
	import Logo from './Logo.svelte';
	import { Button } from './ui/button';

	let routes: { pathname: string; name: string; description: string; keywords: string }[] = [
		{
			pathname: route('/projects'),
			name: 'Projects',
			description: 'View my projects',
			keywords: 'projects, portfolio, side projects, computer science'
		},
		{
			pathname: route('/about'),
			name: 'About',
			description: 'Learn more about me',
			keywords: 'about me, LBF38, computer science, software engineering'
		},
		{
			pathname: route('/contact'),
			name: 'Contact',
			description: 'Get in touch with me',
			keywords: 'contact, email, social media, LBF38'
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
			{#if route.pathname === $page.url.pathname}
				<SvelteSeo
					title="{route.name} | {$page.url.hostname}"
					description={route.description}
					keywords={route.keywords}
					canonical={$page.url.origin}
					openGraph={{
						title: '{route.name} | {$page.url.hostname}',
						description: route.description,
						site_name: $page.url.hostname,
						url: $page.url.origin,
						type: 'website'
					}}
				/>
			{:else}
				<SvelteSeo
					title="LBF38's Portfolio"
					description="LBF38's personal portfolio showcasing his projects, blog, and more."
					canonical={$page.url.origin}
					keywords="LBF38, portfolio, projects, about me, contact, blog, side projects, computer science"
					openGraph={{
						title: "LBF38's Portfolio",
						description:
							"LBF38's personal portfolio showcasing his projects, blog, and more.",
						site_name: "LBF38's Portfolio",
						url: $page.url.origin,
						type: 'website'
					}}
				/>
			{/if}
			<li>
				<Button
					href={route.pathname}
					variant={$page.url.pathname == route.pathname ? 'secondary' : 'link'}
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

		<LightSwitch />
	</div>
</nav>
