<script lang="ts">
	import { H1, P } from '$lib/components/typography/individual';
	import { Button } from '$lib/components/ui/button';
	import { route } from '$lib/ROUTES';
	import * as m from '$paraglide/messages';
	// @ts-ignore
	import About from './about.md';
	// @ts-ignore
	import { metadata } from './about.md';
</script>

<H1 class="my-2 w-full">
	<span
		class="block w-full bg-gradient-to-tr from-teal-300 to-purple-400 box-decoration-clone bg-clip-text leading-snug text-transparent dark:from-teal-600 dark:to-purple-900"
	>
		{m.soft_safe_penguin_mend()}
	</span>
</H1>
<P>{@html m.safe_arable_guppy_express()}</P>
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
