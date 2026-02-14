<script lang="ts">
	import { cn } from '$lib/utils';

	export let list: string[] = [];
	let className: string = '';
	export { className as class };
</script>

<ul class={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...$$restProps}>
	<slot>
		{#each list as item}
			<li>{item}</li>
		{/each}
	</slot>
</ul>
