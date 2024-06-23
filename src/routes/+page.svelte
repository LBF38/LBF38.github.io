<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { H1, H2 } from '$lib/components/typography/individual';
	import { Button } from '$lib/components/ui/button';
	import { blur, fade } from 'svelte/transition';
</script>

<div
	class="fixed inset-0 z-10 mx-auto my-auto flex min-h-[75vh] w-full flex-col items-center justify-center overflow-hidden"
>
	<!-- Big, blurry circles positioned behind the title -->
	<!-- <div class="radial-bg absolute left-0 top-0 z-0 h-96 w-96 rounded-full opacity-25 blur-3xl" /> -->
	<div
		class="radial-bg absolute -bottom-40 -right-20 -z-20 h-5/6 w-5/6 rounded-full opacity-25 blur-3xl sm:-bottom-64 md:-right-80"
	/>
	<!-- <div
		class="absolute right-1/4 top-1/3 z-0 h-80 w-80 rounded-full bg-purple-500 opacity-50 blur-3xl"
	/>  -->

	<H1>
		<span
			class="block bg-gradient-to-br from-blue-800 via-emerald-700 to-violet-500 box-decoration-clone bg-clip-text text-5xl text-transparent sm:text-9xl"
		>
			Welcome !
		</span>
	</H1>
	<H2 class="m-4 w-full border-none text-4xl sm:!text-8xl">
		<span
			class="block w-full bg-gradient-to-bl from-red-400 via-blue-500 to-red-600 box-decoration-clone bg-clip-text text-center leading-snug text-transparent"
		>
			I'm Mathis, a passionate Software Engineer !
		</span>
	</H2>
	<Button
		variant="outline"
		href={route('/projects')}
		class="fixed inset-x-0 bottom-0 m-6 mx-auto w-fit"
	>
		More
	</Button>
</div>

<style>
	.radial-bg {
		background-image: radial-gradient(circle, blue, purple);
	}
</style>
