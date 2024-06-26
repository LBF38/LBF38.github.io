<script lang="ts">
	import { page } from '$app/stores';
	import { route } from '$lib/ROUTES';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import * as m from '$paraglide/messages';
	import { AlertCircle } from 'lucide-svelte';
</script>

<Alert.Root variant="destructive" class="m-4">
	<AlertCircle class="h-4 w-4" />
	<Alert.Title level="h1">{m.big_left_rooster_nurture()}</Alert.Title>
	<Alert.Description>
		{$page.status}: {$page.error?.message}
		<br />
		<Button variant="link" href={route('/')} class="p-0">
			{m.proof_smart_tiger_pave()}
		</Button>
	</Alert.Description>
</Alert.Root>
