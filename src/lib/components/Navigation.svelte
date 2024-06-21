<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { route } from '$lib/ROUTES';
	import LightSwitch from './LightSwitch.svelte';
	import Logo from './Logo.svelte';
	import { Button } from './ui/button';
	let routes = [
		{
			route: route('/'),
			name: 'Home'
		},
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
	<button
		on:click={async () => {
			await goto('/');
		}}
		class="w-1/4"
	>
		<Logo svgClass="bg-secondary" />
	</button>
	<ul class=" flex w-1/2 grow flex-row justify-evenly p-2">
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
	<div class="w-1/4">
		<LightSwitch />
	</div>
</nav>
