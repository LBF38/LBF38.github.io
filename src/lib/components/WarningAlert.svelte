<script lang="ts">
	import * as Alert from '$lib/components/ui/alert';
	import { Button } from '$lib/components/ui/button';
	import * as m from '$paraglide/messages';
	import Icon from '@iconify/svelte';

	let visible = true;
</script>

{#if visible}
	<Alert.Root class="relative mx-auto mb-2 w-fit">
		<Icon icon="emojione-v1:construction" class="text-xl" />
		<Alert.Title level="h1">{m.big_clear_opossum_pray()}</Alert.Title>
		<Alert.Description>
			<p>{@html m.ornate_zippy_shrike_treat()}</p>
		</Alert.Description>
		<Button
			variant="ghost"
			size="sm"
			class="absolute right-0 top-0 m-2"
			on:click={() => (visible = !visible)}
		>
			<Icon icon="charm:cross" class="text-2xl" />
		</Button>
	</Alert.Root>
{/if}
