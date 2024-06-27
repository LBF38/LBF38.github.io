<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { H1, P } from '$lib/components/typography/individual';
	import Button from '$lib/components/ui/button/button.svelte';
	import About from './about.md';
	import { metadata } from './about.md';
</script>

<H1 class="my-2 w-full">
	<span
		class="block w-full bg-gradient-to-tr from-teal-300 to-purple-400 box-decoration-clone bg-clip-text text-transparent dark:from-teal-600 dark:to-purple-900"
	>
		Want to know more about me ?
	</span>
</H1>
<P>You're in the right place !</P>

<P>I'm Mathis URIEN, a software engineer based in France</P>
<P>
	You can explore my <Button href={route('/projects')} variant="link" class="inline p-0">
		IT's projects
	</Button>, which are my main field of interest. I also enjoy practicing sports, taking pictures,
	and even doing some magic tricks !
</P>

<P>
	<em>This site is still under construction ...</em>
</P>

testing metadata from mdsvex: {JSON.stringify(metadata, null, 2)}
<About />
