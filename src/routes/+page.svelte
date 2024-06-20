<script lang="ts">
	import { goto } from '$app/navigation';
	import { typographyVariants } from '$lib/components/typography';
	import Typography from '$lib/components/typography/Typography.svelte';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	async function handleMore() {
		await goto('/projects');
	}
</script>

<div class="mx-auto flex h-full flex-col items-center justify-between overflow-x-hidden p-6">
	<Typography variant="h1">
		<span
			class="bg-gradient-to-br from-blue-800 via-emerald-700 to-violet-500 box-decoration-clone bg-clip-text text-9xl text-transparent"
		>
			Welcome !
		</span>
	</Typography>
	<Typography variant="h1" class="m-4 !text-8xl">
		<span
			class="bg-gradient-to-bl from-red-400 via-blue-500 to-red-600 box-decoration-clone bg-clip-text text-center text-transparent"
		>
			I'm Mathis,<br /> a passionate Software Engineer !
		</span>
	</Typography>
	<Button variant="outline" on:click={handleMore}>More</Button>
</div>
