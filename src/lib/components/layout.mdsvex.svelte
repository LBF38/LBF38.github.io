<script context="module">
	import { H1, H2, H3, H4, Blockquote, Code, List, P } from '$lib/components/markdown';
	export {
		H1 as h1,
		H2 as h2,
		H3 as h3,
		H4 as h4,
		Blockquote as blockquote,
		Code as code,
		// List as ul,
		P as p
	};
</script>

<!-- <article
	class="prose mb-12 w-full dark:prose-invert
prose-a:no-underline hover:prose-a:underline hover:prose-a:underline-offset-2
prose-ul:list-disc
"
> -->
<slot />
<!-- </article> -->
