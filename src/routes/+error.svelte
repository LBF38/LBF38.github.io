<script lang="ts">
	import { page } from '$app/state';
	import { route } from '$lib/ROUTES';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import { m } from '$paraglide/messages';
	import { AlertCircle } from 'lucide-svelte';
</script>

<Alert.Root variant="destructive" class="mx-auto my-4 bg-secondary/30">
	<AlertCircle class="h-4 w-4" />
	<Alert.Title level="h1">{m.big_left_rooster_nurture()}</Alert.Title>
	<Alert.Description>
		{page.status}: {page.error?.message}
		<br />
		Requested URL: {page.url.href}
		<br />
		<Button variant="link" href={route('/')} class="whitespace-normal p-0">
			{m.proof_smart_tiger_pave()}
		</Button>
	</Alert.Description>
</Alert.Root>
