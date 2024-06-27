<script >
	import { cn } from '$lib/utils';
	let className = '';
	export { className as class };
</script>

<h4 class={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} {...$$restProps}>
	<slot />
</h4>
