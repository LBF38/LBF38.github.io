<script>
	import { cn } from '$lib/utils';

	/** @type string[] */
	export let list = [];
	let className = '';
	export { className as class };
</script>

<ul class={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...$$restProps}>
	<slot>
		{#each list as item}
			<li>
				{item}
			</li>
		{/each}
	</slot>
</ul>
