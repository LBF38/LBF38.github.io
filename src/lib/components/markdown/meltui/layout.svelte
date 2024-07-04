<!-- MDsveX Layout Component -->
<script context="module" lang="ts">
	import './markdown.postcss';
	import { a, blockquote, h1, h2, h3, h4, h5, h6, hr, img, li, ol, p, pre, ul } from '.';
	export { a, blockquote, h1, h2, h3, h4, h5, h6, hr, img, li, ol, p, pre, ul };
</script>

<script>
	// this gets rid of warnings in the console that the layout was created with unknown props
	// feels weird but we can't use TS in this mdsvex layout component (from my understanding)
	export let talked_languages = '';
	export let location = '';
	export let hobbies = '';
	export let from = '';
	export let to = '';
	export let where = '';
	export let what = '';
	export let title = '';
</script>

<slot {talked_languages} {location} {hobbies} {from} {to} {where} {what} {title} />
