<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import * as m from '$paraglide/messages';
</script>

<Button on:click={toggleMode} variant="outline" size="icon">
	<Icon
		icon="fluent:weather-sunny-24-filled"
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
	/>
	<Icon
		icon="fluent:weather-moon-24-filled"
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">{m.slow_jolly_porpoise_heart()}</span>
</Button>
