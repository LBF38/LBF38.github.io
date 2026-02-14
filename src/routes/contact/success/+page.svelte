<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { H1, P } from '$lib/components/typography/individual';
	import { Button } from '$lib/components/ui/button';
	import { m } from '$paraglide/messages';
</script>

<H1>
	<span
		class="bg-gradient-to-tr from-green-300 to-purple-400 box-decoration-clone bg-clip-text text-transparent dark:from-green-900 dark:to-purple-600"
	>
		{m.deft_misty_hedgehog_offer()}
	</span>
</H1>

<P>{m.quaint_spare_puma_dust()}</P>
<Button variant="secondary" class="my-4" href={route('/projects')}>
	{m.stale_mild_dolphin_reside()}
</Button>
