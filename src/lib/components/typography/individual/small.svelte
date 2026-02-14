<script lang="ts">
	import { cn } from '$lib/utils';
	let className: string = '';
	export { className as class };
</script>

<small class={cn('text-sm font-medium leading-none', className)} {...$$restProps}>
	<slot />
</small>
