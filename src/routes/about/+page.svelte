<script lang="ts">
	import { H1, P } from '$lib/components/typography/individual';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<H1 class="my-2 w-full">
	<span
		class="block w-full bg-gradient-to-tr from-teal-600 to-purple-900 box-decoration-clone bg-clip-text text-transparent"
	>
		Want to know more about me ?
	</span>
</H1>
<P>You're in the right place !</P>

<P>I'm Mathis URIEN, a software engineer based in France</P>
<P>
	You can explore my <Button href="/projects" variant="link" class="p-0">IT's projects</Button>,
	which are my main field of interest. I also enjoy practicing sports, taking pictures, and even
	doing some magic tricks !
</P>

<em>This site is still under construction ...</em>
