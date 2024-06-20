<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';

	async function handleMore() {
		await goto('/projects');
	}
</script>

<div class="mx-auto flex h-full flex-col items-center justify-between overflow-x-hidden p-6">
	<h1 class="h1 text-9xl">
		<span
			class="bg-gradient-to-br from-blue-800 via-emerald-700 to-violet-500 box-decoration-clone bg-clip-text text-transparent"
		>
			Welcome !
		</span>
	</h1>
	<h1 class="h1 m-4 text-8xl">
		<span
			class="bg-gradient-to-bl from-red-400 via-blue-500 to-red-600 box-decoration-clone bg-clip-text text-transparent"
		>
			I'm Mathis, a passionnate Software Engineer !
		</span>
	</h1>
	<Button variant="outline" on:click={handleMore}>More</Button>
</div>
