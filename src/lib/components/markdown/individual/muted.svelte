<script >
	import { cn } from '$lib/utils';
	let className = '';
	export { className as class };
</script>

<p class={cn('text-sm text-muted-foreground', className)} {...$$restProps}>
	<slot />
</p>
