<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Logo from './Logo.svelte';
	let routes = [
		{
			route: '/',
			name: 'Home'
		},
		{
			route: '/projects',
			name: 'Projects'
		},
		{
			route: '/about',
			name: 'About'
		},
		{
			route: '/contact',
			name: 'Contact'
		}
	];
</script>

<nav class="flex flex-row content-center items-center justify-center space-x-10 p-4">
	<button
		on:click={async () => {
			await goto('/');
		}}
		class="w-1/4"
	>
		<Logo svgClass="variant-ghost-surface fill-surface-400" />
	</button>
	<ul class=" flex w-1/2 grow flex-row justify-evenly p-2">
		{#each routes as route}
			<li>
				<a
					href={route.route}
					class="btn {$page.url.pathname == route.route
						? 'variant-filled-primary'
						: 'variant-soft hover:variant-ghost-primary'}"
					data-sveltekit-preload-data="hover"
				>
					{route.name}
				</a>
			</li>
		{/each}
	</ul>
	<div class="w-1/4">Toggle dark mode</div>
</nav>
