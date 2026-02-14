<script>
	import { cn } from '$lib/utils';
	let className = '';
	export { className as class };
</script>

<div class={cn('text-lg font-semibold', className)} {...$$restProps}>
	<slot />
</div>
