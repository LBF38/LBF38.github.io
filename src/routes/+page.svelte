<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { H1, H2 } from '$lib/components/typography/individual';
	import { Button } from '$lib/components/ui/button';
	import * as m from '$paraglide/messages';
	import { mode } from 'mode-watcher';
</script>

<div
	class="fixed inset-0 z-10 mx-auto my-auto flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden"
>
	<!-- Big, blurry circles positioned behind the title -->
	<!-- <div class="radial-bg absolute left-0 top-0 z-0 h-96 w-96 rounded-full opacity-25 blur-3xl" /> -->
	<div
		class="absolute -bottom-40 -right-20 -z-20 h-5/6 w-5/6 rounded-full opacity-25 blur-3xl sm:-bottom-40 md:-right-96"
		class:radial-bg-dark={$mode === 'dark'}
		class:radial-bg={$mode === 'light'}
	/>
	<!-- <div
		class="absolute right-1/4 top-1/3 z-0 h-80 w-80 rounded-full bg-purple-500 opacity-50 blur-3xl"
	/>  -->

	<H1 class="w-full text-center">
		<span
			class="block w-full bg-gradient-to-br from-blue-300 via-emerald-300 to-violet-200 box-decoration-clone bg-clip-text text-5xl text-transparent dark:from-blue-800 dark:via-emerald-700 dark:to-violet-500 sm:text-9xl"
		>
			{m.zippy_gaudy_tapir_achieve()}
		</span>
	</H1>
	<H2 class="m-4 w-full border-none text-4xl sm:!text-8xl">
		<span
			class="block w-full bg-gradient-to-bl from-blue-300 via-blue-400 to-red-300 box-decoration-clone bg-clip-text text-center leading-snug text-transparent dark:from-red-400 dark:via-blue-500 dark:to-red-600"
		>
			{m.raw_ok_octopus_pause()}
		</span>
	</H2>
	<Button
		variant="outline"
		href={route('/projects')}
		class="fixed inset-x-0 bottom-0 m-6 mx-auto w-fit"
	>
		{m.livid_new_osprey_zap()}
	</Button>
</div>

<style>
	.radial-bg-dark {
		background-image: radial-gradient(circle, blue, purple);
	}
	.radial-bg {
		background-image: radial-gradient(circle, #dddbf1, #45b69c);
	}
</style>
