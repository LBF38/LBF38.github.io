<script lang="ts">
	import { cn } from '$lib/utils';
	let className: string = '';
	export { className as class };
</script>

<blockquote class={cn('mt-6 border-l-2 pl-6 italic', className)} {...$$restProps}>
	<slot />
</blockquote>
