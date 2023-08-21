<script lang="ts">
	import { goto } from '$app/navigation';

	async function handleMore() {
		await goto('/projects');
	}
</script>

<div class="container mx-auto flex h-full flex-col items-center justify-evenly p-6">
	<h1 class="h1 text-9xl">
		<span
			class="bg-gradient-to-br from-primary-800 via-tertiary-500 to-secondary-900 box-decoration-clone bg-clip-text text-transparent"
		>
			Welcome !
		</span>
	</h1>
	<h1 class="h1 text-8xl">
		<span
			class="bg-gradient-to-bl from-secondary-400 via-primary-400 to-tertiary-600 box-decoration-clone bg-clip-text text-transparent"
		>
			I'm Mathis, a passionnate Software Engineer !
		</span>
	</h1>
	<button class="btn variant-outline-surface" on:click={handleMore}>More</button>
</div>
