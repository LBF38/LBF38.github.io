<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { route } from '$lib/ROUTES';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Menu } from 'lucide-svelte';
	import LightSwitch from './LightSwitch.svelte';
	import Logo from './Logo.svelte';
	import { Button } from './ui/button';

	let routes = [
		{
			route: route('/projects'),
			name: 'Projects'
		},
		{
			route: route('/about'),
			name: 'About'
		},
		{
			route: route('/contact'),
			name: 'Contact'
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
			<li>
				<Button
					href={route.route}
					variant={$page.url.pathname == route.route ? 'secondary' : 'link'}
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
						<DropdownMenu.Item href={route.route}>{route.name}</DropdownMenu.Item>
					{/each}
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>

		<LightSwitch />
	</div>
</nav>
