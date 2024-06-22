<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { H1, P } from '$lib/components/typography/individual';
	import { Button } from '$lib/components/ui/button';
</script>

<H1>
	<span
		class="bg-gradient-to-tr from-green-300 to-purple-400 box-decoration-clone bg-clip-text text-transparent dark:from-green-900 dark:to-purple-600"
	>
		Thank you for contacting me !
	</span>
</H1>

<P>I'll get back to you as soon as possible, have a great day !</P>
<Button variant="secondary" class="my-4" href={route('/projects')}>Back to projects</Button>
