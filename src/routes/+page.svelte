<script lang="ts">
	import { goto } from '$app/navigation';
	import { H1, H2 } from '$lib/components/typography/individual';
	import { Button } from '$lib/components/ui/button';

	async function handleMore() {
		await goto('/projects');
	}
</script>

<div class="mx-auto my-6 flex h-full flex-col items-center justify-between overflow-x-hidden p-6">
	<H1>
		<span
			class="bg-gradient-to-br from-blue-800 via-emerald-700 to-violet-500 box-decoration-clone bg-clip-text text-9xl text-transparent"
		>
			Welcome !
		</span>
	</H1>
	<H2 class="m-4 border-none !text-8xl">
		<span
			class="bg-gradient-to-bl from-red-400 via-blue-500 to-red-600 box-decoration-clone bg-clip-text text-center text-transparent"
		>
			I'm Mathis, a passionate Software Engineer !
		</span>
	</H2>
	<Button
		variant="outline"
		on:click={handleMore}
		class="fixed inset-x-0 bottom-0 m-6 mx-auto w-fit"
	>
		More
	</Button>
</div>
