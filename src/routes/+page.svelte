<script lang="ts">
	import { goto } from '$app/navigation';
	import { blur, fade } from 'svelte/transition';

	async function handleMore() {
		await goto('/projects');
	}
</script>

<div class="flex h-full flex-col items-center justify-evenly">
	<h1 class="h1 text-9xl" in:fade={{ delay: 200 }} out:blur>
		<span
			class="bg-gradient-to-br from-secondary-200 to-tertiary-700 box-decoration-clone bg-clip-text text-transparent"
		>
			Welcome !
		</span>
	</h1>
	<h1 class="h1 text-8xl" in:fade={{ delay: 200 }} out:blur>
		<span
			class="bg-gradient-to-bl from-secondary-500 to-primary-500 box-decoration-clone bg-clip-text text-transparent"
		>
			I'm Mathis, a passionnate Software Engineer !
		</span>
	</h1>
	<button class="btn variant-outline-surface" on:click={handleMore} transition:blur>More</button>
</div>
