<script >
	import { cn } from '$lib/utils';
	let className = '';
	export { className as class };
</script>

<h2
	class={cn(
		'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
		className
	)}
	{...$$restProps}
>
	<slot />
</h2>
