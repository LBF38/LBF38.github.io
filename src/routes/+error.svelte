<script lang="ts">
	import { page } from '$app/stores';
	import { route } from '$lib/ROUTES';
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import { AlertCircle } from 'lucide-svelte';
</script>

<Alert.Root variant="destructive" class="m-4">
	<AlertCircle class="h-4 w-4" />
	<Alert.Title level="h1">Oops... Something wrong happened !</Alert.Title>
	<Alert.Description>
		{$page.status}: {$page.error?.message}
		<br />
		<Button variant="link" href={route('/')} class="p-0">
			Please go back to a safe place and try again later.
		</Button>
	</Alert.Description>
</Alert.Root>
