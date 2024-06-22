<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { H1, H2 } from '$lib/components/typography/individual';
	import { Button } from '$lib/components/ui/button';
</script>

<div
	class="mx-auto my-auto flex min-h-[70vh] flex-col items-center justify-center overflow-x-hidden p-6"
>
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
