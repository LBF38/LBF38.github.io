<script lang="ts">
	import { H1, P } from '$lib/components/typography/individual';
	import * as m from '$paraglide/messages';
</script>

<H1 class="my-2 w-full">
	<span
		class="block leading-snug w-full bg-gradient-to-tr from-teal-300 to-purple-400 box-decoration-clone bg-clip-text text-transparent dark:from-teal-600 dark:to-purple-900"
	>
		{m.soft_safe_penguin_mend()}
	</span>
</H1>
<P>{@html m.safe_arable_guppy_express()}</P>
